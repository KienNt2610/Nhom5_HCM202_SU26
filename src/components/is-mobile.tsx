import { useIsMobile } from '@/hooks/is-mobile';

export function IsMobileWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  if (!isMobile) return <>{children}</>;

  return (
    <div className="w-screen h-dvh flex items-center justify-center bg-background fixed top-0 left-0 z-50">
      <span className="text-2xl font-bold text-foreground">Vui lòng mở trang web trên màn hình lớn hơn</span>
    </div>
  );
}
