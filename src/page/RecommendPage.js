import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackHomeNavbar from './../component/BackHomeNavbar';
import UpIcon from '../component/UpIcon';

const RecommendPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const restaurants = location.state?.restaurants || [];
  const memId = location.state?.memId;

  const handleRestaurantClick = (restaurant) => {
    console.log('Clicked on restaurant:', restaurant);
    // You can perform any desired actions with the clicked restaurant here

    navigate('/home', {
      state: {
        latitude: restaurant.latitude,
        longitude: restaurant.longitude,
        name: restaurant.name,
        id: restaurant.id,
        memId:memId
      },
    });
  };

  console.log(memId)


  return (
    <div>
      <BackHomeNavbar memId ={memId}/>
      <div style={{borderBottom:'#9E9E9E solid 1px'}} className='mt-2 mb-2'/>

      {restaurants.length > 0 ? 
      (
        restaurants.map((restaurant) => (
          <div className='search-result-box'
            key={restaurant.id}
            onClick={() => handleRestaurantClick(restaurant)} >

            <div className='ft24b'>{restaurant.name}</div>
            <div className='ft12r mt-2'>카테고리: {restaurant.category}</div>
            <div className='ft12r mt-1'>전화번호: {restaurant.phonenum}</div>

          </div>
        ))
      ) 
      : ( <p>No restaurants available</p>
      )}
      <UpIcon/>
    </div>
  );
};

export default RecommendPage