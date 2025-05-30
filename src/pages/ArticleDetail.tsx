
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
    },
    "3": {
      title: "Mengelola Waktu Belajar dengan Bijak",
      content: `
        <p>Manajemen waktu adalah keterampilan fundamental yang harus dikuasai setiap siswa. Dengan mengelola waktu secara bijak, siswa dapat mencapai keseimbangan antara akademik, aktivitas ekstrakurikuler, dan waktu istirahat.</p>
        
        <h2>Prinsip Dasar Manajemen Waktu</h2>
        <p>Untuk mengelola waktu dengan efektif, siswa perlu memahami beberapa prinsip dasar:</p>
        <ul>
          <li>Prioritaskan tugas berdasarkan tingkat kepentingan dan urgensi</li>
          <li>Buat jadwal yang realistis dan dapat dicapai</li>
          <li>Alokasikan waktu istirahat yang cukup</li>
          <li>Hindari prokrastinasi dengan memulai tugas dari yang terkecil</li>
        </ul>
        
        <h2>Teknik Perencanaan Waktu</h2>
        <p>Berikut adalah beberapa teknik yang dapat membantu dalam perencanaan waktu:</p>
        <ol>
          <li><strong>Time Blocking:</strong> Membagi hari menjadi blok-blok waktu untuk aktivitas tertentu</li>
          <li><strong>Metode ABCDE:</strong> Kategorikan tugas berdasarkan prioritas (A=sangat penting, B=penting, dst.)</li>
          <li><strong>Rule of 3:</strong> Fokus pada 3 tugas terpenting setiap hari</li>
          <li><strong>Batching:</strong> Mengelompokkan tugas sejenis untuk dikerjakan bersamaan</li>
        </ol>
        
        <h2>Mengatasi Gangguan dan Distraksi</h2>
        <p>Di era digital, siswa sering menghadapi berbagai distraksi. Strategi untuk mengatasinya:</p>
        <ul>
          <li>Matikan notifikasi smartphone saat belajar</li>
          <li>Gunakan aplikasi pemblokir website yang mengganggu</li>
          <li>Ciptakan lingkungan belajar yang kondusif</li>
          <li>Komunikasikan jadwal belajar kepada keluarga dan teman</li>
        </ul>
        
        <h2>Evaluasi dan Penyesuaian</h2>
        <p>Lakukan evaluasi mingguan terhadap jadwal dan produktivitas Anda. Sesuaikan strategi berdasarkan apa yang telah berhasil dan apa yang perlu diperbaiki.</p>
      `,
      author: "Dr. Maya Manajemen",
      readTime: "6 menit",
      date: "10 Januari 2025",
      category: "Manajemen Waktu",
      image: "https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?w=800&h=400&fit=crop"
    },
    "4": {
      title: "Membangun Motivasi Berprestasi yang Berkelanjutan",
      content: `
        <p>Motivasi adalah mesin penggerak kesuksesan akademik. Namun, menjaga motivasi tetap tinggi sepanjang perjalanan pendidikan bukanlah hal yang mudah. Artikel ini akan membahas cara membangun dan mempertahankan motivasi berprestasi.</p>
        
        <h2>Memahami Jenis Motivasi</h2>
        <p>Terdapat dua jenis motivasi utama:</p>
        <ul>
          <li><strong>Motivasi Intrinsik:</strong> Dorongan dari dalam diri sendiri karena kesenangan dan kepuasan pribadi</li>
          <li><strong>Motivasi Ekstrinsik:</strong> Dorongan dari faktor eksternal seperti hadiah, pengakuan, atau menghindari hukuman</li>
        </ul>
        
        <h2>Strategi Membangun Motivasi Intrinsik</h2>
        <p>Motivasi intrinsik lebih berkelanjutan dan kuat. Berikut cara mengembangkannya:</p>
        <ol>
          <li><strong>Temukan Passion Anda:</strong> Kenali bidang yang benar-benar Anda minati</li>
          <li><strong>Hubungkan dengan Tujuan Hidup:</strong> Kaitkan pembelajaran dengan visi masa depan</li>
          <li><strong>Fokus pada Proses:</strong> Nikmati perjalanan belajar, bukan hanya hasil akhir</li>
          <li><strong>Kembangkan Growth Mindset:</strong> Percaya bahwa kemampuan dapat berkembang melalui usaha</li>
        </ol>
        
        <h2>Teknik Mempertahankan Motivasi</h2>
        <p>Untuk menjaga motivasi tetap tinggi dalam jangka panjang:</p>
        <ul>
          <li>Tetapkan tujuan SMART (Specific, Measurable, Achievable, Relevant, Time-bound)</li>
          <li>Rayakan pencapaian kecil untuk membangun momentum</li>
          <li>Bergabung dengan komunitas atau study group yang supportif</li>
          <li>Dokumentasikan progress untuk melihat perkembangan</li>
          <li>Variasikan metode belajar agar tidak monoton</li>
        </ul>
        
        <h2>Mengatasi Burnout dan Demotivasi</h2>
        <p>Saat mengalami penurunan motivasi:</p>
        <ul>
          <li>Ambil jeda sejenak dan lakukan self-reflection</li>
          <li>Ingat kembali alasan awal mengapa Anda memulai</li>
          <li>Cari inspirasi dari role model atau success stories</li>
          <li>Sesuaikan strategi belajar jika diperlukan</li>
          <li>Jangan ragu untuk meminta bantuan dari mentor atau konselor</li>
        </ul>
      `,
      author: "Prof. Andi Motivasi",
      readTime: "8 menit",
      date: "8 Januari 2025",
      category: "Motivasi",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop"
    },
    "5": {
      title: "Merencanakan Karier Sejak Dini",
      content: `
        <p>Perencanaan karier yang dimulai sejak dini memberikan arah yang jelas dalam perjalanan pendidikan dan membantu siswa membuat keputusan yang tepat untuk masa depan mereka.</p>
        
        <h2>Pentingnya Perencanaan Karier Dini</h2>
        <p>Merencanakan karier sejak dini memberikan berbagai keuntungan:</p>
        <ul>
          <li>Memberikan fokus dan arah dalam pendidikan</li>
          <li>Membantu memilih jurusan dan mata pelajaran yang relevan</li>
          <li>Meningkatkan motivasi belajar karena ada tujuan yang jelas</li>
          <li>Memberikan waktu lebih untuk mempersiapkan keterampilan yang dibutuhkan</li>
        </ul>
        
        <h2>Langkah-langkah Perencanaan Karier</h2>
        <ol>
          <li><strong>Self Assessment:</strong> Kenali minat, bakat, nilai, dan kepribadian Anda</li>
          <li><strong>Eksplorasi Karier:</strong> Pelajari berbagai profesi dan industri yang menarik</li>
          <li><strong>Riset Pendidikan:</strong> Cari tahu jalur pendidikan yang diperlukan</li>
          <li><strong>Networking:</strong> Bangun koneksi dengan profesional di bidang yang diminati</li>
          <li><strong>Pengalaman Praktis:</strong> Cari magang, volunteer, atau part-time job</li>
        </ol>
        
        <h2>Tools untuk Eksplorasi Karier</h2>
        <p>Manfaatkan berbagai sumber daya untuk eksplorasi karier:</p>
        <ul>
          <li>Tes minat dan kepribadian online</li>
          <li>Career fair dan open house universitas</li>
          <li>Wawancara dengan profesional (informational interview)</li>
          <li>Platform online seperti LinkedIn untuk research</li>
          <li>Konsultasi dengan konselor karier di sekolah</li>
        </ul>
        
        <h2>Tren Karier Masa Depan</h2>
        <p>Beberapa bidang yang akan berkembang pesat:</p>
        <ul>
          <li>Teknologi dan Digital (AI, Data Science, Cybersecurity)</li>
          <li>Kesehatan dan Wellbeing</li>
          <li>Lingkungan dan Sustainability</li>
          <li>Creative Industries</li>
          <li>Remote Work dan Digital Nomad</li>
        </ul>
        
        <h2>Membangun Portfolio Karier</h2>
        <p>Mulai bangun portfolio sejak dini dengan:</p>
        <ol>
          <li>Kembangkan keterampilan teknis dan soft skills</li>
          <li>Dokumentasikan pencapaian dan project</li>
          <li>Bangun personal brand melalui media sosial profesional</li>
          <li>Ikuti kompetisi dan event yang relevan</li>
          <li>Ambil sertifikasi online untuk menambah kredibilitas</li>
        </ol>
      `,
      author: "Dr. Budi Karier",
      readTime: "10 menit",
      date: "5 Januari 2025",
      category: "Karier",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop"
    },
    "6": {
      title: "Mengatasi Stres Akademik dengan Cara Sehat",
      content: `
        <p>Stres akademik adalah fenomena umum yang dialami siswa di berbagai jenjang pendidikan. Memahami cara mengelola stres dengan sehat adalah kunci untuk menjaga kesehatan mental dan performa akademik yang optimal.</p>
        
        <h2>Memahami Stres Akademik</h2>
        <p>Stres akademik dapat disebabkan oleh berbagai faktor:</p>
        <ul>
          <li>Tekanan untuk mencapai nilai tinggi</li>
          <li>Beban tugas yang berlebihan</li>
          <li>Deadline yang ketat</li>
          <li>Persaingan dengan teman sebaya</li>
          <li>Ketidakpastian tentang masa depan</li>
          <li>Kurangnya dukungan sosial</li>
        </ul>
        
        <h2>Gejala Stres Akademik</h2>
        <p>Kenali tanda-tanda stres akademik:</p>
        <ul>
          <li><strong>Fisik:</strong> Sakit kepala, kelelahan, gangguan tidur, masalah pencernaan</li>
          <li><strong>Emosional:</strong> Cemas, mudah marah, sedih, putus asa</li>
          <li><strong>Kognitif:</strong> Sulit konsentrasi, lupa, pikiran negatif</li>
          <li><strong>Behavioral:</strong> Prokrastinasi, menarik diri, perubahan pola makan</li>
        </ul>
        
        <h2>Strategi Mengelola Stres</h2>
        <p>Teknik-teknik efektif untuk mengatasi stres akademik:</p>
        <ol>
          <li><strong>Time Management:</strong> Buat jadwal yang realistis dan prioritaskan tugas</li>
          <li><strong>Relaxation Techniques:</strong> Latihan pernapasan, meditasi, yoga</li>
          <li><strong>Physical Exercise:</strong> Olahraga teratur untuk melepaskan endorfin</li>
          <li><strong>Social Support:</strong> Berbagi dengan teman, keluarga, atau konselor</li>
          <li><strong>Healthy Lifestyle:</strong> Pola makan sehat, tidur cukup, batasi kafein</li>
        </ol>
        
        <h2>Teknik Relaksasi Cepat</h2>
        <p>Untuk saat-saat stres tinggi, coba teknik ini:</p>
        <ul>
          <li><strong>Teknik 4-7-8:</strong> Tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik</li>
          <li><strong>Progressive Muscle Relaxation:</strong> Kencangkan dan lepaskan otot secara bertahap</li>
          <li><strong>Grounding 5-4-3-2-1:</strong> Identifikasi 5 hal yang dilihat, 4 yang didengar, dst.</li>
          <li><strong>Mindful Breathing:</strong> Fokus pada napas selama 5-10 menit</li>
        </ul>
        
        <h2>Membangun Resiliensi</h2>
        <p>Kembangkan ketahanan mental dengan:</p>
        <ul>
          <li>Mengubah perspektif negatif menjadi positif</li>
          <li>Menerima bahwa kesalahan adalah bagian dari belajar</li>
          <li>Fokus pada hal-hal yang dapat dikontrol</li>
          <li>Mengembangkan hobi dan minat di luar akademik</li>
          <li>Membangun jaringan dukungan yang kuat</li>
        </ul>
        
        <h2>Kapan Harus Mencari Bantuan</h2>
        <p>Segera hubungi profesional jika mengalami:</p>
        <ul>
          <li>Stres yang berlangsung lebih dari 2 minggu</li>
          <li>Pikiran untuk menyakiti diri sendiri</li>
          <li>Gangguan tidur atau makan yang parah</li>
          <li>Penurunan performa akademik yang drastis</li>
          <li>Isolasi sosial yang ekstrem</li>
        </ul>
      `,
      author: "Dr. Sari Psikolog",
      readTime: "6 menit",
      date: "3 Januari 2025",
      category: "Kesehatan Mental",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=400&fit=crop"
    }
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
