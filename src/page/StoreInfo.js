import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackHomeNavbar from './../component/BackHomeNavbar';
import CheckRadio from '../component/CheckRadio';
import UpIcon from '../component/UpIcon';

const StoreInfo = () => {
  const { id } = useParams(); 
  const [restaurantData, setRestaurantData] = useState(null);
  const [source, setSource] = useState('naver'); 

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  const fetchRestaurantInfo = () => {
    axios
      .get(`http://localhost:8080/restaurant/`, {
        params: {
          id: id, 
        },
      })
      .then((response) => {
        const data = response.data;
        setRestaurantData(data); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formatReview = (review) => {
    return review ? review.replaceAll("//", "<br><hr>") : 
    '<div class="ft20b no-review">리뷰가 존재하지 않습니다.<div/>';
  };
  
  const review = restaurantData ? restaurantData[`${source}review`] : null;
  const score = restaurantData ? restaurantData[`${source}star`] : null;

  return (
    <div>
      <BackHomeNavbar/>
      {restaurantData && (
        <div>
          <div className="search-result-box" style={{margin:'0.8rem auto 1rem auto'}}>
             <div className="ft24b">{restaurantData.name}</div>
             <div className='ft12r mt-2'>주소: {restaurantData.address ? restaurantData.address : "미등록"}</div>
             <div className='ft12r mt-2'>카테고리: {restaurantData.category ? restaurantData.category : "미등록"}</div>
             <div className='d-flex justify-content-between'>
                <div className='ft12r mt-2'>전화번호: {restaurantData.phonenum ? restaurantData.phonenum : "미등록"}</div>
                <div className='grade-star'>
                  <img width={25} className='mt-1' src='/image/star.png' alt='*'/>
                  <div style={{marginLeft:6}} className='ft16b mt-1'>{score ? score : "미등록"}</div>
                </div>
             </div>
          </div>

          <div className='info-radio-place'>
            <CheckRadio setSource={setSource}/>
          </div>
          <hr/>
          <div className='review-box ft12r'>
            <span dangerouslySetInnerHTML={{ __html: formatReview(review) }} />
          </div>
        </div>  
      )}
      <UpIcon/>
    </div>
  );
};

export default StoreInfo;