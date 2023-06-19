import React from 'react';

const BlueButton = ({ item, onClick }) => {
  return (
    <div>
      <button className='ft16r blue-button' onClick={onClick}>{item}</button>
    </div>
  );
}

export default BlueButton;