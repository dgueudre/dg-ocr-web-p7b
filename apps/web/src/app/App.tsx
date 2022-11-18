import { data } from '@kasa/data';
import styled from 'styled-components';
import AccommodationGallery from './AccommodationGallery';

const StyledApp = styled.div`
  // Your style here
`;

export default function App() {
  return (
    <StyledApp>
      <AccommodationGallery accommodations={data} />
    </StyledApp>
  );
}
