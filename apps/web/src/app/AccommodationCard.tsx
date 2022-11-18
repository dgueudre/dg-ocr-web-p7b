import { Accommodation } from '@kasa/data';

export default function AccommodationCard({ accommodation }:{ accommodation: Accommodation }) {
  return (
    <div>
      <p>{accommodation.title}</p>
      <img src={accommodation.cover} alt="" srcSet="" />
    </div>
  );
}
