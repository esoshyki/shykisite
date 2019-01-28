from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Video, Comment
from django.contrib.auth import get_user_model
User = get_user_model()
from . import form
from django.template.context_processors import csrf
from django.contrib import auth
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate

def show(request):
    content = []                  #[  [video, [(comment, name),(comment,name),()]]   ,  [video, [comments..]]     ]
    for vid in Video.objects.all():
        tmp = []
        tmp.append(vid)
        comments = Comment.objects.filter(Comment_Video_id=vid.id)
        list_users = []
        for com in comments:
            list_users.append(User.objects.get(id=com.Comment_User_id))
        tmp.append(list(zip(comments, list_users)))
        content.append(tmp)
    return render(request,'videomusic.html', {"content":content, "user":auth.get_user(request).username})

def ShowOneVideo(request, video_id):
    args = {}
    args.update(csrf(request))
    args['form'] = form.CommentForm
    args['video'] = Video.objects.get(id=video_id)
    args['user'] = auth.get_user(request).username
    comments = Comment.objects.filter(Comment_Video_id=video_id)
    Users_list = []
    for com in comments:
        Users_list.append(User.objects.get(id=com.Comment_User_id))
    args['comments'] = list(zip(comments, Users_list))
    return render(request, 'videoshowone.html', args)


def addcomment(request, video_id):
    if request.POST:
        forma = form.CommentForm(request.POST)
        if forma.is_valid():
            comment = forma.save(commit=False)
            comment.Comment_Video = Video.objects.get(id=video_id)
            comment.Comment_User = User.objects.get(id=request.user.id)
            forma.save()
    return redirect("/videos/showOne/" + str(video_id) + "/")


def commentlike(request, comment_id):
    if comment_id in request.COOKIES:
        return HttpResponseRedirect('video/music/')
    else:
        like = get_object_or_404(Comment, id=comment_id)
        like.Comment_likes += 1
        like.save()
        response = HttpResponseRedirect('video/music/')
        response.set_cookie(comment_id, "test")
    return response

def ajax(request):
    if request.GET:
        idvideo = request.GET["addlike"]
        video = Video.objects.get(id=idvideo)
        video.Video_likes += 1
        video.save()
    return HttpResponse(video.Video_likes)

def ajaxcom(request):
    if request.GET:
        idcom = request.GET["addlike"]
        com = Comment.objects.get(id=idcom)
        com.Comment_likes += 1
        com.save()
    return HttpResponse(com.Comment_likes)
