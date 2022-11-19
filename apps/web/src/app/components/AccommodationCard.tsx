import { Accommodation } from '@kasa/data';
import { Link } from 'react-router-dom';
import './AccommodationCard.scss';

export default function AccommodationCard({ accommodation }:{ accommodation: Accommodation }) {
  return (
    <Link to={`/accommodations/${accommodation.id}`} className="accommodation-card">
      <p>{accommodation.title}</p>
      <img src={accommodation.cover} alt="" srcSet="" />
    </Link>
  );
}
