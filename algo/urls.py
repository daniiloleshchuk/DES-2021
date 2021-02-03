from django.contrib import admin
from django.urls import path
from algo import views
from django.views.generic import TemplateView

urlpatterns = [
    path('predict', views.get_prediction),
    # path('', TemplateView.as_view(template_name='index.html')),
]