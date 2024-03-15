from django import forms

from .models import Product, Accesorios, Planes, Recargas, Category

class UpdateCategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = [
        "user",
        "name",
        "status"
        ]
        widgets = {
            'user' : forms.Select(attrs={"class": "from-select from-control"}),
            'plan_name' : forms.TextInput(attrs={'placeholder':'nombre del plan'}),
        }

class NewCategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = [
        "user",
        "name",
        "status"
        ]
        widgets = {
            'user' : forms.Select(attrs={"class": "from-select from-control"}),
            'plan_name' : forms.TextInput(attrs={'placeholder':'nombre del plan'}),
        }

class UpdateAccesoriosForm(forms.ModelForm):
    class Meta:
        model = Accesorios
        fields = [
        "category",
        "accesorios_name",
        'price',
        "description",
        "image",
        "stock",
        "status",
        ]        
        widgets = {
            'category' : forms.Select(attrs={"class": "from-select from-control"}),
            'accesorios_name' : forms.TextInput(attrs={'class': 'from-select from-control','placeholder':'nombre del plan'}),
            'price': forms.NumberInput(attrs={'class': 'from-select from-control','placeholder':'precio del plan'}),
            'description' : forms.TextInput(attrs={'class': 'from-select from-control','placeholder':'nombre del plan'}),
            'stock': forms.NumberInput(attrs={'class': 'from-select from-control','placeholder':'precio del plan'}),
        }


class NewAccesoriosForm(forms.ModelForm):
    class Meta:
        model = Accesorios
        fields = [
        "category",
        "accesorios_name",
        'price',
        "description",
        "stock",
        "image",
        "status",
        ]
        widgets = {
            'category' : forms.Select(attrs={"class": "from-select from-control"}),
            'accesorios_name' : forms.TextInput(attrs={'class': 'from-control','placeholder':'nombre del plan'}),
            'price': forms.NumberInput(attrs={'class': 'from-control','placeholder':'precio del plan'}),
            'description' : forms.TextInput(attrs={'class': 'from-control','placeholder':'nombre del plan'}),
            'stock': forms.NumberInput(attrs={'class': 'from-control','placeholder':'precio del plan'}),
        }



class UpdateRecargasForm(forms.ModelForm):
    class Meta:
        model = Recargas
        fields = [
        "category",
        "recarga_name",
        "price",
        "description",
        "status",
        ]
        widgets = {
            'category' : forms.Select(attrs={"class": "from-select from-control"}),
            'recarga_name' : forms.TextInput(attrs={'placeholder':'nombre del plan'}),
            'price': forms.NumberInput(attrs={'placeholder':'precio del plan'}),
            'description' : forms.TextInput(attrs={'placeholder':'nombre del plan'}),
        }



class NewRecargasForm(forms.ModelForm):
    class Meta:
        model = Recargas
        fields = [
        "category",
        "recarga_name",
        "price",
        "description",
        "status",
        ]
        widgets = {
            'category' : forms.Select(attrs={"class": "from-select from-control"}),
            'recarga_name' : forms.TextInput(attrs={'placeholder':'nombre del plan'}),
            'price': forms.NumberInput(attrs={'placeholder':'precio del plan'}),
            'description' : forms.TextInput(attrs={'placeholder':'nombre del plan'}),
        }

class UpdatePlanesForm(forms.ModelForm):
    class Meta:
        model = Planes
        fields = [
        "category",
        "plan_name",
        "price",
        "description",
        "status",
        ]
        widgets = {
            'category' : forms.Select(attrs={"class": "from-select from-control"}),
            'plan_name' : forms.TextInput(attrs={'placeholder':'nombre del plan'}),
            'price': forms.NumberInput(attrs={'placeholder':'precio del plan'}),
            'description': forms.Textarea(attrs={'rows': 3, 'cols': 10,'placeholder':'descripction'})
        }

class NewPlanesForm(forms.ModelForm):
    class Meta:
        model = Planes
        fields = [
        "category",
        "plan_name",
        "price",
        "description",
        "status",
        ]
        widgets = {
            'category': forms.Select(attrs={"class":"from-select from-control"}),
            'plan_name': forms.TextInput(attrs={'placeholder':'Nombre del plan',}),
            'price': forms.NumberInput(attrs={'placeholder':'Precio del plan','step':'0.1'}),
            'description': forms.Textarea(attrs={'rows': 3, 'cols': 25,'style':'resize: none'})
            

        }


class UpdateProducsForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
        "category",
        "product_name",
        "price",
        "description",
        "image",
        "stock",
        "status",
        ]
        widgets = {
            "category": forms.Select(attrs={"class":"form-select form-control"}),
            "product_name": forms.TextInput(attrs={"type":"text", "class":"form-control", "placeholder":"Escribe el nombre del Producto"}),
            "description": forms.TextInput(attrs={"type":"text", "class":"form-control", "placeholder":"Escribe el nombre del Producto"}),
            "stock": forms.TextInput(attrs={"type":"text", "class":"form-control", "placeholder":"Escribe el nombre del Producto"}),
   
        }


class NewProducsForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
        "category",
        "product_name",
        "price",
        "description",
        "image",
        "stock",
        "status",
        ]
        widgets = {
            "category": forms.Select(attrs={"class":"form-select form-control"}),
            "product_name": forms.TextInput(attrs={"type":"text", "class":"form-control", "placeholder":"Escribe el nombre del Producto"}),
            "description": forms.TextInput(attrs={"type":"text", "class":"form-control", "placeholder":"Escribe el nombre del Producto"}),
            "stock": forms.TextInput(attrs={"type":"text", "class":"form-control", "placeholder":"Escribe el nombre del Producto"}),
   
        }