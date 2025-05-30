import React from 'react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { Calendar, Star, TrendingUp, Award, BookOpen, Brain } from 'lucide-react';

const Beranda = () => {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Artikel Pendidikan",
      description: "Kumpulan artikel berkualitas tentang dunia pendidikan dan pengembangan diri"
    },
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: "Kuis Interaktif",
      description: "Uji pemahaman Anda dengan kuis yang memberikan feedback langsung"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Peningkatan Pemahaman",
      description: "Metode pembelajaran yang terbukti efektif untuk mengoptimalkan hasil belajar"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Evaluasi Berkelanjutan",
      description: "Sistem feedback yang membantu memantau perkembangan pembelajaran"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Putri",
      grade: "Kelas 12 SMA",
      text: "Program konseling ini benar-benar membantu saya mengatur waktu belajar dan meningkatkan motivasi untuk meraih cita-cita.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      grade: "Kelas 11 SMA", 
      text: "Saya belajar banyak strategi belajar efektif yang sebelumnya tidak pernah saya ketahui. Nilai ujian saya meningkat drastis!",
      rating: 5
    },
    {
      name: "Maya Sari",
      grade: "Kelas 10 SMA",
      text: "Atmosfer kelompok yang supportif membuat saya lebih percaya diri dalam menghadapi tantangan akademik.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih EduCounsel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform pembelajaran interaktif yang menggabungkan artikel berkualitas dengan kuis yang memberikan feedback langsung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Pendidikanmu?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Baca artikel pendidikan dan uji pemahaman Anda dengan kuis interaktif kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pendaftaran"
              className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Mulai Kuis Gratis
            </Link>
            <Link
              to="/topik-konseling"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200"
            >
              Baca Artikel Pendidikan
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Peserta Kami?
            </h2>
            <p className="text-xl text-gray-600">
              Dengarkan pengalaman siswa yang telah merasakan manfaat program kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
