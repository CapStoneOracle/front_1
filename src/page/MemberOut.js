import React from 'react'
import BackHomeNavbar from '../component/BackHomeNavbar'
import BlueYesNo from '../component/BlueYesNo';

const MemberOut = () => {
  return (
    <div>
      <BackHomeNavbar/>
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
        <BlueYesNo className='blue-yes-no' item='예' />
        <BlueYesNo className='blue-yes-no' item='아니오' />
        </div>
      </div>
    </div>
  )
}

export default MemberOut