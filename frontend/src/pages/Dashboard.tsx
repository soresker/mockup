import React from 'react';
import { FaBell, FaHistory, FaServer, FaFileInvoiceDollar, FaSignOutAlt } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  // Örnek veriler
  const alarmStatus = {
    status: 'active',
    lastCheck: '2024-02-20 15:30',
    zone: 'Ana Giriş'
  };

  const recentEvents = [
    { id: 1, type: 'alarm', message: 'Hareket algılandı - Arka Bahçe', date: '2024-02-20 14:45' },
    { id: 2, type: 'system', message: 'Sistem kontrolü yapıldı', date: '2024-02-20 12:00' },
    { id: 3, type: 'info', message: 'Pil seviyesi düşük - Sensör 2', date: '2024-02-20 10:15' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Abone Paneli</h1>
            <button 
              className="flex items-center text-gray-600 hover:text-primary"
              onClick={() => console.log('Çıkış yapılıyor...')}
            >
              <FaSignOutAlt className="mr-2" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Alarm Status */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Alarm Durumu</h2>
              <FaBell className={`text-2xl ${
                alarmStatus.status === 'active' ? 'text-green-500' : 'text-red-500'
              }`} />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Son Kontrol: {alarmStatus.lastCheck}
              </p>
              <p className="text-sm text-gray-600">
                Aktif Bölge: {alarmStatus.zone}
              </p>
            </div>
          </div>

          {/* Recent Events */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Son Olaylar</h2>
              <FaHistory className="text-2xl text-primary" />
            </div>
            <div className="space-y-2">
              {recentEvents.slice(0, 2).map(event => (
                <div key={event.id} className="text-sm text-gray-600">
                  {event.message}
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Sistem Durumu</h2>
              <FaServer className="text-2xl text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Tüm sistemler aktif</p>
              <p className="text-sm text-gray-600">Bağlantı: Güçlü</p>
            </div>
          </div>

          {/* Billing */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Fatura Bilgileri</h2>
              <FaFileInvoiceDollar className="text-2xl text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Son Ödeme: 15.02.2024</p>
              <p className="text-sm text-gray-600">Sonraki Fatura: 01.03.2024</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event History */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-xl font-semibold mb-6">Olay Geçmişi</h2>
            <div className="space-y-4">
              {recentEvents.map(event => (
                <div key={event.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full ${
                      event.type === 'alarm' ? 'bg-red-500' :
                      event.type === 'system' ? 'bg-blue-500' : 'bg-yellow-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{event.message}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Details */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h2 className="text-xl font-semibold mb-6">Sistem Detayları</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-900">Ana Kontrol Ünitesi</h3>
                  <p className="text-sm text-gray-500">Çalışıyor</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-900">Sensörler</h3>
                  <p className="text-sm text-gray-500">8/8 Aktif</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-900">Batarya Durumu</h3>
                  <p className="text-sm text-gray-500">%95</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-900">GSM Sinyal</h3>
                  <p className="text-sm text-gray-500">Güçlü</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 