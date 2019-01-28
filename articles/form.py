from django.forms import ModelForm
from . import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Articles(ModelForm):
    class Meta():
        model = models.News
        fields = ('Article_title', "Article_content")

