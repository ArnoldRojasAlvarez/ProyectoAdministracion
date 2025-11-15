from django.urls import path
from . import views

urlpatterns = [
    path('productos/', views.productos_view),
    path('clientes/', views.clientes_view),
    path('pedidos/', views.pedidos_view),
    path('crear_producto/', views.crear_producto),
]

