import React, { useState } from 'react';
import { 
  Megaphone, 
  Users, 
  Plus, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Target,
  Percent
} from 'lucide-react';

const Marketing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('promotions');

  const promotions = [
    {
      id: 1,
      title: 'Summer Linen Sale',
      description: '25% off all premium bed linens and towels',
      discount: '25%',
      startDate: '2024-06-01',
      endDate: '2024-06-30',
      status: 'active',
      views: 1234,
      conversions: 89,
      revenue: '$12,450'
    },
    {
      id: 2,
      title: 'Bulk Order Discount',
      description: 'Special pricing for orders over $1000',
      discount: '15%',
      startDate: '2024-05-15',
      endDate: '2024-07-15',
      status: 'active',
      views: 856,
      conversions: 45,
      revenue: '$8,750'
    },
    {
      id: 3,
      title: 'New Customer Welcome',
      description: 'First-time buyer discount',
      discount: '20%',
      startDate: '2024-04-01',
      endDate: '2024-04-30',
      status: 'expired',
      views: 2156,
      conversions: 156,
      revenue: '$18,900'
    }
  ];

  const affiliates = [
    {
      id: 1,
      name: 'Hotel Supply Network',
      email: 'partners@hotelsupply.com',
      commissionRate: '8%',
      totalSales: '$45,600',
      commission: '$3,648',
      status: 'active',
      joinDate: '2024-01-15',
      referrals: 23
    },
    {
      id: 2,
      name: 'Restaurant Partners LLC',
      email: 'affiliate@restpartners.com',
      commissionRate: '10%',
      totalSales: '$32,100',
      commission: '$3,210',
      status: 'active',
      joinDate: '2024-02-08',
      referrals: 18
    },
    {
      id: 3,
      name: 'Hospitality Solutions',
      email: 'team@hospsolutions.com',
      commissionRate: '6%',
      totalSales: '$28,900',
      commission: '$1,734',
      status: 'pending',
      joinDate: '2024-03-12',
      referrals: 12
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderPromotions = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Promotions & Deals</h3>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Promotion</span>
        </button>
      </div>

      <div className="space-y-4">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{promotion.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{promotion.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(promotion.status)}`}>
                    {promotion.status.charAt(0).toUpperCase() + promotion.status.slice(1)}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Percent className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="text-xs text-gray-500">Discount</p>
                      <p className="text-sm font-semibold text-gray-900">{promotion.discount}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{promotion.startDate} - {promotion.endDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="text-xs text-gray-500">Views</p>
                      <p className="text-sm font-semibold text-gray-900">{promotion.views.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-orange-600" />
                    <div>
                      <p className="text-xs text-gray-500">Revenue</p>
                      <p className="text-sm font-semibold text-gray-900">{promotion.revenue}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Conversions: {promotion.conversions}</span>
                  <span>•</span>
                  <span>Conversion Rate: {((promotion.conversions / promotion.views) * 100).toFixed(1)}%</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:ml-4">
                <button className="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-lg hover:bg-purple-200 transition-colors">
                  <Eye className="w-4 h-4 inline mr-1" />
                  View
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
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

  const renderAffiliates = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">Affiliate Marketing</h3>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Affiliate</span>
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affiliate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earned</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrals</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {affiliates.map((affiliate) => (
                <tr key={affiliate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{affiliate.name}</div>
                      <div className="text-sm text-gray-500">{affiliate.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-purple-600">{affiliate.commissionRate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{affiliate.totalSales}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-green-600">{affiliate.commission}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{affiliate.referrals}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(affiliate.status)}`}>
                      {affiliate.status.charAt(0).toUpperCase() + affiliate.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-purple-600 hover:text-purple-900">View</button>
                      <button className="text-blue-600 hover:text-blue-900">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Affiliate Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Affiliates</p>
              <p className="text-2xl font-bold text-gray-900">{affiliates.length}</p>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Commission Paid</p>
              <p className="text-2xl font-bold text-gray-900">
                ${affiliates.reduce((sum, affiliate) => sum + parseFloat(affiliate.commission.replace('$', '').replace(',', '')), 0).toLocaleString()}
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Referrals</p>
              <p className="text-2xl font-bold text-gray-900">
                {affiliates.reduce((sum, affiliate) => sum + affiliate.referrals, 0)}
              </p>
            </div>
            <Target className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Marketing</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your promotions and affiliate partnerships</p>
          <div className="mt-2 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full inline-block">
            Premium Feature
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <span className="text-sm text-gray-600">Marketing ROI: +24%</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('promotions')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'promotions'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Megaphone className="w-4 h-4 inline mr-2" />
            Promotions & Deals ({promotions.length})
          </button>
          <button
            onClick={() => setActiveTab('affiliates')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'affiliates'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Affiliate Marketing ({affiliates.length})
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'promotions' && renderPromotions()}
      {activeTab === 'affiliates' && renderAffiliates()}
    </div>
  );
};

export default Marketing;