import React, { useState } from 'react';
import { FaSearch, FaEllipsisH } from 'react-icons/fa';

const Subscribers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Örnek abone verileri
  const subscribers = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      phone: '0532 123 4567',
      address: 'İstanbul, Kadıköy',
      package: 'Premium Paket',
      status: 'active',
      startDate: '01.01.2024',
      lastPayment: '01.02.2024'
    },
    {
      id: 2,
      name: 'Mehmet Demir',
      email: 'mehmet@example.com',
      phone: '0533 234 5678',
      address: 'Ankara, Çankaya',
      package: 'Gelişmiş Paket',
      status: 'active',
      startDate: '15.01.2024',
      lastPayment: '01.02.2024'
    },
    {
      id: 3,
      name: 'Ayşe Kaya',
      email: 'ayse@example.com',
      phone: '0535 345 6789',
      address: 'İzmir, Karşıyaka',
      package: 'Temel Paket',
      status: 'inactive',
      startDate: '01.12.2023',
      lastPayment: '01.01.2024'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Aboneler</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Yeni Abone Ekle
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
              placeholder="İsim, e-posta veya telefon ile ara..."
            />
          </div>
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>Tüm Paketler</option>
            <option>Premium Paket</option>
            <option>Gelişmiş Paket</option>
            <option>Temel Paket</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>Tüm Durumlar</option>
            <option>Aktif</option>
            <option>Pasif</option>
          </select>
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Abone Bilgileri
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İletişim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paket
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Son Ödeme
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-lg font-medium text-gray-600">
                            {subscriber.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{subscriber.name}</div>
                        <div className="text-sm text-gray-500">{subscriber.address}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{subscriber.email}</div>
                    <div className="text-sm text-gray-500">{subscriber.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{subscriber.package}</div>
                    <div className="text-sm text-gray-500">Başlangıç: {subscriber.startDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      subscriber.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {subscriber.status === 'active' ? 'Aktif' : 'Pasif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subscriber.lastPayment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsisH />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscribers; 