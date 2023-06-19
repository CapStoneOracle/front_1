import React from 'react';

const BlueButton2 = ({ item, onLinkClick }) => {

  return (
    <div>
      <button className='ft16r blue-button' onClick={() => onLinkClick(item.path)}>{item.text}</button>
    </div>
  );
}

export default BlueButton2;
