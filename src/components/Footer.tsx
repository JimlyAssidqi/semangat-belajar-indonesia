
import React from 'react';
import { BookOpen, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">EduCounsel</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Layanan konseling kelompok yang membantu siswa mencapai potensi maksimal 
              dalam pendidikan dan karier melalui bimbingan profesional dan dukungan komunitas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@educounsel.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>
            <div className="text-gray-300 space-y-1">
              <p>Senin - Jumat: 08:00 - 17:00</p>
              <p>Sabtu: 09:00 - 15:00</p>
              <p>Minggu: Tutup</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 EduCounsel. Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
