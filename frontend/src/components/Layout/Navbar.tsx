import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            ALARM İZLEME
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/ev-guvenlik" className="text-gray-700 hover:text-primary">
              Ev Güvenlik
            </Link>
            <Link to="/isyeri-guvenlik" className="text-gray-700 hover:text-primary">
              İşyeri Güvenlik
            </Link>
            <Link to="/kurumsal" className="text-gray-700 hover:text-primary">
              Kurumsal
            </Link>
            <Link 
              to="/#iletisim" 
              className="text-gray-700 hover:text-primary transition"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              İletişim
            </Link>
            <Link 
              to="/online-islemler" 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
            >
              Online İşlemler
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 