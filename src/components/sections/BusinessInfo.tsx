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
  Users,
  Package,
  Target,
  Truck
} from 'lucide-react';

const BusinessInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('business');

  const [businessInfo, setBusinessInfo] = useState({
    businessNameLicense: 'Premium Hospitality Supplies Co. LLC',
    businessNamePublic: 'Premium Hospitality Supplies',
    businessType: 'Supplier',
    tradeLicenseNo: 'TL-2024-001234',
    vatEnabled: true,
    vatNumber: 'VAT-US-987654321',
    city: 'New York',
    state: 'New York',
    clientType: 'Hotels, Restaurants, Cafes'
  });

  const [locationInfo, setLocationInfo] = useState({
    country: 'United States',
    state: 'New York',
    city: 'New York'
  });

  const [posSettings, setPosSettings] = useState({
    categories: ['Food', 'Non-food & Packaging'],
    keywords: 'premium, luxury, organic, sustainable',
    targetCustomers: ['Hotels', 'Restaurants'],
    deliveryLocations: ['New York', 'New Jersey', 'Connecticut'],
    exportAvailable: true
  });

  const branches = [
    {
      id: 1,
      name: 'New York Headquarters',
      country: 'United States',
      state: 'New York',
      city: 'New York',
      address: '123 Business Ave, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@premiumsupplies.com',
      type: 'Headquarters',
      isExportEnabled: true
    },
    {
      id: 2,
      name: 'Los Angeles Branch',
      country: 'United States',
      state: 'California',
      city: 'Los Angeles',
      address: '456 Supply St, Los Angeles, CA 90210',
      phone: '+1 (555) 987-6543',
      email: 'la@premiumsupplies.com',
      type: 'Branch Office',
      isExportEnabled: false
    }
  ];

  const businessTypes = ['Supplier', 'Manufacturer', 'Distributor', 'Wholesaler'];
  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const states = ['New York', 'California', 'Texas', 'Florida', 'Illinois'];
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  const categories = ['Food', 'Non-food & Packaging', 'Equipment'];
  const customerTypes = ['Hotels', 'Restaurants', 'Cafes', 'Bars', 'Catering'];

  const handleBusinessInfoChange = (field: string, value: string | boolean) => {
    setBusinessInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleLocationChange = (field: string, value: string) => {
    setLocationInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePosChange = (field: string, value: any) => {
    setPosSettings(prev => ({ ...prev, [field]: value }));
  };

  const toggleExport = (branchId: number) => {
    console.log(`Toggle export for branch ${branchId}`);
  };

  const renderBusinessTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Business Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name (as per license)</label>
            <input
              type="text"
              value={businessInfo.businessNameLicense}
              onChange={(e) => handleBusinessInfoChange('businessNameLicense', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name Public</label>
            <input
              type="text"
              value={businessInfo.businessNamePublic}
              onChange={(e) => handleBusinessInfoChange('businessNamePublic', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Trade License No</label>
            <input
              type="text"
              value={businessInfo.tradeLicenseNo}
              onChange={(e) => handleBusinessInfoChange('tradeLicenseNo', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={businessInfo.vatEnabled}
                  onChange={(e) => handleBusinessInfoChange('vatEnabled', e.target.checked)}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-sm font-medium text-gray-700">VAT Registered</span>
              </label>
            </div>
            {businessInfo.vatEnabled && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">VAT Number</label>
                <input
                  type="text"
                  value={businessInfo.vatNumber}
                  onChange={(e) => handleBusinessInfoChange('vatNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter VAT number"
                />
              </div>
            )}
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

  const renderLocationTab = () => (
    <div className="space-y-6">
      {/* Office Location */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Office Location</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <select
              value={locationInfo.country}
              onChange={(e) => handleLocationChange('country', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <select
              value={locationInfo.state}
              onChange={(e) => handleLocationChange('state', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <select
              value={locationInfo.city}
              onChange={(e) => handleLocationChange('city', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Save Location
          </button>
        </div>
      </div>

      {/* Branches */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Branches</h3>
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Branch</span>
          </button>
        </div>

        <div className="space-y-4">
          {branches.map((branch) => (
            <div key={branch.id} className="border border-gray-200 rounded-lg p-4">
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
                      <span>{branch.country}, {branch.state}, {branch.city}</span>
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
    </div>
  );

  const renderPosTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Point of Sale Configuration</h3>
        
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Categories</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {categories.map(category => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={posSettings.categories.includes(category)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handlePosChange('categories', [...posSettings.categories, category]);
                      } else {
                        handlePosChange('categories', posSettings.categories.filter(c => c !== category));
                      }
                    }}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Keywords Search</label>
            <input
              type="text"
              value={posSettings.keywords}
              onChange={(e) => handlePosChange('keywords', e.target.value)}
              placeholder="Enter keywords separated by commas"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Keywords help customers find your products</p>
          </div>

          {/* Target Customers */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Target Customers</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {customerTypes.map(customer => (
                <label key={customer} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={posSettings.targetCustomers.includes(customer)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handlePosChange('targetCustomers', [...posSettings.targetCustomers, customer]);
                      } else {
                        handlePosChange('targetCustomers', posSettings.targetCustomers.filter(c => c !== customer));
                      }
                    }}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">{customer}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Direct Delivery Locations */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Direct Delivery Locations</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {states.map(state => (
                <label key={state} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={posSettings.deliveryLocations.includes(state)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handlePosChange('deliveryLocations', [...posSettings.deliveryLocations, state]);
                      } else {
                        handlePosChange('deliveryLocations', posSettings.deliveryLocations.filter(l => l !== state));
                      }
                    }}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">{state}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Export Available */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Export Available</p>
                  <p className="text-xs text-gray-600">Enable international shipping and export</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={posSettings.exportAvailable}
                  onChange={(e) => handlePosChange('exportAvailable', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Save POS Settings
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Company Information</h1>
        <p className="text-sm text-gray-600 mt-1">Manage your business profile and settings</p>
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
            Business Info
          </button>
          <button
            onClick={() => setActiveTab('location')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'location'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            Location & Branches
          </button>
          <button
            onClick={() => setActiveTab('pos')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pos'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Target className="w-4 h-4 inline mr-2" />
            POS
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'business' && renderBusinessTab()}
      {activeTab === 'location' && renderLocationTab()}
      {activeTab === 'pos' && renderPosTab()}
    </div>
  );
};

export default BusinessInfo;