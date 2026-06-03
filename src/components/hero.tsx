import * as React from 'react';

export function Hero() {
  const [expandedStat, setExpandedStat] = React.useState<string | null>(null);

  const statsDetails = {
    '30': {
      label: 'Năm',
      detail: 'Từ ngày 5/6/1911 đến ngày 28/1/1941 - ba thập kỷ, một khát vọng độc lập',
    },
    '4': {
      label: 'Châu Lục',
      detail:
        'Châu Âu (Pháp, Anh), Châu Phi (Ai Cập, Algeria), Châu Mỹ (Mỹ, Argentina, Uruguay), Châu Á (Trung Quốc, Liên Xô)',
    },
    '15+': {
      label: 'Quốc Gia',
      detail:
        'Pháp, Anh, Mỹ, Argentina, Uruguay, Ai Cập, Algeria, Tunisia, Congo, Sénégal, Guinée, Dahomey, Martinique, Liên Xô, Trung Quốc',
    },
    '1': {
      label: 'Mục Tiêu',
      detail: 'Giải phóng dân tộc Việt Nam khỏi ách thực dân - mục tiêu duy nhất, vĩ đại và bất biến',
    },
  };

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <p className="text-sm font-medium text-primary">📜 Hành Trình Lịch Sử 1911 - 1941</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hành Trình <span className="text-primary">30 Năm</span> Tìm Đường Cứu Nước
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Hành trình 30 năm tìm đường cứu nước của Hồ Chí Minh (1911–1941) là một trong những sự kiện trọng đại, có ý
              nghĩa quyết định đối với lịch sử hiện đại Việt Nam.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-8">
              Bắt đầu từ ngày 5/6/1911, khi người thanh niên Nguyễn Tất Thành rời Bến Nhà Rồng, cho đến ngày 28/1/1941,
              khi Người trở về Cao Bằng – hành trình ấy không chỉ là cuộc bôn ba qua nhiều đại dương, lục địa, mà còn là
              quá trình trưởng thành về tư tưởng, nhận thức, đặt nền móng cho sự nghiệp giải phóng dân tộc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#timeline"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Khám Phá Hành Trình
              </a>
              <a
                href="#background"
                className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
              >
                Bối Cảnh Lịch Sử
              </a>
            </div>
          </div>

          {/* Portrait Image */}
            <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-muted">
              <img
                src="/images/Nhân Vật/Hồ Chí Minh.webp"
                alt="Chủ tịch Hồ Chí Minh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold shadow-lg">
              Nguyễn Ái Quốc
            </div>
          </div>
        </div>

        {/* Key Stats with Interactive Details */}
        <div className="relative pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(statsDetails).map(([value, { label, detail }]) => (
              <div key={value} className="relative">
                <button
                  onMouseEnter={() => setExpandedStat(value)}
                  onMouseLeave={() => setExpandedStat(null)}
                  onClick={() => setExpandedStat(expandedStat === value ? null : value)}
                  className="w-full text-center cursor-pointer group transition-transform hover:scale-105 p-4 rounded-xl bg-card border border-border hover:border-primary/50"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    {value}
                  </div>
                  <div className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">{label}</div>
                </button>

                {expandedStat === value && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-20 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-card border border-primary/30 rounded-lg p-4 shadow-xl w-64 md:w-72">
                  <p className="text-sm text-foreground/85 leading-relaxed">{detail}</p>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-primary/30 rotate-45" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border text-center">
          <blockquote className="text-lg md:text-xl text-foreground/90 italic mb-4">
            "Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi, đấy là tất cả những điều tôi muốn, đấy là tất cả những
            điều tôi hiểu"
          </blockquote>
          <p className="text-primary font-medium">— Hồ Chí Minh —</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
