from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .supabase_client import supabase  # import del cliente centralizado


# ============================
#  GET: Obtener todos los productos
# ============================
def productos_view(request):
    data = supabase.table("producto").select("*").execute()
    return JsonResponse(data.data, safe=False)


# ============================
#  GET: Obtener todos los clientes
# ============================
def clientes_view(request):
    data = supabase.table("cliente").select("*").execute()
    return JsonResponse(data.data, safe=False)


# ============================
#  GET: Obtener pedidos con join a cliente
# ============================
def pedidos_view(request):
    data = supabase.table("pedidos").select(
        "idpedido, preciototal, estado, fecha, cliente(*)"
    ).execute()
    return JsonResponse(data.data, safe=False)


# ============================
#  POST: Crear un nuevo producto
# ============================
@csrf_exempt
def crear_producto(request):
    if request.method != "POST":
        return JsonResponse({"error": "Método no permitido"}, status=405)

    try:
        body = json.loads(request.body)

        nuevo_producto = {
            "idproducto": body.get("idproducto"),  # OJO: Supabase no lo genera, debes enviarlo
            "nombre": body.get("nombre"),
            "descripcion": body.get("descripcion"),
            "precio": body.get("precio"),
            "tipo": body.get("tipo"),
            "disponible": body.get("disponible", True)
        }

        result = supabase.table("producto").insert(nuevo_producto).execute()

        return JsonResponse(result.data, safe=False, status=201)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
# ============================
# ============================
#  PUT: Cambiar disponibilidad (Toggle)
# ============================
@csrf_exempt
def cambiar_estado(request, id_producto):
    if request.method != "PUT":
        return JsonResponse({"error": "Método no permitido"}, status=405)

    try:
        body = json.loads(request.body)
        nuevo_estado = body.get("disponible") # Esperamos un true o false

        # Actualizamos en Supabase donde el idproducto coincida
        data = supabase.table("producto").update({"disponible": nuevo_estado}).eq("idproducto", id_producto).execute()
        
        return JsonResponse(data.data, safe=False)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
# ============================
# ============================
#  DELETE: Eliminar un producto
# ============================
@csrf_exempt
def eliminar_producto(request, id_producto):
    if request.method != "DELETE":
        return JsonResponse({"error": "Método no permitido"}, status=405)

    try:
        # Ejecutamos el delete en Supabase filtrando por id
        result = supabase.table("producto").delete().eq("idproducto", id_producto).execute()
        
        # Opcional: Verificar si se borró algo (result.data no estaría vacío)
        return JsonResponse({"mensaje": "Producto eliminado", "data": result.data}, safe=False)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
# ============================