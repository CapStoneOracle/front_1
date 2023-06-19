import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBarResult from '../component/SearchBarResult';
import UpIcon from '../component/UpIcon';

const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || '';
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch search results when the component mounts
    search(searchQuery);
  }, [searchQuery]);

  const handleRestaurantClick = (restaurantId) => {
    navigate(`/store/${restaurantId}`, { state: { restaurantId } });
    // Navigate to the StoreInfo component with the restaurant ID and search query
  };

  const search = (keyword) => {
    axios
      .get(`http://localhost:8080/search?keyword=${keyword}`) // Pass the search keyword as a query parameter
      .then((response) => {
        const data = response.data; // Array of restaurant information
        setRestaurants(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <SearchBarResult />
      <UpIcon/>
      <div className='search-result-padding' />
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="search-result-box" onClick={() => handleRestaurantClick(restaurant.id)}>
          <div className="ft24b">{restaurant.name}</div>
          <div className='ft12r mt-2'>카테고리: {restaurant.category}</div>
          <div className='ft12r mt-1'>전화번호: {restaurant.phonenum}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;