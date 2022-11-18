import { data } from '@kasa/data';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <ul>
        {data.map((location) => (
          <li>
            <p>{location.title}</p>
            <img src={location.cover} alt="" srcSet="" />
          </li>
        ))}
      </ul>
    </StyledApp>
  );
}

export default App;
