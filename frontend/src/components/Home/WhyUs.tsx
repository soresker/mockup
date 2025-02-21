import React from 'react';
import { FaShieldAlt, FaMobileAlt, FaClock, FaUserShield } from 'react-icons/fa';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-10 h-10" />,
      title: "Profesyonel İzleme",
      description: "Deneyimli ekibimiz 7/24 güvenliğinizi sağlıyor"
    },
    {
      icon: <FaMobileAlt className="w-10 h-10" />,
      title: "Mobil Erişim",
      description: "Sisteminizi dilediğiniz yerden kontrol edin"
    },
    {
      icon: <FaClock className="w-10 h-10" />,
      title: "Hızlı Müdahale",
      description: "Acil durumlarda anında müdahale ekibi"
    },
    {
      icon: <FaUserShield className="w-10 h-10" />,
      title: "Güvenilir Hizmet",
      description: "10.000+ müşteri tarafından tercih edilen sistem"
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Neden Biz?</h2>
        <p className="text-blue-100 text-center mb-16 max-w-2xl mx-auto">
          Güvenliğiniz için en iyi çözümleri sunuyoruz
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 