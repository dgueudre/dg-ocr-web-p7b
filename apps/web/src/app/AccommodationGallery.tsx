import { Accommodation } from '@kasa/data';
import AccommodationCard from './AccommodationCard';

export default function AccommodationGallery(
  { accommodations }: { accommodations: Accommodation[] },
) {
  return (
    <ul>
      {accommodations.map(((accommodation) => (
        <li>
          <AccommodationCard accommodation={accommodation} />
        </li>
      )))}
    </ul>
  );
}
