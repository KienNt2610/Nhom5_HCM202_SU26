import { Hero } from '@/components/hero';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FullscreenTimeline } from '@/components/fullscreen-timeline';
import { Locations } from '@/components/locations';
import { Significance } from '@/components/significance';
import { BackgroundSection } from '@/components/background-section';
import { IsMobileWrapper } from '@/components/is-mobile';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ChatWidget } from '@/components/chat-widget';
import { QuizSection } from '@/components/quiz-section';
import { AiReportSection } from '@/components/ai-report';

export function AppPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-montserrat">
      <IsMobileWrapper>
        <Header />
        <Hero />
        <BackgroundSection />
        <FullscreenTimeline />
        <Locations />
        <Significance />
        <QuizSection />
        <AiReportSection />
        <Footer />
        <ScrollToTop />
        <ChatWidget />
      </IsMobileWrapper>
    </main>
  );
}
