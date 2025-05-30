
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams();

  // Mock article data - in a real app, this would come from an API
  const articles = {
    "1": {
      title: "Pentingnya Pendidikan dalam Membentuk Masa Depan",
      content: `
        <p>Pendidikan adalah fondasi utama dalam membentuk masa depan yang cerah. Melalui pendidikan, seseorang dapat mengembangkan kemampuan berpikir kritis, kreativitas, dan keterampilan yang diperlukan untuk sukses di era modern.</p>
        
        <h2>Mengapa Pendidikan Penting?</h2>
        <p>Pendidikan memainkan peran vital dalam:</p>
        <ul>
          <li>Membuka peluang karier yang lebih luas</li>
          <li>Mengembangkan kemampuan berpikir analitis</li>
          <li>Meningkatkan kualitas hidup</li>
          <li>Membangun karakter dan nilai-nilai positif</li>
        </ul>
        
        <h2>Tantangan dalam Pendidikan Modern</h2>
        <p>Di era digital ini, pendidikan menghadapi berbagai tantangan seperti:</p>
        <ul>
          <li>Perkembangan teknologi yang cepat</li>
          <li>Kebutuhan akan keterampilan baru</li>
          <li>Persaingan global yang ketat</li>
          <li>Perubahan kebutuhan pasar kerja</li>
        </ul>
        
        <h2>Strategi Mengoptimalkan Pendidikan</h2>
        <p>Untuk memaksimalkan manfaat pendidikan, siswa dapat:</p>
        <ol>
          <li>Mengembangkan kebiasaan belajar yang efektif</li>
          <li>Memanfaatkan teknologi untuk pembelajaran</li>
          <li>Aktif berpartisipasi dalam kegiatan ekstrakurikuler</li>
          <li>Membangun jaringan dan koneksi</li>
          <li>Terus mengembangkan keterampilan soft skills</li>
        </ol>
      `,
      author: "Dr. Sarah Pendidikan",
      readTime: "5 menit",
      date: "15 Januari 2025",
      category: "Motivasi",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop"
    },
    "2": {
      title: "Strategi Belajar Efektif untuk Siswa Modern",
      content: `
        <p>Dalam era digital ini, siswa perlu mengadopsi strategi belajar yang efektif untuk mengoptimalkan hasil akademik mereka. Artikel ini akan membahas berbagai teknik pembelajaran yang telah terbukti secara ilmiah.</p>
        
        <h2>Teknik Pomodoro</h2>
        <p>Teknik Pomodoro adalah metode manajemen waktu yang membagi sesi belajar menjadi interval 25 menit dengan istirahat 5 menit. Teknik ini membantu:</p>
        <ul>
          <li>Meningkatkan fokus dan konsentrasi</li>
          <li>Mengurangi kelelahan mental</li>
          <li>Meningkatkan produktivitas belajar</li>
        </ul>
        
        <h2>Active Learning</h2>
        <p>Active learning melibatkan partisipasi aktif siswa dalam proses pembelajaran:</p>
        <ul>
          <li>Membuat catatan dengan metode Cornell</li>
          <li>Mengajar kembali materi kepada orang lain</li>
          <li>Membuat mind map</li>
          <li>Berdiskusi dengan teman belajar</li>
        </ul>
        
        <h2>Spaced Repetition</h2>
        <p>Teknik pengulangan berjarak membantu memperkuat ingatan jangka panjang dengan mengulang materi pada interval waktu yang semakin lama.</p>
      `,
      author: "Prof. Ahmad Belajar",
      readTime: "7 menit",
      date: "12 Januari 2025",
      category: "Teknik Belajar",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop"
    }
    // Add more articles as needed
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel Tidak Ditemukan</h1>
          <Link to="/topik-konseling" className="text-blue-600 hover:text-blue-700">
            Kembali ke Artikel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/topik-konseling"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Artikel
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Article Header Image */}
          <div className="aspect-video overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime}
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            {/* Share Button */}
            <div className="flex justify-end mb-6">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan
              </button>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        {/* Related Articles CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Baca Artikel Lainnya</h2>
          <Link 
            to="/topik-konseling"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
