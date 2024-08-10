import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterImage from './CharacterImage';
import CharacterStats from './CharacterStats';
import GlobalStyles from './GlobalStyles';
import backgroundImage from './back.png';

const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;        // or 'contain', depending on desired effect
  background-repeat: no-repeat;  // Prevent image repetition
  min-height: 100vh;             // Ensure background covers full viewport height
  // ... your other landing page layout styles
`;

const ImageAndInputContainer = styled.div`
  display: flex;
  align-items: center; // Vertically align image and input
`;

const NameInput = styled.input`
  margin-left: 20px; // Add some spacing between image and input
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function App() {
  const [name, setName] = useState(''); // State to store the entered name

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
     <GlobalStyles />
    <Container>
      <h1>Os Frutos do Espírito</h1>

      <ImageAndInputContainer>
        <CharacterImage />
        <NameInput 
          type="text" 
          placeholder="Digite Seu Nome" 
          value={name} 
          onChange={handleNameChange} 
        />
      </ImageAndInputContainer>

      <CharacterStats />
      
    </Container>
    </>
  );
}

export default App;
