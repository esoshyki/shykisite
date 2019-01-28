from django.contrib import admin
from .models import Video, Comment


class VideoInline(admin.StackedInline):  # указывает связь
    model = Comment
    readonly_fields = ['Comment_likes']
    extra = 2  # колличество коментариев под статьей


class VideoAdmin(admin.ModelAdmin):
    inlines = [VideoInline]
    list_filter = ['Video_date']
    readonly_fields = ['Video_likes']



admin.site.register(Video, VideoAdmin)