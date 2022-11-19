import { data } from '@kasa/data';
import AccommodationGallery from '../components/AccommodationGallery';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AccommodationGallery accommodations={data} />
      </main>
    </>
  );
}
