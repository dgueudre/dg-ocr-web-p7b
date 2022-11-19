import { Accommodation } from '@kasa/data';
import AccommodationCard from './AccommodationCard';
import './AccommodationGallery.scss';

export default function AccommodationGallery(
  { accommodations }: { accommodations: Accommodation[] },
) {
  return (
    <ul className="accommodation-gallery">
      {accommodations.map(((accommodation) => (
        <li>
          <AccommodationCard accommodation={accommodation} />
        </li>
      )))}
    </ul>
  );
}
