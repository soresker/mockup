import React, { useState } from 'react';
import { FaSearch, FaCheck, FaTimes, FaEye } from 'react-icons/fa';

const Applications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Örnek başvuru verileri
  const applications = [
    {
      id: 1,
      name: 'Zeynep Yıldız',
      email: 'zeynep@example.com',
      phone: '0532 987 6543',
      address: 'İstanbul, Beşiktaş',
      package: 'Premium Paket',
      status: 'pending',
      date: '20.02.2024',
      buildingType: 'Ev',
      notes: 'Acil kurulum talep edildi'
    },
    {
      id: 2,
      name: 'Can Demir',
      email: 'can@example.com',
      phone: '0533 876 5432',
      address: 'İstanbul, Şişli',
      package: 'Gelişmiş Paket',
      status: 'approved',
      date: '19.02.2024',
      buildingType: 'İşyeri',
      notes: 'Kamera sistemi öncelikli'
    },
    {
      id: 3,
      name: 'Elif Kara',
      email: 'elif@example.com',
      phone: '0535 765 4321',
      address: 'İstanbul, Ümraniye',
      package: 'Temel Paket',
      status: 'rejected',
      date: '18.02.2024',
      buildingType: 'Ev',
      notes: 'Bölge dışında'
    },
    {
      id: 4,
      name: 'Murat Şahin',
      email: 'murat@example.com',
      phone: '0536 654 3210',
      address: 'İstanbul, Maltepe',
      package: 'Premium Paket',
      status: 'pending',
      date: '20.02.2024',
      buildingType: 'İşyeri',
      notes: 'Detaylı keşif gerekiyor'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Beklemede';
      case 'approved':
        return 'Onaylandı';
      case 'rejected':
        return 'Reddedildi';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Başvurular</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            Bekleyen: 2
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Onaylanan: 1
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
            Reddedilen: 1
          </span>
        </div>
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
              placeholder="İsim veya adres ile ara..."
            />
          </div>
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>Tüm Durumlar</option>
            <option>Beklemede</option>
            <option>Onaylandı</option>
            <option>Reddedildi</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>Tüm Paketler</option>
            <option>Premium Paket</option>
            <option>Gelişmiş Paket</option>
            <option>Temel Paket</option>
          </select>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Başvuru Bilgileri
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  İletişim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Paket/Bina
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Notlar
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {application.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Tarih: {application.date}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{application.email}</div>
                    <div className="text-sm text-gray-500">{application.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{application.package}</div>
                    <div className="text-sm text-gray-500">{application.buildingType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)}`}>
                      {getStatusText(application.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {application.notes}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FaEye />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <FaCheck />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FaTimes />
                      </button>
                    </div>
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

export default Applications; 