
import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const PendaftaranSesi = () => {
  const { toast } = useToast();
  
  const questions = [
    {
      id: 1,
      question: "Apa yang dimaksud dengan 'Growth Mindset' dalam konteks pendidikan?",
      options: [
        "Keyakinan bahwa kemampuan dapat dikembangkan melalui usaha dan pembelajaran",
        "Keyakinan bahwa kecerdasan adalah tetap dan tidak dapat diubah",
        "Fokus hanya pada nilai dan ranking di kelas",
        "Menghindari tantangan untuk mempertahankan prestasi"
      ],
      correct: 0,
      explanation: "Growth Mindset adalah keyakinan bahwa kemampuan dan kecerdasan dapat dikembangkan melalui dedikasi, kerja keras, dan pembelajaran dari kegagalan."
    },
    {
      id: 2,
      question: "Teknik manajemen waktu mana yang paling efektif untuk siswa?",
      options: [
        "Mengerjakan semua tugas di menit terakhir",
        "Teknik Pomodoro (25 menit fokus, 5 menit istirahat)",
        "Belajar tanpa henti selama berjam-jam",
        "Hanya belajar saat ada ujian"
      ],
      correct: 1,
      explanation: "Teknik Pomodoro membantu menjaga fokus dan mencegah kelelahan mental dengan membagi waktu belajar menjadi interval yang dapat dikelola."
    },
    {
      id: 3,
      question: "Apa manfaat utama dari pendidikan formal?",
      options: [
        "Hanya untuk mendapatkan ijazah",
        "Mengembangkan keterampilan berpikir kritis dan membuka peluang karier",
        "Menghafal sebanyak mungkin informasi",
        "Bersaing dengan teman sekelas"
      ],
      correct: 1,
      explanation: "Pendidikan formal tidak hanya memberikan pengetahuan, tetapi juga mengembangkan kemampuan berpikir kritis, pemecahan masalah, dan membuka berbagai peluang karier."
    },
    {
      id: 4,
      question: "Strategi belajar yang paling efektif adalah:",
      options: [
        "Membaca materi sekali dan mengandalkan ingatan",
        "Active learning: membuat catatan, bertanya, dan mempraktikkan",
        "Hanya mendengarkan penjelasan guru",
        "Mengerjakan soal tanpa memahami konsep"
      ],
      correct: 1,
      explanation: "Active learning melibatkan siswa secara aktif dalam proses pembelajaran, yang terbukti meningkatkan pemahaman dan retensi materi."
    },
    {
      id: 5,
      question: "Bagaimana cara terbaik mengatasi stres akademik?",
      options: [
        "Menghindari semua tantangan akademik",
        "Mengatur waktu dengan baik, istirahat cukup, dan mencari dukungan",
        "Belajar lebih keras tanpa istirahat",
        "Menyerah pada tugas yang sulit"
      ],
      correct: 1,
      explanation: "Mengelola stres akademik memerlukan pendekatan holistik: manajemen waktu yang baik, istirahat yang cukup, dan tidak ragu mencari bantuan ketika diperlukan."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestion] === undefined) {
      toast({
        title: "Pilih Jawaban",
        description: "Mohon pilih salah satu jawaban sebelum melanjutkan.",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correct ? score + 1 : score;
    }, 0);
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Luar biasa! Anda memiliki pemahaman yang sangat baik tentang pendidikan.";
    if (percentage >= 60) return "Bagus! Anda sudah memiliki pemahaman yang cukup baik.";
    if (percentage >= 40) return "Cukup baik, tetapi masih ada ruang untuk perbaikan.";
    return "Jangan berkecil hati! Terus belajar dan tingkatkan pemahaman Anda.";
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Kuis Selesai!
            </h1>
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {score}/{questions.length}
            </div>
            <p className="text-xl text-gray-600 mb-8">
              {getScoreMessage(score)}
            </p>

            <div className="space-y-6 mb-8">
              {questions.map((question, index) => (
                <div key={question.id} className="text-left border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{question.question}</h3>
                  <div className="flex items-center mb-2">
                    {selectedAnswers[index] === question.correct ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 mr-2" />
                    )}
                    <span className={selectedAnswers[index] === question.correct ? 'text-green-700' : 'text-red-700'}>
                      Jawaban Anda: {question.options[selectedAnswers[index]]}
                    </span>
                  </div>
                  {selectedAnswers[index] !== question.correct && (
                    <div className="text-green-700 mb-2">
                      <strong>Jawaban Benar:</strong> {question.options[question.correct]}
                    </div>
                  )}
                  <p className="text-gray-600 text-sm">{question.explanation}</p>
                </div>
              ))}
            </div>

            <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700">
              <RotateCcw className="w-4 h-4 mr-2" />
              Ulangi Kuis
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Brain className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kuis Pendidikan
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Uji pemahaman Anda tentang konsep-konsep penting dalam dunia pendidikan
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Pertanyaan {currentQuestion + 1} dari {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>

            <RadioGroup 
              value={selectedAnswers[currentQuestion]?.toString() || ""} 
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Sebelumnya
            </Button>
            <Button 
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestion === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranSesi;
