from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import JsonResponse
import sqlite3

def arm(request):
    return render(request, "arm.html")
# Create your views here.
def metall(request):
    return render(request, "metall.html")

def trumpets(request):
    return render(request, 'trumpets.html')

