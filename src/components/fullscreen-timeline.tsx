import { useEffect, useRef, useState } from 'react';

interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  image: string;
  details: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1911',
    date: '5 tháng 6, 1911',
    title: 'Khởi Hành Từ Bến Nhà Rồng',
    subtitle: 'Bước ngoặt lớn đầu tiên',
    description:
      'Nguyễn Tất Thành với tên gọi Văn Ba lên tàu Amiral Latouche Tréville, chính thức bắt đầu hành trình tìm đường cứu nước.',
    location: 'Bến Nhà Rồng, Sài Gòn',
    image: '/images/Địa điểm/Tàu Amiral Latouche_Tréville.jpeg',
    details: [
      'Làm phụ bếp với mức lương 45 franc/tháng',
      'Tàu đi qua Singapore, Colombo, Port Said',
      'Cập cảng Marseille ngày 6/7/1911',
    ],
  },
  {
    year: '1911-1912',
    date: 'Cuối 1911 - 1912',
    title: 'Hành Trình Vòng Quanh Thế Giới',
    subtitle: 'Khảo sát thực tế các châu lục',
    description:
      'Đi qua nhiều quốc gia thuộc địa ở châu Phi, châu Mỹ, chứng kiến cảnh khổ cực của người dân bị áp bức.',
    location: 'Châu Phi, Châu Mỹ, Châu Âu',
    image: '/images/colonial-africa-egypt-tunisia.jpg',
    details: [
      'Đi qua Ai Cập, Algérie, Tunisia, Congo, Sénégal',
      'Qua Martinique, Argentina, Uruguay, Mỹ',
      'Quan sát đời sống người lao động khắp nơi',
    ],
  },
  {
    year: '1913-1917',
    date: 'Giữa 1913 - 1917',
    title: 'Những Năm Tháng Tại Anh',
    subtitle: 'Học tập từ thực tiễn',
    description:
      'Làm phụ bếp tại khách sạn Carlton, tham gia Hội những người lao động hải ngoại, đọc sách tại Hyde Park.',
    location: 'London, Anh',
    image: '/images/Bac_tai_Anh.jpg',
    details: [
      'Làm phụ bếp tại khách sạn Carlton',
      'Tham gia Hội những người lao động hải ngoại',
      'Dự các buổi diễn thuyết ngoài trời',
    ],
  },
  {
    year: '1917-1920',
    date: 'Cuối 1917 - 1920',
    title: 'Hoạt Động Tại Paris',
    subtitle: 'Tham gia phong trào công nhân',
    description:
      'Gia nhập Đảng Xã hội Pháp năm 1919, viết báo lên án chủ nghĩa thực dân, gửi Bản Yêu sách tới Hội nghị Versailles.',
    location: 'Paris, Pháp',
    image: '/images/Yeu_sach_An_Nam.jpg',
    details: [
      'Sống tại các khu lao động nghèo Paris',
      'Gia nhập Đảng Xã hội Pháp năm 1919',
      'Gửi Bản Yêu sách 8 điểm (18/6/1919)',
    ],
  },
  {
    year: '1920',
    date: 'Tháng 12, 1920',
    title: 'Đại Hội Tours - Bước Ngoặt Tư Tưởng',
    subtitle: 'Từ yêu nước đến cộng sản',
    description:
      'Đọc Luận cương của Lênin, bỏ phiếu tán thành Quốc tế III, trở thành người sáng lập Đảng Cộng sản Pháp.',
    location: 'Tours, Pháp',
    image: '/images/Sự kiện/Nguyễn Ái Quốc_ Đại hội Tours.jpg',
    details: [
      'Đọc Luận cương về vấn đề dân tộc và thuộc địa',
      'Trở thành người cộng sản đầu tiên của Việt Nam',
      'Sáng lập Đảng Cộng sản Pháp',
    ],
  },
  {
    year: '1923-1924',
    date: '30 tháng 6, 1923',
    title: 'Học Tập Tại Liên Xô',
    subtitle: 'Trường Đại học Cách mạng',
    description:
      'Học tập tại Trường Đại học Phương Đông, tham dự các Đại hội Quốc tế Cộng sản, hoàn thiện lý luận cách mạng.',
    location: 'Moscow, Liên Xô',
    image: '/images/moscow-kremlin-1923.jpg',
    details: [
      'Học tại Đại học Phương Đông',
      'Tham dự Đại hội V Quốc tế Cộng sản',
      'Viết bài truyền bá chủ nghĩa Mác-Lênin',
    ],
  },
  {
    year: '1924-1927',
    date: '11 tháng 11, 1924',
    title: 'Hoạt Động Tại Quảng Châu',
    subtitle: 'Đào tạo cán bộ cách mạng',
    description:
      'Sáng lập Hội Việt Nam Cách mạng Thanh niên, xuất bản báo Thanh niên và "Đường Kách mệnh".',
    location: 'Quảng Châu, Trung Quốc',
    image: '/images/Hoat_dong_Quang_Chau.png',
    details: [
      'Sáng lập Hội VNCMTN (1925)',
      'Xuất bản "Đường Kách mệnh" (1927)',
      'Mở lớp huấn luyện chính trị',
    ],
  },
  {
    year: '1930',
    date: '3 tháng 2, 1930',
    title: 'Thành Lập Đảng Cộng Sản Việt Nam',
    subtitle: 'Bước ngoặt vĩ đại của lịch sử dân tộc',
    description:
      'Hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam, thông qua Cương lĩnh cách mạng đầu tiên.',
    location: 'Cửu Long, Hồng Kông',
    image: '/images/thanh_lap_dang.jpg',
    details: [
      'Hội nghị từ 6/1 đến 8/2/1930',
      'Hợp nhất 3 tổ chức cộng sản',
      'Thông qua Cương lĩnh cách mạng',
    ],
  },
  {
    year: '1941',
    date: '28 tháng 1, 1941',
    title: 'Trở Về Tổ Quốc',
    subtitle: 'Kết thúc 30 năm bôn ba',
    description:
      'Vượt biên giới về đến Pác Bó, kết thúc 30 năm tìm đường cứu nước, chuẩn bị cho Cách mạng tháng Tám.',
    location: 'Pác Bó, Cao Bằng',
    image: '/images/bac_bo.jpg',
    details: [
      'Về đến hang Cốc Bó, Pác Bó',
      'Thành lập Mặt trận Việt Minh (5/1941)',
      'Chuẩn bị Cách mạng tháng Tám 1945',
    ],
  },
];

export function FullscreenTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTimelineVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToIndex = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section ref={sectionRef} id="timeline" className="relative bg-background">
      {/* Timeline Items */}
      <div ref={containerRef} className="relative">
        {/* Center Timeline Line - Only within this container */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30 -translate-x-1/2 z-10 hidden lg:block" />

        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={event.year}
              ref={(el) => {
                sectionsRef.current[index] = el;
              }}
              className="min-h-[90vh] relative flex items-center py-8"
              style={{
                backgroundImage: `linear-gradient(${isLeft ? 'to right' : 'to left'}, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.55) 50%, rgba(0, 0, 0, 0.45) 100%), url('${event.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Center Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                <div
                  className={`w-16 h-16 rounded-full border-4 border-primary bg-background flex items-center justify-center shadow-xl transition-all duration-500 ${
                    activeIndex === index ? 'scale-110' : 'scale-100 opacity-70'
                  }`}
                >
                  <span className="text-primary font-bold text-sm">{event.year.split('-')[0]}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Text Content */}
                  <div className={`${isLeft ? 'lg:pr-12 lg:text-right order-1' : 'lg:pl-12 lg:order-2'}`}>
                    <div
                      className={`transition-all duration-700 ${
                        activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'
                      }`}
                    >
                      {/* Year Badge */}
                      <div className="inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground font-bold mb-4 shadow-lg text-lg">
                        {event.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 drop-shadow">{event.title}</h3>

                      {/* Subtitle */}
                      <p className="text-primary/80 text-base lg:text-lg mb-3 font-medium">{event.subtitle}</p>

                      {/* Location & Date */}
                      <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 border border-border text-white text-sm">
                          📅 {event.date}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 border border-border text-white text-sm">
                          📍 {event.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-white/85 text-sm lg:text-base leading-relaxed mb-4 drop-shadow">
                        {event.description}
                      </p>

                      {/* Details */}
                      <div className={`space-y-1 ${isLeft ? 'lg:text-right' : ''}`}>
                        {event.details.map((detail, i) => (
                          <div key={i} className={`flex items-start gap-2 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-white/80 text-sm drop-shadow">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Card */}
                  <div className={`${isLeft ? 'lg:order-2' : 'lg:pl-12 order-1 lg:order-1'}`}>
                    <div
                      className={`relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden border-2 border-border shadow-2xl transition-all duration-700 ${
                        activeIndex === index ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                      }`}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className={`w-full h-full ${
                          event.year === '1911' || event.year === '1913-1917'
                            ? 'object-contain object-top'
                            : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white font-bold">{event.title}</p>
                        <p className="text-white/70 text-sm">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll hint */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Side Navigation */}
      <nav
        className={`fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 timeline-nav transition-opacity duration-300 ${
          isTimelineVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {timelineEvents.map((event, index) => (
          <button
            key={event.year}
            onClick={() => scrollToIndex(index)}
            className="group relative flex items-center justify-end transition-all duration-300"
          >
            <span
              className={`absolute right-8 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium 
                opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
                ${activeIndex === index ? 'bg-primary text-primary-foreground' : 'bg-white/90 text-foreground'}`}
            >
              {event.year}
            </span>
            <span
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                activeIndex === index
                  ? 'bg-primary border-primary scale-150 shadow-lg shadow-primary/50'
                  : 'bg-white/30 border-white/50 hover:border-white hover:scale-125'
              }`}
            />
          </button>
        ))}
      </nav>
    </section>
  );
}
