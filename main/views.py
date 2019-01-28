from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from django.contrib import auth
from django.template.context_processors import csrf
from django.contrib.auth import get_user_model
from . import form


User = get_user_model()


# Create your views here.

def index(request):
    userr = auth.get_user(request).username
    return render(request, 'index.html', {"user": userr})

def out(request):
    auth.logout(request)
    return redirect('/main')

def inn(request):
    if request.POST:
        user = auth.authenticate(username=request.POST.get('username', ""),
                                 password=request.POST.get('password', ""))
        if user:
            auth.login(request, user)
            return redirect("/main")
        else:
            args = {}
            args.update(csrf(request))
            args['user'] = auth.get_user(request).username
            args['form'] = form.UserFormLogin
            args['url'] = '/main/in/'
            args["error"] = "Такой пользователь не найден"
            return render(request, 'index.html', args)
    else:
        args = {}
        args.update(csrf(request))
        args['user'] = auth.get_user(request).username
        args['form'] = form.UserFormLogin
        args['url'] = '/main/in/'
        return render(request, 'index.html', args)

def reguser(request):
    if request.POST:
        user = User.objects.create_user(username=request.POST.get('username', ""),
                                        email=request.POST.get('email', ""),
                                        password=request.POST.get('password', ""))
        if user:
            auth.login(request, user)
        return redirect('/main')
    else:
        args = {}
        args.update(csrf(request))
        args['formreg'] = form.UserFormRegistration
        args['url'] = "/main/reg/"
        args['user'] = auth.get_user(request).username
        return render(request, 'index.html', args)
