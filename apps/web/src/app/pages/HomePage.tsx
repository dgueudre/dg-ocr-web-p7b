import { data } from '@kasa/data';
import AccommodationGallery from '../components/AccommodationGallery';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <HeroSection />
      <AccommodationGallery accommodations={data} />
    </div>
  );
}
