from django.urls import path, re_path
from . import views

urlpatterns = [
    path(r'music/', views.showmusic),
    path(r'basket/', views.showbasket),
    path(r'programming/', views.showprogramming),
    path(r'videolike/ajax/', views.ajax),
    path(r'programming/videolike/ajax/', views.ajax),
    re_path('addcomment/(?P<video_id>\d+)/$', views.addcomment),
    re_path('showOne/(?P<video_id>\d+)/$', views.ShowOneVideo),
    re_path('comlike/ajax/', views.ajaxcom),

    ]