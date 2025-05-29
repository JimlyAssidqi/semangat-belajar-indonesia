
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Wujudkan Potensi
              <span className="block text-yellow-300">Pendidikan Terbaikmu</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Bergabunglah dengan layanan konseling kelompok profesional yang membantu 
              siswa membangun strategi belajar efektif, meningkatkan motivasi, dan 
              merencanakan masa depan yang cemerlang.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/pendaftaran"
                className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="/profil-layanan"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
              alt="Siswa belajar dengan laptop"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-bold text-lg">500+</p>
                  <p className="text-sm text-gray-600">Siswa Terbantu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
              <Target className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold">Bimbingan Terarah</h3>
            <p className="text-blue-100">Konseling profesional dengan metode terpercaya</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
              <Users className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold">Komunitas Suportif</h3>
            <p className="text-blue-100">Belajar bersama dalam kelompok yang mendukung</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold">Materi Berkualitas</h3>
            <p className="text-blue-100">Konten edukatif dan motivasi yang teruji</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
