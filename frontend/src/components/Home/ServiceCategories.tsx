import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaIndustry, FaCheck } from 'react-icons/fa';

const ServiceCategories: React.FC = () => {
  const categories = [
    {
      icon: <FaHome className="w-16 h-16 text-primary" />,
      title: "Ev Güvenlik",
      features: ["7/24 İzleme", "Mobil Uygulama", "Akıllı Sensörler"],
      price: "199₺'den başlayan fiyatlarla",
      link: "/ev-guvenlik"
    },
    {
      icon: <FaBuilding className="w-16 h-16 text-primary" />,
      title: "İş Yeri Güvenlik",
      features: ["Gelişmiş Kamera Sistemi", "Uzaktan Erişim", "Acil Müdahale"],
      price: "299₺'den başlayan fiyatlarla",
      link: "/isyeri-guvenlik"
    },
    {
      icon: <FaIndustry className="w-16 h-16 text-primary" />,
      title: "Kurumsal Güvenlik",
      features: ["Özel Çözümler", "Entegre Sistemler", "7/24 Teknik Destek"],
      price: "Özel Fiyatlandırma",
      link: "/kurumsal"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Güvenlik Çözümlerimiz</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          İhtiyacınıza özel profesyonel güvenlik çözümleri ile 
          7/24 kesintisiz hizmet sunuyoruz.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-card hover:shadow-card-hover p-8 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-8">{category.icon}</div>
              <h3 className="text-2xl font-bold text-center mb-6">{category.title}</h3>
              
              <ul className="space-y-4 mb-8">
                {category.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FaCheck className="w-5 h-5 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <p className="text-primary font-semibold text-center text-lg mb-8">
                {category.price}
              </p>
              
              <Link
                to={category.link}
                className="block text-center bg-primary text-white py-4 rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Detaylı Bilgi
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories; 