import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alarm İzleme</h3>
            <p className="text-gray-400">
              7/24 profesyonel güvenlik hizmetleri ile eviniz ve işyeriniz güvende.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><Link to="/hakkimizda" className="text-gray-400 hover:text-white">Hakkımızda</Link></li>
              <li><Link to="/hizmetler" className="text-gray-400 hover:text-white">Hizmetler</Link></li>
              <li><Link to="/iletisim" className="text-gray-400 hover:text-white">İletişim</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>0850 123 45 67</li>
              <li>info@alarmizleme.com</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Alarm İzleme. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 