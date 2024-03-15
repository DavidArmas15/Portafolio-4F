from django.shortcuts import render
from django.views import generic
from django.urls import reverse_lazy
from django.conf import settings
from .models import *
from .forms import *
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Category, Product, Accesorios, Recargas, Planes

class Index(generic.View):
    template_name = "home/index.html"
    context = {}

    def get(self, request):
        self.context = {
            "products": Product.objects.all()
        }
        return render(request, self.template_name, self.context)
    

#
#PRODUCT 
#

class Producto(LoginRequiredMixin, generic.View):
    template_name = "home/product/product.html"
    context = {}
    login_url = reverse_lazy("sesion:login")
    def get(self, request):
        #Armasgay es la variable donde se guarda la consulta de base de datos
        self.context = {
            "Armasgay": Product.objects.all()
        }
        return render(request, self.template_name, self.context)
    
class DetailProducto(LoginRequiredMixin, generic.DetailView):
    template_name = "home/product/detail_product.html"
    model = Product
    login_url = reverse_lazy("sesion:login")

class UpdateProducto(LoginRequiredMixin, generic.UpdateView):
    template_name = "home/product/update_planes.html"
    model = Product
    form_class = UpdateProducsForm
    success_url = reverse_lazy("home:product")
    login_url = reverse_lazy("sesion:login")

class DeleteProducto(LoginRequiredMixin, generic.DeleteView):
    template_name = "home/product/delete_product.html"
    model = Product
    success_url = reverse_lazy("home:product")
    login_url = reverse_lazy("sesion:login")

class NewProducto(LoginRequiredMixin, generic.CreateView):
    template_name = "home/product/newproduct.html"
    model = Product
    form_class = NewProducsForm
    success_url = reverse_lazy("home:product")
    login_url = reverse_lazy("sesion:login")


#
#CATEGORIA 
#
class Categoria(LoginRequiredMixin, generic.View):
    template_name = "home/category.html"
    context = {}
    login_url = reverse_lazy("sesion:login")
    def get(self, request):
        self.context = {
            "category": Category.objects.all()
        }
        return render(request, self.template_name, self.context)
    
class DetailCategory(LoginRequiredMixin, generic.DetailView):
    template_name = "home/detail_category.html"
    model = Category
    login_url = reverse_lazy("sesion:login")

class UpdateCategory(LoginRequiredMixin, generic.UpdateView):
    template_name = "home/update_category.html"
    model = Category
    form_class = UpdateCategoryForm
    success_url = reverse_lazy("home:categoria")
    login_url = reverse_lazy("sesion:login")

class DeleteCategory(LoginRequiredMixin, generic.DeleteView):
    template_name = "home/delete_category.html"
    model = Category
    success_url = reverse_lazy("home:categoria")
    login_url = reverse_lazy("sesion:login")


class NewCategory(LoginRequiredMixin, generic.CreateView):
    template_name = "home/newcategory.html"
    model = Category
    form_class = NewCategoryForm
    success_url = reverse_lazy("home:categoria")
    login_url = reverse_lazy("sesion:login")


#
#ACCESORIOS
#
class accesorios(LoginRequiredMixin, generic.View):
    template_name = "home/accesorios.html"
    context = {}
    login_url = reverse_lazy("sesion:login")

    def get(self, request):
        self.context = {
            "accesorios": Accesorios.objects.all()
        }
        return render(request, self.template_name, self.context)

class DetailAccesorios(LoginRequiredMixin, generic.DetailView):
    template_name = "home/detail_accesorios.html"
    model = Accesorios
    login_url = reverse_lazy("sesion:login")


class UpdateAccesorios(LoginRequiredMixin, generic.UpdateView):
    template_name = "home/update_accesorios.html"
    model = Accesorios
    form_class = UpdateAccesoriosForm
    success_url = reverse_lazy("home:accesorios")
    login_url = reverse_lazy("sesion:login")


class DeleteAccesorios(LoginRequiredMixin, generic.DeleteView):
    template_name = "home/delete_accesorios.html"
    model = Accesorios
    success_url = reverse_lazy("home:accesorios")
    login_url = reverse_lazy("sesion:login")


class NewAccesorios(LoginRequiredMixin, generic.CreateView):
    template_name = "home/newaccesorios.html"
    model = Accesorios
    form_class = NewAccesoriosForm
    success_url = reverse_lazy("home:accesorios")
    login_url = reverse_lazy("sesion:login")



#
#RECARGASD
#
class recargas(LoginRequiredMixin, generic.View):
    template_name = "home/recargas.html"
    context = {}
    login_url = reverse_lazy("sesion:login")

    def get(self, request):
        self.context = {
            "recargas": Recargas.objects.all()
        }
        return render(request, self.template_name, self.context)

class DetailRecargas(LoginRequiredMixin, generic.DetailView):
    template_name = "home/detail_recargas.html"
    model = Recargas
    login_url = reverse_lazy("sesion:login")

    def get(self, request, pk, *args, **kwargs):
        product = Recargas.objects.get(pk=pk)
        self.context = {
            "object": product
        }
        return render(request, self.template_name,self.context)

class UpdateRecargas(LoginRequiredMixin, generic.UpdateView):
    template_name = "home/update_recargas.html"
    model = Recargas
    form_class = UpdateRecargasForm
    success_url = reverse_lazy("home:recargas")
    login_url = reverse_lazy("sesion:login")


class DeleteRecargas(LoginRequiredMixin, generic.DeleteView):
    template_name = "home/delete_recargas.html"
    model = Recargas
    success_url = reverse_lazy("home:recargas")
    login_url = reverse_lazy("sesion:login")


class NewRecargas(LoginRequiredMixin, generic.CreateView):
    template_name = "home/newrecargas.html"
    model = Recargas
    form_class = NewRecargasForm
    success_url = reverse_lazy("home:recargas")
    login_url = reverse_lazy("sesion:login")









#
#PLANES
#
class planes(LoginRequiredMixin, generic.View):
    template_name = "home/planes.html"
    context = {}
    login_url = reverse_lazy("sesion:login")

    def get(self, request):
        self.context = {
            "planes": Planes.objects.all()
        }
        return render(request, self.template_name, self.context)

class DetailPlanes(LoginRequiredMixin, generic.DetailView):
    template_name = "home/detail_planes.html"
    model = Planes
    login_url = reverse_lazy("sesion:login")

    def get(self, request, pk, *args, **kwargs):
        product = Planes.objects.get(pk=pk)
        self.context = {
            "object": product
        }
        return render(request, self.template_name,self.context)

class UpdatePlanes(LoginRequiredMixin, generic.UpdateView):
    template_name = "home/update_planes.html"
    model = Planes
    form_class = UpdatePlanesForm
    success_url = reverse_lazy("home:planes")
    login_url = reverse_lazy("sesion:login")


class DeletePlanes(LoginRequiredMixin, generic.DeleteView):
    template_name = "home/delete_plan.html"
    model = Planes
    success_url = reverse_lazy("home:planes")
    login_url = reverse_lazy("sesion:login")


class NewPlanes(LoginRequiredMixin, generic.CreateView):
    template_name = "home/newplanes.html"
    model = Planes
    form_class = NewPlanesForm
    success_url = reverse_lazy("home:planes")
    login_url = reverse_lazy("sesion:login")

