import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, 
  FaBuilding, FaIndustry, FaShieldAlt, FaVideo, FaLock 
} from 'react-icons/fa';
import Swal from 'sweetalert2';

interface SweetAlertResult {
  isConfirmed: boolean;
  isDenied: boolean;
  isDismissed: boolean;
  value: any;
}

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    buildingType: 'home', // home, business, corporate
    systemType: '', // Seçilen güvenlik sistemi
    additionalInfo: ''
  });
  const navigate = useNavigate();

  // Güvenlik sistemi tipleri için veri
  const systemTypes = [
    {
      id: 'basic',
      title: 'Temel Paket',
      icon: <FaShieldAlt className="w-12 h-12" />,
      features: ['Hareket Sensörü', 'Kapı Sensörü', '7/24 İzleme'],
      price: '199₺/ay\'dan başlayan'
    },
    {
      id: 'advanced',
      title: 'Gelişmiş Paket',
      icon: <FaVideo className="w-12 h-12" />,
      features: ['Kamera Sistemi', 'Akıllı Sensörler', 'Mobil Kontrol'],
      price: '299₺/ay\'dan başlayan'
    },
    {
      id: 'premium',
      title: 'Premium Paket',
      icon: <FaLock className="w-12 h-12" />,
      features: ['Tam Otomasyon', 'Yüz Tanıma', 'Özel Müdahale Ekibi'],
      price: '499₺/ay\'dan başlayan'
    }
  ];

  // Bina tipleri için güncellenmiş veri
  const buildingTypes = [
    { 
      id: 'home', 
      label: 'Ev', 
      icon: FaHome,
      description: 'Daire ve müstakil evler için'
    },
    { 
      id: 'business', 
      label: 'İşyeri', 
      icon: FaBuilding,
      description: 'Ofis ve dükkânlar için'
    },
    { 
      id: 'corporate', 
      label: 'Kurumsal', 
      icon: FaIndustry,
      description: 'Fabrika ve plazalar için'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Başarılı başvuru modal'ı
      Swal.fire({
        icon: 'success',
        title: 'Başvurunuz Alındı!',
        html: `
          <p class="mb-4">Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
          <p class="text-sm text-gray-600">Başvuru numaranız: <strong>${Math.random().toString(36).substring(2, 10).toUpperCase()}</strong></p>
        `,
        confirmButtonText: 'Giriş Yap',
        confirmButtonColor: '#003B95',
        allowOutsideClick: false
      }).then((result: SweetAlertResult) => {
        if (result.isConfirmed) {
          navigate('/online-islemler');
        }
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Hata!',
        text: 'Başvuru gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
        confirmButtonColor: '#003B95'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Güvenlik Sistemi Başvurusu</h2>
          <p className="mt-2 text-center text-blue-100">
            Birkaç adımda güvenlik sisteminizi kuralım
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Progress Steps - Daha görsel bir tasarım */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            {[
              { num: 1, title: 'Kişisel Bilgiler' },
              { num: 2, title: 'Sistem Seçimi' },
              { num: 3, title: 'Onay' }
            ].map((item, index) => (
              <div key={item.num} className="flex flex-col items-center relative z-10">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${step >= item.num ? 'bg-primary' : 'bg-gray-200'}
                  transition-colors duration-300
                `}>
                  <span className="text-white font-medium">{item.num}</span>
                </div>
                <span className={`
                  mt-2 text-sm font-medium
                  ${step >= item.num ? 'text-primary' : 'text-gray-500'}
                `}>
                  {item.title}
                </span>
              </div>
            ))}
            {/* Progress Line */}
            <div className="absolute top-5 left-0 h-0.5 bg-gray-200 w-full -z-10" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-300" 
              style={{ width: `${((step - 1) / 2) * 100}%` }} 
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-card rounded-xl p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-semibold text-gray-800 mb-2">Ad</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-primary" />
                      </div>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="pl-12 w-full h-12 text-base border-2 border-gray-200 rounded-lg 
                                 focus:border-primary focus:ring-2 focus:ring-primary/20 
                                 hover:border-gray-300 transition-colors"
                        placeholder="Adınız"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-800 mb-2">Soyad</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-primary" />
                      </div>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="pl-12 w-full h-12 text-base border-2 border-gray-200 rounded-lg 
                                 focus:border-primary focus:ring-2 focus:ring-primary/20 
                                 hover:border-gray-300 transition-colors"
                        placeholder="Soyadınız"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-800 mb-2">Telefon</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-primary" />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="pl-12 w-full h-12 text-base border-2 border-gray-200 rounded-lg 
                               focus:border-primary focus:ring-2 focus:ring-primary/20 
                               hover:border-gray-300 transition-colors"
                      placeholder="0555 555 55 55"
                      required
                    />
                  </div>
                  <p className="mt-1.5 text-sm text-gray-500">Size ulaşabileceğimiz bir telefon numarası</p>
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-800 mb-2">E-posta</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-primary" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="pl-12 w-full h-12 text-base border-2 border-gray-200 rounded-lg 
                               focus:border-primary focus:ring-2 focus:ring-primary/20 
                               hover:border-gray-300 transition-colors"
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>
                  <p className="mt-1.5 text-sm text-gray-500">Bilgilendirmeleri bu adrese göndereceğiz</p>
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-800 mb-2">Adres</label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                      <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                    </div>
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      rows={3}
                      className="pl-12 w-full text-base border-2 border-gray-200 rounded-lg 
                               focus:border-primary focus:ring-2 focus:ring-primary/20 
                               hover:border-gray-300 transition-colors"
                      placeholder="Güvenlik sistemi kurulacak adres"
                      required
                    />
                  </div>
                  <p className="mt-1.5 text-sm text-gray-500">Kurulum yapılacak adres bilgileri</p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                {/* Bina Tipi Seçimi */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Bina Tipi</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {buildingTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({...formData, buildingType: type.id})}
                        className={`
                          p-6 border rounded-xl text-center hover:shadow-lg transition-all
                          ${formData.buildingType === type.id 
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                            : 'border-gray-200 hover:border-primary/50'}
                        `}
                      >
                        <type.icon className="mx-auto h-8 w-8 text-primary" />
                        <span className="mt-3 block text-lg font-medium">{type.label}</span>
                        <span className="mt-1 block text-sm text-gray-500">{type.description}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sistem Tipi Seçimi */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Güvenlik Sistemi</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {systemTypes.map((type) => (
                      <div
                        key={type.id}
                        onClick={() => setFormData({...formData, systemType: type.id})}
                        className={`
                          p-6 border rounded-xl cursor-pointer hover:shadow-lg transition-all
                          ${formData.systemType === type.id 
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                            : 'border-gray-200 hover:border-primary/50'}
                        `}
                      >
                        <div className="text-primary mb-4">{type.icon}</div>
                        <h4 className="text-lg font-medium mb-2">{type.title}</h4>
                        <ul className="space-y-2 mb-4">
                          {type.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <FaShieldAlt className="w-4 h-4 text-primary mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <p className="text-primary font-medium">{type.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Başvuru Özeti</h3>
                  
                  {/* Kişisel Bilgiler */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                      <FaUser className="mr-2" />
                      Kişisel Bilgiler
                    </h4>
                    <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Ad Soyad</p>
                          <p className="text-base font-medium text-gray-900">
                            {formData.firstName} {formData.lastName}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">E-posta</p>
                          <p className="text-base font-medium text-gray-900">{formData.email}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Telefon</p>
                        <p className="text-base font-medium text-gray-900">{formData.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Sistem Bilgileri */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                      <FaShieldAlt className="mr-2" />
                      Sistem Bilgileri
                    </h4>
                    <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Seçilen Paket</p>
                        <div className="flex items-center mt-1">
                          {formData.systemType === 'basic' && (
                            <>
                              <FaShieldAlt className="text-primary mr-2" />
                              <p className="text-base font-medium text-gray-900">Temel Paket</p>
                              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                199₺/ay'dan başlayan
                              </span>
                            </>
                          )}
                          {formData.systemType === 'advanced' && (
                            <>
                              <FaVideo className="text-primary mr-2" />
                              <p className="text-base font-medium text-gray-900">Gelişmiş Paket</p>
                              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                299₺/ay'dan başlayan
                              </span>
                            </>
                          )}
                          {formData.systemType === 'premium' && (
                            <>
                              <FaLock className="text-primary mr-2" />
                              <p className="text-base font-medium text-gray-900">Premium Paket</p>
                              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                499₺/ay'dan başlayan
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Bina Tipi</p>
                        <div className="flex items-center mt-1">
                          {formData.buildingType === 'home' && <FaHome className="text-primary mr-2" />}
                          {formData.buildingType === 'business' && <FaBuilding className="text-primary mr-2" />}
                          {formData.buildingType === 'corporate' && <FaIndustry className="text-primary mr-2" />}
                          <p className="text-base font-medium text-gray-900">
                            {formData.buildingType === 'home' ? 'Ev' : 
                             formData.buildingType === 'business' ? 'İşyeri' : 'Kurumsal'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kurulum Adresi */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      Kurulum Adresi
                    </h4>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-base text-gray-900">{formData.address}</p>
                    </div>
                  </div>

                  {/* Onay Kutusu */}
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        required
                      />
                      <span className="ml-3 text-sm text-gray-600">
                        Yukarıdaki bilgilerin doğruluğunu onaylıyorum ve 
                        <a href="/kvkk" className="text-primary hover:underline ml-1">
                          KVKK Aydınlatma Metni
                        </a>'ni okudum, kabul ediyorum.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <span>Geri</span>
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="ml-auto flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <span>Devam</span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <span>Başvuruyu Tamamla</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register; 