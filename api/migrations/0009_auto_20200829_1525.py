# Generated by Django 2.2 on 2020-08-29 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_remove_projectrequest_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grouprequest',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='description'),
        ),
    ]
