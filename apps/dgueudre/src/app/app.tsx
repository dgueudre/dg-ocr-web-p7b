import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="dgueudre" />
    </StyledApp>
  );
}

export default App;
