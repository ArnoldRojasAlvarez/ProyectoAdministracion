import { Menu, Calendar, Eye, EyeOff, Edit2, Trash2, Plus } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [showItemForm, setShowItemForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [itemForm, setItemForm] = useState({
    nombre: '',
    tipo: 'Steaks',
    precio: '',
    disponible: true,
    descripcion: ''
  });

  const tipos = ['Steaks', 'Appetizers', 'Sides', 'Desserts', 'Beverages'];

  const handleItemFormChange = (e) => {
    const { name, value, checked, type } = e.target;
    setItemForm({
      ...itemForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAddItem = () => {
    if (itemForm.nombre && itemForm.precio) {
      const newItem = {
        id: Date.now(),
        ...itemForm,
        precio: parseFloat(itemForm.precio)
      };
      setMenuItems([...menuItems, newItem]);
      resetItemForm();
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

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setItemForm(item);
    setShowItemForm(true);
  };

  const toggleItemAvailability = (id) => {
    setMenuItems(
      menuItems.map(item =>
        item.id === id ? { ...item, disponible: !item.disponible } : item
      )
    );
  };

  const resetItemForm = () => {
    setShowItemForm(false);
    setEditingItem(null);
    setItemForm({
      nombre: '',
      tipo: 'Steaks',
      precio: '',
      disponible: true,
      descripcion: ''
    });
  }

  const tabs = [
    { id: 'menu', name: 'Menu Management', icon: Menu },
    { id: 'calendar', name: 'Calendar Events', icon: Calendar },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950">
      <Navbar />

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
                              <span className="text-2xl font-bold text-primary-500 whitespace-nowrap">
                                ${item.precio.toFixed(2)}
                              </span>
                            </div>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="
                                inline-flex items-center gap-1.5 px-3 py-1 
                                bg-primary-500/10 text-primary-500 
                                border border-primary-500/20
                                rounded-full text-xs font-medium
                              ">
                                {item.tipo}
                              </span>
                              <span className={`
                                inline-flex items-center gap-1.5 px-3 py-1 
                                rounded-full text-xs font-medium
                                ${item.disponible 
                                  ? 'bg-success/10 text-success border border-success/20' 
                                  : 'bg-error/10 text-error border border-error/20'
                                }
                              `}>
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
                              onClick={() => handleEditItem(item)}
                              className="
                                flex-1 md:flex-none px-4 py-2 
                                bg-neutral-800 hover:bg-neutral-700
                                border border-neutral-700 hover:border-neutral-600
                                text-neutral-300 hover:text-white
                                rounded-lg text-sm font-medium
                                transition-all duration-200
                                inline-flex items-center justify-center gap-2
                              "
                            >
                              <Edit2 className="w-4 h-4" />
                              <span className="hidden sm:inline">Edit</span>
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

            {/* Calendar section would follow similar patterns... */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;