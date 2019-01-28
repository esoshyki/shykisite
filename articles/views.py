from django.shortcuts import render



def musicart(request):
    return render(request, "musicart.html")
# Create your views here.
def basketart(request):
    return render(request, 'basketart.html')

def programart(requset):
    return render(requset, 'programart.html')
