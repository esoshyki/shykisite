from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class News(models.Model):
    class Meta():
        db_table = "Article"

    Article_title = models.CharField(max_length=200)
    Article_content = models.TextField()
    Article_type = models.CharField(max_length=200)
    Article_date = models.DateTimeField(auto_now_add=True)
    Article_like = models.IntegerField(default=0)

    def __str__(self):
        return self.Articles_title

