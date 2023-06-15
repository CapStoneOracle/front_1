import React from 'react';
import BackNavbar from '../component/BackNavbar';
import LoginFooter from '../component/LoginFooter';
import { useNavigate } from 'react-router-dom';

const SignUpEnd = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BackNavbar />

      <div className='text-center'> 
        <div className='login-page-header mt-5 mb-5 ft28b'>회원가입 완료!</div>
        <div className="d-flex justify-content-center align-items-center"
        style={{height:'50vh'}}>
          <lottie-player 
            src="https://assets8.lottiefiles.com/packages/lf20_uu0x8lqv.json"
            background="transparent"
            speed="1"
            style={{width: 300, height: 300}}
            autoplay>
          </lottie-player>
        </div>

        <div>   
        <LoginFooter
          blue={{ text: '로그인 화면으로', path: '/login' }}
          item1={{ text: '', path: '' }}
          item2={{ text: '', path: '' }}
          item3={{ text: '', path: '' }}
          onLinkClick={(path) => navigate(path)}
        />   
        </div>
      </div>
    </div>
  )
}

export default SignUpEnd;
