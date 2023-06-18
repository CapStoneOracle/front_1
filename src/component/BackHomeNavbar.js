import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackHomeNavbar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate('/home');
  };


  return (
    <div className='back-home-navbar'>
      <img className='back-icon' src='/image/back.png' alt='back' onClick={goBack}/>
      <img className='home-icon' src='/image/home.png' alt='home' onClick={goHome}/>
    </div>
  )
}

export default BackHomeNavbar