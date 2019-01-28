from django.urls import re_path, path
from . import views

urlpatterns = [
    path(r'', views.arm),
    path(r'work/', views.arm),
    path(r'arm/', views.arm),
    path(r'metall/', views.metall),
    path(r'trumpets/', views.trumpets),


]
