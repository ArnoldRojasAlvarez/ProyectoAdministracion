from django.http import JsonResponse
from django.conf import settings
from supabase import create_client

# Conexión a Supabase
supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

# Obtener todos los productos
def productos_view(request):
    data = supabase.table("producto").select("*").execute()
    return JsonResponse(data.data, safe=False)

def clientes_view(request):
    data = supabase.table("cliente").select("*").execute()
    return JsonResponse(data.data, safe=False)

def pedidos_view(request):
    data = supabase.table("pedidos").select("idpedido, preciototal, estado, fecha, cliente(*)").execute()
    return JsonResponse(data.data, safe=False)

