from django.db import models


class Armatura(models.Model):
    class Meta():
        db_table = "armatura"

    diameter = models.IntegerField
    weight = models.IntegerField
# Create your models here.
