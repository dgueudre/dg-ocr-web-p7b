import { Accommodation } from '@kasa/data';
import styled from 'styled-components';
import AccommodationCard from './AccommodationCard';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &>li {
    margin: 1.6%;
    width: 30%;
  }
`;

export default function AccommodationGallery(
  { accommodations }: { accommodations: Accommodation[] },
) {
  return (
    <List>
      {accommodations.map(((accommodation) => (
        <li>
          <AccommodationCard accommodation={accommodation} />
        </li>
      )))}
    </List>
  );
}
