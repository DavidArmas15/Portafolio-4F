from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import timedelta



# Create your models here.


class Category(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=32, default="Generic Category")
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name



class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=32, default="Generic Product")
    price = models.DecimalField(decimal_places=2, max_digits=7)
    description = models.TextField(max_length=150, default="Generic Description")
    image = models.ImageField(upload_to='media/',  default='default-image.jpg')    
    stock = models.PositiveSmallIntegerField(default=1)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.product_name
    
class Accesorios(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    accesorios_name = models.CharField(max_length=32, default="Accesorio Generico")
    price = models.DecimalField(decimal_places=2, max_digits=7)
    description = models.TextField(max_length=150, default="Descripcion de accesorio generico")
    image = models.ImageField(upload_to='media/',  default='default-image.jpg')
    stock = models.PositiveSmallIntegerField(default=1)
    status = models.BooleanField(default=True)
    
    def __str__(self):
        return self.accesorios_name


class Recargas(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    recarga_name = models.CharField(max_length=32, default="Recarga Generica")
    price = models.DecimalField(decimal_places=2, max_digits=7)
    description = models.TextField(max_length=150, default="Descripcion de la recarga generica")
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.recarga_name
    
class Planes(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    plan_name = models.CharField(max_length=32, default="Plan Generico")
    price = models.DecimalField(decimal_places=2, max_digits=7)
    description = models.TextField(max_length=150, default="Descripcion del plan generico")
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.plan_name