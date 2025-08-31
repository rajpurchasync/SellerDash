import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Upload, 
  FileSpreadsheet,
  Eye,
  Edit,
  Trash2,
  ToggleLeft,
  ToggleRight,
  X,
  DollarSign,
  Settings,
  List
} from 'lucide-react';

interface CatalogueProps {
  activeTab?: string;
}

const Catalogue: React.FC<CatalogueProps> = ({ activeTab: propActiveTab }) => {
  const [activeTab, setActiveTab] = useState(propActiveTab || 'products');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isAddVariantModalOpen, setIsAddVariantModalOpen] = useState(false);
  const [isAddPricingModalOpen, setIsAddPricingModalOpen] = useState(false);
  const [isManageVariantsModalOpen, setIsManageVariantsModalOpen] = useState(false);
  const [isManagePricingModalOpen, setIsManagePricingModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [newVariant, setNewVariant] = useState({
    productId: '',
    variantType: '',
    variants: [''],
    prices: ['']
  });

  const [newPricing, setNewPricing] = useState({
    productId: '',
    location: '',
    currency: 'USD',
    basePrice: '',
    bulkPrice: '',
    minQuantity: ''
  });

  const products = [
    {
      id: 1,
      name: 'Premium Egyptian Cotton Towels',
      category: 'Linens',
      subCategory: 'Bath Towels',
      price: '$45.00',
      status: 'active',
      stock: 150,
      variants: 3,
      image: 'https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Organic Coffee Beans - Premium Blend',
      category: 'Food & Beverage',
      subCategory: 'Coffee',
      price: '$28.50',
      status: 'active',
      stock: 89,
      variants: 2,
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Luxury Bed Linen Set',
      category: 'Linens',
      subCategory: 'Bed Sheets',
      price: '$125.00',
      status: 'inactive',
      stock: 45,
      variants: 5,
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 4,
      name: 'Artisan Bread Selection',
      category: 'Food & Beverage',
      subCategory: 'Bakery',
      price: '$12.00',
      status: 'active',
      stock: 200,
      variants: 4,
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const variants = [
    {
      id: 1,
      productId: 1,
      productName: 'Premium Egyptian Cotton Towels',
      variantType: 'Size',
      variants: ['Small (30x50cm)', 'Medium (50x90cm)', 'Large (70x140cm)'],
      prices: ['$35.00', '$45.00', '$65.00']
    },
    {
      id: 2,
      productId: 2,
      productName: 'Organic Coffee Beans - Premium Blend',
      variantType: 'Weight',
      variants: ['250g', '500g', '1kg'],
      prices: ['$15.50', '$28.50', '$52.00']
    }
  ];

  const pricing = [
    {
      id: 1,
      productId: 1,
      productName: 'Premium Egyptian Cotton Towels',
      location: 'New York',
      currency: 'USD',
      basePrice: '$45.00',
      bulkPrice: '$38.00',
      minQuantity: 50
    },
    {
      id: 2,
      productId: 1,
      productName: 'Premium Egyptian Cotton Towels',
      location: 'London',
      currency: 'GBP',
      basePrice: '£35.00',
      bulkPrice: '£29.00',
      minQuantity: 50
    }
  ];

  const categories = ['All', 'Linens', 'Food & Beverage', 'Cleaning Supplies', 'Electronics'];
  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];
  const locations = ['New York', 'London', 'Toronto', 'Sydney', 'Berlin'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const toggleProductStatus = (productId: number) => {
    console.log(`Toggle status for product ${productId}`);
  };

  const addVariantField = () => {
    setNewVariant(prev => ({
      ...prev,
      variants: [...prev.variants, ''],
      prices: [...prev.prices, '']
    }));
  };

  const removeVariantField = (index: number) => {
    setNewVariant(prev => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index),
      prices: prev.prices.filter((_, i) => i !== index)
    }));
  };

  const updateVariantField = (index: number, field: 'variants' | 'prices', value: string) => {
    setNewVariant(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const handleAddVariant = () => {
    console.log('Adding variant:', newVariant);
    setIsAddVariantModalOpen(false);
    setNewVariant({
      productId: '',
      variantType: '',
      variants: [''],
      prices: ['']
    });
  };

  const handleAddPricing = () => {
    console.log('Adding pricing:', newPricing);
    setIsAddPricingModalOpen(false);
    setNewPricing({
      productId: '',
      location: '',
      currency: 'USD',
      basePrice: '',
      bulkPrice: '',
      minQuantity: ''
    });
  };

  const openManageVariants = (product: any) => {
    setSelectedProduct(product);
    setIsManageVariantsModalOpen(true);
  };

  const openManagePricing = (product: any) => {
    setSelectedProduct(product);
    setIsManagePricingModalOpen(true);
  };

  const renderProductList = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Product List</h3>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        >
          {categories.map(category => (
            <option key={category} value={category.toLowerCase()}>{category}</option>
          ))}
        </select>
      </div>

      {/* Products List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Mobile Card View */}
        <div className="sm:hidden divide-y divide-gray-200">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4">
              <div className="flex items-start space-x-3">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{product.name}</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>Category: {product.category}</p>
                    <p>Sub Category: {product.subCategory}</p>
                    <p className="font-semibold text-purple-600">{product.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status}
                    </span>
                    <div className="flex space-x-1">
                      <button className="p-1 text-purple-600 hover:bg-purple-50 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sub Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-cover mr-3"
                        />
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.subCategory}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-purple-600">{product.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.stock}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-purple-600 hover:text-purple-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleProductStatus(product.id)}
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          {product.status === 'active' ? 
                            <ToggleRight className="w-5 h-5 text-green-600" /> : 
                            <ToggleLeft className="w-5 h-5" />
                          }
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVariants = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Variants Management</h3>
        <button
          onClick={() => setIsAddVariantModalOpen(true)}
          className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Variants</span>
        </button>
      </div>

      {/* Product List for Variants */}
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.category} • {product.subCategory}</p>
                  <p className="text-sm text-purple-600 font-medium">{product.variants} variants</p>
                </div>
              </div>
              <button
                onClick={() => openManageVariants(product)}
                className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Manage Variants</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Variant Modal */}
      {isAddVariantModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Create Product Variants</h2>
                <button
                  onClick={() => setIsAddVariantModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
                  <select
                    value={newVariant.productId}
                    onChange={(e) => setNewVariant({...newVariant, productId: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Choose a product</option>
                    {products.map(product => (
                      <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Variant Type</label>
                  <input
                    type="text"
                    value={newVariant.variantType}
                    onChange={(e) => setNewVariant({...newVariant, variantType: e.target.value})}
                    placeholder="e.g., Size, Color, Weight"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700">Variants & Prices</label>
                    <button
                      onClick={addVariantField}
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                    >
                      + Add Variant
                    </button>
                  </div>
                  <div className="space-y-3">
                    {newVariant.variants.map((variant, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <input
                          type="text"
                          value={variant}
                          onChange={(e) => updateVariantField(index, 'variants', e.target.value)}
                          placeholder="Variant name"
                          className="w-full flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          value={newVariant.prices[index]}
                          onChange={(e) => updateVariantField(index, 'prices', e.target.value)}
                          placeholder="Price"
                          className="w-full sm:w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        {newVariant.variants.length > 1 && (
                          <button
                            onClick={() => removeVariantField(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-6">
                <button
                  onClick={() => setIsAddVariantModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddVariant}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Create Variants
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manage Variants Modal */}
      {isManageVariantsModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Manage Variants - {selectedProduct.name}</h2>
                <button
                  onClick={() => {
                    setIsManageVariantsModalOpen(false);
                    setSelectedProduct(null);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {variants.filter(v => v.productId === selectedProduct.id).map((variant) => (
                  <div key={variant.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Variant Type: {variant.variantType}</h4>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                        <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {variant.variants.map((variantOption, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-900">{variantOption}</span>
                            <span className="text-sm font-semibold text-purple-600">{variant.prices[index]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => {
                    setIsManageVariantsModalOpen(false);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderPricing = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Price Management</h3>
        <button
          onClick={() => setIsAddPricingModalOpen(true)}
          className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Pricing</span>
        </button>
      </div>

      {/* Product List for Pricing */}
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.category} • {product.subCategory}</p>
                  <p className="text-sm text-purple-600 font-medium">
                    {pricing.filter(p => p.productId === product.id).length} pricing rules
                  </p>
                </div>
              </div>
              <button
                onClick={() => openManagePricing(product)}
                className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors"
              >
                <DollarSign className="w-4 h-4" />
                <span>Manage Pricing</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Pricing Modal */}
      {isAddPricingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Create Product Pricing</h2>
                <button
                  onClick={() => setIsAddPricingModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
                  <select
                    value={newPricing.productId}
                    onChange={(e) => setNewPricing({...newPricing, productId: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Choose a product</option>
                    {products.map(product => (
                      <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select
                      value={newPricing.location}
                      onChange={(e) => setNewPricing({...newPricing, location: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select location</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                    <select
                      value={newPricing.currency}
                      onChange={(e) => setNewPricing({...newPricing, currency: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Base Price</label>
                    <input
                      type="text"
                      value={newPricing.basePrice}
                      onChange={(e) => setNewPricing({...newPricing, basePrice: e.target.value})}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bulk Price</label>
                    <input
                      type="text"
                      value={newPricing.bulkPrice}
                      onChange={(e) => setNewPricing({...newPricing, bulkPrice: e.target.value})}
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Quantity</label>
                  <input
                    type="number"
                    value={newPricing.minQuantity}
                    onChange={(e) => setNewPricing({...newPricing, minQuantity: e.target.value})}
                    placeholder="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-6">
                <button
                  onClick={() => setIsAddPricingModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddPricing}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Create Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manage Pricing Modal */}
      {isManagePricingModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Manage Pricing - {selectedProduct.name}</h2>
                <button
                  onClick={() => {
                    setIsManagePricingModalOpen(false);
                    setSelectedProduct(null);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Currency</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Base Price</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bulk Price</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Min Qty</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pricing.filter(p => p.productId === selectedProduct.id).map((price) => (
                      <tr key={price.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm text-gray-900">{price.location}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{price.currency}</td>
                        <td className="px-4 py-4 text-sm font-semibold text-purple-600">{price.basePrice}</td>
                        <td className="px-4 py-4 text-sm font-semibold text-green-600">{price.bulkPrice}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{price.minQuantity}</td>
                        <td className="px-4 py-4 text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">Edit</button>
                            <button className="text-red-600 hover:text-red-800">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => {
                    setIsManagePricingModalOpen(false);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Catalogue</h1>
        <p className="text-sm text-gray-600 mt-1">Manage your product catalogue and pricing</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-4 sm:space-x-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
              activeTab === 'products'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <List className="w-4 h-4 inline mr-2" />
            Product List
          </button>
          <button
            onClick={() => setActiveTab('variants')}
            className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
              activeTab === 'variants'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Settings className="w-4 h-4 inline mr-2" />
            Variants
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
              activeTab === 'pricing'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <DollarSign className="w-4 h-4 inline mr-2" />
            Pricing
          </button>
        </nav>
      </div>

      {/* Content based on activeTab */}
      {activeTab === 'products' && renderProductList()}
      {activeTab === 'variants' && renderVariants()}
      {activeTab === 'pricing' && renderPricing()}
    </div>
  );
};

export default Catalogue;