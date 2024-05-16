from django.urls import path
from . import views

urlpatterns = [
    path("projects/", views.ProjectListCreate.as_view(), name="project-list"),
    path("projects/<int:pk>", views.ProjectDetails.as_view(), name="project-details"),
    path("projects/delete/<int:pk>/", views.ProjectDelete.as_view(), name="delete-project")
]
