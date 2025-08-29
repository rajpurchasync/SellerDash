import React, { useState } from 'react';
import { 
  Target, 
  FileText, 
  Package, 
  Plus, 
  Search, 
  Filter,
  Calendar,
  DollarSign,
  Building,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface LeadsProps {
  subSection?: string;
}

const Leads: React.FC<LeadsProps> = ({ subSection = 'rfq' }) => {
  const [activeTab, setActiveTab] = useState(subSection);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const rfqData = [
    {
      id: 1,
      title: 'Premium Bed Linens - 500 Sets',
      company: 'Hotel Paradise Resort',
      contact: 'Sarah Johnson',
      budget: '$25,000 - $35,000',
      deadline: '2024-02-15',
      status: 'active',
      priority: 'high',
      description: 'Looking for high-quality bed linens for new hotel wing',
      submittedDate: '2024-01-10'
    },
    {
      id: 2,
      title: 'Fresh Ingredients - Weekly Supply',
      company: 'Restaurant ABC Chain',
      contact: 'Mike Chen',
      budget: '$5,000 - $8,000',
      deadline: '2024-02-20',
      status: 'pending',
      priority: 'medium',
      description: 'Weekly supply of fresh vegetables and meat',
      submittedDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'Luxury Amenities Package',
      company: 'Boutique Hotel Group',
      contact: 'Emma Wilson',
      budget: '$15,000 - $20,000',
      deadline: '2024-02-10',
      status: 'won',
      priority: 'high',
      description: 'Complete luxury amenities for 50 rooms',
      submittedDate: '2024-01-08'
    }
  ];

  const sampleData = [
    {
      id: 1,
      productName: 'Organic Coffee Beans - Premium Blend',
      company: 'Cafe Central',
      contact: 'David Rodriguez',
      requestDate: '2024-01-15',
      status: 'sent',
      quantity: '5kg sample',
      followUpDate: '2024-01-22',
      notes: 'Interested in bulk ordering if quality meets standards'
    },
    {
      id: 2,
      productName: 'Egyptian Cotton Towels',
      company: 'Hotel Paradise Resort',
      contact: 'Sarah Johnson',
      requestDate: '2024-01-12',
      status: 'pending',
      quantity: '10 pieces',
      followUpDate: '2024-01-19',
      notes: 'Evaluating for spa renovation project'
    },
    {
      id: 3,
      productName: 'Artisan Bread Selection',
      company: 'Restaurant ABC Chain',
      contact: 'Mike Chen',
      requestDate: '2024-01-10',
      status: 'approved',
      quantity: '20 pieces',
      followUpDate: '2024-01-17',
      notes: 'Approved for trial period, potential monthly order'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'sent':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'won':
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'lost':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      case 'low':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-300';
    }
  };

  const filteredRFQs = rfqData.filter(rfq => {
    const matchesSearch = rfq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rfq.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || rfq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredSamples = sampleData.filter(sample => {
    const matchesSearch = sample.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sample.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || sample.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const renderRFQContent = () => (
    <div className="space-y-4">
      {filteredRFQs.map((rfq) => (
        <div key={rfq.id} className={`bg-white rounded-lg border border-gray-200 p-4 sm:p-6 border-l-4 ${getPriorityColor(rfq.priority)}`}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{rfq.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rfq.status)}`}>
                  {rfq.status.charAt(0).toUpperCase() + rfq.status.slice(1)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Building className="w-4 h-4" />
                  <span>{rfq.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{rfq.budget}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Deadline: {rfq.deadline}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Submitted: {rfq.submittedDate}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-700">{rfq.description}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:ml-4">
              <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                Submit Quote
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSampleContent = () => (
    <div className="space-y-4">
      {filteredSamples.map((sample) => (
        <div key={sample.id} className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{sample.productName}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sample.status)}`}>
                  {sample.status.charAt(0).toUpperCase() + sample.status.slice(1)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Building className="w-4 h-4" />
                  <span>{sample.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Package className="w-4 h-4" />
                  <span>{sample.quantity}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Requested: {sample.requestDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Follow-up: {sample.followUpDate}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-700">{sample.notes}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:ml-4">
              {sample.status === 'pending' && (
                <>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
                    <XCircle className="w-4 h-4 inline mr-1" />
                    Decline
                  </button>
                </>
              )}
              {sample.status === 'sent' && (
                <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                  Track Shipment
                </button>
              )}
              <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your RFQs and sample requests</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {activeTab === 'rfq' ? filteredRFQs.length : filteredSamples.length} items
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('rfq')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'rfq'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            RFQ ({rfqData.length})
          </button>
          <button
            onClick={() => setActiveTab('sample')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'sample'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Package className="w-4 h-4 inline mr-2" />
            Sample ({sampleData.length})
          </button>
        </nav>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab === 'rfq' ? 'RFQs' : 'samples'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        >
          <option value="all">All Status</option>
          {activeTab === 'rfq' ? (
            <>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
            </>
          ) : (
            <>
              <option value="pending">Pending</option>
              <option value="sent">Sent</option>
              <option value="approved">Approved</option>
            </>
          )}
        </select>
      </div>

      {/* Content */}
      {activeTab === 'rfq' ? renderRFQContent() : renderSampleContent()}

      {/* Empty State */}
      {((activeTab === 'rfq' && filteredRFQs.length === 0) || 
        (activeTab === 'sample' && filteredSamples.length === 0)) && (
        <div className="text-center py-12">
          <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No {activeTab === 'rfq' ? 'RFQs' : 'sample requests'} found
          </h3>
          <p className="text-gray-600">
            {activeTab === 'rfq' 
              ? 'RFQs from potential customers will appear here.' 
              : 'Sample requests from customers will appear here.'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Leads;