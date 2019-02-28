from django.shortcuts import render

def home(request):
    return render(request, 'home/index.html')
# Create your views here.
def about(request):
    return render(request, 'home/about.html')
# Create your views here.
