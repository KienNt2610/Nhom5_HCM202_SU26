import { useState } from 'react';

interface SignificanceItem {
  id: string;
  title: string;
  icon: string;
  summary: string;
  content: string[];
}

const significanceItems: SignificanceItem[] = [
  {
    id: 'transformation',
    title: 'Chuyển Biến Tư Tưởng',
    icon: '💡',
    summary: 'Từ chủ nghĩa yêu nước truyền thống đến chủ nghĩa cộng sản khoa học',
    content: [
      'Khởi đầu hành trình, Nguyễn Tất Thành mang trong mình truyền thống yêu nước, ý chí giải phóng dân tộc.',
      'Qua quá trình khảo sát thực tế ở nhiều quốc gia, Người nhận thấy các con đường cứu nước kiểu cũ đều thất bại, không phù hợp với thời đại mới.',
      'Việc tiếp cận Luận cương của Lênin là bước ngoặt quyết định, giúp Người xác định rõ: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản".',
      '"Lúc đầu, chính là chủ nghĩa yêu nước, chứ chưa phải là chủ nghĩa cộng sản đã đưa tôi theo Lênin, tin theo Quốc tế thứ ba."',
    ],
  },
  {
    id: 'nation',
    title: 'Đối Với Lịch Sử Dân Tộc',
    icon: '🏛️',
    summary: 'Đặt nền móng cho sự nghiệp giải phóng dân tộc',
    content: [
      'Hành trình 30 năm là quá trình khảo sát thực tế, học tập lý luận, tiếp cận chủ nghĩa Mác – Lênin, chuyển biến từ lòng yêu nước đến lập trường cộng sản.',
      'Đây là quá trình chuẩn bị về tư tưởng, tổ chức, lực lượng cho sự nghiệp giải phóng dân tộc.',
      'Đặt nền móng cho việc thành lập Đảng Cộng sản Việt Nam và sự ra đời của nước Việt Nam Dân chủ Cộng hòa.',
      'Sự kiện Người trở về nước năm 1941 là bước ngoặt lớn, dẫn đến thắng lợi của Cách mạng tháng Tám 1945.',
    ],
  },
  {
    id: 'world',
    title: 'Đối Với Phong Trào Thế Giới',
    icon: '🌍',
    summary: 'Biểu tượng cho sự kết hợp giữa giải phóng dân tộc và cộng sản quốc tế',
    content: [
      'Hành trình của Hồ Chí Minh là biểu tượng cho sự kết hợp giữa phong trào giải phóng dân tộc và phong trào cộng sản quốc tế.',
      'Người đã góp phần làm phong phú thêm lý luận về cách mạng thuộc địa.',
      'Khẳng định vai trò của các dân tộc bị áp bức trong sự nghiệp giải phóng chung của nhân loại.',
      'Tư tưởng, con đường mà Người lựa chọn đã trở thành nguồn cảm hứng cho nhiều dân tộc thuộc địa trên thế giới.',
    ],
  },
  {
    id: 'combination',
    title: 'Hòa Quyện Chủ Nghĩa',
    icon: '🤝',
    summary: 'Kết hợp chủ nghĩa yêu nước với chủ nghĩa quốc tế',
    content: [
      'Hồ Chí Minh đã kết hợp một cách nhuần nhuyễn chủ nghĩa yêu nước truyền thống với chủ nghĩa quốc tế của giai cấp công nhân.',
      'Tạo nên một hệ tư tưởng cách mạng độc đáo, phù hợp với hoàn cảnh Việt Nam.',
      'Chính sự hòa quyện này đã tạo nên sức mạnh tư tưởng, động lực hành động cho cả dân tộc.',
      'Những giá trị này vẫn còn nguyên giá trị trong công cuộc xây dựng và bảo vệ Tổ quốc.',
    ],
  },
  {
    id: 'lessons',
    title: 'Bài Học Lịch Sử',
    icon: '📚',
    summary: 'Những bài học quý báu cho thế hệ hôm nay',
    content: [
      'Bài học về tầm nhìn chiến lược, về sự kiên định mục tiêu độc lập dân tộc.',
      'Bài học về vai trò của lý luận cách mạng, về xây dựng tổ chức, lực lượng.',
      'Bài học về xác định thời cơ và chớp thời cơ cách mạng.',
      'Những bài học này vẫn còn nguyên giá trị trong công cuộc xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.',
    ],
  },
  {
    id: 'party',
    title: 'Thành Lập Đảng',
    icon: '⭐',
    summary: 'Xác định con đường cách mạng duy nhất đúng đắn',
    content: [
      'Sự ra đời của Đảng Cộng sản Việt Nam đã chấm dứt tình trạng khủng hoảng về đường lối cứu nước.',
      'Xác định rõ con đường cách mạng vô sản, đặt nền móng cho sự nghiệp giải phóng dân tộc, thống nhất đất nước.',
      'Vai trò của Nguyễn Ái Quốc trong việc hợp nhất các tổ chức cộng sản là vô cùng to lớn.',
      'Thể hiện tầm nhìn chiến lược và bản lĩnh của một lãnh tụ thiên tài.',
    ],
  },
];

export function Significance() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <section
      id="significance"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(42, 24, 16, 0.97), rgba(42, 24, 16, 0.99)), url('/images/Địa điểm/Đảng Cộng Sản Việt Nam.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/30">
            ✨ Ý nghĩa lịch sử
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Giá Trị <span className="text-primary">Thời Đại</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Hành trình này không chỉ là câu chuyện của một con người mà còn là biểu tượng cho khát vọng độc lập của cả
            dân tộc
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {significanceItems.map((item) => (
            <div key={item.id} className="rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-primary/30 transition-all">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.summary}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-primary transition-transform mt-1 ${openItems.includes(item.id) ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItems.includes(item.id) && (
                <div className="px-6 pb-6 pl-16 space-y-2 animate-in slide-in-from-top-2 duration-300">
                  {item.content.map((paragraph, idx) => (
                    <p key={idx} className="text-white/70 text-sm leading-relaxed">
                      {paragraph.startsWith('"') ? <span className="italic text-primary/80">{paragraph}</span> : paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Quote */}
        <div className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30">
          <blockquote className="text-center">
            <p className="text-lg md:text-2xl font-semibold text-white mb-4 italic">
              "Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi, đấy là tất cả những điều tôi muốn, đấy là tất cả những
              điều tôi hiểu"
            </p>
            <p className="text-base italic text-primary">— Hồ Chí Minh —</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
