# Generated by Django 5.0.6 on 2024-05-16 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_project_estimated_completion_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='author',
            field=models.CharField(max_length=100),
        ),
    ]
