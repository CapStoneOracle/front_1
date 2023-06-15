import React from 'react'
import SearchBar from '../component/SearchBar'
import Recommend from '../component/Recommend'
const Home = () => {
  return (
    <div>
      <SearchBar/>
      <div className='map-place'>지도</div>
      <Recommend/>
    </div>
  )
}

export default Home
