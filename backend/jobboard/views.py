from rest_framework import generics
from .models import Skill, JobModel
from .serializers import SkillSerializer, JobModelSerializer

class SkillListCreateView(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class JobModelListCreateView(generics.ListCreateAPIView):
    queryset = JobModel.objects.all()
    serializer_class = JobModelSerializer

class JobModelRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobModel.objects.all()
    serializer_class = JobModelSerializer