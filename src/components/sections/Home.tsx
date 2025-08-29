import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Eye, 
  MessageSquare,
  CheckCircle,
  Building,
  Package,
  UserPlus
} from 'lucide-react';

interface HomeProps {
  profileStatus: 'pending' | 'approved' | 'rejected';
}

const Home: React.FC<HomeProps> = ({ profileStatus }) => {
  const [completedSteps, setCompletedSteps] = useState({
    businessInfo: false,
    products: false,
    customers: false
  });

  const kpiData = [
    { label: 'Total Revenue', value: '$24,580', change: '+12%', icon: DollarSign, color: 'text-green-600' },
    { label: 'Active Customers', value: '156', change: '+8%', icon: Users, color: 'text-blue-600' },
    { label: 'Orders', value: '89', change: '+15%', icon: ShoppingCart, color: 'text-purple-600' },
    { label: 'Profile Views', value: '1,234', change: '+23%', icon: Eye, color: 'text-orange-600' }
  ];

  const recentActivity = [
    { id: 1, type: 'order', message: 'New order from Hotel Paradise', time: '2 hours ago', priority: 'high' },
    { id: 2, type: 'inquiry', message: 'Product inquiry for premium coffee beans', time: '4 hours ago', priority: 'medium' },
    { id: 3, type: 'review', message: 'New 5-star review received', time: '6 hours ago', priority: 'low' },
    { id: 4, type: 'payment', message: 'Payment received from Restaurant ABC', time: '1 day ago', priority: 'medium' }
  ];

  const onboardingSteps = [
    { 
      key: 'businessInfo', 
      title: 'Business Information', 
      description: 'Complete your business profile',
      icon: Building,
      completed: completedSteps.businessInfo
    },
    { 
      key: 'products', 
      title: 'Products / Services', 
      description: 'Add your product catalog',
      icon: Package,
      completed: completedSteps.products
    },
    { 
      key: 'customers', 
      title: 'Customers', 
      description: 'Import your customer base',
      icon: UserPlus,
      completed: completedSteps.customers
    }
  ];

  const completionPercentage = Math.round((Object.values(completedSteps).filter(Boolean).length / 3) * 100);

  const handleActivityClick = (activityId: number) => {
    console.log(`Opening task ${activityId}`);
    // Simulate opening task
  };

  const toggleStep = (stepKey: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepKey]: !prev[stepKey as keyof typeof prev]
    }));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Sticky Profile Completion - Ultra Minimal */}
      {completionPercentage < 100 && (
        <div className="sticky top-0 z-10 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Complete Profile</h3>
                <p className="text-xs text-gray-500">{completionPercentage}% complete</p>
              </div>
            </div>
            <div className="w-16 h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-purple-600 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-3">
            {onboardingSteps.map((step) => (
              <button
                key={step.key}
                onClick={() => toggleStep(step.key)}
                className={`p-2 rounded-lg border text-left transition-colors ${
                  step.completed 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <step.icon className="w-3 h-3" />
                  <span className="text-xs font-medium truncate">{step.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Compact KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
                <span className="text-xs font-medium text-gray-600">{kpi.label}</span>
              </div>
            </div>
            <div className="mt-2">
              <div className="text-lg font-bold text-gray-900">{kpi.value}</div>
              <div className={`text-xs ${kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity - Clickable Rows */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              onClick={() => handleActivityClick(activity.id)}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.priority === 'high' ? 'bg-red-500' :
                    activity.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
                <MessageSquare className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
          <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Add Customer</span>
        </button>
        <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
          <Package className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Add Product</span>
        </button>
        <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
          <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">View Analytics</span>
        </button>
        <button className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
          <MessageSquare className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Messages</span>
        </button>
      </div>
    </div>
  );
};

export default Home;