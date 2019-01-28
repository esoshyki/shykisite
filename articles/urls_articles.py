from django.urls import path
from . import views

urlpatterns = [
    path(r'music/', views.musicart),
    path(r'basket/', views.basketart),
    path(r'programming', views.programart),

    ]