import React from 'react'
import BackNavbar from '../component/BackNavbar'
import WarningMessage from '../component/WarningMessage'
import LoginFooter from '../component/LoginFooter'
import { useNavigate } from 'react-router-dom'
import InputUnderBar from '../component/InputUnderBar'


const FindPass1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BackNavbar />

      <div className='text-center'> 
        <div className='login-page-header mt-5 ft28b'>비밀번호 찾기</div>
        <div className='margin-3'> 
          <InputUnderBar item="아이디를 입력해주세요." type="아이디"/>
          <WarningMessage style={{marginTop : '10px'}} item1={'아이디가 존재하지 않습니다.'} item2={'############'}/>
        </div>
        
        <div>   
        <LoginFooter
          blue={{ text: '다음', path: '/findpass2' }}
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

export default FindPass1
