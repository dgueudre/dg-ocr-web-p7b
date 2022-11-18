import { Accommodation } from '@kasa/data';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  align-items: flex-end;
  height: 100%;
  overflow: hidden;
  background-color: #FF6060;
  border-radius: 10px;
  
  &>p {
    grid-area: 1/1;
    z-index: 2;
    color: white;
  }
  
  &>img {
    grid-area: 1/1;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0.95; */
  }

  &::after {
    grid-area: 1/1;
    width: 100%;
    height: 100%;
    z-index: 1;
    content: "";
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  }
`;

export default function AccommodationCard({ accommodation }:{ accommodation: Accommodation }) {
  return (
    <Card>
      <p>{accommodation.title}</p>
      <img src={accommodation.cover} alt="" srcSet="" />
    </Card>
  );
}