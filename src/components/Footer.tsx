
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Counseling Education</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Platform pendidikan interaktif yang menggabungkan artikel berkualitas dengan kuis 
              yang memberikan feedback langsung untuk mengoptimalkan pengalaman belajar Anda.
            </p>
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
            © 2025 Counseling Education. Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
