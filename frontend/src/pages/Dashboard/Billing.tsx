import React, { useState } from 'react';
import { FaCreditCard, FaHistory, FaCheckCircle, FaUniversity, FaClock, FaTimes } from 'react-icons/fa';

const Billing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('payment-methods');
  const [selectedMethod, setSelectedMethod] = useState('credit-card');
  const [showCardModal, setShowCardModal] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    isDefault: false
  });

  // Örnek kart verileri
  const savedCards = [
    {
      id: 1,
      type: 'Mastercard',
      last4: '4242',
      expiry: '12/24',
      isDefault: true
    }
  ];

  // Örnek fatura verileri
  const invoices = [
    { 
      id: 'INV-2024-002',
      date: '01.02.2024',
      amount: 299,
      status: 'paid',
      dueDate: '15.02.2024'
    },
    { 
      id: 'INV-2024-001',
      date: '01.01.2024',
      amount: 299,
      status: 'paid',
      dueDate: '15.01.2024'
    }
  ];

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada kart ekleme işlemi yapılacak
    console.log('Yeni kart:', newCard);
    setShowCardModal(false);
    // Formu temizle
    setNewCard({
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvv: '',
      isDefault: false
    });
  };

  return (
    <div className="space-y-6">
      {/* Özet Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Mevcut Paket</p>
              <p className="text-xl font-semibold mt-1">Gelişmiş Paket</p>
            </div>
            <FaCheckCircle className="text-green-500 text-2xl" />
          </div>
          <p className="mt-2 text-primary font-medium">299₺/ay</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Sonraki Ödeme</p>
              <p className="text-xl font-semibold mt-1">299₺</p>
            </div>
            <FaCreditCard className="text-primary text-2xl" />
          </div>
          <p className="mt-2 text-gray-600">Son Ödeme: 15.02.2024</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Ödeme Durumu</p>
              <p className="text-xl font-semibold mt-1 text-green-500">Güncel</p>
            </div>
            <FaHistory className="text-primary text-2xl" />
          </div>
          <p className="mt-2 text-gray-600">Son Ödeme: 01.01.2024</p>
        </div>
      </div>

      {/* Ödeme Yöntemleri */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('payment-methods')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'payment-methods'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Ödeme Yöntemleri
            </button>
            <button
              onClick={() => setActiveTab('invoices')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'invoices'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Fatura Geçmişi
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'payment-methods' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Kredi Kartı */}
                <div 
                  onClick={() => setSelectedMethod('credit-card')}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedMethod === 'credit-card' ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FaCreditCard className="text-2xl text-primary" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Kredi Kartı</h3>
                      <p className="text-sm text-gray-500">Anında ödeme</p>
                    </div>
                  </div>
                </div>

                {/* Havale/EFT */}
                <div 
                  onClick={() => setSelectedMethod('bank-transfer')}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedMethod === 'bank-transfer' ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FaUniversity className="text-2xl text-primary" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Havale/EFT</h3>
                      <p className="text-sm text-gray-500">Banka transferi</p>
                    </div>
                  </div>
                </div>

                {/* Otomatik Ödeme */}
                <div 
                  onClick={() => setSelectedMethod('auto-payment')}
                  className={`p-4 border rounded-lg cursor-pointer ${
                    selectedMethod === 'auto-payment' ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-2xl text-primary" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Otomatik Ödeme</h3>
                      <p className="text-sm text-gray-500">Aylık otomatik tahsilat</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seçilen Ödeme Yöntemi Detayları */}
              <div className="mt-8">
                {selectedMethod === 'credit-card' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Kayıtlı Kartlar</h3>
                    {savedCards.map(card => (
                      <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FaCreditCard className="text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {card.type} •••• {card.last4}
                            </p>
                            <p className="text-sm text-gray-500">
                              Son Kullanma: {card.expiry}
                            </p>
                          </div>
                        </div>
                        {card.isDefault && (
                          <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                            Varsayılan
                          </span>
                        )}
                      </div>
                    ))}
                    <button 
                      onClick={() => setShowCardModal(true)}
                      className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Yeni Kart Ekle
                    </button>
                  </div>
                )}

                {selectedMethod === 'bank-transfer' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Banka Hesap Bilgileri</h3>
                    <div className="p-4 border rounded-lg space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Banka</p>
                        <p className="text-sm font-medium">Yapı Kredi Bankası</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">IBAN</p>
                        <p className="text-sm font-medium">TR12 3456 7890 1234 5678 9012 34</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Hesap Sahibi</p>
                        <p className="text-sm font-medium">Alarm İzleme Sistemleri A.Ş.</p>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm text-gray-500">
                          * Açıklama kısmına müşteri numaranızı yazmayı unutmayınız.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'auto-payment' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Otomatik Ödeme Talimatı</h3>
                    <div className="p-4 border rounded-lg space-y-4">
                      <p className="text-sm text-gray-600">
                        Otomatik ödeme talimatı ile faturalarınız her ay otomatik olarak seçtiğiniz kredi kartınızdan tahsil edilir.
                      </p>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="auto-payment-agreement"
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="auto-payment-agreement" className="text-sm text-gray-700">
                          Otomatik ödeme koşullarını kabul ediyorum
                        </label>
                      </div>
                      <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Otomatik Ödeme Talimatı Ver
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{invoice.id}</p>
                    <p className="text-sm text-gray-500">Tarih: {invoice.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{invoice.amount}₺</p>
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      Ödendi
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Kart Ekleme Modal */}
      {showCardModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Yeni Kart Ekle</h3>
              <button 
                onClick={() => setShowCardModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleAddCard} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Kart Üzerindeki İsim
                </label>
                <input
                  type="text"
                  value={newCard.cardName}
                  onChange={(e) => setNewCard({...newCard, cardName: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Ad Soyad"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Kart Numarası
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCreditCard className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={newCard.cardNumber}
                    onChange={(e) => setNewCard({...newCard, cardNumber: e.target.value})}
                    className="block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="**** **** **** ****"
                    maxLength={19}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Son Kullanma Tarihi
                  </label>
                  <input
                    type="text"
                    value={newCard.expiry}
                    onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="AA/YY"
                    maxLength={5}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={newCard.cvv}
                    onChange={(e) => setNewCard({...newCard, cvv: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="***"
                    maxLength={3}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="default-card"
                  checked={newCard.isDefault}
                  onChange={(e) => setNewCard({...newCard, isDefault: e.target.checked})}
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="default-card" className="ml-2 block text-sm text-gray-900">
                  Varsayılan kart olarak ayarla
                </label>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCardModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Kartı Ekle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing; 