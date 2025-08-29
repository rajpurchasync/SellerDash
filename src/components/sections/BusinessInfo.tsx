import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Globe, 
  Award, 
  Image, 
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Star,
  Users
} from 'lucide-react';

const BusinessInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('business');

  const [businessInfo, setBusinessInfo] = useState({
    businessType: 'Supplier',
    businessName: 'Premium Hospitality Supplies Co.',
    city: 'New York',
    state: 'New York',
    clientType: 'Hotels, Restaurants, Cafes'
  });

  const branches = [
    {
      id: 1,
      name: 'New York Headquarters',
      address: '123 Business Ave, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@premiumsupplies.com',
      type: 'Headquarters',
      isExportEnabled: true
    },
    {
      id: 2,
      name: 'Los Angeles Branch',
      address: '456 Supply St, Los Angeles, CA 90210',
      phone: '+1 (555) 987-6543',
      email: 'la@premiumsupplies.com',
      type: 'Branch Office',
      isExportEnabled: false
    },
    {
      id: 3,
      name: 'Miami Distribution Center',
      address: '789 Warehouse Blvd, Miami, FL 33101',
      phone: '+1 (555) 456-7890',
      email: 'miami@premiumsupplies.com',
      type: 'Distribution Center',
      isExportEnabled: true
    }
  ];

  const brands = [
    {
      id: 1,
      name: 'LuxuryLinen Pro',
      logo: 'https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Premium bed linens and towels for luxury hotels',
      category: 'Linens'
    },
    {
      id: 2,
      name: 'CoffeeCraft Premium',
      logo: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Artisan coffee beans and brewing equipment',
      category: 'Food & Beverage'
    },
    {
      id: 3,
      name: 'CleanPro Solutions',
      logo: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=100',
      description: 'Professional cleaning supplies and equipment',
      category: 'Cleaning'
    }
  ];

  const businessTypes = ['Supplier', 'Manufacturer', 'Distributor', 'Wholesaler'];
  const clientTypes = ['Hotels', 'Restaurants', 'Cafes', 'Bars', 'Catering', 'Event Venues'];
  const states = ['New York', 'California', 'Texas', 'Florida', 'Illinois', 'Pennsylvania'];

  const handleBusinessInfoChange = (field: string, value: string) => {
    setBusinessInfo(prev => ({ ...prev, [field]: value }));
  };

  const toggleExport = (branchId: number) => {
    console.log(`Toggle export for branch ${branchId}`);
  };

  const renderBusinessInfo = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Business Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
            <select
              value={businessInfo.businessType}
              onChange={(e) => handleBusinessInfoChange('businessType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {businessTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
            <input
              type="text"
              value={businessInfo.businessName}
              onChange={(e) => handleBusinessInfoChange('businessName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input
              type="text"
              value={businessInfo.city}
              onChange={(e) => handleBusinessInfoChange('city', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <select
              value={businessInfo.state}
              onChange={(e) => handleBusinessInfoChange('state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Client Types</label>
            <input
              type="text"
              value={businessInfo.clientType}
              onChange={(e) => handleBusinessInfoChange('clientType', e.target.value)}
              placeholder="e.g., Hotels, Restaurants, Cafes"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  const renderOnlineStore = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Online Store Profile</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">About Your Business</label>
            <textarea
              rows={4}
              placeholder="Tell customers about your business, values, and what makes you unique..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              defaultValue="Premium Hospitality Supplies Co. has been serving the hospitality industry for over 15 years. We specialize in high-quality linens, food & beverage supplies, and cleaning solutions for hotels, restaurants, and cafes."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
            <input
              type="text"
              placeholder="e.g., Luxury hotel supplies, Organic food products"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              defaultValue="Luxury hotel linens and premium food & beverage supplies"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Store Display Name</label>
            <input
              type="text"
              placeholder="How your store name appears to customers"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              defaultValue="Premium Hospitality Supplies"
            />
          </div>
        </div>
      </div>

      {/* Certificates & Badges */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Certificates & Badges</h3>
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
            <Plus className="w-4 h-4" />
            <span>Add Certificate</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <h4 className="text-sm font-medium text-gray-900">ISO 9001 Certified</h4>
            <p className="text-xs text-gray-600 mt-1">Quality Management</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="text-sm font-medium text-gray-900">Organic Certified</h4>
            <p className="text-xs text-gray-600 mt-1">USDA Organic</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors cursor-pointer">
            <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <h4 className="text-sm font-medium text-gray-600">Add Certificate</h4>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Store Images</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors cursor-pointer">
              <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Upload Logo</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Banner</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors cursor-pointer">
              <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Upload Banner</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gallery</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors cursor-pointer">
              <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Add Images</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBranches = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Business Branches</h3>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Branch</span>
        </button>
      </div>

      <div className="space-y-4">
        {branches.map((branch) => (
          <div key={branch.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{branch.name}</h4>
                    <p className="text-sm text-purple-600 font-medium">{branch.type}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Export:</span>
                    <button
                      onClick={() => toggleExport(branch.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        branch.isExportEnabled ? 'bg-purple-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          branch.isExportEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Building className="w-4 h-4" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 sm:col-span-2">
                    <Globe className="w-4 h-4" />
                    <span>{branch.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:ml-4">
                <button className="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-lg hover:bg-purple-200 transition-colors">
                  <Edit className="w-4 h-4 inline mr-1" />
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-lg hover:bg-red-200 transition-colors">
                  <Trash2 className="w-4 h-4 inline mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBrands = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Brand Portfolio</h3>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Brand</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex space-x-1">
                <button className="p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{brand.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{brand.description}</p>
            <div className="flex items-center justify-between">
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                {brand.category}
              </span>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                <ExternalLink className="w-4 h-4 inline mr-1" />
                View
              </button>
            </div>
          </div>
        ))}
        
        {/* Add Brand Card */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
          <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-600 mb-2">Add New Brand</h4>
          <p className="text-sm text-gray-500">Showcase your brand portfolio</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Business Information</h1>
        <p className="text-sm text-gray-600 mt-1">Manage your business profile and locations</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('business')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'business'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Building className="w-4 h-4 inline mr-2" />
            Business Information
          </button>
          <button
            onClick={() => setActiveTab('store')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'store'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Globe className="w-4 h-4 inline mr-2" />
            Online Store Profile
          </button>
          <button
            onClick={() => setActiveTab('branches')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'branches'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            Branches ({branches.length})
          </button>
          <button
            onClick={() => setActiveTab('brands')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'brands'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Award className="w-4 h-4 inline mr-2" />
            Brands ({brands.length})
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'business' && renderBusinessInfo()}
      {activeTab === 'store' && renderOnlineStore()}
      {activeTab === 'branches' && renderBranches()}
      {activeTab === 'brands' && renderBrands()}
    </div>
  );
};

export default BusinessInfo;