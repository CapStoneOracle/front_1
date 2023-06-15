import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackNavbar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='back-navbar'>
      <img className='back-icon' src='/image/back.png' alt='back' onClick={goBack} />
    </div>
  );
};

export default BackNavbar;
