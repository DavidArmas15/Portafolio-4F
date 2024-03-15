from django.contrib import admin

# Register your models here.
from home import models




@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "user",
        "id"
    ]


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "product_name",
        "price",
        "description",
        "image",
        "stock",
        "status",
        "category",
        "id"
    ]

@admin.register(models.Accesorios)
class AccesoriosAdmin(admin.ModelAdmin):
    list_display = [
        "accesorios_name",
        "price",
        "description",
        "image",
        "stock",
        "status",
        "category",
        "id" 
    ]

@admin.register(models.Recargas)
class RecargasAdmin(admin.ModelAdmin):
    list_display = [
        "recarga_name",
        "price",
        "description",
        "status",
        "category",
        "id" 
    ]

@admin.register(models.Planes)
class PlanesAdmin(admin.ModelAdmin):
    list_display = [
        "plan_name",
        "price",
        "description",
        "status",
        "category",
        "id" 
    ]