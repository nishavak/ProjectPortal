from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager,
                                        Group, PermissionsMixin)
from django.core.mail import send_mail
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
import constants


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, name, **extra_fields):
        if not email:
            raise ValueError("The given email must be set")
        email = self.normalize_email(email)
        name = " ".join(name.split()).title()
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password, name, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, name, **extra_fields)

    def create_superuser(self, email, password, name, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")
        return self._create_user(email, password, name, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)
    email = models.EmailField(_("email"), max_length=320, unique=True)
    is_active = models.BooleanField(_("is active"), default=True)
    is_staff = models.BooleanField(_("is staff"), default=False)
    name = models.CharField(_("name"), max_length=400)
    photo = ProcessedImageField(upload_to='photos/%Y/',
                                processors=[ResizeToFill(400, 400)],
                                format='JPEG',
                                options={'quality': 60}, blank=True, null=True, default="User.png")
    objects = UserManager()
    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("name", "photo",)

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def clean(self):
        super().clean()
        self.email = self.__class__.objects.normalize_email(self.email)

    def email_user(self, subject, message, from_email=None, **kwargs):
        send_mail(subject, message, from_email, [self.email], **kwargs)
# STUDENT


class Student(User):
    branch = models.CharField(
        _("branch"), max_length=4, choices=constants.BRANCH, default="IT")
    project = models.ForeignKey("api.Project", verbose_name=_(
        "project"), on_delete=models.SET_NULL, blank=True, null=True)
    roll_number = models.IntegerField(_("roll number"), unique=True)
    team = models.ForeignKey("api.Team", verbose_name=_(
        "team"), on_delete=models.SET_NULL, blank=True, null=True)


class Team(models.Model):
    guide = models.ForeignKey("api.Guide", verbose_name=_(
        "guide"), on_delete=models.SET_NULL, blank=True, null=True, related_name="team_guide")
    leader = models.OneToOneField("api.Student", verbose_name=_(
        "leader"), on_delete=models.SET_NULL, blank=True, null=True, related_name="team_leader")


class GroupRequest(models.Model):
    action = models.CharField(
        _("action"), choices=constants.GROUP_ACTION, max_length=13)
    add_student = models.ForeignKey("api.Student", verbose_name=_(
        "add student"), on_delete=models.SET_NULL, blank=True, null=True, related_name="add_student")
    description = models.TextField(_("description"))
    generated = models.DateTimeField(_("generated on"), auto_now=True)
    new_leader = models.ForeignKey("api.Student", verbose_name=_(
        "new leader"), on_delete=models.SET_NULL, blank=True, null=True, related_name="new_leader")
    old_leader = models.ForeignKey("api.Student", verbose_name=_(
        "old leader"), on_delete=models.SET_NULL, blank=True, null=True, related_name="old_leader")
    processed = models.DateTimeField(
        _("processed on"), auto_now_add=True, blank=True, null=True)
    remove_student = models.ForeignKey("api.Student", verbose_name=_(
        "remove student"), on_delete=models.SET_NULL, blank=True, null=True, related_name="remove_student")
    status = models.CharField(
        _("status"), max_length=1, choices=constants.STATUS, default="P")
    team = models.ForeignKey("api.Team", verbose_name=_(
        "team"), on_delete=models.CASCADE)
# COORDINATOR


class Coordinator(User):
    pass
# ASSISTANT


class Assistant(User):
    pass
# GUIDE


class Guide(User):
    branch = models.CharField(
        _("branch"), max_length=4, choices=constants.BRANCH, default="IT")
    initials = models.CharField(_("initials"), max_length=10)
    preferences = models.ManyToManyField(
        "api.Preference", verbose_name=_("preferences"), blank=True)
# OTHER MODELS


class Assignment(models.Model):
    coordinator = models.ForeignKey("api.Coordinator", verbose_name=_(
        "coordinator"), on_delete=models.DO_NOTHING)
    description = models.TextField(_("description"), blank=True, null=True)
    due = models.DateTimeField(_("due"), blank=True, null=True, default=None)
    posted = models.DateTimeField(_("posted"), auto_now=True)
    title = models.CharField(_("title"), max_length=500)
    weightage = models.IntegerField(
        _("weightage"), blank=True, null=True, default=None)


class Grade(models.Model):
    assignment = models.ForeignKey("api.Assignment", verbose_name=_(
        "assignment"), on_delete=models.CASCADE)
    graded_on = models.DateTimeField(_("graded on"), auto_now_add=True)
    guide = models.ForeignKey("api.Guide", verbose_name=_(
        "guide"), on_delete=models.SET_NULL, blank=True, null=True)
    marks_obtained = models.IntegerField(
        _("marks obtained"), blank=True, null=True, default=None)
    student = models.ForeignKey("api.Student", verbose_name=_(
        "student"), on_delete=models.CASCADE)
    turned_in = models.BooleanField(_("turned in"), default=False)


class Project(models.Model):
    category = models.CharField(
        _("category"), max_length=2, choices=constants.CATEGORY, default="IN")
    description = models.TextField(_("description"))
    domain = models.CharField(
        _("domain"), max_length=5, choices=constants.DOMAIN, default="AI")
    explanatory_field = models.TextField(
        _("explanatory field"), blank=True, null=True)
    team = models.OneToOneField(
        "api.Team", verbose_name=_("team"), on_delete=models.CASCADE)
    title = models.CharField(_("title"), max_length=500)


class Preference(models.Model):
    area_of_interest = models.CharField(
        _("area of interest"), choices=constants.DOMAIN, max_length=5)
    thrust_area = models.CharField(
        _("thrust area"), choices=constants.THRUST_AREA, max_length=2)


class File(models.Model):
    assignment = models.ForeignKey("api.Assignment", verbose_name=_(
        "assignment"), on_delete=models.CASCADE)
    file = models.FileField(_("file"), upload_to="files/")
    submitted_by = models.EmailField(_("submitted by"), max_length=320)
    team = models.ForeignKey("api.Team", verbose_name=_(
        "team"), on_delete=models.SET_NULL, blank=True, null=True)


class ProjectRequest(models.Model):
    created = models.DateTimeField(_("created"), auto_now=True)
    # description = models.TextField(_("description"))
    last_modified = models.DateTimeField(
        _("last modified"), auto_now_add=True, blank=True, null=True)
    project = models.ForeignKey("api.Project", verbose_name=_(
        "project"), on_delete=models.CASCADE)
    status = models.CharField(
        _("status"), max_length=1, choices=constants.STATUS, default="P")


class Comment(models.Model):
    by = models.EmailField(_("by"), max_length=320)
    posted = models.DateTimeField(_("posted"), auto_now=True)
    content = models.TextField(_("content"))


@receiver(post_save, sender=Assignment)
def create_grades(sender, instance, created, **kwargs):
    if created:
        for student in Student.objects.all():
            Grade.objects.create(student=student, assignment=instance)


@receiver(post_save, sender=Student)
def create_grades_assignments(sender, instance, created, **kwargs):
    if created:
        for assignment in Assignment.objects.all():
            Grade.objects.create(student=instance, assignment=assignment)
