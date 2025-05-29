
import React from 'react';
import { BookOpen, Target, Clock, Trophy, GraduationCap } from 'lucide-react';

const TopikKonseling = () => {
  const topics = [
    {
      icon: BookOpen,
      title: "Kesadaran Pentingnya Pendidikan",
      description: "Memahami bagaimana pendidikan membentuk masa depan dan membuka peluang karier yang lebih baik.",
      points: [
        "Manfaat jangka panjang pendidikan",
        "Dampak pendidikan terhadap kualitas hidup",
        "Peran pendidikan dalam pengembangan diri"
      ]
    },
    {
      icon: Target,
      title: "Strategi Belajar Efektif",
      description: "Teknik dan metode belajar yang terbukti meningkatkan pemahaman dan retensi materi.",
      points: [
        "Teknik mencatat yang efektif",
        "Metode pembelajaran aktif",
        "Cara mengoptimalkan daya ingat"
      ]
    },
    {
      icon: Clock,
      title: "Manajemen Waktu Belajar",
      description: "Mengatur waktu dengan baik untuk keseimbangan antara belajar, istirahat, dan aktivitas lainnya.",
      points: [
        "Membuat jadwal belajar yang realistis",
        "Teknik prioritas tugas",
        "Menghindari prokrastinasi"
      ]
    },
    {
      icon: Trophy,
      title: "Motivasi Berprestasi",
      description: "Membangun mindset positif dan motivasi intrinsik untuk mencapai prestasi akademik terbaik.",
      points: [
        "Menetapkan tujuan yang SMART",
        "Mengatasi hambatan mental",
        "Membangun kepercayaan diri"
      ]
    },
    {
      icon: GraduationCap,
      title: "Perencanaan Karier & Pendidikan Lanjut",
      description: "Merencanakan masa depan dengan memilih jalur pendidikan dan karier yang tepat.",
      points: [
        "Eksplorasi minat dan bakat",
        "Mengenal berbagai pilihan karier",
        "Strategi memilih jurusan kuliah"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Topik Konseling Pendidikan
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Jelajahi berbagai topik penting yang akan membantu meningkatkan prestasi akademik dan merencanakan masa depan yang cemerlang
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <topic.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {topic.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Yang akan dibahas:</h4>
                      <ul className="space-y-2">
                        {topic.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Siap Untuk Memulai Perjalanan Belajar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Daftarkan diri Anda dalam sesi konseling kelompok dan mulai transformasi akademik Anda bersama kami.
          </p>
          <a 
            href="/pendaftaran" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Daftar Sesi Konseling
          </a>
        </div>
      </section>
    </div>
  );
};

export default TopikKonseling;
