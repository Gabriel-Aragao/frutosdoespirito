import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterImage from './CharacterImage';
import CharacterStats from './CharacterStats';

const Container = styled.div`
  // Your landing page layout styles
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
  );
}

export default App;
