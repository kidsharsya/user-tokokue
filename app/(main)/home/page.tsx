import HeroSection from '@/components/home/HeroSection';
import KategoriSection from '@/components/home/KategoriSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <section>
      <HeroSection />
      <KategoriSection />
      <AboutSection />
      <ContactSection />
    </section>
  );
}
