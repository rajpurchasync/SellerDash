import React from 'react';
import { Store, TrendingUp, Users, Star, ShoppingCart, Eye, Globe } from 'lucide-react';

const Marketplace: React.FC = () => {
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
};

export default Marketplace;