
import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const EvaluasiFeedback = () => {
  const [evaluationData, setEvaluationData] = useState({
    sesiDiikuti: '',
    rating: 0,
    materiKualitas: '',
    konselor: '',
    manfaat: '',
    saran: '',
    rekomendasi: ''
  });

  const [feedbackData, setFeedbackData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const [activeTab, setActiveTab] = useState('evaluasi');

  const handleEvaluationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Evaluation submitted:', evaluationData);
    alert('Terima kasih atas evaluasi Anda! Feedback Anda sangat berharga untuk meningkatkan kualitas layanan kami.');
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedbackData);
    alert('Terima kasih atas feedback Anda! Tim kami akan meninjau saran Anda dan memberikan respons dalam 2-3 hari kerja.');
  };

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
          >
            <Star className="w-6 h-6 fill-current" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Evaluasi & Feedback
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Bantu kami meningkatkan kualitas layanan dengan memberikan evaluasi dan feedback Anda
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg mb-8">
          <button
            onClick={() => setActiveTab('evaluasi')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
              activeTab === 'evaluasi'
                ? 'bg-white text-teal-600 shadow-sm'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            <div className="flex items-center justify-center">
              <Star className="w-5 h-5 mr-2" />
              Evaluasi Sesi
            </div>
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
              activeTab === 'feedback'
                ? 'bg-white text-teal-600 shadow-sm'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            <div className="flex items-center justify-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Kotak Saran
            </div>
          </button>
        </div>

        {/* Evaluation Form */}
        {activeTab === 'evaluasi' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-teal-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Evaluasi Sesi Konseling</h2>
            </div>
            
            <form onSubmit={handleEvaluationSubmit} className="space-y-8">
              {/* Session Selection */}
              <div>
                <Label className="text-lg font-semibold">Sesi yang telah diikuti *</Label>
                <RadioGroup 
                  value={evaluationData.sesiDiikuti} 
                  onValueChange={(value) => setEvaluationData(prev => ({ ...prev, sesiDiikuti: value }))}
                  className="mt-3 space-y-3"
                >
                  {[
                    "Kesadaran Pentingnya Pendidikan",
                    "Strategi Belajar Efektif",
                    "Manajemen Waktu Belajar", 
                    "Motivasi Berprestasi",
                    "Perencanaan Karier & Pendidikan Lanjut"
                  ].map((sesi) => (
                    <div key={sesi} className="flex items-center space-x-3">
                      <RadioGroupItem value={sesi} id={sesi} />
                      <Label htmlFor={sesi}>{sesi}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Overall Rating */}
              <div>
                <Label className="text-lg font-semibold">Rating keseluruhan sesi *</Label>
                <div className="mt-3">
                  <StarRating 
                    rating={evaluationData.rating} 
                    onRatingChange={(rating) => setEvaluationData(prev => ({ ...prev, rating }))}
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Berikan rating dari 1-5 bintang untuk sesi yang telah Anda ikuti
                  </p>
                </div>
              </div>

              {/* Material Quality */}
              <div>
                <Label className="text-lg font-semibold">Bagaimana kualitas materi yang disampaikan? *</Label>
                <RadioGroup 
                  value={evaluationData.materiKualitas} 
                  onValueChange={(value) => setEvaluationData(prev => ({ ...prev, materiKualitas: value }))}
                  className="mt-3 space-y-3"
                >
                  {["Sangat Baik", "Baik", "Cukup", "Kurang", "Sangat Kurang"].map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <RadioGroupItem value={option} id={`materi-${option}`} />
                      <Label htmlFor={`materi-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Counselor Evaluation */}
              <div>
                <Label className="text-lg font-semibold">Bagaimana penilaian Anda terhadap konselor? *</Label>
                <RadioGroup 
                  value={evaluationData.konselor} 
                  onValueChange={(value) => setEvaluationData(prev => ({ ...prev, konselor: value }))}
                  className="mt-3 space-y-3"
                >
                  {["Sangat Profesional", "Profesional", "Cukup Profesional", "Kurang Profesional", "Tidak Profesional"].map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <RadioGroupItem value={option} id={`konselor-${option}`} />
                      <Label htmlFor={`konselor-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Benefits */}
              <div>
                <Label htmlFor="manfaat" className="text-lg font-semibold">Manfaat apa yang Anda dapatkan dari sesi ini?</Label>
                <textarea
                  id="manfaat"
                  value={evaluationData.manfaat}
                  onChange={(e) => setEvaluationData(prev => ({ ...prev, manfaat: e.target.value }))}
                  className="mt-3 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  rows={4}
                  placeholder="Ceritakan manfaat yang Anda rasakan setelah mengikuti sesi konseling..."
                />
              </div>

              {/* Suggestions */}
              <div>
                <Label htmlFor="saran" className="text-lg font-semibold">Saran untuk perbaikan sesi mendatang</Label>
                <textarea
                  id="saran"
                  value={evaluationData.saran}
                  onChange={(e) => setEvaluationData(prev => ({ ...prev, saran: e.target.value }))}
                  className="mt-3 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  rows={4}
                  placeholder="Berikan saran untuk meningkatkan kualitas sesi konseling..."
                />
              </div>

              {/* Recommendation */}
              <div>
                <Label className="text-lg font-semibold">Apakah Anda akan merekomendasikan layanan ini kepada teman? *</Label>
                <RadioGroup 
                  value={evaluationData.rekomendasi} 
                  onValueChange={(value) => setEvaluationData(prev => ({ ...prev, rekomendasi: value }))}
                  className="mt-3 space-y-3"
                >
                  {["Ya, pasti", "Ya, mungkin", "Tidak yakin", "Tidak"].map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <RadioGroupItem value={option} id={`rekomendasi-${option}`} />
                      <Label htmlFor={`rekomendasi-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg">
                <ThumbsUp className="w-5 h-5 mr-2" />
                Kirim Evaluasi
              </Button>
            </form>
          </div>
        )}

        {/* Feedback Form */}
        {activeTab === 'feedback' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-teal-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Kotak Saran & Feedback</h2>
            </div>
            
            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="feedback-nama">Nama *</Label>
                  <Input
                    id="feedback-nama"
                    type="text"
                    value={feedbackData.nama}
                    onChange={(e) => setFeedbackData(prev => ({ ...prev, nama: e.target.value }))}
                    required
                    className="mt-2"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <Label htmlFor="feedback-email">Email *</Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    value={feedbackData.email}
                    onChange={(e) => setFeedbackData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="mt-2"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="feedback-subjek">Subjek *</Label>
                <Input
                  id="feedback-subjek"
                  type="text"
                  value={feedbackData.subjek}
                  onChange={(e) => setFeedbackData(prev => ({ ...prev, subjek: e.target.value }))}
                  required
                  className="mt-2"
                  placeholder="Subjek feedback atau saran Anda"
                />
              </div>

              <div>
                <Label htmlFor="feedback-pesan">Pesan *</Label>
                <textarea
                  id="feedback-pesan"
                  value={feedbackData.pesan}
                  onChange={(e) => setFeedbackData(prev => ({ ...prev, pesan: e.target.value }))}
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  rows={6}
                  placeholder="Tuliskan feedback, saran, atau pertanyaan Anda di sini..."
                />
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Kirim Feedback
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvaluasiFeedback;
