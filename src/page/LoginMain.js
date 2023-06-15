import React from 'react';
import LoginInput from '../component/LoginInput';
import LoginFooter from '../component/LoginFooter';
import { useNavigate } from 'react-router-dom';

const LoginMain = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{height:'78px'}}></div>

      <div className='text-center'> 
        <div className='login-page-header mt-5 ft28b'>로그인</div>
          <LoginInput className='margin-1' item="아이디를 입력해주세요." />
          <LoginInput className='margin-2' item="비밀번호를 입력해주세요." />
        
        <div>   
        <LoginFooter
          blue={{ text: '로그인', path: '/home' }}
          item1={{ text: '아이디 찾기', path: '/findid' }}
          item2={{ text: '비밀번호 찾기', path: '/findpass1' }}
          item3={{ text: '회원가입', path: '/signup' }}
          onLinkClick={(path) => navigate(path)}
        />
        </div>
      </div>
    </div>
  );
};  

export default LoginMain;
