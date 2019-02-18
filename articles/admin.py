from django.contrib import admin
from .models import Article, CommentArt

# Register your models here.
class ArticleInline(admin.StackedInline):  # указывает связь
    model = CommentArt
    readonly_fields = ['CommentArt_likes']
    extra = 2

class ArticleAdmin(admin.ModelAdmin):
    inlines = [ArticleInline]
    list_filter = ['Article_date']
    readonly_fields = ['Article_like']

admin.site.register(Article, ArticleAdmin)