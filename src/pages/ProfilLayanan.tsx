
import React from 'react';
import { Users, Target, Clock, Award, CheckCircle, Heart } from 'lucide-react';

const ProfilLayanan = () => {
  const benefits = [
    "Meningkatkan motivasi belajar dan prestasi akademik",
    "Mengembangkan strategi belajar yang efektif dan personal",
    "Membangun kepercayaan diri dalam menghadapi tantangan",
    "Memperbaiki manajemen waktu dan organisasi belajar",
    "Merencanakan karier dan pendidikan lanjutan dengan tepat",
    "Membangun jaringan pertemanan yang positif dan suportif"
  ];

  const counselors = [
    {
      name: "Dr. Sari Wijayanti, M.Psi",
      specialization: "Psikologi Pendidikan & Motivasi Belajar",
      experience: "15 tahun",
      description: "Spesialis dalam mengembangkan strategi pembelajaran dan meningkatkan motivasi siswa",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&face"
    },
    {
      name: "Prof. Ahmad Sutarto, M.Ed",
      specialization: "Bimbingan Karier & Perencanaan Pendidikan",
      experience: "20 tahun",
      description: "Ahli dalam perencanaan karier dan konsultasi pendidikan tinggi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face"
    },
    {
      name: "Maya Indrawati, S.Psi, M.A",
      specialization: "Manajemen Waktu & Produktivitas",
      experience: "12 tahun", 
      description: "Konselor berpengalaman dalam mengajarkan teknik manajemen waktu efektif",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Profil Layanan Kami</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mengenal lebih dekat layanan konseling kelompok yang dirancang khusus 
              untuk membantu siswa mencapai potensi maksimal mereka
            </p>
          </div>
        </div>
      </section>

      {/* What is Group Counseling */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Apa itu Konseling Kelompok?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Konseling kelompok adalah pendekatan terapeutik yang melibatkan sekelompok kecil 
                siswa (6-10 orang) yang bertemu secara rutin dengan konselor profesional untuk 
                membahas tantangan akademik, mengembangkan strategi belajar, dan saling mendukung 
                dalam mencapai tujuan pendidikan.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Metode ini terbukti sangat efektif karena menciptakan lingkungan pembelajaran 
                yang aman dan suportif, di mana siswa dapat berbagi pengalaman, belajar dari 
                satu sama lain, dan membangun kepercayaan diri bersama.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">6-10 Peserta</p>
                    <p className="text-sm text-gray-600">Per kelompok</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">90 Menit</p>
                    <p className="text-sm text-gray-600">Per sesi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
                alt="Kelompok belajar dengan laptop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals and Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Tujuan & Manfaat Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program konseling kelompok kami dirancang untuk memberikan dampak positif 
              yang berkelanjutan bagi perkembangan akademik dan personal siswa
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Target className="h-10 w-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Tujuan Program</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Peningkatan Prestasi Akademik</h4>
                  <p className="text-gray-700">Membantu siswa mengoptimalkan potensi belajar dan meraih hasil akademik yang lebih baik</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Pengembangan Soft Skills</h4>
                  <p className="text-gray-700">Melatih kemampuan komunikasi, kerja sama, dan kepemimpinan melalui interaksi kelompok</p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Persiapan Masa Depan</h4>
                  <p className="text-gray-700">Membantu siswa merencanakan karier dan pendidikan lanjutan dengan lebih terarah</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Heart className="h-10 w-10 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">Manfaat yang Diperoleh</h3>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Tim Konselor Profesional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bertemu dengan tim konselor berpengalaman yang akan membimbing 
              perjalanan pendidikan dan pengembangan diri Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {counselors.map((counselor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={counselor.image}
                  alt={counselor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{counselor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{counselor.specialization}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">Pengalaman: {counselor.experience}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{counselor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilLayanan;
