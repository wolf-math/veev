# Generated by Django 5.0.6 on 2024-05-16 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_project_estimated_completion_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='estimated_completion',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='project',
            name='start_date',
            field=models.DateTimeField(),
        ),
    ]