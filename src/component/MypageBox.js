import React from 'react';
import { useNavigate } from 'react-router-dom';

const MypageBox = ({ item, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className='mypage-box' onClick={handleClick}>
      <div>{item}</div>
    </div>
  );
};

export default MypageBox;
