import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Target, 
  MessageSquare, 
  User,
  Package,
  Store,
  Megaphone,
  Building,
  Bot,
  Mail,
  UserPlus,
  FileText,
  CheckSquare,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

// Import all section components
import HomeSection from './sections/Home';
import Invited from './sections/Invited';
import Inbox from './sections/Inbox';
import Customers from './sections/Customers';
import Leads from './sections/Leads';
import Messages from './sections/Messages';
import Profile from './sections/Profile';
import Catalogue from './sections/Catalogue';
import Marketplace from './sections/Marketplace';
import Marketing from './sections/Marketing';
import BusinessInfo from './sections/BusinessInfo';
import CSAI from './sections/CSAI';
import ToDos from './sections/ToDos';

interface SellerDashboardProps {
  profileStatus: 'pending' | 'approved' | 'rejected';
}

interface MenuItem {
  name: string;
  icon: React.ComponentType<any>;
  component: React.ComponentType<any>;
  count?: number;
  subItems?: {
    name: string;
    component: React.ComponentType<any>;
    subSection?: string;
  }[];
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const SellerDashboard: React.FC<SellerDashboardProps> = ({ profileStatus }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // Menu structure with three sections
  const menuSections: MenuSection[] = [
    // Section 1
    {
      items: [
        { name: 'home', icon: Home, component: HomeSection },
        { name: 'invited', icon: UserPlus, component: Invited },
        { name: 'inbox', icon: Mail, component: Inbox }
      ]
    },
    // Section 2
    {
      items: [
        { name: 'customers', icon: Users, component: Customers },
        { 
          name: 'leads', 
          icon: Target, 
          component: Leads,
          count: 8,
          subItems: [
            { name: 'rfq', component: Leads, subSection: 'rfq' },
            { name: 'sample', component: Leads, subSection: 'sample' }
          ]
        },
        { name: 'messages', icon: MessageSquare, component: Messages, count: 12 },
        { name: 'profile', icon: User, component: Profile }
      ]
    },
    // Section 3 - Marketplace
    {
      title: 'Marketplace',
      items: [
        { name: 'catalogue', icon: Package, component: Catalogue },
        { name: 'marketplace', icon: Store, component: Marketplace },
        { name: 'marketing', icon: Megaphone, component: Marketing },
        { name: 'business-info', icon: Building, component: BusinessInfo },
        { name: 'cs-ai', icon: Bot, component: CSAI }
      ]
    }
  ];

  // Bottom navigation items
  const bottomNavItems = [
    { name: 'home', icon: Home, component: HomeSection },
    { name: 'customers', icon: Users, component: Customers },
    { name: 'leads', icon: Target, component: Leads },
    { name: 'todos', icon: CheckSquare, component: ToDos },
    { name: 'profile', icon: User, component: Profile }
  ];

  const handleMenuClick = (itemName: string, hasSubItems: boolean = false, subSection?: string) => {
    if (hasSubItems) {
      // Toggle submenu
      setOpenSubMenu(openSubMenu === itemName ? null : itemName);
    } else {
      // Set active section and close mobile menu
      setActiveSection(subSection ? `${itemName}-${subSection}` : itemName);
      setIsMobileMenuOpen(false);
      setOpenSubMenu(null);
    }
  };

  const renderContent = () => {
    // Find the component to render based on activeSection
    for (const section of menuSections) {
      for (const item of section.items) {
        if (item.name === activeSection) {
          const Component = item.component;
          return <Component profileStatus={profileStatus} />;
        }
        
        if (item.subItems) {
          for (const subItem of item.subItems) {
            if (`${item.name}-${subItem.subSection}` === activeSection) {
              const Component = subItem.component;
              return <Component profileStatus={profileStatus} subSection={subItem.subSection} />;
            }
          }
        }
      }
    }

    // Check bottom nav items
    for (const item of bottomNavItems) {
      if (item.name === activeSection) {
        const Component = item.component;
        return <Component profileStatus={profileStatus} />;
      }
    }

    // Default to home
    return <HomeSection profileStatus={profileStatus} />;
  };

  const renderMenuItem = (item: MenuItem, sectionIndex: number) => {
    const isActive = activeSection === item.name || activeSection.startsWith(`${item.name}-`);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isSubMenuOpen = openSubMenu === item.name;

    return (
      <div key={item.name}>
        <button
          onClick={() => handleMenuClick(item.name, hasSubItems)}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive
              ? 'bg-purple-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center space-x-3">
            <item.icon className="w-5 h-5" />
            <span className="capitalize">{item.name.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center space-x-2">
            {item.count && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                isActive ? 'bg-white text-purple-600' : 'bg-purple-100 text-purple-600'
              }`}>
                {item.count}
              </span>
            )}
            {hasSubItems && (
              isSubMenuOpen ? 
                <ChevronDown className="w-4 h-4" /> : 
                <ChevronRight className="w-4 h-4" />
            )}
          </div>
        </button>
        
        {/* Sub-menu items */}
        {hasSubItems && isSubMenuOpen && (
          <div className="ml-8 mt-2 space-y-1">
            {item.subItems!.map((subItem) => (
              <button
                key={subItem.name}
                onClick={() => handleMenuClick(item.name, false, subItem.subSection)}
                className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === `${item.name}-${subItem.subSection}`
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="capitalize">{subItem.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Purchasync</span>
            </div>
          </div>
          
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-4 space-y-6">
              {menuSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {section.title && (
                    <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {section.title}
                    </h3>
                  )}
                  <div className={`space-y-1 ${section.title ? 'mt-2' : ''}`}>
                    {section.items.map((item) => renderMenuItem(item, sectionIndex))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Purchasync</span>
                </div>
              </div>
              
              <nav className="mt-8 px-4 space-y-6">
                {menuSections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    {section.title && (
                      <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {section.title}
                      </h3>
                    )}
                    <div className={`space-y-1 ${section.title ? 'mt-2' : ''}`}>
                      {section.items.map((item) => renderMenuItem(item, sectionIndex))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Mobile header */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">Purchasync</span>
            </div>
            <div className="w-10" /> {/* Spacer for centering */}
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>

        {/* Mobile bottom navigation */}
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex justify-around">
            {bottomNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                  activeSection === item.name
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium capitalize">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;