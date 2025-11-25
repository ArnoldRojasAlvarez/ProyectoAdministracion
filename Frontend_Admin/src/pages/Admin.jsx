import { Menu, Calendar, Eye, EyeOff, Edit2, Trash2, Plus, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Custom Modal Component
const Modal = ({ isOpen, onClose, onConfirm, title, message, type = 'confirm' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl max-w-md w-full animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <h3 className="text-xl font-semibold text-white tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-neutral-300 leading-relaxed">
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-neutral-800">
          <button
            onClick={onClose}
            className="
              flex-1 px-6 py-3 
              bg-transparent hover:bg-neutral-800 
              text-neutral-400 hover:text-white font-medium text-sm
              rounded-lg border border-neutral-700 hover:border-neutral-600
              transition-all duration-200
            "
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="
              flex-1 px-6 py-3 
              bg-red-600 hover:bg-red-700
              text-white font-medium text-sm
              rounded-lg 
              transition-all duration-200
              shadow-lg shadow-red-600/25
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [showItemForm, setShowItemForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });
  
  const [itemForm, setItemForm] = useState({
    nombre: '',
    tipo: 'Fuerte',
    precio: '',
    disponible: true,
    descripcion: ''
  });

  // Calendar Events State
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    type: 'special'
  });
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/productos/');
        if (response.ok) {
          const data = await response.json();
          
          // Importante: La API devuelve "idproducto", pero tu admin usa "id".
          // Vamos a transformar los datos para que encajen en tu tabla.
          const productosMapeados = data.map(item => ({
            id: item.idproducto,       // Mapeamos idproducto a id
            nombre: item.nombre,
            tipo: item.tipo,
            precio: parseFloat(item.precio),
            descripcion: item.descripcion,
            disponible: true // Por defecto true, ya que tu API aun no trae este campo bien
          }));

          setMenuItems(productosMapeados);
        }
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const tipos = ['Fuerte', 'Entrada', 'Ensalada', 'Postre', 'Bebida'];

  const handleItemFormChange = (e) => {
    const { name, value, checked, type } = e.target;
    setItemForm({
      ...itemForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAddItem = async () => {
    // 1. Validación simple
    if (!itemForm.nombre || !itemForm.precio) {
        setModalState({
          isOpen: true,
          title: 'Missing Information',
          message: 'Please complete the name and price fields.',
          onConfirm: () => {},
        });
        return;
    }

    // 2. Preparamos los datos
    // Generamos un ID temporal basado en la fecha (si tu backend lo requiere manual)
    const newId = Date.now().toString().slice(-9);
    
    const productoParaEnviar = {
        idproducto: newId,
        nombre: itemForm.nombre,
        descripcion: itemForm.descripcion || "", // Evita enviar null/undefined
        precio: parseFloat(itemForm.precio),
        tipo: itemForm.tipo, // Ya está en español, así que lo enviamos directo
        // disponible: itemForm.disponible (Nota: Tu backend aun no lee esto, pero es bueno dejarlo listo)
    };

    try {
        // 3. Petición POST al Backend
        const response = await fetch('http://127.0.0.1:8000/api/crear_producto/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productoParaEnviar)
        });

        if (response.ok) {
            // 4. Éxito: Actualizamos la vista del Admin
            const newItem = {
                id: parseInt(newId), // Convertimos a número para que React no se queje en las keys
                ...itemForm,         // Copiamos los datos del form para visualizarlos
                precio: parseFloat(itemForm.precio)
            };

            setMenuItems([...menuItems, newItem]);
            resetItemForm();
            // Opcional: alert("Producto creado con éxito");
        } else {
            // Manejo de errores del servidor
            const errorData = await response.json();
            console.error("Error del servidor:", errorData);
            setModalState({
              isOpen: true,
              title: 'Error',
              message: 'Could not save the product. Check the console for details.',
              onConfirm: () => {},
            });
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        setModalState({
          isOpen: true,
          title: 'Connection Error',
          message: 'Could not connect to the server. Is Django running?',
          onConfirm: () => {},
        });
    }
  };

  const handleUpdateItem = () => {
    if (editingItem && itemForm.nombre && itemForm.precio) {
      setMenuItems(
        menuItems.map(item =>
          item.id === editingItem.id
            ? { ...item, ...itemForm, precio: parseFloat(itemForm.precio) }
            : item
        )
      );
      resetItemForm();
    }
  };

  const handleDeleteItem = async (id) => {
    setModalState({
      isOpen: true,
      title: 'Delete Product',
      message: 'Are you sure you want to delete this product? This action cannot be undone.',
      onConfirm: async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/eliminar_producto/${id}/`, {
            method: 'DELETE',
          });

          if (response.ok) {
            setMenuItems(menuItems.filter(item => item.id !== id));
          } else {
            const errorData = await response.json();
            setModalState({
              isOpen: true,
              title: 'Error',
              message: `Could not delete: ${errorData.error || 'Unknown error'}`,
              onConfirm: () => {},
            });
          }
        } catch (error) {
          console.error("Error al eliminar:", error);
          setModalState({
            isOpen: true,
            title: 'Connection Error',
            message: 'Server connection error.',
            onConfirm: () => {},
          });
        }
      },
    });
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setItemForm(item);
    setShowItemForm(true);
  };

  const toggleItemAvailability = async (id) => {
    // 1. Buscamos el item actual para saber su estado y su ID real
    const itemToUpdate = menuItems.find(item => item.id === id);
    if (!itemToUpdate) return;

    const nuevoEstado = !itemToUpdate.disponible; // Invertimos el estado (true -> false)

    try {
        // 2. Llamamos a la API
        const response = await fetch(`http://127.0.0.1:8000/api/cambiar_estado/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ disponible: nuevoEstado })
        });

        if (response.ok) {
            // 3. Si la API responde bien, actualizamos la vista localmente
            setMenuItems(
                menuItems.map(item =>
                    item.id === id ? { ...item, disponible: nuevoEstado } : item
                )
            );
        } else {
            console.error("Error al actualizar estado en el servidor");
            setModalState({
              isOpen: true,
              title: 'Error',
              message: 'Could not change the status.',
              onConfirm: () => {},
            });
        }

    } catch (error) {
        console.error("Error de conexión:", error);
        setModalState({
          isOpen: true,
          title: 'Connection Error',
          message: 'Server connection error.',
          onConfirm: () => {},
        });
    }
  };

  const resetItemForm = () => {
    setShowItemForm(false);
    setEditingItem(null);
    setItemForm({
      nombre: '',
      tipo: 'Fuerte',
      precio: '',
      disponible: true,
      descripcion: ''
    });
  }

  // Calendar Event Handlers
  const handleEventFormChange = (e) => {
    const { name, value } = e.target;
    setEventForm({
      ...eventForm,
      [name]: value
    });
  };

  const handleAddEvent = () => {
    if (!eventForm.title || !eventForm.date || !eventForm.time) {
      setModalState({
        isOpen: true,
        title: 'Missing Information',
        message: 'Please complete title, date, and time fields.',
        onConfirm: () => {},
      });
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...eventForm
    };

    setCalendarEvents([...calendarEvents, newEvent]);
    resetEventForm();
  };

  const handleDeleteEvent = (id) => {
    setModalState({
      isOpen: true,
      title: 'Delete Event',
      message: 'Are you sure you want to delete this event?',
      onConfirm: () => {
        setCalendarEvents(calendarEvents.filter(event => event.id !== id));
      },
    });
  };

  const resetEventForm = () => {
    setShowEventForm(false);
    setEditingEvent(null);
    setEventForm({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      type: 'special'
    });
  };

  const tabs = [
    { id: 'menu', name: 'Menu Management', icon: Menu },
    { id: 'calendar', name: 'Calendar Events', icon: Calendar },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950">
      <Navbar />

      {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        onConfirm={modalState.onConfirm}
        title={modalState.title}
        message={modalState.message}
      />

      <main className="flex-grow pt-20 md:pt-24">
        {/* Hero Section - Refined */}
        <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 py-12 md:py-16 border-b border-neutral-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="w-16 h-1 bg-primary-500 mb-6 rounded-full" />
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Admin Panel
              </h1>
              <p className="text-neutral-400 text-lg font-normal">
                Manage your restaurant menu and calendar
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation - Refined */}
        <section className="sticky top-20 z-40 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-2 py-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex items-center gap-3 px-5 py-2.5 rounded-lg
                        font-medium text-sm tracking-wide
                        transition-all duration-200
                        ${
                          activeTab === tab.id
                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                            : 'bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-800'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Content - Refined */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {activeTab === 'menu' && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Menu Items
                  </h2>
                  <button
                    onClick={() => setShowItemForm(!showItemForm)}
                    className="
                      inline-flex items-center gap-2 px-5 py-2.5
                      bg-primary-500 hover:bg-primary-600
                      text-white font-medium text-sm
                      rounded-lg shadow-lg shadow-primary-500/25
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950
                      active:scale-[0.98]
                    "
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Item</span>
                  </button>
                </div>

                {/* Form - Refined */}
                {showItemForm && (
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl shadow-black/20 p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-white mb-6 tracking-tight">
                      {editingItem ? 'Edit Item' : 'Add New Item'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Item Name
                          <span className="text-accent-500 ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          value={itemForm.nombre}
                          onChange={handleItemFormChange}
                          placeholder="e.g., Ribeye Supreme"
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100 placeholder:text-neutral-500
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                          "
                        />
                      </div>

                      {/* Type Field */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Category
                          <span className="text-accent-500 ml-1">*</span>
                        </label>
                        <select
                          name="tipo"
                          value={itemForm.tipo}
                          onChange={handleItemFormChange}
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                          "
                        >
                          {tipos.map((tipo) => (
                            <option key={tipo} value={tipo} className="bg-neutral-900">
                              {tipo}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Price Field */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Price (USD)
                          <span className="text-accent-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                          <input
                            type="number"
                            name="precio"
                            value={itemForm.precio}
                            onChange={handleItemFormChange}
                            step="0.01"
                            placeholder="0.00"
                            className="
                              w-full pl-8 pr-4 py-3 
                              bg-neutral-900 
                              border border-neutral-800 
                              rounded-lg 
                              text-neutral-100 placeholder:text-neutral-500
                              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                              transition-all duration-200
                            "
                          />
                        </div>
                      </div>

                      {/* Availability Toggle */}
                      <div className="flex items-center">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="relative">
                            <input
                              type="checkbox"
                              name="disponible"
                              checked={itemForm.disponible}
                              onChange={handleItemFormChange}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-neutral-800 rounded-full peer-checked:bg-primary-500 transition-colors duration-200"></div>
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
                          </div>
                          <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                            Available for order
                          </span>
                        </label>
                      </div>

                      {/* Description Field */}
                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Description
                          <span className="text-accent-500 ml-1">*</span>
                        </label>
                        <textarea
                          name="descripcion"
                          value={itemForm.descripcion}
                          onChange={handleItemFormChange}
                          rows="3"
                          placeholder="Describe this menu item..."
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100 placeholder:text-neutral-500
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                            resize-none
                          "
                        />
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <button
                        onClick={editingItem ? handleUpdateItem : handleAddItem}
                        className="
                          flex-1 px-6 py-3 
                          bg-primary-500 hover:bg-primary-600
                          text-white font-medium text-sm
                          rounded-lg shadow-lg shadow-primary-500/25
                          transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900
                          active:scale-[0.98]
                        "
                      >
                        {editingItem ? 'Update Item' : 'Create Item'}
                      </button>
                      <button
                        onClick={resetItemForm}
                        className="
                          flex-1 px-6 py-3 
                          bg-transparent hover:bg-neutral-800 
                          text-neutral-400 hover:text-white font-medium text-sm
                          rounded-lg border border-neutral-700 hover:border-neutral-600
                          transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900
                        "
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Menu Items List - Refined */}
                <div className="grid grid-cols-1 gap-4">
                  {menuItems.length === 0 ? (
                    <div className="text-center py-16 bg-neutral-900 border border-dashed border-neutral-800 rounded-xl">
                      <Menu className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
                      <p className="text-neutral-400 text-lg font-medium">No menu items yet</p>
                      <p className="text-neutral-500 text-sm mt-1">Add your first item to get started</p>
                    </div>
                  ) : (
                    menuItems.map((item) => (
                      <div
                        key={item.id}
                        className="
                          bg-neutral-900 border border-neutral-800 
                          rounded-xl p-5 md:p-6
                          hover:border-neutral-700 hover:shadow-lg hover:shadow-black/10
                          transition-all duration-300
                        "
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          {/* Item Info */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div>
                                <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">
                                  {item.nombre}
                                </h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                  {item.descripcion}
                                </p>
                              </div>
                              <span className="text-2xl font-bold whitespace-nowrap" style={{ color: '#b8812e' }}>
                                ${item.precio.toFixed(2)}
                              </span>
                            </div>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="
                                inline-flex items-center gap-1.5 px-3 py-1 
                                bg-primary-500/10
                                border border-primary-500/20
                                rounded-full text-xs font-medium
                              " style={{ color: '#b8812e' }}>
                                {item.tipo}
                              </span>
                              <span 
                                className={`
                                  inline-flex items-center gap-1.5 px-3 py-1 
                                  rounded-full text-xs font-medium
                                  ${item.disponible 
                                    ? 'bg-success/10 border border-success/20' 
                                    : 'bg-error/10 border border-error/20'
                                  }
                                `}
                                style={{ color: item.disponible ? '#10b981' : '#ef4444' }}
                              >
                                {item.disponible ? 'Available' : 'Unavailable'}
                              </span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex md:flex-col gap-2">
                            <button
                              onClick={() => toggleItemAvailability(item.id)}
                              className="
                                flex-1 md:flex-none px-4 py-2 
                                bg-neutral-800 hover:bg-neutral-700
                                border border-neutral-700 hover:border-neutral-600
                                text-neutral-300 hover:text-white
                                rounded-lg text-sm font-medium
                                transition-all duration-200
                                inline-flex items-center justify-center gap-2
                              "
                              title="Toggle availability"
                            >
                              {item.disponible ? (
                                <Eye className="w-4 h-4" />
                              ) : (
                                <EyeOff className="w-4 h-4" />
                              )}
                            </button>
                            
                            <button
                              onClick={() => handleDeleteItem(item.id)}
                              className="
                                flex-1 md:flex-none px-4 py-2 
                                bg-neutral-800 hover:bg-error/10
                                border border-neutral-700 hover:border-error/30
                                text-neutral-300 hover:text-error
                                rounded-lg text-sm font-medium
                                transition-all duration-200
                                inline-flex items-center justify-center gap-2
                              "
                            >
                              <Trash2 className="w-4 h-4" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Calendar Events
                  </h2>
                  <button
                    onClick={() => setShowEventForm(!showEventForm)}
                    className="
                      inline-flex items-center gap-2 px-5 py-2.5
                      bg-primary-500 hover:bg-primary-600
                      text-white font-medium text-sm
                      rounded-lg shadow-lg shadow-primary-500/25
                      transition-all duration-200
                      active:scale-[0.98]
                    "
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Event</span>
                  </button>
                </div>

                {/* Event Form */}
                {showEventForm && (
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl shadow-black/20 p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-white mb-6 tracking-tight">
                      {editingEvent ? 'Edit Event' : 'Add New Event'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Title */}
                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Event Title
                          <span className="text-accent-500 ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={eventForm.title}
                          onChange={handleEventFormChange}
                          placeholder="e.g., Wine Pairing Evening"
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100 placeholder:text-neutral-500
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                          "
                        />
                      </div>

                      {/* Date */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Date
                          <span className="text-accent-500 ml-1">*</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={eventForm.date}
                          onChange={handleEventFormChange}
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                          "
                        />
                      </div>

                      {/* Time */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Time
                          <span className="text-accent-500 ml-1">*</span>
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={eventForm.time}
                          onChange={handleEventFormChange}
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                          "
                        />
                      </div>

                      {/* Location */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={eventForm.location}
                          onChange={handleEventFormChange}
                          placeholder="e.g., Main Dining Room"
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100 placeholder:text-neutral-500
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                          "
                        />
                      </div>

                      {/* Type */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Event Type
                        </label>
                        <select
                          name="type"
                          value={eventForm.type}
                          onChange={handleEventFormChange}
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                          "
                        >
                          <option value="special">Special Event</option>
                          <option value="reservation">Reservation</option>
                          <option value="private">Private Event</option>
                        </select>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-sm font-medium text-neutral-300">
                          Description
                        </label>
                        <textarea
                          name="description"
                          value={eventForm.description}
                          onChange={handleEventFormChange}
                          rows="3"
                          placeholder="Describe the event..."
                          className="
                            w-full px-4 py-3 
                            bg-neutral-900 
                            border border-neutral-800 
                            rounded-lg 
                            text-neutral-100 placeholder:text-neutral-500
                            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-200
                            resize-none
                          "
                        />
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <button
                        onClick={handleAddEvent}
                        className="
                          flex-1 px-6 py-3 
                          bg-primary-500 hover:bg-primary-600
                          text-white font-medium text-sm
                          rounded-lg shadow-lg shadow-primary-500/25
                          transition-all duration-200
                          active:scale-[0.98]
                        "
                      >
                        {editingEvent ? 'Update Event' : 'Create Event'}
                      </button>
                      <button
                        onClick={resetEventForm}
                        className="
                          flex-1 px-6 py-3 
                          bg-transparent hover:bg-neutral-800 
                          text-neutral-400 hover:text-white font-medium text-sm
                          rounded-lg border border-neutral-700 hover:border-neutral-600
                          transition-all duration-200
                        "
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Events List */}
                <div className="grid grid-cols-1 gap-4">
                  {calendarEvents.length === 0 ? (
                    <div className="text-center py-16 bg-neutral-900 border border-dashed border-neutral-800 rounded-xl">
                      <Calendar className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
                      <p className="text-neutral-400 text-lg font-medium">No events scheduled</p>
                      <p className="text-neutral-500 text-sm mt-1">Add your first event to get started</p>
                    </div>
                  ) : (
                    calendarEvents.map((event) => (
                      <div
                        key={event.id}
                        className="
                          bg-neutral-900 border border-neutral-800 
                          rounded-xl p-5 md:p-6
                          hover:border-neutral-700 hover:shadow-lg hover:shadow-black/10
                          transition-all duration-300
                        "
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div>
                                <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">
                                  {event.title}
                                </h3>
                                <p className="text-sm text-neutral-400">
                                  {event.date} at {event.time}
                                </p>
                                {event.location && (
                                  <p className="text-sm text-neutral-500 mt-1">
                                    📍 {event.location}
                                  </p>
                                )}
                                {event.description && (
                                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                                    {event.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            <span 
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs font-medium"
                              style={{ color: '#b8812e' }}
                            >
                              {event.type}
                            </span>
                          </div>

                          <div className="flex md:flex-col gap-2">
                            <button
                              onClick={() => handleDeleteEvent(event.id)}
                              className="
                                flex-1 md:flex-none px-4 py-2 
                                bg-neutral-800 hover:bg-error/10
                                border border-neutral-700 hover:border-error/30
                                text-neutral-300 hover:text-error
                                rounded-lg text-sm font-medium
                                transition-all duration-200
                                inline-flex items-center justify-center gap-2
                              "
                            >
                              <Trash2 className="w-4 h-4" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminPage;