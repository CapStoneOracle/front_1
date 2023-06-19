import React from 'react';
import { useNavigate } from 'react-router-dom';

const MypageBox = ({ item, path, userdata, memId }) => {
  const navigate = useNavigate();

  console.log(memId)

  const handleClick = () => {
    navigate(path, {state: {userdata, memId}});
  };

  return (
    <div className='mypage-box' onClick={handleClick}>
      <div>{item}</div>
    </div>
  );
};

export default MypageBox;
