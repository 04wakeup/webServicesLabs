#from django.shortcuts import render

# Create your views here.
from rest_framework import generics 
from .models import Msg 
from .serializers import MsgSerializer

class MsgAPIController(generics.ListCreateAPIView):
    queryset = Msg.objects.all()
    serializer_class = MsgSerializer
