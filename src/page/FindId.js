import React from 'react';
import BackNavbar from '../component/BackNavbar';
import LoginFooter from '../component/LoginFooter';
import WarningMessage from '../component/WarningMessage';
import { useNavigate } from 'react-router-dom';
import InputUnderBar from '../component/InputUnderBar';
import { useState, useEffect } from 'react';
import EmailDropDown from '../component/EmailDropDown';

const FindId = () => {
  const navigate = useNavigate();
  const [emailBase, setEmailBase] = useState('');
  const [emailDomain, setEmailDomain] = useState('');

  useEffect(() => {
    if (emailBase && emailDomain) {
      console.log("이메일 조합: ", emailBase + emailDomain);}
  }, [emailBase, emailDomain]);

  const handleEmailBaseChange = (event) => {
    setEmailBase(event.target.value);
  };

  const handleEmailDomainSelect = (domain) => {
    setEmailDomain(domain);
  };

  return (
    <div>
        <BackNavbar />

<div className='text-center'> 
  <div className='login-page-header mt-5 ft28b'>아이디 찾기</div>
        <div className="email-input">
          <InputUnderBar
            className="mt-4"
            style={{ maxWidth: '460px', width: '50vw' }}
            item="이메일을 입력해주세요."
            type="이메일"
            value={emailBase}
            onChange={handleEmailBaseChange}
          />
          <div className="mail-box">
            <div className="ft20b e9e9e9">@</div>
            <EmailDropDown onSelectDomain={handleEmailDomainSelect} />
          </div>
        </div>

    <WarningMessage style={{marginTop : '10px'}} item1={'이메일이 존재하지 않습니다.'} item2={'인증번호 발송'} />
    <InputUnderBar className='margin-2' item="인증번호를 입력해주세요." type="인증번호" />
    <WarningMessage style={{marginTop : '10px'}} item1={'인증번호가 일치하지 않습니다.'} item2={'############'}/>
    <WarningMessage item1={'인증번호가 도착하지 않았다면?'} item2={'인증번호 재발송'} />
  
  <div>   
  <LoginFooter
          blue={{ text: '아이디 찾기', path: '/login' }}
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

export default FindId
