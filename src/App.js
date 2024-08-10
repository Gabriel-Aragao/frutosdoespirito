import React from 'react';
import styled from 'styled-components';
import CharacterStats from './CharacterStats';
import CharacterImage from './CharacterImage';
import CallToAction from './CallToAction';

const Container = styled.div`
  // Your landing page layout styles
`;

function App() {
  return (
    <Container>
      <h1>Frutos do espirito</h1>
      <CharacterImage />
      <CharacterStats 
        love={80} 
        joy={65} 
        peace={90}
        // ... other stats 
      />
      
    </Container>
  );
}

export default App;

