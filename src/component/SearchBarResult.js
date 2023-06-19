import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBarResult = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const onIconClick = (path) => {
    navigate(path);
  };

  const handleSearch = () => {
    navigate('/searchresult', { state: { searchQuery } }); // Pass the search query as state when navigating
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const goHome = () => {
    navigate('/home');
  };

  return (
    <div className='search-bar-on-map'>
      <img className='search-icon' src='/image/search.png'/>
      <input className='ft14r search-bar' type='text' placeholder='검색' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyPress} ></input>
      <img className='home-result-icon' src='/image/home.png' alt='home' onClick={goHome}/>
    </div>
  )
}

export default SearchBarResult