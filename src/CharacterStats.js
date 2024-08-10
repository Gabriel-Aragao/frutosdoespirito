import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StatBar = styled.div`
  display: flex;          
  align-items: center;    
  justify-content: space-between;

  h3 {
    margin-right: 10px;   
    flex: 0 0 auto;       
    width: 100px;         // Or adjust to your desired width 
  }

  div {                   // New container for progress and input
    display: flex;
    align-items: center;
    flex: 1 0 auto; 

    progress {
      width: 200px;      // Or adjust as needed
    }

    input {
      width: 50px;        // Or adjust as needed
      margin-left: 10px;  // Add some spacing between progress and input
    }
  }
`;

const CharacterStats = () => {
  // Initialize state for each stat
  const [love, setLove] = useState(80); 
  const [joy, setJoy] = useState(65);
  const [peace, setPeace] = useState(90); 
  const [patience, setPatience] = useState(70); 
  const [kindness, setKindness] = useState(68);
  const [goodness, setGoodness] = useState(82);
  const [faith, setFaith] = useState(75); 
  const [gentleness, setGentleness] = useState(55);
  const [selfcontrol, setSelfcontrol] = useState(45);

  const handlePrayClick = () => {
    setLove(Math.min(100, love + Math.floor(Math.random() * 10) + 1)); // Increase love, capped at 100
    setJoy(Math.min(100, joy + Math.floor(Math.random() * 10) + 1));    // Increase joy, capped at 100
    setPeace(Math.min(100, peace + Math.floor(Math.random() * 10) + 1)); // Increase peace, capped at 100
    setPatience(Math.min(100, patience + Math.floor(Math.random() * 10) + 1));    // Increase patience, capped at 100
    setKindness(Math.min(100, kindness + Math.floor(Math.random() * 10) + 1)); // Increase kindness, capped at 100
    setGoodness(Math.min(100, goodness + Math.floor(Math.random() * 10) + 1));    // Increase goodness, capped at 100
    setFaith(Math.min(100, faith + Math.floor(Math.random() * 10) + 1)); // Increase faith, capped at 100
    setGentleness(Math.min(100, gentleness + Math.floor(Math.random() * 10) + 1));    // Increase gentleness, capped at 100
    setSelfcontrol(Math.min(100, selfcontrol + Math.floor(Math.random() * 10) + 1)); // Increase selControl, capped at 100
    
    // ... increase other stats similarly 
  };

  // useEffect to automatically decrease stats every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLove(prevLove => Math.max(0, prevLove - 1)); // Decrease love, floored at 0
      setJoy(prevJoy => Math.max(0, prevJoy - 1));    // Decrease joy, floored at 0
      setPeace(prevPeace => Math.max(0, prevPeace - 1));
      setPatience(prevPatience => Math.max(0, prevPatience - 1));
      setKindness(prevKindness => Math.max(0, prevKindness - 1));
      setGoodness(prevGoodness => Math.max(0, prevGoodness - 1));
      setFaith(prevFaith => Math.max(0, prevFaith - 1));
      setGentleness(prevGentleness => Math.max(0, prevGentleness - 1));
      setSelfcontrol(prevSelfcontrol => Math.max(0, prevSelfcontrol - 1));
      // ... decrease other stats similarly
    }, 1000); // 3000 milliseconds = 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once after initial render
  // ... other stats 

  // Function to handle input changes
  const handleInputChange = (event, statSetter) => {
    const newValue = parseInt(event.target.value, 10); // Parse input as an integer
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) { // Validate input
      statSetter(newValue);
    }
  };

  return (
    <div>
      <h2>Character Stats</h2>
      <StatBar>
        <h3>Amor</h3>
        <progress value={love} max="100"></progress> 
        <input 
          type="number" 
          value={love} 
          onChange={(event) => handleInputChange(event, setLove)} 
          min="0" 
          max="100" 
        />
      </StatBar>
      <StatBar>
        <h3>Alegria</h3>
        <progress value={joy} max="100"></progress> 
        <input 
          type="number" 
          value={joy} 
          onChange={(event) => handleInputChange(event, setJoy)} 
          min="0" 
          max="100" 
        />
      </StatBar>
      <StatBar>
        <h3>Paz</h3>
        <progress value={peace} max="100"></progress> 
        <input 
          type="number" 
          value={peace} 
          onChange={(event) => handleInputChange(event, setPeace)} 
          min="0" 
          max="100" 
        />
      </StatBar>
      <StatBar>
        <h3>Paciência</h3>
        <progress value={patience} max="100"></progress> 
        <input 
          type="number" 
          value={patience} 
          onChange={(event) => handleInputChange(event, setLove)} 
          min="0" 
          max="100" 
        />
      </StatBar>
      <StatBar>
        <h3>Amabilidade</h3>
        <progress value={kindness} max="100"></progress> 
        <input 
          type="number" 
          value={kindness} 
          onChange={(event) => handleInputChange(event, setLove)} 
          min="0" 
          max="100" 
        />
        
      </StatBar>
      <StatBar>
        <h3>Bondade</h3>
        <progress value={goodness} max="100"></progress> 
        <input 
          type="number" 
          value={goodness} 
          onChange={(event) => handleInputChange(event, setLove)} 
          min="0" 
          max="100" 
        />
      </StatBar>
      <StatBar>
        <h3>Fidelidade</h3>
        <progress value={faith} max="100"></progress> 
        <input 
          type="number" 
          value={faith} 
          onChange={(event) => handleInputChange(event, setLove)} 
          min="0" 
          max="100" 
        />
      </StatBar>
      <StatBar>
        <h3>Mansidao</h3>
        <progress value={gentleness} max="100"></progress> 
        <input 
          type="number" 
          value={gentleness} 
          onChange={(event) => handleInputChange(event, setLove)} 
          min="0" 
          max="100" 
        />
      </StatBar>
      <StatBar>
        <h3>Dominio próprio</h3>
        <progress value={selfcontrol} max="100"></progress> 
        <input 
          type="number" 
          value={selfcontrol} 
          onChange={(event) => handleInputChange(event, setLove)} 
          min="0" 
          max="100" 
        />
      </StatBar>


      <button onClick={handlePrayClick}>Orar!</button>
    </div>
  );
};

export default CharacterStats;
