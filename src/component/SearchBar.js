import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  
  const onIconClick = (path) => {
    navigate(path);
  }

  return (
    <div className='d-flex'>
      <img className='search-icon' src='/image/search.png'/>
      <input className='ft14r search-bar' type='text' placeholder='검색'></input>
      <img className='mypage-icon' src='/image/mypage.png' onClick={() => onIconClick('/mypage')} />
    </div>
  )
}

export default SearchBar;
