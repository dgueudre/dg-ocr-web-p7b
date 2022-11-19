import { Accommodation } from '@kasa/data';
import './AccommodationCard.scss';

export default function AccommodationCard({ accommodation }:{ accommodation: Accommodation }) {
  return (
    <div className="accommodation-card">
      <p>{accommodation.title}</p>
      <img src={accommodation.cover} alt="" srcSet="" />
    </div>
  );
}
