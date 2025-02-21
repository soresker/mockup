import React from 'react';
import { FaClipboardCheck, FaTools, FaCheckCircle, FaShieldAlt, FaChevronRight } from 'react-icons/fa';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FaClipboardCheck className="w-12 h-12 text-primary" />,
      title: "Başvuru",
      description: "Online başvurunuzu yapın, uzmanlarımız sizinle iletişime geçsin"
    },
    {
      icon: <FaTools className="w-12 h-12 text-primary" />,
      title: "Kurulum",
      description: "Profesyonel ekibimiz güvenlik sisteminizi kurup test etsin"
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 text-primary" />,
      title: "Aktivasyon",
      description: "Sisteminiz aktif edilsin, mobil uygulamaya erişim sağlayın"
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 text-primary" />,
      title: "7/24 İzleme",
      description: "İzleme merkezimiz güvenliğinizi sürekli takip etsin"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nasıl Çalışır?</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Dört kolay adımda profesyonel güvenlik hizmetimize başlayın
        </p>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="flex justify-center mb-6">
                <div className="bg-secondary-light p-6 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <FaChevronRight className="w-8 h-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 