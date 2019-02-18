from django.forms import ModelForm
from . import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Articles(ModelForm):
    class Meta():
        model = models.Article
        fields = ('Article_title', "Article_content")


class CommentForm(ModelForm):
    class Meta():
        model = models.CommentArt
        fields = ["CommentArt_text", ]


class UserForm(ModelForm):
    class Meta():
        model = User
        fields = ['username', 'email', 'password']


class UserFormL(ModelForm):
    class Meta():
        model = User
        fields = ['username', 'password']