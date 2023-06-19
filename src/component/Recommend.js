import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Recommend = ({restaurants, memId}) => {
  const navigate = useNavigate();

  const goRecommend = () => {
    navigate('/home/recommend_page',  { state: { restaurants, memId } });
  };
  return (
    <div>
     <img onClick={goRecommend} className='recommend-icon' src='/image/추천.png' alt='추천'/>
    </div>
  )
}

export default Recommend