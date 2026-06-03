import { Hero } from '@/components/hero';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FullscreenTimeline } from '@/components/fullscreen-timeline';
import { Locations } from '@/components/locations';
import { Significance } from '@/components/significance';
import { BackgroundSection } from '@/components/background-section';
import { IsMobileWrapper } from '@/components/is-mobile';
import { ScrollToTop } from '@/components/scroll-to-top';
import { QuizSection } from '@/components/quiz-section';


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
        <Footer />
        <ScrollToTop />
        <ChatWidget />
      </IsMobileWrapper>
    </main>
  );
}
