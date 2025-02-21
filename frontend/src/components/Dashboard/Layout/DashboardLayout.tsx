import React, { useState } from 'react';
import { 
  FaHome, FaVideo, FaBell, FaHistory, 
  FaCreditCard, FaCog, FaSignOutAlt, FaBars 
} from 'react-icons/fa';
import { Link, useLocation, Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: FaHome, label: 'Ana Sayfa' },
    { path: '/dashboard/history', icon: FaHistory, label: 'Geçmiş' },
    { path: '/dashboard/billing', icon: FaCreditCard, label: 'Fatura & Ödemeler' },
    { path: '/dashboard/settings', icon: FaCog, label: 'Ayarlar' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-40 h-screen bg-white shadow-lg transition-all duration-300
          ${sidebarOpen ? 'w-64' : 'w-20'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo ve Başlık */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <Link to="/dashboard" className="flex items-center space-x-3">
              {sidebarOpen && <span className="text-xl font-bold text-primary">Abone Paneli</span>}
            </Link>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
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
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                <item.icon className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : ''}`} />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <a
              href="/online-islemler"
              className="flex items-center w-full px-3 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
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
              {menuItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
            </h1>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-primary">
                <FaBell className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <span className="font-medium">AK</span>
                </div>
                <span className="text-sm font-medium">Ahmet Kullanıcı</span>
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

export default DashboardLayout;