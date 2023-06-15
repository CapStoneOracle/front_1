import React from 'react';
import BackNavbar from '../component/BackNavbar';
import InputUnderBar from '../component/InputUnderBar'
import LoginFooter from '../component/LoginFooter';
import WarningMessage from '../component/WarningMessage';
import { useNavigate } from 'react-router-dom';

const FindPass2 = () => {
  const navigate = useNavigate();
  return (
    <div>
        <BackNavbar />
      <div className='text-center'> 
        <div className='login-page-header mt-5 ft28b'>비밀번호 찾기</div>
          <InputUnderBar className='margin-1' item="이메일을 입력해주세요." />
          <WarningMessage style={{marginTop : '10px'}} item1={'이메일이 일치하지 않습니다.'} item2={'인증번호 발송'} />
          <InputUnderBar className='margin-2' item="인증번호를 입력해주세요." />
          <WarningMessage style={{marginTop : '10px'}} item1={'인증번호가 일치하지 않습니다.'} item2={'############'}/>
          <WarningMessage item1={'인증번호가 도착하지 않았다면?'} item2={'인증번호 재발송'} />
        
        <div>   
        <LoginFooter
        blue={{ text: '비밀번호 찾기', path: '/login' }}
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

export default FindPass2
