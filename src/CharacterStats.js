import React from 'react';
import styled from 'styled-components';

const StatBar = styled.div`
  // Styles for each stat bar
`;

const CharacterStats = ({ love, joy, peace, ...otherStats }) => {
  return (
    <div>
      <h2>Seus Frutos</h2>
      <StatBar>
        <h3>Amor </h3>
        <progress value={love} max="100"></progress> {love}
      </StatBar>
      <StatBar>
        <h3>Alegria </h3>
        <progress value={joy} max="100"></progress> {joy}
      </StatBar>
      <StatBar>
        <h3>Paz </h3>
        <progress value={peace} max="100"></progress> {peace}
      </StatBar>
      
      {/* ... other stat bars */}
    </div>
  );
};

export default CharacterStats;
