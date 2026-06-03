import { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string[];
}

const backgroundContent: AccordionItem[] = [
  {
    id: 'context',
    title: 'Bối Cảnh Đầu Thế Kỷ XX',
    content: [
      'Đầu thế kỷ XX, Việt Nam chìm trong ách thống trị của thực dân Pháp và phong kiến tay sai.',
      'Các phong trào yêu nước liên tiếp nổ ra – từ Cần Vương, Đông Du, Đông Kinh Nghĩa Thục, đến các cuộc khởi nghĩa nông dân – nhưng đều thất bại, rơi vào bế tắc.',
      'Sự thất bại này xuất phát từ việc thiếu một đường lối chính trị đúng đắn, thiếu sự lãnh đạo của một giai cấp tiên tiến, và chưa có sự kết hợp giữa chủ nghĩa yêu nước với chủ nghĩa quốc tế của giai cấp công nhân.',
    ],
  },
  {
    id: 'predecessors',
    title: 'Các Bậc Tiền Bối',
    content: [
      'Phan Bội Châu (1867-1940): Chủ trương cầu viện Nhật Bản theo phong trào Đông Du, đưa thanh niên sang Nhật học tập với hy vọng nhờ sự giúp đỡ của Nhật để đánh đuổi thực dân Pháp.',
      'Phan Châu Trinh (1872-1926): Chủ trương cải lương, dựa vào Pháp để cải cách xã hội, nâng cao dân trí, dân quyền một cách ôn hòa.',
      'Hoàng Hoa Thám (1858-1913): Lãnh đạo khởi nghĩa Yên Thế, kiên cường đấu tranh vũ trang chống Pháp nhưng theo kiểu cũ.',
      'Nguyễn Tất Thành không hoàn toàn tán thành các phương hướng này. Người lựa chọn một hướng đi mới: sang phương Tây.',
    ],
  },
  {
    id: 'motivation',
    title: 'Động Lực Ra Đi',
    content: [
      '"Khi tôi độ mười ba tuổi, lần đầu tiên tôi được nghe ba chữ Pháp: Tự do, Bình đẳng, Bác ái..."',
      '"Đối với chúng tôi, người da trắng nào cũng là người Pháp. Người Pháp đã nói thế. Và từ thuở ấy, tôi rất muốn làm quen với nền văn minh Pháp, muốn tìm xem những gì ẩn dấu đằng sau những chữ ấy..."',
      '"Tôi quyết định tìm cách đi ra nước ngoài" – Người ra đi với mục đích rõ ràng: "Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi, đấy là tất cả những điều tôi muốn."',
    ],
  },
  {
    id: 'realization',
    title: 'Nhận Thức Đầu Tiên',
    content: [
      'Qua quá trình khảo sát thực tế ở nhiều quốc gia, Người nhận thấy các con đường cứu nước kiểu cũ đều thất bại.',
      'Người rút ra kết luận: "Dù màu da có khác nhau, trên đời này chỉ có hai giống người: giống người bóc lột và giống người bị bóc lột."',
      '"Mà cũng chỉ có một mối tình hữu ái là thật mà thôi: tình hữu ái vô sản."',
      'Sự tiếp xúc với phong trào công nhân quốc tế và Cách mạng Tháng Mười Nga đã giúp Người nhận ra: chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng được các dân tộc bị áp bức.',
    ],
  },
];

export function BackgroundSection() {
  const [openItems, setOpenItems] = useState<string[]>(['context']);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <section
      id="background"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.9)), url('/images/Nhân Vật/Phan Bội Châu.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            📖 Bối cảnh lịch sử
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Khủng Hoảng <span className="text-primary">Đường Lối</span> Cứu Nước
          </h2>
          <p className="text-foreground/80 text-lg max-w-3xl mx-auto">
            Bối cảnh lịch sử và những động lực thôi thúc Nguyễn Tất Thành ra đi tìm đường cứu nước
          </p>
        </div>

        {/* Predecessors Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: 'Phan Bội Châu',
              years: '1867-1940',
              approach: 'Đông Du - Cầu viện Nhật Bản',
              image: '/images/Nhân Vật/Phan Bội Châu.jpg',
            },
            {
              name: 'Phan Châu Trinh',
              years: '1872-1926',
              approach: 'Cải lương - Dựa vào Pháp',
              image: '/images/Nhân Vật/Phan Châu Trinh.jpg',
            },
            {
              name: 'Hoàng Hoa Thám',
              years: '1858-1913',
              approach: 'Khởi nghĩa vũ trang kiểu cũ',
              image: '/images/Nhân Vật/Hoàng Hoa Thám.jpg',
            },
          ].map((person) => (
            <div
              key={person.name}
              className="relative rounded-xl overflow-hidden border border-border group hover:border-primary/40 transition-all bg-white"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={person.image}
                  alt={person.name}
                  className={`w-full h-full ${
                    person.name === 'Hoàng Hoa Thám' 
                      ? 'object-contain object-top' 
                      : 'object-cover'
                  } group-hover:scale-110 transition-transform duration-500`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-foreground font-bold text-lg drop-shadow-sm">{person.name}</h3>
                <p className="text-foreground/70 text-sm">{person.years}</p>
                <p className="text-primary text-sm mt-1">{person.approach}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {backgroundContent.map((item) => (
            <div key={item.id} className="rounded-xl border border-border overflow-hidden bg-card shadow-sm">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <svg
                  className={`w-5 h-5 text-primary transition-transform ${openItems.includes(item.id) ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItems.includes(item.id) && (
                <div className="px-6 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-300">
                  {item.content.map((paragraph, idx) => (
                    <p key={idx} className="text-foreground/80 leading-relaxed">
                      {paragraph.startsWith('"') ? <span className="italic text-primary/80">{paragraph}</span> : paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

