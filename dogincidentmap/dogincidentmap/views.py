from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, redirect
from django.core import serializers
from . import forms, models


def index(request: HttpRequest) -> HttpResponse:
    incidents: models.IncidentReport = serializers.serialize("json", models.IncidentReport.objects.all())
    return render(request, template_name="index.html", context={"incidents": incidents})


def report(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        form: forms.IncidentForm = forms.IncidentForm(request.POST)
        new_incident: forms.IncidentForm = form.save(commit=False)
        new_incident.latitude = request.POST["latitude"]
        new_incident.longitude = request.POST["longitude"]
        new_incident.save()
        return redirect("index")
    lat: float = request.GET.get("lat")
    lng: float = request.GET.get("lng")
    form: forms.IncidentForm = forms.IncidentForm()
    return render(
        request,
        template_name="report.html",
        context={"form": form, "lat": lat, "lng": lng},
    )
