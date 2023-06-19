import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = ({ memId }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const onIconClick = (path) => {
    navigate(path, { state: { memId } });
  };

  const handleSearch = () => {
    navigate('/searchresult', { state: { searchQuery, memId} }); // Pass the search query as state when navigating
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-bar-on-map'>
      <img className='search-icon' src='/image/search.png'/>
      <input className='ft14r search-bar' type='text' placeholder='검색' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyPress} ></input>
      <img className='mypage-icon' src='/image/mypage.png' onClick={() => onIconClick('/mypage')} />
    </div>
  )
}

export default SearchBar;