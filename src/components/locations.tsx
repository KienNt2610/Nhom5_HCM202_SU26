import { useState } from 'react';

interface Location {
  name: string;
  region: string;
  period: string;
  significance: string;
  details: string[];
  image: string;
}

const locations: Location[] = [
  {
    name: 'Bến Nhà Rồng',
    region: 'Sài Gòn, Việt Nam',
    period: '5/6/1911',
    significance: 'Nơi khởi hành của hành trình 30 năm',
    details: [
      'Ngày 5/6/1911, Nguyễn Tất Thành lên tàu Amiral Latouche Tréville',
      'Làm phụ bếp với mức lương 45 franc/tháng',
      'Hiện là Bảo tàng Hồ Chí Minh – chi nhánh TP. HCM',
    ],
    image: '/images/Địa điểm/Bến Nhà Rồng.jpg',
  },
  {
    name: 'Marseille',
    region: 'Pháp',
    period: '6/7/1911',
    significance: 'Cảng đầu tiên tại châu Âu',
    details: [
      'Cập cảng Marseille ngày 6/7/1911',
      'Bước chân đầu tiên vào trung tâm chủ nghĩa tư bản',
      'Tiếp tục đến Le Havre, Dunkerque',
    ],
    image: '/images/Địa điểm/Marseille_Pháp.jpg',
  },
  {
    name: 'London',
    region: 'Anh Quốc',
    period: '1913-1917',
    significance: 'Nơi tiếp xúc với phong trào lao động',
    details: [
      'Làm phụ bếp tại khách sạn Carlton',
      'Tham gia Hội những người lao động hải ngoại',
      'Đọc sách tại Hyde Park, dự các buổi diễn thuyết',
    ],
    image: '/images/Địa điểm/London_Anh.jpg',
  },
  {
    name: 'Paris',
    region: 'Pháp',
    period: '1917-1923',
    significance: 'Hoạt động cách mạng sôi nổi',
    details: [
      'Gia nhập Đảng Xã hội Pháp năm 1919',
      'Gửi Bản Yêu sách 8 điểm tới Hội nghị Versailles',
      'Tham gia sáng lập Đảng Cộng sản Pháp (12/1920)',
    ],
    image: '/images/Địa điểm/Paris.jpg',
  },
  {
    name: 'Moscow',
    region: 'Liên Xô',
    period: '1923-1924',
    significance: 'Học tập lý luận cách mạng Mác-Lênin',
    details: [
      'Học tập tại Trường Đại học Phương Đông',
      'Tham dự Đại hội V Quốc tế Cộng sản',
      'Viết nhiều bài báo truyền bá chủ nghĩa Mác-Lênin',
    ],
    image: '/images/Địa điểm/Moscow_Nga.jpg',
  },
  {
    name: 'Quảng Châu',
    region: 'Trung Quốc',
    period: '1924-1927',
    significance: 'Sáng lập Hội Việt Nam CMTN',
    details: [
      'Về Quảng Châu ngày 11/11/1924',
      'Thành lập Hội Việt Nam Cách mạng Thanh niên (1925)',
      'Xuất bản "Đường Kách mệnh" (1927)',
    ],
    image: '/images/Địa điểm/Quảng Châu.jpeg',
  },
  {
    name: 'Hồng Kông',
    region: 'Trung Quốc',
    period: '3/2/1930',
    significance: 'Thành lập Đảng Cộng Sản Việt Nam',
    details: [
      'Hội nghị hợp nhất từ 6/1 đến 8/2/1930',
      'Thành lập Đảng Cộng sản Việt Nam',
      'Thông qua Cương lĩnh cách mạng đầu tiên',
    ],
    image: '/images/Địa điểm/HongKong 1930.jpg',
  },
  {
    name: 'Pác Bó',
    region: 'Cao Bằng, Việt Nam',
    period: '28/1/1941',
    significance: 'Kết thúc hành trình, trở về Tổ quốc',
    details: [
      'Về đến hang Cốc Bó ngày 28/1/1941',
      'Kết thúc 30 năm tìm đường cứu nước',
      'Chuẩn bị cho Cách mạng tháng Tám 1945',
    ],
    image: '/images/Địa điểm/Pác Bó.jpg',
  },
];

export function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            🗺️ Hành trình trên thế giới
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Địa Danh <span className="text-primary">Lịch Sử</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Các địa điểm quan trọng trong hành trình 30 năm tìm đường cứu nước
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((location, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedLocation(location)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all text-left bg-card"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-2 py-1 rounded bg-primary/80 text-primary-foreground text-xs font-bold mb-2">
                  {location.period}
                </span>
                <h3 className="text-white font-bold text-lg drop-shadow">{location.name}</h3>
                <p className="text-white/80 text-sm">{location.region}</p>
                <p className="text-white/80 text-xs mt-1 line-clamp-2">{location.significance}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Location Detail Modal */}
        {selectedLocation && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border">
              {/* Modal Header Image */}
              <div className="relative h-64">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-2">
                    {selectedLocation.period}
                  </span>
                  <h3 className="text-white font-bold text-2xl">{selectedLocation.name}</h3>
                  <p className="text-white/80">{selectedLocation.region}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-primary font-medium mb-4">{selectedLocation.significance}</p>
                <div className="space-y-3">
                  {selectedLocation.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-foreground/80">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
