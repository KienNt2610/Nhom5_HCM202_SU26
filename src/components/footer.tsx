export function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Content wrapper with relative positioning */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/vietnamflag.webp"
                alt="Cờ Việt Nam"
                className="w-12 h-8 object-cover rounded shadow-lg"
              />
            </div>
            <p className="text-sm text-foreground/70">
              Hành trình lịch sử của Chủ tịch Hồ Chí Minh từ năm 1911 đến 1941 - 30 năm tìm đường cứu nước vĩ đại.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Nội Dung</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#overview" className="text-foreground/70 hover:text-primary transition-colors">
                  Tổng Quan
                </a>
              </li>
              <li>
                <a href="#background" className="text-foreground/70 hover:text-primary transition-colors">
                  Bối Cảnh Lịch Sử
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-foreground/70 hover:text-primary transition-colors">
                  Dòng Thời Gian
                </a>
              </li>
              <li>
                <a href="#locations" className="text-foreground/70 hover:text-primary transition-colors">
                  Địa Danh
                </a>
              </li>
              <li>
                <a href="#significance" className="text-foreground/70 hover:text-primary transition-colors">
                  Ý Nghĩa Lịch Sử
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-foreground/70 hover:text-primary transition-colors">
                  Kiểm Tra Kiến Thức
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Tài Liệu Tham Khảo</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://baotanghochiminh.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Bảo Tàng Hồ Chí Minh
                </a>
              </li>
              <li>
                <a
                  href="https://hochiminh.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Trang thông tin Hồ Chí Minh
                </a>
              </li>
              <li>
                <a
                  href="https://vnanet.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Thông tấn xã Việt Nam
                </a>
              </li>
              <li>
                <span className="text-foreground/50">Sách: "Đường Kách mệnh"</span>
              </li>
              <li>
                <span className="text-foreground/50">Sách: "Hồ Chí Minh – Biên niên tiểu sử"</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-foreground/70">&copy; 2025 - HCM202 - Môn học tư tưởng Hồ Chí Minh</p>
          <p className="text-xs text-foreground/50 mt-2">
            Website được xây dựng nhằm mục đích giáo dục và tưởng nhớ công lao của Chủ tịch Hồ Chí Minh
          </p>
        </div>
      </div>
    </footer>
  );
}
