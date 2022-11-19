import { data } from '@kasa/data';
import AccommodationGallery from '../components/AccommodationGallery';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <AccommodationGallery accommodations={data} />
    </div>
  );
}
