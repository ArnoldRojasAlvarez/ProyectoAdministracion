from django.urls import path
from . import views

urlpatterns = [
    path('productos/', views.productos_view),
    path('clientes/', views.clientes_view),
    path('pedidos/', views.pedidos_view),
    path('crear_producto/', views.crear_producto),
    path('cambiar_estado/<str:id_producto>/', views.cambiar_estado),
    path('eliminar_producto/<str:id_producto>/', views.eliminar_producto),
]

