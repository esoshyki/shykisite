from django.urls import path, re_path
from . import views

urlpatterns = [
    path(r'music/', views.show),
    path(r'basket/', views.show),
    path(r'programming/', views.show),
    path(r'videolike/ajax/', views.ajax),
    path(r'programming/videolike/ajax/', views.ajax),
    re_path('addcomment/(?P<video_id>\d+)/$', views.addcomment),
    re_path('showOne/(?P<video_id>\d+)/$', views.ShowOneVideo),
    re_path('comlike/ajax/', views.ajaxcom),

    ]