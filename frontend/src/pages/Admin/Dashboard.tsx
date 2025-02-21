import React from 'react';
import { FaUsers, FaUserPlus, FaChartLine, FaBell } from 'react-icons/fa';

const AdminDashboard: React.FC = () => {
  // Örnek veriler
  const stats = [
    { id: 1, name: 'Toplam Abone', value: '256', icon: FaUsers, change: '+12%', changeType: 'increase' },
    { id: 2, name: 'Yeni Başvurular', value: '15', icon: FaUserPlus, change: '+5', changeType: 'increase' },
    { id: 3, name: 'Aktif Alarmlar', value: '3', icon: FaBell, change: '-2', changeType: 'decrease' },
    { id: 4, name: 'Aylık Gelir', value: '₺45,250', icon: FaChartLine, change: '+8%', changeType: 'increase' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`
                p-3 rounded-lg
                ${stat.changeType === 'increase' ? 'bg-green-100' : 'bg-red-100'}
              `}>
                <stat.icon className={`
                  h-6 w-6
                  ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}
                `} />
              </div>
            </div>
            <div className="mt-2">
              <span className={`
                text-sm font-medium
                ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}
              `}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">geçen aydan</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Son Aktiviteler</h2>
          <div className="mt-6 space-y-4">
            {/* Aktivite örnekleri */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FaUserPlus className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Yeni Başvuru</p>
                <p className="text-sm text-gray-500">Ahmet Yılmaz - İstanbul/Kadıköy</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">5 dk önce</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <FaBell className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Alarm Bildirimi</p>
                <p className="text-sm text-gray-500">Mehmet Demir - Ankara/Çankaya</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">15 dk önce</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 