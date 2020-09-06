from django.contrib import admin
from . import models


admin.site.register(models.Student)
admin.site.register(models.Assistant)
admin.site.register(models.Coordinator)
admin.site.register(models.Guide)
admin.site.register(models.Assignment)
admin.site.register(models.Team)
admin.site.register(models.Comment)
admin.site.register(models.File)
admin.site.register(models.Project)
admin.site.register(models.Grade)
admin.site.register(models.GroupRequest)
admin.site.register(models.ProjectRequest)
admin.site.register(models.Preference)