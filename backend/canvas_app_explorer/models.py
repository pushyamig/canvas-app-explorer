from django.db import models

# Create your models here.

class CanvasPlacement(models.Model):
    name = models.CharField(max_length=150)
    def __str__(self):
        return self.name

class LtiTool(models.Model):
    name = models.CharField(max_length=50)
    logo_image = models.BinaryField()
    main_image = models.BinaryField()
    short_description = models.TextField()
    long_description = models.TextField()
    privacy_agreement = models.TextField()
    support_resources = models.TextField()
    canvas_placement = models.ManyToManyField(CanvasPlacement)

    def __str__(self):
        return self.name