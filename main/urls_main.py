from django.urls import re_path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    re_path(r'^$', views.index),
    re_path('in/$', views.inn),
    re_path(r'out/$', views.out),
    re_path(r'reg/$', views.reguser)


]
