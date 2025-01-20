from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    pass

class IncidentReport(models.Model):

    title: models.CharField = models.CharField("Summary", name="title", max_length=256)
    latitude: models.FloatField = models.FloatField("Latitude", name="latitude")
    longitude: models.FloatField = models.FloatField("Longitude", name="longitude")
    description: models.TextField = models.TextField("Incident Description")
