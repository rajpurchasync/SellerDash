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

  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Good morning';
    if (currentHour < 18) return 'Good afternoon';
    return 'Good evening';
  };

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
      {/* Greeting */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{getGreeting()}, John! 👋</h1>
        <p className="text-purple-100">Welcome back to your Purchasync dashboard. Here's what's happening with your business today.</p>
      </div>

      {/* Sticky Profile Completion - Ultra Minimal */}
      {completionPercentage < 100 && (
        <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Complete Your Profile</h3>
                <p className="text-sm text-gray-600">Get the most out of Purchasync</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{completionPercentage}%</div>
              <div className="text-xs text-gray-500">Complete</div>
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="mb-4">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${completionPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Started</span>
              <span>In Progress</span>
              <span>Complete</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-3">
            {onboardingSteps.map((step) => (
              <button
                key={step.key}
                onClick={() => toggleStep(step.key)}
                className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                  step.completed 
                    ? 'bg-green-50 border-green-200 text-green-800 shadow-sm' 
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-purple-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <step.icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{step.title}</span>
                  </div>
                  {step.completed && <CheckCircle className="w-4 h-4 text-green-600" />}
                </div>
                <p className="text-xs text-gray-500 mt-1 truncate">{step.description}</p>
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