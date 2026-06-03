import * as React from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Tổng Quan', href: '#overview' },
    { label: 'Bối Cảnh', href: '#background' },
    { label: 'Thời Gian', href: '#timeline' },
    { label: 'Địa Danh', href: '#locations' },
    { label: 'Ý Nghĩa', href: '#significance' },
    { label: 'Kiểm Tra', href: '#quiz' },
    { label: 'Báo Cáo AI', href: '#ai-report' },
    { label: 'Nhóm 5_HCM202_SU26', href: '#team' },
  ];

  return (
    <header
      className={cn('fixed left-0 right-0 z-40 transition-all duration-300 top-0 bg-transparent', {
        'py-1.5': !isScrolled,
        'py-1': isScrolled,
      })}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div
          className={cn('flex items-center justify-center h-10 transition-all duration-300', {
            'bg-background/95 backdrop-blur border border-border rounded-full px-4 shadow-sm': isScrolled,
          })}
        >
          {/* Logo - Vietnam Flag */}
          <a href="#overview" className="flex items-center gap-2 group absolute left-3 sm:left-4 lg:left-6">
            <img
              src="/vietnamflag.webp"
              alt="Cờ Việt Nam"
              className="w-8 h-6 object-cover rounded shadow-lg"
            />
          </a>

          {/* Navigation - Ở giữa */}
          <nav className="flex items-center gap-0.5 sm:gap-1.5 lg:gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors text-[11px] sm:text-xs lg:text-sm px-1.5 py-0.5 rounded-lg hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
