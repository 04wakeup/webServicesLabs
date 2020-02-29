from django.db import models
from django.core.validators import RegexValidator, MinLengthValidator
# Create your models here.

class Msg(models.Model):
    name = models.CharField(max_length=10, validators=[
        RegexValidator('[A-Za-z]{2,}'),
        MinLengthValidator(2)
    ])
    msg = models.CharField(max_length=20, validators=[
        MinLengthValidator(3)
    ])
    class Meta:
        ordering = ['-id']