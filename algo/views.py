import json

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from algo.algorithm import predict


# Create your views here.
@api_view(['POST'])
def get_prediction(request):
    data = json.loads(request.body)
    return Response(predict(data['ingredients']))
