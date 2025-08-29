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
  ToggleRight
} from 'lucide-react';

const Catalogue: React.FC = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

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

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const toggleProductStatus = (productId: number) => {
    console.log(`Toggle status for product ${productId}`);
  };

  const renderProductCatalogue = () => (
    <div className="space-y-6">
      {/* Basic Profile Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-blue-900 mb-4">Step 1: Basic Profile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <FileSpreadsheet className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="text-sm font-medium text-blue-900 mb-1">Upload Product List</h4>
            <p className="text-xs text-blue-700 mb-3">Upload Excel file with your products</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Choose Excel File
            </button>
          </div>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="text-sm font-medium text-blue-900 mb-1">Upload Product Catalogue</h4>
            <p className="text-xs text-blue-700 mb-3">Type name and attach catalogue</p>
            <input
              type="text"
              placeholder="Catalogue name"
              className="w-full px-3 py-2 border border-blue-300 rounded-lg text-sm mb-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Attach File
            </button>
          </div>
        </div>
      </div>

      {/* Premium Profile Section */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-purple-900 mb-4">Step 2: Premium Profile</h3>
        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
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
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Create Product</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm">{product.name}</h4>
              <p className="text-xs text-gray-600 mb-2">{product.category} • {product.subCategory}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-purple-600">{product.price}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  product.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {product.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>Stock: {product.stock}</span>
                <span>Variants: {product.variants}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  <button className="p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVariants = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Product Variants</h3>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Variants</span>
        </button>
      </div>

      <div className="space-y-4">
        {variants.map((variant) => (
          <div key={variant.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0 mb-4">
              <div>
                <h4 className="text-lg font-medium text-gray-900">{variant.productName}</h4>
                <p className="text-sm text-gray-600">Variant Type: {variant.variantType}</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 transition-colors">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200 transition-colors">
                  Delete
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );

  const renderPricing = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Product Pricing</h3>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Pricing</span>
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Currency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bulk Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Qty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pricing.map((price) => (
                <tr key={price.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{price.productName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{price.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{price.currency}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-purple-600">{price.basePrice}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-green-600">{price.bulkPrice}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{price.minQuantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-purple-600 hover:text-purple-900">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'products'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Package className="w-4 h-4 inline mr-2" />
            Product Catalogue
          </button>
          <button
            onClick={() => setActiveTab('variants')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'variants'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Varieties ({variants.length})
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pricing'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Pricing ({pricing.length})
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'products' && renderProductCatalogue()}
      {activeTab === 'variants' && renderVariants()}
      {activeTab === 'pricing' && renderPricing()}
    </div>
  );
};

export default Catalogue;