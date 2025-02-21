import React from 'react';
import { 
  FaMoneyBill, FaBell, FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa';

const Reports: React.FC = () => {
  // Örnek veriler
  const financialStats = {
    monthlyRevenue: '45,250₺',
    yearlyRevenue: '520,000₺',
    activeSubscriptions: 256,
    averageRevenue: '299₺',
    growth: '+12%'
  };

  const alarmStats = {
    total: 156,
    critical: 3,
    warning: 12,
    resolved: 141,
    responseTime: '4.5 dk'
  };

  const regionStats = [
    { region: 'İstanbul', subscribers: 120, alarms: 45, revenue: '180,000₺' },
    { region: 'Ankara', subscribers: 45, alarms: 22, revenue: '67,500₺' },
    { region: 'İzmir', subscribers: 35, alarms: 18, revenue: '52,500₺' },
    { region: 'Bursa', subscribers: 30, alarms: 15, revenue: '45,000₺' },
    { region: 'Antalya', subscribers: 26, alarms: 12, revenue: '39,000₺' }
  ];

  return (
    <div className="space-y-6">
      {/* Finansal Raporlar */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <FaMoneyBill className="mr-2 text-blue-600" />
          Finansal Raporlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Aylık Gelir</div>
            <div className="text-2xl font-bold mt-1">{financialStats.monthlyRevenue}</div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
              <FaArrowUp className="mr-1" />
              {financialStats.growth}
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Yıllık Gelir</div>
            <div className="text-2xl font-bold mt-1">{financialStats.yearlyRevenue}</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Aktif Abonelikler</div>
            <div className="text-2xl font-bold mt-1">{financialStats.activeSubscriptions}</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Ortalama Gelir</div>
            <div className="text-2xl font-bold mt-1">{financialStats.averageRevenue}</div>
          </div>
        </div>
      </div>

      {/* Alarm İstatistikleri */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <FaBell className="mr-2 text-blue-600" />
          Alarm İstatistikleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Toplam Alarm</div>
            <div className="text-2xl font-bold mt-1">{alarmStats.total}</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Kritik Alarmlar</div>
            <div className="text-2xl font-bold text-red-600 mt-1">{alarmStats.critical}</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Uyarılar</div>
            <div className="text-2xl font-bold text-yellow-600 mt-1">{alarmStats.warning}</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Çözülen</div>
            <div className="text-2xl font-bold text-green-600 mt-1">{alarmStats.resolved}</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">Ort. Müdahale Süresi</div>
            <div className="text-2xl font-bold mt-1">{alarmStats.responseTime}</div>
          </div>
        </div>
      </div>

      {/* Bölgesel Dağılım */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-blue-600" />
          Bölgesel Dağılım
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="pb-4">Bölge</th>
                <th className="pb-4">Abone Sayısı</th>
                <th className="pb-4">Alarm Sayısı</th>
                <th className="pb-4">Gelir</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {regionStats.map((stat, index) => (
                <tr key={index}>
                  <td className="py-4">{stat.region}</td>
                  <td className="py-4">{stat.subscribers}</td>
                  <td className="py-4">{stat.alarms}</td>
                  <td className="py-4">{stat.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports; 