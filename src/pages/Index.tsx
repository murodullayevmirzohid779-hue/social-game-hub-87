import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { PackagesSection } from '@/components/PackagesSection';
import { BookingSection } from '@/components/BookingSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExperiencesSection />
      <PackagesSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
