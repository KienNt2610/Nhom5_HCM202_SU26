import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizSet {
  id: number;
  title: string;
  level: 'Cơ bản' | 'Trung bình' | 'Khá' | 'Nâng cao' | 'Thử thách';
  description: string;
  questions: Question[];
}

const quizSets: QuizSet[] = [
  {
    id: 1,
    title: 'Bộ 1: Những bước chân đầu tiên',
    level: 'Cơ bản',
    description: 'Kiểm tra kiến thức cơ bản về giai đoạn đầu hành trình cứu nước',
    questions: [
      {
        id: 1,
        question: 'Nguyễn Tất Thành rời Bến Nhà Rồng ra đi tìm đường cứu nước vào năm nào?',
        options: ['1910', '1911', '1912', '1913'],
        correctIndex: 1,
        explanation: 'Ngày 5/6/1911, Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville rời Bến Nhà Rồng.',
      },
      {
        id: 2,
        question: 'Khi làm phụ bếp trên tàu, Nguyễn Tất Thành lấy tên là gì?',
        options: ['Nguyễn Ái Quốc', 'Văn Ba', 'Hồ Chí Minh', 'Lý Thụy'],
        correctIndex: 1,
        explanation: 'Người lấy tên Văn Ba khi làm phụ bếp trên tàu Amiral Latouche-Tréville.',
      },
      {
        id: 3,
        question: 'Bến Nhà Rồng nằm ở đâu?',
        options: ['Hà Nội', 'Huế', 'Sài Gòn', 'Hải Phòng'],
        correctIndex: 2,
        explanation: 'Bến Nhà Rồng nằm bên bờ sông Sài Gòn, nay thuộc TP. Hồ Chí Minh.',
      },
      {
        id: 4,
        question: 'Mục đích chính của Nguyễn Tất Thành khi ra đi tìm đường cứu nước là gì?',
        options: [
          'Du lịch thế giới',
          'Học tập ở nước ngoài',
          'Tìm hiểu các nước phương Tây để tìm con đường giải phóng dân tộc',
          'Buôn bán quốc tế',
        ],
        correctIndex: 2,
        explanation: 'Người ra đi với mong muốn tìm hiểu vì sao nước Pháp mạnh để về giúp nước.',
      },
      {
        id: 5,
        question: 'Tàu Amiral Latouche-Tréville đi theo hướng nào sau khi rời Việt Nam?',
        options: ['Châu Úc', 'Châu Phi và Châu Âu', 'Châu Mỹ', 'Nhật Bản'],
        correctIndex: 1,
        explanation: 'Tàu đi qua các cảng ở châu Phi trước khi đến Pháp.',
      },
      {
        id: 6,
        question: 'Nguyễn Tất Thành sinh năm bao nhiêu?',
        options: ['1888', '1889', '1890', '1891'],
        correctIndex: 2,
        explanation: 'Nguyễn Tất Thành sinh ngày 19/5/1890 tại Nghệ An.',
      },
    ],
  },
  {
    id: 2,
    title: 'Bộ 2: Những năm tháng Âu Mỹ',
    level: 'Trung bình',
    description: 'Khám phá thời kỳ Người ở Mỹ, Anh và châu Âu',
    questions: [
      {
        id: 1,
        question: 'Tại London, Nguyễn Tất Thành làm việc ở khách sạn nổi tiếng nào?',
        options: ['Ritz', 'Carlton', 'Savoy', 'Dorchester'],
        correctIndex: 1,
        explanation: 'Người làm phụ bếp tại khách sạn Carlton ở London.',
      },
      {
        id: 2,
        question: 'Sự kiện lịch sử thế giới nào năm 1917 ảnh hưởng lớn đến tư tưởng của Người?',
        options: [
          'Thế chiến I kết thúc',
          'Cách mạng Tháng Mười Nga',
          'Thành lập Hội Quốc Liên',
          'Đại khủng hoảng kinh tế',
        ],
        correctIndex: 1,
        explanation: 'Cách mạng Tháng Mười Nga 1917 thắng lợi mở ra con đường cứu nước mới.',
      },
      {
        id: 3,
        question: 'Bản yêu sách của nhân dân An Nam được gửi đến hội nghị nào?',
        options: ['Hội nghị Paris', 'Hội nghị Versailles', 'Hội nghị Geneva', 'Hội nghị Berlin'],
        correctIndex: 1,
        explanation: 'Năm 1919, Nguyễn Ái Quốc gửi bản yêu sách đến Hội nghị Versailles.',
      },
      {
        id: 4,
        question: 'Nguyễn Ái Quốc lần đầu sử dụng tên này vào năm nào?',
        options: ['1917', '1918', '1919', '1920'],
        correctIndex: 2,
        explanation: 'Năm 1919, khi gửi Bản yêu sách, Người lần đầu ký tên Nguyễn Ái Quốc.',
      },
      {
        id: 5,
        question: 'Tại Anh, Người thường đọc sách ở đâu?',
        options: ['Thư viện Hoàng gia', 'Hyde Park', 'Bảo tàng Anh', 'Đại học Oxford'],
        correctIndex: 1,
        explanation: 'Người thường đọc sách ở Hyde Park và tham dự các buổi diễn thuyết ngoài trời.',
      },
      {
        id: 6,
        question: 'Người gia nhập Đảng Xã hội Pháp vào năm nào?',
        options: ['1917', '1918', '1919', '1920'],
        correctIndex: 2,
        explanation: 'Năm 1919, Nguyễn Ái Quốc gia nhập Đảng Xã hội Pháp.',
      },
    ],
  },
  {
    id: 3,
    title: 'Bộ 3: Hoạt động tại Pháp',
    level: 'Khá',
    description: 'Tìm hiểu thời kỳ hoạt động sôi nổi tại Pháp',
    questions: [
      {
        id: 1,
        question: 'Đại hội Tours diễn ra vào năm nào?',
        options: ['1919', '1920', '1921', '1922'],
        correctIndex: 1,
        explanation: 'Tháng 12/1920, Đại hội Tours của Đảng Xã hội Pháp được tổ chức.',
      },
      {
        id: 2,
        question: 'Tại Đại hội Tours, Nguyễn Ái Quốc bỏ phiếu tán thành điều gì?',
        options: [
          'Gia nhập Quốc tế II',
          'Gia nhập Quốc tế III (Quốc tế Cộng sản)',
          'Độc lập khỏi các quốc tế',
          'Thành lập Quốc tế mới',
        ],
        correctIndex: 1,
        explanation: 'Người bỏ phiếu tán thành gia nhập Quốc tế III của Lênin.',
      },
      {
        id: 3,
        question: 'Báo Le Paria (Người cùng khổ) được ra số đầu tiên vào năm nào?',
        options: ['1920', '1921', '1922', '1923'],
        correctIndex: 2,
        explanation: 'Báo Le Paria được ra số đầu tiên vào tháng 4/1922.',
      },
      {
        id: 4,
        question: 'Sau Đại hội Tours, Nguyễn Ái Quốc trở thành một trong những người sáng lập đảng nào?',
        options: ['Đảng Xã hội Pháp', 'Đảng Cộng sản Pháp', 'Đảng Lao động Pháp', 'Đảng Cấp tiến Pháp'],
        correctIndex: 1,
        explanation: 'Người là một trong những người sáng lập Đảng Cộng sản Pháp.',
      },
      {
        id: 5,
        question: "Tác phẩm 'Bản án chế độ thực dân Pháp' được xuất bản năm nào?",
        options: ['1923', '1924', '1925', '1926'],
        correctIndex: 2,
        explanation: 'Bản án chế độ thực dân Pháp được xuất bản năm 1925.',
      },
      {
        id: 6,
        question: 'Luận cương của Lênin mà Người đọc năm 1920 nói về vấn đề gì?',
        options: ['Kinh tế chính trị', 'Dân tộc và thuộc địa', 'Đấu tranh giai cấp', 'Cách mạng vô sản'],
        correctIndex: 1,
        explanation: "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa' của Lênin.",
      },
    ],
  },
  {
    id: 4,
    title: 'Bộ 4: Từ Liên Xô đến Trung Quốc',
    level: 'Nâng cao',
    description: 'Giai đoạn quan trọng chuẩn bị lực lượng cách mạng',
    questions: [
      {
        id: 1,
        question: 'Nguyễn Ái Quốc học tập tại trường nào ở Liên Xô?',
        options: ['Đại học Lomonosov', 'Đại học Phương Đông', 'Đại học Quốc tế Lenin', 'Đại học Nhân dân'],
        correctIndex: 1,
        explanation: 'Người học tập tại Đại học Phương Đông (Đại học Cộng sản Phương Đông) ở Moskva.',
      },
      {
        id: 2,
        question: 'Hội Việt Nam Cách mạng Thanh niên được thành lập vào năm nào?',
        options: ['1924', '1925', '1926', '1927'],
        correctIndex: 1,
        explanation: 'Tháng 6/1925, Hội Việt Nam Cách mạng Thanh niên được thành lập tại Quảng Châu.',
      },
      {
        id: 3,
        question: "Sách 'Đường Kách Mệnh' được xuất bản năm nào?",
        options: ['1925', '1926', '1927', '1928'],
        correctIndex: 2,
        explanation: 'Đường Kách Mệnh được xuất bản năm 1927, tập hợp các bài giảng của Người.',
      },
      {
        id: 4,
        question: 'Tại Quảng Châu, Người mở lớp huấn luyện cho ai?',
        options: [
          'Công nhân Trung Quốc',
          'Thanh niên yêu nước Việt Nam',
          'Sinh viên Đông Dương',
          'Nông dân châu Á',
        ],
        correctIndex: 1,
        explanation: 'Người mở các lớp huấn luyện chính trị cho thanh niên yêu nước Việt Nam.',
      },
      {
        id: 5,
        question: 'Đảng Cộng sản Việt Nam được thành lập vào ngày tháng năm nào?',
        options: ['3/2/1929', '3/2/1930', '19/5/1930', '2/9/1930'],
        correctIndex: 1,
        explanation: 'Ngày 3/2/1930, Đảng Cộng sản Việt Nam được thành lập tại Cửu Long, Hồng Kông.',
      },
      {
        id: 6,
        question: 'Hội nghị hợp nhất các tổ chức cộng sản diễn ra ở đâu?',
        options: ['Quảng Châu', 'Hồng Kông', 'Moskva', 'Bangkok'],
        correctIndex: 1,
        explanation: 'Hội nghị diễn ra tại Cửu Long (Kowloon), Hồng Kông.',
      },
    ],
  },
  {
    id: 5,
    title: 'Bộ 5: Tổng kết hành trình 30 năm',
    level: 'Thử thách',
    description: 'Bộ câu hỏi tổng hợp đầy thử thách cho những ai am hiểu',
    questions: [
      {
        id: 1,
        question: 'Nguyễn Ái Quốc trở về Việt Nam vào ngày tháng năm nào?',
        options: ['28/1/1940', '28/1/1941', '19/5/1941', '2/9/1941'],
        correctIndex: 1,
        explanation: 'Ngày 28/1/1941, sau 30 năm bôn ba, Người trở về Tổ quốc.',
      },
      {
        id: 2,
        question: 'Nơi Bác Hồ chọn làm căn cứ khi về nước là đâu?',
        options: ['Bắc Sơn', 'Pác Bó', 'Việt Bắc', 'Tân Trào'],
        correctIndex: 1,
        explanation: 'Người chọn hang Pác Bó (Cao Bằng) làm nơi ở và hoạt động cách mạng.',
      },
      {
        id: 3,
        question: 'Hội nghị Trung ương 8 (tháng 5/1941) quyết định thành lập tổ chức nào?',
        options: [
          'Hội Việt Nam Cách mạng Thanh niên',
          'Mặt trận Việt Minh',
          'Mặt trận Liên Việt',
          'Đảng Lao động',
        ],
        correctIndex: 1,
        explanation: 'Hội nghị TW 8 (5/1941) quyết định thành lập Mặt trận Việt Minh.',
      },
      {
        id: 4,
        question: 'Trong 30 năm, Nguyễn Ái Quốc đã đặt chân đến khoảng bao nhiêu quốc gia?',
        options: ['Hơn 10 nước', 'Hơn 20 nước', 'Gần 30 nước', 'Hơn 40 nước'],
        correctIndex: 2,
        explanation: 'Trong 30 năm, Người đã đến gần 30 quốc gia trên thế giới.',
      },
      {
        id: 5,
        question: 'Cương lĩnh cách mạng đầu tiên của Đảng bao gồm những văn kiện nào?',
        options: [
          'Chính cương, Sách lược, Điều lệ vắn tắt',
          'Tuyên ngôn, Chính cương, Điều lệ',
          'Sách lược, Tuyên ngôn, Hiến pháp',
          'Điều lệ, Hiến pháp, Chính cương',
        ],
        correctIndex: 0,
        explanation: 'Cương lĩnh gồm: Chính cương vắn tắt, Sách lược vắn tắt, Điều lệ vắn tắt.',
      },
      {
        id: 6,
        question:
          'Điểm khác biệt lớn nhất giữa con đường cứu nước của Nguyễn Ái Quốc so với các bậc tiền bối là gì?',
        options: [
          'Đi về hướng Đông',
          'Đi về hướng Tây, kết hợp chủ nghĩa Mác-Lênin với thực tiễn Việt Nam',
          'Dựa vào Nhật Bản',
          'Chỉ hoạt động trong nước',
        ],
        correctIndex: 1,
        explanation: 'Người đi về phương Tây, tiếp thu chủ nghĩa Mác-Lênin và vận dụng sáng tạo vào Việt Nam.',
      },
    ],
  },
];

const levelColors: Record<string, string> = {
  'Cơ bản': 'from-green-500 to-emerald-600',
  'Trung bình': 'from-blue-500 to-cyan-600',
  Khá: 'from-purple-500 to-violet-600',
  'Nâng cao': 'from-orange-500 to-amber-600',
  'Thử thách': 'from-red-500 to-rose-600',
};

const levelBgColors: Record<string, string> = {
  'Cơ bản': 'bg-green-500/5 border-green-500/20 hover:border-green-500/40 hover:bg-green-500/10',
  'Trung bình': 'bg-blue-500/5 border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/10',
  Khá: 'bg-purple-500/5 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10',
  'Nâng cao': 'bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40 hover:bg-orange-500/10',
  'Thử thách': 'bg-red-500/5 border-red-500/20 hover:border-red-500/40 hover:bg-red-500/10',
};

export function QuizSection() {
  const [activeQuiz, setActiveQuiz] = useState<QuizSet | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = (quiz: QuizSet) => {
    setActiveQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null || !activeQuiz) return;

    const isCorrect = selectedAnswer === activeQuiz.questions[currentQuestionIndex].correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (!activeQuiz) return;

    if (currentQuestionIndex < activeQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const closeQuiz = () => {
    setActiveQuiz(null);
    setQuizCompleted(false);
  };

  const currentQuestion = activeQuiz?.questions[currentQuestionIndex];

  return (
    <section id="quiz" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            📚 Kiểm tra kiến thức
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Bạn đã hiểu bao nhiêu?
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
            5 bộ câu hỏi từ dễ đến khó giúp bạn ôn lại kiến thức về hành trình 30 năm bôn ba của Bác Hồ
          </p>
        </div>

        {/* Quiz Grid */}
        {!activeQuiz && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {quizSets.map((quiz, index) => (
              <button
                key={quiz.id}
                onClick={() => startQuiz(quiz)}
                className={`group text-left p-5 lg:p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${levelBgColors[quiz.level]}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${levelColors[quiz.level]}`}
                  >
                    {quiz.level}
                  </span>
                  <span className="text-muted-foreground text-sm">6 câu hỏi</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {quiz.title}
                </h3>
                <p className="text-muted-foreground text-sm">{quiz.description}</p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  Bắt đầu
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Quiz Modal */}
        {activeQuiz && !quizCompleted && currentQuestion && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card rounded-2xl lg:rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
              {/* Quiz Header */}
              <div className={`p-4 lg:p-6 bg-gradient-to-r ${levelColors[activeQuiz.level]} rounded-t-2xl lg:rounded-t-3xl`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm">{activeQuiz.title}</p>
                    <p className="text-white text-lg font-bold">
                      Câu {currentQuestionIndex + 1} / {activeQuiz.questions.length}
                    </p>
                  </div>
                  <button
                    onClick={closeQuiz}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-500"
                    style={{ width: `${((currentQuestionIndex + 1) / activeQuiz.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-foreground mb-6 leading-relaxed">
                  {currentQuestion.question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    let optionClass = 'border-border bg-background hover:bg-muted hover:border-primary/30';

                    if (showResult) {
                      if (index === currentQuestion.correctIndex) {
                        optionClass = 'border-green-500 bg-green-500/10';
                      } else if (index === selectedAnswer && index !== currentQuestion.correctIndex) {
                        optionClass = 'border-red-500 bg-red-500/10';
                      }
                    } else if (index === selectedAnswer) {
                      optionClass = 'border-primary bg-primary/10';
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                        className={`w-full text-left p-3 lg:p-4 rounded-xl border-2 transition-all duration-300 ${optionClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
                            ${
                              showResult && index === currentQuestion.correctIndex
                                ? 'bg-green-500 text-white'
                                : showResult && index === selectedAnswer
                                  ? 'bg-red-500 text-white'
                                  : index === selectedAnswer
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="text-foreground flex-1 text-sm lg:text-base">{option}</span>
                          {showResult && index === currentQuestion.correctIndex && (
                            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {showResult && index === selectedAnswer && index !== currentQuestion.correctIndex && (
                            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div
                    className={`mt-6 p-4 rounded-xl ${
                      selectedAnswer === currentQuestion.correctIndex
                        ? 'bg-green-500/10 border border-green-500/30'
                        : 'bg-primary/10 border border-primary/30'
                    }`}
                  >
                    <p className="text-sm font-medium text-foreground mb-1">
                      {selectedAnswer === currentQuestion.correctIndex ? '🎉 Chính xác!' : '💡 Giải thích:'}
                    </p>
                    <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  {!showResult ? (
                    <button
                      onClick={submitAnswer}
                      disabled={selectedAnswer === null}
                      className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Xác nhận
                    </button>
                  ) : (
                    <button
                      onClick={nextQuestion}
                      className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                    >
                      {currentQuestionIndex < activeQuiz.questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Modal */}
        {quizCompleted && activeQuiz && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card rounded-2xl lg:rounded-3xl w-full max-w-lg border border-border shadow-2xl overflow-hidden">
              <div className={`p-6 lg:p-8 bg-gradient-to-r ${levelColors[activeQuiz.level]} text-center`}>
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-3xl lg:text-4xl">{score >= 5 ? '🏆' : score >= 3 ? '🌟' : '📚'}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {score >= 5 ? 'Xuất sắc!' : score >= 3 ? 'Khá tốt!' : 'Cần cố gắng thêm!'}
                </h3>
                <p className="text-white/80">Bạn đã hoàn thành {activeQuiz.title}</p>
              </div>

              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/50 mb-6">
                  <div className="text-center">
                    <span className="text-3xl lg:text-4xl font-black text-primary">{score}</span>
                    <span className="text-muted-foreground text-lg">/{activeQuiz.questions.length}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {score === 6
                    ? 'Hoàn hảo! Bạn nắm vững kiến thức về giai đoạn này!'
                    : score >= 4
                      ? 'Tốt lắm! Bạn đã hiểu khá rõ về lịch sử.'
                      : score >= 2
                        ? 'Bạn cần ôn lại thêm một số kiến thức.'
                        : 'Hãy đọc lại nội dung và thử lại nhé!'}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => startQuiz(activeQuiz)}
                    className="flex-1 py-3 px-6 rounded-xl border-2 border-border text-foreground font-medium hover:bg-muted transition-colors"
                  >
                    Làm lại
                  </button>
                  <button
                    onClick={closeQuiz}
                    className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

