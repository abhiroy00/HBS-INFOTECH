from django.urls import path
from .views import SkillListCreateView, JobModelListCreateView, JobModelRetrieveUpdateDestroyView

urlpatterns = [
    path('skills/', SkillListCreateView.as_view(), name='skill-list-create'),
    path('jobs/', JobModelListCreateView.as_view(), name='jobmodel-list-create'),
    path('jobs/<int:pk>/', JobModelRetrieveUpdateDestroyView.as_view(), name='jobmodel-retrieve-update-destroy'),
]