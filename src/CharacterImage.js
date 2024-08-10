import React from 'react';

const CharacterImage = () => {
  return (
    <div>
      {/* Replace with your image or avatar */}
      <img 
        src="/smilinhero.jpeg" 
        alt="Character" 
        style={{
            width: '100px', // Adjust the width as needed
            height: '100px', // Adjust the height as needed
            objectFit: 'cover', // Ensures the image fills the container without distortion
          }} 
    /> 
    </div>
  );
};

export default CharacterImage;
