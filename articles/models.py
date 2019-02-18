from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Article(models.Model):
    class Meta():
        db_table = "Article"

    Article_title = models.CharField(max_length=200)
    Article_content = models.TextField()
    Article_type = models.CharField(max_length=200)
    Article_date = models.DateTimeField(auto_now_add=True)
    Article_like = models.IntegerField(default=0)

    def __str__(self):
        return self.Article_title

class CommentArt(models.Model):
        class Meta():
            db_table = "CommentArt"

        CommentArt_text = models.TextField(verbose_name="print hear")
        CommentArt_data = models.DateTimeField(auto_now_add=True)
        CommentArt_User = models.ForeignKey(User, on_delete=models.CASCADE)
        CommentArt_Article = models.ForeignKey(Article, on_delete=models.CASCADE)
        CommentArt_likes = models.IntegerField(default=0)



