
import React from 'react';
import { BookOpen, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman tersebut telah dipindahkan atau tidak ada.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Home className="w-5 h-5 mr-2" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
