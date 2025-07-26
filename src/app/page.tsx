import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <ScreenshotsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}