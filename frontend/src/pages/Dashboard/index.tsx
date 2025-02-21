import React from 'react';
import { FaBell, FaServer, FaFileInvoice, FaHistory } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Alarm Durumu */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Alarm Durumu</p>
              <p className="text-xl font-semibold mt-1">Aktif</p>
            </div>
            <FaBell className="text-green-500 text-2xl" />
          </div>
          <p className="mt-2 text-sm text-gray-600">Son Kontrol: 15:30</p>
        </div>

        {/* Son Olaylar */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Son Olaylar</p>
              <p className="text-xl font-semibold mt-1">Hareket Algılandı</p>
            </div>
            <FaHistory className="text-blue-500 text-2xl" />
          </div>
          <p className="mt-2 text-sm text-gray-600">Arka Bahçe - 14:45</p>
        </div>

        {/* Sistem Durumu */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Sistem Durumu</p>
              <p className="text-xl font-semibold mt-1">Tüm Sistemler Aktif</p>
            </div>
            <FaServer className="text-primary text-2xl" />
          </div>
          <p className="mt-2 text-sm text-gray-600">Bağlantı: Güçlü</p>
        </div>

        {/* Fatura Bilgileri */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Fatura Bilgileri</p>
              <p className="text-xl font-semibold mt-1">299₺</p>
            </div>
            <FaFileInvoice className="text-primary text-2xl" />
          </div>
          <p className="mt-2 text-sm text-gray-600">Son Ödeme: 15.02.2024</p>
        </div>
      </div>

      {/* Olay Geçmişi */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Olay Geçmişi</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <FaBell className="text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Hareket Algılandı - Arka Bahçe</p>
              <p className="text-sm text-gray-500">2024-02-20 14:45</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaServer className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Sistem Kontrolü Yapıldı</p>
              <p className="text-sm text-gray-500">2024-02-20 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 