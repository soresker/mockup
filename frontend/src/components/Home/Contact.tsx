import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    // Geçici olarak form verilerini console'a yazdıralım
    console.log('Form Data:', formData);

    // Simüle edilmiş bir gecikme
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Backend hazır olmadığı için başarılı senaryoyu simüle edelim
      setStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50" id="iletisim">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">İletişime Geçin</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Size en uygun güvenlik çözümü için uzmanlarımız yardımcı olsun
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-card">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Ad Soyad</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Adınız Soyadınız"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="0555 555 55 55"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="mail@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Mesajınız</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  rows={4}
                  placeholder="Mesajınızı yazın..."
                  required
                />
              </div>
              {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-primary text-white py-4 rounded-lg transition-colors duration-300 ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
                }`}
              >
                {loading ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <FaPhone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Telefon</h3>
                <p className="text-gray-600">0850 123 45 67</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <FaEnvelope className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">E-posta</h3>
                <p className="text-gray-600">info@alarmizleme.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Adres</h3>
                <a 
                  href="https://maps.app.goo.gl/dHHQKvZFyVKGBxJt7"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors group"
                >
                  <span className="group-hover:underline">
                    TAV Havalimanları, Vadistanbul Bulvar,<br />
                    Ayazaga Mahallesi Cendere Caddesi<br />
                    No: 109L, D:2C Blok, 34485<br />
                    Sarıyer / İstanbul
                  </span>
                  <span className="block mt-2 text-sm text-primary">
                    (Haritada görmek için tıklayın)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl overflow-hidden shadow-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.4361808213195!2d28.98974581541582!3d41.12124997928936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c7f9100001%3A0x6c03f27a4a32c3c8!2sTAV%20Havalimanlar%C4%B1%20Vadistanbul!5e0!3m2!1str!2str!4v1708461163599!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact; 