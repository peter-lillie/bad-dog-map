from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from . import forms


def index(request: HttpRequest) -> HttpResponse:
    return render(request, template_name="index.html")


def report(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form: forms.IncidentForm = forms.IncidentForm(request.POST)
        new_incident: forms.IncidentForm = form.save(commit=False)
        new_incident.latitude = request.POST["latitude"]
        new_incident.longitude = request.POST["longitude"]
        new_incident.save()
    lat: float = request.GET.get("lat")
    lng: float = request.GET.get("lng")
    form: forms.IncidentForm = forms.IncidentForm()
    return render(
        request,
        template_name="report.html",
        context={"form": form, "lat": lat, "lng": lng},
    )
