import React, { useState } from 'react';
import { FaBell, FaShieldAlt, FaCog } from 'react-icons/fa';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('system');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Sistem Ayarları</h2>

      {/* Tabs */}
      <div className="border-b">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('system')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'system'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FaCog className="inline-block mr-2" />
            Sistem
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'security'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FaShieldAlt className="inline-block mr-2" />
            Güvenlik
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'notifications'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FaBell className="inline-block mr-2" />
            Bildirimler
          </button>
        </nav>
      </div>

      {/* Settings Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {activeTab === 'system' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Genel Ayarlar</h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Sistem Bakım Modu
                    </label>
                    <p className="text-sm text-gray-500">
                      Bakım modunu aktifleştir
                    </p>
                  </div>
                  <button className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                    <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Otomatik Yedekleme
                  </label>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option>Her gün</option>
                    <option>Her hafta</option>
                    <option>Her ay</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Güvenlik Ayarları</h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      İki Faktörlü Doğrulama
                    </label>
                    <p className="text-sm text-gray-500">
                      Hesap güvenliğini artırın
                    </p>
                  </div>
                  <button className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                    <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Bildirim Ayarları</h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      E-posta Bildirimleri
                    </label>
                    <p className="text-sm text-gray-500">
                      Yeni alarm durumlarında e-posta al
                    </p>
                  </div>
                  <button className="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                    <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings; 