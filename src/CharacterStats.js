import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StatBar = styled.div`
  display: flex;          
  align-items: center;    
  justify-content: space-between;
  margin-bottom: 2px; // Adjust this value to control the spacing
  margin-top: 0px; // Adjust this value to control the spacing
  height: 40px; // Set the desired height here

  h4 {
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

const PrayButton = styled.button`
  width: 100%; // Make the button take up the full width of its parent container
  padding: 10px; // Add some padding for better visual appearance
  // ... other button styles you might have
`;

const CharacterStats = () => {
  // Initialize state for each stat
  const [love, setLove] = useState(); 
  const [joy, setJoy] = useState();
  const [peace, setPeace] = useState(); 
  const [patience, setPatience] = useState(); 
  const [kindness, setKindness] = useState();
  const [goodness, setGoodness] = useState();
  const [faith, setFaith] = useState(); 
  const [gentleness, setGentleness] = useState();
  const [selfcontrol, setSelfcontrol] = useState();

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
      setLove(prevLove => Math.max(0, prevLove - 5)); // Decrease love, floored at 0
      setJoy(prevJoy => Math.max(0, prevJoy - 5));    // Decrease joy, floored at 0
      setPeace(prevPeace => Math.max(0, prevPeace - 5));
      setPatience(prevPatience => Math.max(0, prevPatience - 5));
      setKindness(prevKindness => Math.max(0, prevKindness - 5));
      setGoodness(prevGoodness => Math.max(0, prevGoodness - 5));
      setFaith(prevFaith => Math.max(0, prevFaith - 5));
      setGentleness(prevGentleness => Math.max(0, prevGentleness - 5));
      setSelfcontrol(prevSelfcontrol => Math.max(0, prevSelfcontrol - 5));
      // ... decrease other stats similarly
    }, 30000); // 3000 milliseconds = 3 seconds

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
      <StatBar>
        <h4>Amor</h4>
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
        <h4>Alegria</h4>
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
        <h4>Paz</h4>
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
        <h4>Paciência</h4>
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
        <h4>Amabilidade</h4>
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
        <h4>Bondade</h4>
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
        <h4>Fidelidade</h4>
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
        <h4>Mansidao</h4>
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
        <h4>Dominio próprio</h4>
        <progress value={selfcontrol} max="100"></progress> 
        <input 
          type="number" 
          value={selfcontrol} 
          onChange={(event) => handleInputChange(event, setLove)} 
          min="0" 
          max="100" 
        />
      </StatBar>


      <PrayButton onClick={handlePrayClick}>Orar!</PrayButton>
    </div>
  );
};

export default CharacterStats;
