from django.shortcuts import render, redirect, get_object_or_404
from .models import Article, CommentArt
from django.contrib.auth import get_user_model
from . import form
from django.template.context_processors import csrf
User = get_user_model()
from django.contrib import auth


def musicart(request):
    return render(request, "musicart.html")
# Create your views here.
def basketart(request):
    return render(request, 'basketart.html')

def programart(requset):
    content = []
    for art in Article.objects.filter(Article_type="Programming"):
        tmp = []
        tmp.append(art)
        comments = CommentArt.objects.filter(CommentArt_Article_id=art.id)
        list_users = []
        for com in comments:
            list_users.append(User.objects.get(id=com.CommentArt_User_id))
        tmp.append(list(zip(comments, list_users)))
        content.append(tmp)
    return render(requset, 'programart.html', {'content': content, 'user':auth.get_user(requset).username})
