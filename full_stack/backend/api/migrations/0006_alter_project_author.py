# Generated by Django 5.0.6 on 2024-05-16 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_project_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='author',
            field=models.TextField(blank=True, null=True),
        ),
    ]
