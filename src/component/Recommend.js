import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Recommend = ({restaurants}) => {
  const navigate = useNavigate();


  const goRecommend = () => {
    navigate('/home/recommend_page', { state: { restaurants } });
  };

  return (
    <div>
     <img onClick={goRecommend} className='recommend-icon' src='/image/추천.png' />
    </div>
  )
}

export default Recommend
