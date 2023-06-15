import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StartLogo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/startpage');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="StartLogo-container">
      <img className="logo-style" src="/image/로고.png" alt="로고" />
    </div>
  );
};

export default StartLogo;
