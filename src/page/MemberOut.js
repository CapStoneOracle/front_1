import React from 'react'
import BackHomeNavbar from '../component/BackHomeNavbar'
import BlueYesNo from '../component/BlueYesNo';
import {useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const MemberOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const memId = location.state?.memId

  const deleteMember = () => {
     axios
      .delete(`http://localhost:8080/delete/`, {
        params: {
          id: memId
        }
      },)
      
      .catch((error) => {
        console.error(error);
      });
  };

  const handleYesClick = () => {
    deleteMember()
    navigate('/'); // Navigate to the login screen
  };

  return (
    <div>
      <BackHomeNavbar memId={memId}/>
       <div className='text-center'> 
        <div className='login-page-header mt-5 mb-5 ft28b'>회원 탈퇴를 하시겠어요?</div>
        <div className="d-flex justify-content-center align-items-center"
        style={{height:'50vh'}}>
          <lottie-player 
            src="https://assets6.lottiefiles.com/packages/lf20_hfnjm1i3.json"
            background="transparent"
            speed="0.5"
            style={{width: 300, height: 300}}
            autoplay>
          </lottie-player>
        </div>

        <div className='blue-yes-no-container'>   
        <BlueYesNo className='blue-yes-no' item='예' onClick={handleYesClick}/>
        <BlueYesNo className='blue-yes-no' item='아니오' />
        </div>
      </div>
    </div>
  )
}

export default MemberOut