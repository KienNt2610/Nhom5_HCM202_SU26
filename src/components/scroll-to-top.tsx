import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn('fixed bottom-4 left-4 lg:left-6 z-50 transition-all duration-300', {
        'visible opacity-100': isVisible,
        'invisible opacity-0': !isVisible,
      })}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </Button>
  );
}
