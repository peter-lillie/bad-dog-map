from django.forms import ModelForm
from . import models


class IncidentForm(ModelForm):
    class Meta:
        model: models.IncidentReport = models.IncidentReport
        fields: list[str] = ["title", "description"]
