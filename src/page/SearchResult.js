import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || '';
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch search results when the component mounts
    search(searchQuery);
  }, [searchQuery]);

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
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-item" style={styles.restaurantBox}>
          <span className="restaurant-name">{restaurant.name}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  restaurantBox: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer', // Add cursor style to indicate clickable element
  },
};

export default SearchResult;
