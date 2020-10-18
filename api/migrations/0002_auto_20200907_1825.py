# Generated by Django 2.2 on 2020-09-07 12:55

import api.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assistant',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=('api.user',),
            managers=[
                ('objects', api.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='GuideRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp_requested', models.DateTimeField(auto_now=True, verbose_name='requested on')),
                ('status', models.CharField(choices=[('A', 'Accepted'), ('P', 'Pending'), ('R', 'Rejected')], default='P', max_length=1, verbose_name='status')),
            ],
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.RemoveField(
            model_name='projectrequest',
            name='description',
        ),
        migrations.AlterField(
            model_name='assignment',
            name='title',
            field=models.CharField(max_length=300, verbose_name='title'),
        ),
        migrations.AlterField(
            model_name='file',
            name='file',
            field=models.FileField(upload_to='files/', verbose_name='file'),
        ),
        migrations.AlterField(
            model_name='grade',
            name='guide',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.Guide', verbose_name='guide'),
        ),
        migrations.AlterField(
            model_name='grouprequest',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='description'),
        ),
        migrations.AlterField(
            model_name='guide',
            name='initials',
            field=models.CharField(max_length=3, verbose_name='initials'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(max_length=300, verbose_name='title'),
        ),
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=imagekit.models.fields.ProcessedImageField(blank=True, default='User.png', null=True, upload_to='photos/%Y/'),
        ),
        migrations.AddField(
            model_name='guiderequest',
            name='guide',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Guide', verbose_name='guide requested'),
        ),
        migrations.AddField(
            model_name='guiderequest',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Team', verbose_name='team to be assigned'),
        ),
    ]