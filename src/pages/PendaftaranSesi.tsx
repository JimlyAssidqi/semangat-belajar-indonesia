
import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const PendaftaranSesi = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    sekolah: '',
    kelas: '',
    topik: '',
    jadwal: '',
    formatSesi: ''
  });

  const topikOptions = [
    "Kesadaran Pentingnya Pendidikan",
    "Strategi Belajar Efektif", 
    "Manajemen Waktu Belajar",
    "Motivasi Berprestasi",
    "Perencanaan Karier & Pendidikan Lanjut"
  ];

  const jadwalOptions = [
    { id: '1', hari: 'Senin', waktu: '15:00 - 16:30', tersedia: true },
    { id: '2', hari: 'Selasa', waktu: '15:00 - 16:30', tersedia: true },
    { id: '3', hari: 'Rabu', waktu: '15:00 - 16:30', tersedia: false },
    { id: '4', hari: 'Kamis', waktu: '15:00 - 16:30', tersedia: true },
    { id: '5', hari: 'Jumat', waktu: '15:00 - 16:30', tersedia: true },
    { id: '6', hari: 'Sabtu', waktu: '09:00 - 10:30', tersedia: true },
    { id: '7', hari: 'Sabtu', waktu: '10:45 - 12:15', tersedia: false }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.nama || !formData.email || !formData.telepon || !formData.sekolah || 
        !formData.kelas || !formData.topik || !formData.jadwal || !formData.formatSesi) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }

    // Find selected schedule
    const selectedJadwal = jadwalOptions.find(j => j.id === formData.jadwal);
    
    // Format WhatsApp message
    const whatsappMessage = `*PENDAFTARAN SESI KONSELING*

*Informasi Pribadi:*
Nama: ${formData.nama}
Email: ${formData.email}
Telepon: ${formData.telepon}
Sekolah: ${formData.sekolah}
Kelas: ${formData.kelas}

*Detail Sesi:*
Topik: ${formData.topik}
Format: ${formData.formatSesi === 'online' ? 'Sesi Online' : 'Sesi Tatap Muka'}
Jadwal: ${selectedJadwal ? `${selectedJadwal.hari}, ${selectedJadwal.waktu}` : 'Tidak ditemukan'}

Terima kasih atas pendaftaran Anda. Mohon konfirmasi ketersediaan jadwal.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp phone number (you can change this to your actual number)
    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    toast({
      title: "Berhasil!",
      description: "Data pendaftaran telah disiapkan untuk dikirim via WhatsApp.",
    });
    
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pendaftaran Sesi Konseling
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Bergabunglah dengan sesi konseling kelompok dan mulai perjalanan menuju prestasi akademik yang lebih baik
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Pribadi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nama">Nama Lengkap *</Label>
                  <Input
                    id="nama"
                    type="text"
                    value={formData.nama}
                    onChange={(e) => handleInputChange('nama', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="telepon">Nomor Telepon *</Label>
                  <Input
                    id="telepon"
                    type="tel"
                    value={formData.telepon}
                    onChange={(e) => handleInputChange('telepon', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <Label htmlFor="sekolah">Asal Sekolah *</Label>
                  <Input
                    id="sekolah"
                    type="text"
                    value={formData.sekolah}
                    onChange={(e) => handleInputChange('sekolah', e.target.value)}
                    required
                    className="mt-2"
                    placeholder="Nama sekolah"
                  />
                </div>
                <div>
                  <Label htmlFor="kelas">Kelas *</Label>
                  <Select value={formData.kelas} onValueChange={(value) => handleInputChange('kelas', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Pilih kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">Kelas 10</SelectItem>
                      <SelectItem value="11">Kelas 11</SelectItem>
                      <SelectItem value="12">Kelas 12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Topic Selection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pilih Topik Konseling</h2>
              <Select value={formData.topik} onValueChange={(value) => handleInputChange('topik', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih topik yang ingin dibahas" />
                </SelectTrigger>
                <SelectContent>
                  {topikOptions.map((topik, index) => (
                    <SelectItem key={index} value={topik}>{topik}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Session Format */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Format Sesi</h2>
              <RadioGroup 
                value={formData.formatSesi} 
                onValueChange={(value) => handleInputChange('formatSesi', value)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="online" id="online" />
                  <div className="flex-1">
                    <Label htmlFor="online" className="font-medium">Sesi Online</Label>
                    <p className="text-sm text-gray-600">Melalui video conference</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="offline" id="offline" />
                  <div className="flex-1">
                    <Label htmlFor="offline" className="font-medium">Sesi Tatap Muka</Label>
                    <p className="text-sm text-gray-600">Di kantor konseling</p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Schedule Selection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pilih Jadwal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jadwalOptions.map((jadwal) => (
                  <div
                    key={jadwal.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      !jadwal.tersedia 
                        ? 'bg-gray-100 border-gray-300 cursor-not-allowed opacity-50' 
                        : formData.jadwal === jadwal.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                    onClick={() => jadwal.tersedia && handleInputChange('jadwal', jadwal.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{jadwal.hari}</span>
                      {jadwal.tersedia ? (
                        <Users className="w-4 h-4 text-green-500" />
                      ) : (
                        <span className="text-xs text-red-500 font-medium">PENUH</span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {jadwal.waktu}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                Daftar Sekarang
              </Button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                * Dengan mendaftar, Anda menyetujui untuk mengikuti sesi konseling sesuai jadwal yang dipilih.
                Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranSesi;
