from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def userInterface(request):
    try:
        return render(request, "index.html")
    except:
        return HttpResponse(content="React building")
