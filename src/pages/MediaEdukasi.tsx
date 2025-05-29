
import React from 'react';
import { BookOpen, Clock, User } from 'lucide-react';

const MediaEdukasi = () => {
  const articles = [
    {
      id: 1,
      title: "5 Strategi Ampuh Meningkatkan Motivasi Belajar",
      excerpt: "Temukan cara-cara efektif untuk mempertahankan semangat belajar dan mencapai prestasi akademik yang optimal.",
      author: "Dr. Sarah Wijaya",
      readTime: "8 menit",
      date: "15 Januari 2024",
      category: "Motivasi",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Teknik Pomodoro: Revolusi Manajemen Waktu untuk Pelajar",
      excerpt: "Pelajari teknik manajemen waktu yang telah terbukti meningkatkan produktivitas belajar secara signifikan.",
      author: "Prof. Ahmad Santoso",
      readTime: "6 menit",
      date: "12 Januari 2024",
      category: "Produktivitas",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Memilih Jurusan Kuliah: Panduan Lengkap untuk Siswa SMA",
      excerpt: "Panduan komprehensif untuk membantu siswa SMA menentukan pilihan jurusan yang tepat sesuai minat dan bakat.",
      author: "Dra. Rina Kartika",
      readTime: "12 menit",
      date: "10 Januari 2024",
      category: "Karier",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Mengatasi Kecemasan Ujian dengan Teknik Relaksasi",
      excerpt: "Teknik-teknik praktis untuk mengelola stres dan kecemasan sebelum dan selama menghadapi ujian penting.",
      author: "Psikolog Maya Sari",
      readTime: "10 menit",
      date: "8 Januari 2024",
      category: "Kesehatan Mental",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Strategi Mencatat yang Efektif untuk Berbagai Mata Pelajaran",
      excerpt: "Metode mencatat yang disesuaikan dengan karakteristik mata pelajaran untuk memaksimalkan pemahaman.",
      author: "Dr. Budi Hartono",
      readTime: "9 menit",
      date: "5 Januari 2024",
      category: "Teknik Belajar",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Membangun Kebiasaan Belajar yang Berkelanjutan",
      excerpt: "Tips praktis untuk membentuk rutina belajar yang konsisten dan berkelanjutan dalam jangka panjang.",
      author: "Dr. Lisa Permata",
      readTime: "7 menit",
      date: "3 Januari 2024",
      category: "Kebiasaan",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["Semua", "Motivasi", "Produktivitas", "Karier", "Kesehatan Mental", "Teknik Belajar", "Kebiasaan"];
  const [selectedCategory, setSelectedCategory] = React.useState("Semua");

  const filteredArticles = selectedCategory === "Semua" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Media Edukasi
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Artikel dan konten edukatif untuk mendukung perjalanan belajar dan pengembangan diri Anda
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kategori Artikel</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
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
                  <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>
                
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Baca Artikel
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Dapatkan Artikel Terbaru
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Berlangganan newsletter kami dan dapatkan artikel edukatif terbaru langsung di email Anda
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaEdukasi;
