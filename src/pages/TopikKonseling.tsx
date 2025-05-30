
import React from 'react';
import { BookOpen, Brain, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopikKonseling = () => {
  const articles = [
    {
      id: 1,
      title: "Pentingnya Pendidikan dalam Membentuk Masa Depan",
      excerpt: "Memahami bagaimana pendidikan menjadi fondasi utama dalam mencapai kesuksesan dan membuka peluang karier yang cemerlang.",
      readTime: "5 menit",
      category: "Motivasi",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Strategi Belajar Efektif untuk Siswa Modern",
      excerpt: "Teknik dan metode pembelajaran yang terbukti secara ilmiah dapat meningkatkan daya serap dan pemahaman materi pelajaran.",
      readTime: "7 menit",
      category: "Teknik Belajar",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Mengelola Waktu Belajar dengan Bijak",
      excerpt: "Panduan praktis untuk mengatur jadwal belajar yang seimbang antara akademik, istirahat, dan aktivitas ekstrakurikuler.",
      readTime: "6 menit",
      category: "Manajemen Waktu",
      image: "https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Membangun Motivasi Berprestasi yang Berkelanjutan",
      excerpt: "Cara mempertahankan semangat belajar dan menciptakan mindset growth untuk mencapai prestasi akademik terbaik.",
      readTime: "8 menit",
      category: "Motivasi",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Merencanakan Karier Sejak Dini",
      excerpt: "Langkah-langkah strategis untuk mempersiapkan masa depan dengan memilih jalur pendidikan dan karier yang tepat.",
      readTime: "10 menit",
      category: "Karier",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Mengatasi Stres Akademik dengan Cara Sehat",
      excerpt: "Tips dan teknik untuk mengelola tekanan belajar dan menjaga kesehatan mental selama masa pendidikan.",
      readTime: "6 menit",
      category: "Kesehatan Mental",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Artikel Pendidikan
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Temukan wawasan mendalam tentang dunia pendidikan dan kembangkan potensi akademik Anda dengan artikel-artikel berkualitas
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Baca Artikel
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Brain className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Uji Pemahaman Anda!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Setelah membaca artikel, saatnya menguji seberapa baik pemahaman Anda dengan kuis interaktif kami
          </p>
          <Link 
            to="/pendaftaran" 
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Mulai Kuis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TopikKonseling;
