import React from 'react';
import ServiceCategories from '../components/Home/ServiceCategories';
import HowItWorks from '../components/Home/HowItWorks';
import WhyUs from '../components/Home/WhyUs';
import Contact from '../components/Home/Contact';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/security-camera-bg.jpg")',
              backgroundBlendMode: 'overlay'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              7/24 Profesyonel Alarm İzleme Merkezi
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Eviniz ve İşyeriniz Güvende
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition transform hover:scale-105">
                Hemen Başvur
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition">
                Çözümlerimizi İncele
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-2">10.000+</div>
                <div className="text-sm opacity-80">Aktif Kullanıcı</div>
              </div>
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-80">Uptime</div>
              </div>
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">İzleme</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceCategories />
      <HowItWorks />
      <WhyUs />
      <Contact />
    </div>
  );
};

export default Home; 