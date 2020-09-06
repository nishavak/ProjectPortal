from django.contrib.auth.models import Group
from rest_framework import serializers

from .models import (
    Assignment,
    Assistant,
    Coordinator,
    File,
    Grade,
    GroupRequest,
    Guide,
    GuideRequest,
    Preference,
    Project,
    ProjectRequest,
    Student,
    Team,
)


class StudentSerializer(serializers.ModelSerializer):
    def create(self, *args, **kwargs):
        student = super().create(*args, **kwargs)
        p = student.password
        student.set_password(p)
        student.save()
        student.groups.add(Group.objects.get(name=u"Student"))
        return student

    def update(self, *args, **kwargs):
        student = super().update(*args, **kwargs)
        p = student.password
        student.set_password(p)
        student.save()
        return student

    class Meta:
        model = Student
        fields = "__all__"


class CoordinatorSerializer(serializers.ModelSerializer):
    def create(self, *args, **kwargs):
        coordinator = super().create(*args, **kwargs)
        p = coordinator.password
        coordinator.set_password(p)
        coordinator.save()
        coordinator.groups.add(Group.objects.get(name=u"Coordinator"))
        return coordinator

    def update(self, *args, **kwargs):
        coordinator = super().update(*args, **kwargs)
        p = coordinator.password
        coordinator.set_password(p)
        coordinator.save()
        return coordinator

    class Meta:
        model = Coordinator
        fields = "__all__"


class AssistantSerializer(serializers.ModelSerializer):
    def create(self, *args, **kwargs):
        assistant = super().create(*args, **kwargs)
        p = assistant.password
        assistant.set_password(p)
        assistant.save()
        assistant.groups.add(Group.objects.get(name=u"Assistant"))
        return assistant

    def update(self, *args, **kwargs):
        assistant = super().update(*args, **kwargs)
        p = assistant.password
        assistant.set_password(p)
        assistant.save()
        return assistant

    class Meta:
        model = Assistant
        fields = "__all__"


class GuideSerializer(serializers.ModelSerializer):
    def create(self, *args, **kwargs):
        guide = super().create(*args, **kwargs)
        p = guide.password
        guide.set_password(p)
        guide.save()
        guide.groups.add(Group.objects.get(name=u"Guide"))
        return guide

    def update(self, *args, **kwargs):
        guide = super().update(*args, **kwargs)
        p = guide.password
        guide.set_password(p)
        guide.save()
        return guide

    class Meta:
        model = Guide
        fields = "__all__"


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"


class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = "__all__"


class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"


class ProjectRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectRequest
        fields = "__all__"


class GuideRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuideRequest
        fields = "__all__"


class GroupRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupRequest
        fields = "__all__"


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = "__all__"
