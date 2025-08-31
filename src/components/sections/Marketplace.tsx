import React from 'react';
import { useState } from 'react';
import { 
  Store, 
  TrendingUp, 
  Users, 
  Star, 
  ShoppingCart, 
  Eye, 
  Globe,
  Building,
  Image,
  Award,
  Plus,
  X,
  Upload,
  Save,
  FileText,
  ExternalLink,
  Crown
} from 'lucide-react';

interface MarketplaceProps {
  subSection?: string;
}

const Marketplace: React.FC<MarketplaceProps> = ({ subSection = 'overview' }) => {
  const [activeTab, setActiveTab] = useState('company');
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  
  // Online Store Settings State
  const [onlineStoreData, setOnlineStoreData] = useState({
    // Company Details
    aboutCompany: '',
    expertise: [''],
    certificates: [''],
    tags: [''],
    
    // Media
    logoUrl: '',
    bannerUrl: '',
    
    // Brands
    brands: [{ name: '', logoUrl: '', description: '' }],
    
    // Social Media
    website: '',
    linkedin: '',
    instagram: '',
    facebook: '',
    
    // Testimonials
    testimonials: [{ customerName: '', location: '', testimonial: '' }]
  });

  const marketplaceStats = [
    { label: 'Store Views', value: '2,456', change: '+18%', icon: Eye },
    { label: 'Products Listed', value: '24', change: '+3', icon: ShoppingCart },
    { label: 'Followers', value: '189', change: '+12%', icon: Users },
    { label: 'Average Rating', value: '4.8', change: '+0.2', icon: Star }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Egyptian Cotton Towels',
      price: '$45.00',
      rating: 4.9,
      reviews: 23,
      image: 'https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=200',
      featured: true
    },
    {
      id: 2,
      name: 'Organic Coffee Beans',
      price: '$28.50',
      rating: 4.7,
      reviews: 18,
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=200',
      featured: false
    },
    {
      id: 3,
      name: 'Luxury Bed Linen Set',
      price: '$125.00',
      rating: 4.8,
      reviews: 31,
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=200',
      featured: true
    }
  ];

  // Expertise functions
  const addExpertise = () => {
    setOnlineStoreData(prev => ({
      ...prev,
      expertise: [...prev.expertise, '']
    }));
  };

  const removeExpertise = (index: number) => {
    setOnlineStoreData(prev => ({
      ...prev,
      expertise: prev.expertise.filter((_, i) => i !== index)
    }));
  };

  const updateExpertise = (index: number, value: string) => {
    setOnlineStoreData(prev => ({
      ...prev,
      expertise: prev.expertise.map((item, i) => i === index ? value : item)
    }));
  };

  // Tags functions
  const addTag = () => {
    setOnlineStoreData(prev => ({
      ...prev,
      tags: [...prev.tags, '']
    }));
  };

  const removeTag = (index: number) => {
    setOnlineStoreData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const updateTag = (index: number, value: string) => {
    setOnlineStoreData(prev => ({
      ...prev,
      tags: prev.tags.map((item, i) => i === index ? value : item)
    }));
  };

  // Brand functions
  const addBrand = () => {
    setOnlineStoreData(prev => ({
      ...prev,
      brands: [...prev.brands, { name: '', logoUrl: '', description: '' }]
    }));
  };

  const removeBrand = (index: number) => {
    setOnlineStoreData(prev => ({
      ...prev,
      brands: prev.brands.filter((_, i) => i !== index)
    }));
  };

  const updateBrand = (index: number, field: string, value: string) => {
    setOnlineStoreData(prev => ({
      ...prev,
      brands: prev.brands.map((brand, i) => 
        i === index ? { ...brand, [field]: value } : brand
      )
    }));
  };

  // Testimonial functions
  const addTestimonial = () => {
    setOnlineStoreData(prev => ({
      ...prev,
      testimonials: [...prev.testimonials, { customerName: '', location: '', testimonial: '' }]
    }));
  };

  const removeTestimonial = (index: number) => {
    setOnlineStoreData(prev => ({
      ...prev,
      testimonials: prev.testimonials.filter((_, i) => i !== index)
    }));
  };

  const updateTestimonial = (index: number, field: string, value: string) => {
    setOnlineStoreData(prev => ({
      ...prev,
      testimonials: prev.testimonials.map((testimonial, i) => 
        i === index ? { ...testimonial, [field]: value } : testimonial
      )
    }));
  };

  const handleSaveDraft = () => {
    console.log('Saving online store draft:', onlineStoreData);
    alert('Draft saved successfully!');
  };

  const handlePreview = () => {
    setIsPreviewModalOpen(true);
  };

  const renderOnlineStoreSettings = () => (
    <div className="space-y-6">
      {/* Upgrade Notice */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Crown className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold text-purple-900">Premium Feature</h3>
              <p className="text-sm text-purple-700">Upgrade to access full online store customization</p>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 overflow-x-auto">
          {[
            { id: 'company', label: 'Company Details', icon: Building },
            { id: 'media', label: 'Media', icon: Image },
            { id: 'brands', label: 'Brands', icon: Award },
            { id: 'social', label: 'Social Media', icon: Globe },
            { id: 'testimonials', label: 'Testimonials', icon: Star }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4 inline mr-2" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {activeTab === 'company' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                About Company <span className="text-red-500">*</span>
              </label>
              <textarea
                value={onlineStoreData.aboutCompany}
                onChange={(e) => setOnlineStoreData(prev => ({ ...prev, aboutCompany: e.target.value }))}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell customers about your company, mission, and values..."
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">Expertise</label>
                <button
                  onClick={addExpertise}
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  + Add Expertise
                </button>
              </div>
              <div className="space-y-3">
                {onlineStoreData.expertise.map((expertise, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={expertise}
                      onChange={(e) => updateExpertise(index, e.target.value)}
                      placeholder="e.g., Premium Hospitality Supplies"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    {onlineStoreData.expertise.length > 1 && (
                      <button
                        onClick={() => removeExpertise(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Add Certificates</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload certificates (PDF, JPG, PNG)</p>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  Choose Files
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">Tags</label>
                <button
                  onClick={addTag}
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  + Add Tag
                </button>
              </div>
              <div className="space-y-3">
                {onlineStoreData.tags.map((tag, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={tag}
                      onChange={(e) => updateTag(index, e.target.value)}
                      placeholder="e.g., Premium, Organic, Sustainable"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    {onlineStoreData.tags.length > 1 && (
                      <button
                        onClick={() => removeTag(index)}
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
        )}

        {activeTab === 'media' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Upload Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload your company logo</p>
                <p className="text-xs text-gray-500 mb-3">Recommended: 200x200px, PNG or JPG</p>
                <input
                  type="text"
                  value={onlineStoreData.logoUrl}
                  onChange={(e) => setOnlineStoreData(prev => ({ ...prev, logoUrl: e.target.value }))}
                  placeholder="Enter logo URL or upload file"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-3"
                />
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  Upload & Crop Logo
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Upload Banner</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload your store banner</p>
                <p className="text-xs text-gray-500 mb-3">Recommended: 1200x400px, PNG or JPG</p>
                <input
                  type="text"
                  value={onlineStoreData.bannerUrl}
                  onChange={(e) => setOnlineStoreData(prev => ({ ...prev, bannerUrl: e.target.value }))}
                  placeholder="Enter banner URL or upload file"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-3"
                />
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  Upload & Crop Banner
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'brands' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Brand Management</h3>
              <button
                onClick={addBrand}
                className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Brand</span>
              </button>
            </div>
            
            <div className="space-y-6">
              {onlineStoreData.brands.map((brand, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-md font-medium text-gray-900">Brand {index + 1}</h4>
                    {onlineStoreData.brands.length > 1 && (
                      <button
                        onClick={() => removeBrand(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Brand Name</label>
                      <input
                        type="text"
                        value={brand.name}
                        onChange={(e) => updateBrand(index, 'name', e.target.value)}
                        placeholder="Enter brand name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Brand Logo</label>
                      <input
                        type="text"
                        value={brand.logoUrl}
                        onChange={(e) => updateBrand(index, 'logoUrl', e.target.value)}
                        placeholder="Enter logo URL or upload file"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Brand Description</label>
                      <textarea
                        value={brand.description}
                        onChange={(e) => updateBrand(index, 'description', e.target.value)}
                        rows={4}
                        maxLength={1000}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Describe this brand (max 1000 characters)"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {brand.description.length}/1000 characters
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Social Media Links</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  value={onlineStoreData.website}
                  onChange={(e) => setOnlineStoreData(prev => ({ ...prev, website: e.target.value }))}
                  placeholder="https://yourcompany.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                <input
                  type="url"
                  value={onlineStoreData.linkedin}
                  onChange={(e) => setOnlineStoreData(prev => ({ ...prev, linkedin: e.target.value }))}
                  placeholder="https://linkedin.com/company/yourcompany"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                <input
                  type="url"
                  value={onlineStoreData.instagram}
                  onChange={(e) => setOnlineStoreData(prev => ({ ...prev, instagram: e.target.value }))}
                  placeholder="https://instagram.com/yourcompany"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                <input
                  type="url"
                  value={onlineStoreData.facebook}
                  onChange={(e) => setOnlineStoreData(prev => ({ ...prev, facebook: e.target.value }))}
                  placeholder="https://facebook.com/yourcompany"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Customer Testimonials</h3>
              <button
                onClick={addTestimonial}
                className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Testimonial</span>
              </button>
            </div>
            
            <div className="space-y-6">
              {onlineStoreData.testimonials.map((testimonial, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-md font-medium text-gray-900">Testimonial {index + 1}</h4>
                    {onlineStoreData.testimonials.length > 1 && (
                      <button
                        onClick={() => removeTestimonial(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                      <input
                        type="text"
                        value={testimonial.customerName}
                        onChange={(e) => updateTestimonial(index, 'customerName', e.target.value)}
                        placeholder="Customer name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={testimonial.location}
                        onChange={(e) => updateTestimonial(index, 'location', e.target.value)}
                        placeholder="City, Country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Testimonial</label>
                    <textarea
                      value={testimonial.testimonial}
                      onChange={(e) => updateTestimonial(index, 'testimonial', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Customer testimonial..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleSaveDraft}
          className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Save className="w-4 h-4" />
          <span>Save Draft</span>
        </button>
        <button
          onClick={handlePreview}
          className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Eye className="w-4 h-4" />
          <span>Preview Store</span>
        </button>
      </div>

      {/* Preview Modal */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Store Preview</h2>
                <button
                  onClick={() => setIsPreviewModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Premium Hospitality Supplies</h3>
                  <p className="text-gray-600 mt-2">{onlineStoreData.aboutCompany || 'About company not provided'}</p>
                </div>
                
                {onlineStoreData.expertise.filter(e => e.trim()).length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {onlineStoreData.expertise.filter(e => e.trim()).map((expertise, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {onlineStoreData.brands.filter(b => b.name.trim()).length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Our Brands</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {onlineStoreData.brands.filter(b => b.name.trim()).map((brand, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900">{brand.name}</h5>
                          <p className="text-sm text-gray-600 mt-1">{brand.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {onlineStoreData.testimonials.filter(t => t.customerName.trim()).length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Customer Testimonials</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {onlineStoreData.testimonials.filter(t => t.customerName.trim()).map((testimonial, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <p className="text-gray-700 italic mb-2">"{testimonial.testimonial}"</p>
                          <p className="text-sm font-medium text-gray-900">{testimonial.customerName}</p>
                          <p className="text-xs text-gray-500">{testimonial.location}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Store Overview (default view)
  if (subSection === 'overview' || !subSection) {
    return (
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Marketplace</h1>
            <p className="text-sm text-gray-600 mt-1">Manage your marketplace presence and performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
              <ExternalLink className="w-4 h-4 inline mr-2" />
              View Store
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {marketplaceStats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-purple-600" />
                <span className={`text-xs font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Store Performance */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Performance</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-900">New order received</span>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-900">Product viewed 15 times</span>
                  </div>
                  <span className="text-xs text-gray-500">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-900">New review received</span>
                  </div>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Top Categories</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">Linens</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-16 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">Food & Beverage</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-12 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900">Cleaning Supplies</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-8 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Featured Products</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              Manage Featured
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  {product.featured && (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">{product.name}</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-purple-600">{product.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm hover:bg-purple-200 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 bg-purple-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
            <Store className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-900">Store Settings</span>
          </button>
          <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-900">Analytics</span>
          </button>
          <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
            <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-900">Customers</span>
          </button>
          <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
            <Star className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-900">Reviews</span>
          </button>
          <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
            <Globe className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <span className="text-xs sm:text-sm font-medium text-gray-900">Online Store</span>
          </button>
        </div>
      </div>
    );
  }

  // Store Settings view
  return renderOnlineStoreSettings();
};

export default Marketplace;