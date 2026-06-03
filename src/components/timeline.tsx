import { TimelineItem } from '@/components/timeline-item';

type Timeline = {
  year: string;
  date: string;
  title: string;
  location: string;
  description: string;
  image: string;
  side: 'left' | 'right';
};

const timelineData: Timeline[] = [
  {
    year: '1911',
    date: '5-6-1911',
    title: 'Bến Nhà Rồng - Khởi Hành',
    location: 'Sài Gòn, Việt Nam',
    description:
      'Nguyễn Tất Thành lên tàu Amiral Latouche Tréville, rời Bến Nhà Rồng để bắt đầu hành trình tìm đường cứu nước. Đây là bước ngoặt lớn đầu tiên không chỉ trong cuộc đời của một con người mà còn đối với lịch sử của cả dân tộc Việt Nam.',
    image: '/images/ben-nha-rong-1911.jpg',
    side: 'left',
  },
  {
    year: '1911-1912',
    date: '6-7-1911',
    title: 'Marseille - Bước Chân Châu Âu',
    location: 'Marseille, Pháp',
    description:
      "Tàu cập cảng Marseille. Nguyễn Tất Thành chính thức bước chân vào nước Pháp - trung tâm của chủ nghĩa tư bản và nơi sản sinh những tư tưởng 'Tự do, Bình đẳng, Bác ái'. Người làm vườn tại Sainte-Adresse, chờ cơ hội tiếp tục hành trình.",
    image: '/images/marseille-port-1911.jpg',
    side: 'right',
  },
  {
    year: '1912',
    date: 'Đầu 1912',
    title: 'Hành Trình Vòng Quanh Thế Giới',
    location: 'Bắc Phi, Tây Phi, Châu Mỹ',
    description:
      'Nguyễn Tất Thành đi qua Tây Ban Nha, Bồ Đào Nha, các thuộc địa Pháp ở Bắc Phi: Ai Cập, Algérie, Tunisia, Congo, Sénégal, Guinée, Dahomey. Tiếp tục qua Martinique, Argentina, Uruguay, Mỹ. Tại mỗi nơi, Người quan sát, tìm hiểu đời sống người lao động, chứng kiến cảnh khổ cực của các dân tộc bị áp bức.',
    image: '/images/african-colonial-territories-1912.jpg',
    side: 'left',
  },
  {
    year: '1913-1917',
    date: 'Giữa 1913 - 1917',
    title: 'London - Học Tập Từ Thực Tiễn',
    location: 'London, Anh',
    description:
      'Nguyễn Tất Thành trở lại Le Havre, sau đó đến nước Anh. Làm nhiều nghề: cào tuyết, đốt than, làm phụ bếp tại khách sạn Carlton nổi tiếng ở London. Bốn năm ở đây giúp Người hiểu bản chất bóc lột của chủ nghĩa tư bản, tích cực học tiếng Anh, đọc sách ở Hyde Park, tham dự các buổi diễn thuyết ngoài trời.',
    image: '/images/london-carlton-hotel-1915.jpg',
    side: 'right',
  },
  {
    year: '1917-1920',
    date: 'Cuối 1917 - 1920',
    title: 'Paris - Tham Gia Phong Trào Công Nhân',
    location: 'Paris, Pháp',
    description:
      "Nguyễn Tất Thành trở lại Pháp. Sống tại các khu lao động: phố Charonne, Villa des Gobelins, ngõ Compoint. Làm phụ bếp, thợ ảnh, vẽ thuê. Gia nhập Đảng Xã hội Pháp năm 1919. Tích cực viết báo đăng trên L'Humanité, Le Paria lên án thực dân.",
    image: '/images/paris-1920.jpg',
    side: 'left',
  },
  {
    year: '1919',
    date: '18-6-1919',
    title: 'Versailles - Tiếng Nói Quốc Tế',
    location: 'Versailles, Pháp',
    description:
      "Gửi 'Yêu sách 8 điểm' tới Hội nghị Hòa bình Versailles thay mặt nhân dân An Nam. Mặc dù không được đáp ứng, bản yêu sách đã gây tiếng vang lớn, in thành 6000 bản, phát tại các cuộc mít tinh, đánh dấu sự xuất hiện lần đầu của Nguyễn Ái Quốc trên vũ đài chính trị quốc tế.",
    image: '/images/treaty-of-versailles-1919.jpg',
    side: 'right',
  },
  {
    year: '1920',
    date: 'Mùa Hè - 12-1920',
    title: 'Tiếp Cận Chủ Nghĩa Mác - Lênin',
    location: 'Paris, Pháp',
    description:
      "Đọc 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc' của Lênin - bước ngoặt tư tưởng. Người xúc động: 'Luận cương của Lênin làm cho tôi rất cảm động, sáng tỏ, tin tưởng biết bao!' Tháng 12/1920, tại Đại hội Tours, Nguyễn Ái Quốc trở thành một trong những người sáng lập Đảng Cộng sản Pháp.",
    image: '/images/lenin-portrait-theory-communism.jpg',
    side: 'left',
  },
  {
    year: '1923',
    date: '30-6-1923',
    title: 'Moskva - Trường Đại Học Cách Mạng',
    location: 'Moskva, Liên Xô',
    description:
      'Nguyễn Ái Quốc đến Petrogrado, sau đó Moskva. Học tập tại Trường Đại học Phương Đông của Quốc tế Cộng sản. Tham dự Đại hội V Quốc tế Cộng sản, các Đại hội về nông dân, công hội, thanh niên. Viết nhiều bài báo lên án tội ác thực dân, truyền bá chủ nghĩa Mác - Lênin.',
    image: '/images/moscow-kremlin-1923.jpg',
    side: 'right',
  },
  {
    year: '1924-1927',
    date: '11-11-1924 - 1927',
    title: 'Quảng Châu - Đào Tạo Cán Bộ',
    location: 'Quảng Châu, Trung Quốc',
    description:
      "Nguyễn Ái Quốc về Quảng Châu, trung tâm của cách mạng châu Á. Mở các lớp huấn luyện chính trị, đào tạo thanh niên Việt Nam. Năm 1925, sáng lập Hội Việt Nam Cách mạng Thanh niên. Xuất bản báo Thanh niên (1925) và 'Đường Kách mệnh' (1927) - cuốn sách giáo khoa chính trị đầu tiên của cách mạng Việt Nam.",
    image: '/images/canton-guangzhou-1924.jpg',
    side: 'left',
  },
  {
    year: '1930',
    date: '6-1 đến 8-2-1930',
    title: 'Hương Cảng - Thành Lập Đảng',
    location: 'Hương Cảng (Hồng Kông), Trung Quốc',
    description:
      'Nguyễn Ái Quốc triệu tập Hội nghị hợp nhất các tổ chức cộng sản. Hội nghị đã nhất trí thành lập Đảng Cộng sản Việt Nam, thông qua các văn kiện quan trọng: Chính cương vắn tắt, Sách lược vắn tắt, Điều lệ vắn tắt - hợp thành Cương lĩnh cách mạng đầu tiên.',
    image: '/images/hong-kong-harbor-1930.jpg',
    side: 'right',
  },
  {
    year: '1941',
    date: '28-1-1941',
    title: 'Pác Bó - Trở Về Tổ Quốc',
    location: 'Pác Bó, Cao Bằng, Việt Nam',
    description:
      'Nguyễn Ái Quốc vượt biên giới Việt - Trung, về đến Pác Bó (Cao Bằng), kết thúc hành trình 30 năm tìm đường cứu nước. Sự kiện này mở ra thời kỳ phát triển mới, chuẩn bị cho Cách mạng tháng Tám 1945 và sinh nước Việt Nam Dân chủ Cộng hòa.',
    image: '/images/pac-bo-cave-cao-bang-mountain-landscape-vietnam.jpg',
    side: 'left',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 px-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-primary/40 to-secondary transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
