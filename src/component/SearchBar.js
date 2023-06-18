import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  
  const onIconClick = (path) => {
    navigate(path);
  }

  return (
    <div className='d-flex'>
      <img className='search-icon' src='/image/search.png'alt='search'/>
      <input className='ft14r search-bar' type='text' placeholder='검색'></input>
      <img className='mypage-icon' src='/image/유저.jpg' onClick={() => onIconClick('/mypage')} alt='mypage'/>
    </div>
  )
}

export default SearchBar;