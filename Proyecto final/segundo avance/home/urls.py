from django.urls import path, include
from django.contrib import admin
from home import views
from django.urls import path, include

app_name = "home"

urlpatterns = [
    path('', views.Index.as_view(), name="index"),
    
    path('categoria/', views.Categoria.as_view(), name="categoria"),
    path('nueva/categoria/', views.NewCategory.as_view(), name="newcategory"),
    path('update/category/<int:pk>/', views.UpdateCategory.as_view(), name="update_category"),
    path('detail/category/<int:pk>/', views.DetailCategory.as_view(), name="detail_category"),
    path('delete/category/<int:pk>/', views.DeleteCategory.as_view(), name="delete_category"),
    
    path('accesorio/', views.accesorios.as_view(), name="accesorios"),
    path('new/accesorio/', views.NewAccesorios.as_view(), name="newaccesorios"),
    path('update/accesorio/<int:pk>/', views.UpdateAccesorios.as_view(), name="update_accesorios"),
    path('detail/accesorio/<int:pk>/', views.DetailAccesorios.as_view(), name="detail_accesorios"),
    path('delete/accesorio/<int:pk>/', views.DeleteAccesorios.as_view(), name="delete_accesorios"),
    
    path('recargas/', views.recargas.as_view(), name="recargas"),
    path('new/recargas/', views.NewRecargas.as_view(), name="newrecargas"),
    path('update/recargas/<int:pk>/', views.UpdateRecargas.as_view(), name="update_recargas"),
    path('detail/recargas/<int:pk>/', views.DetailRecargas.as_view(), name="detail_recargas"),
    path('delete/recargas/<int:pk>/', views.DeleteRecargas.as_view(), name="delete_recargas"),
    
    path('planes/', views.planes.as_view(), name="planes"),
    path('new/planes/', views.NewPlanes.as_view(), name="newplanes"),
    path('update/planes/<int:pk>/', views.UpdatePlanes.as_view(), name="update_planes"),
    path('detail/planes/<int:pk>/', views.DetailPlanes.as_view(), name="detail_planes"),
    path('delete/planes/<int:pk>/', views.DeletePlanes.as_view(), name="delete_planes"),
    
    path('producto/', views.Producto.as_view(), name="product"),
    path('nueva/producto/', views.NewProducto.as_view(), name="newproduct"),
    path('update/producto/<int:pk>/', views.UpdateProducto.as_view(), name="update_producto"),
    path('detail/producto/<int:pk>/', views.DetailProducto.as_view(), name="detail_producto"),
    path('delete/producto/<int:pk>/', views.DeleteProducto.as_view(), name="delete_producto"),
    

]

