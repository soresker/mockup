import React, { useState } from 'react';
import { 
  FaUsers, FaUserPlus, FaChartBar, FaCog, 
  FaSignOutAlt, FaBars, FaBell 
} from 'react-icons/fa';
import { Link, useLocation, Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { path: '/admin', icon: FaChartBar, label: 'Genel Durum' },
    { path: '/admin/subscribers', icon: FaUsers, label: 'Aboneler' },
    { path: '/admin/applications', icon: FaUserPlus, label: 'Başvurular' },
    { path: '/admin/reports', icon: FaChartBar, label: 'Raporlar' },
    { path: '/admin/settings', icon: FaCog, label: 'Ayarlar' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-40 h-screen bg-gray-900 transition-all duration-300
          ${sidebarOpen ? 'w-64' : 'w-20'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
            <Link to="/admin" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
              {sidebarOpen && <span className="text-xl font-bold text-white">Admin Panel</span>}
            </Link>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 text-gray-400"
            >
              <FaBars />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-3 py-3 rounded-lg transition-colors
                  ${location.pathname === item.path 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800'}
                `}
              >
                <item.icon className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : ''}`} />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-800">
            <a
              href="/admin/login"
              className="flex items-center w-full px-3 py-3 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <FaSignOutAlt className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : ''}`} />
              {sidebarOpen && <span>Çıkış Yap</span>}
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Header */}
        <header className="h-16 bg-white shadow-sm">
          <div className="h-full px-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              {menuItems.find(item => item.path === location.pathname)?.label || 'Admin Panel'}
            </h1>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 relative">
                <FaBell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <span className="font-medium">SA</span>
                </div>
                <span className="text-sm font-medium">Sistem Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 