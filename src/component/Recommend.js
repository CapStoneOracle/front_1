import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recommend = () => {
  const navigate = useNavigate();

  const goRecommend = () => {
    navigate('/home/recommend_page');
  };
  return (
    <div>
     <img onClick={goRecommend} className='recommend-icon' src='/image/추천.png'/>
    </div>
  )
}

export default Recommend
