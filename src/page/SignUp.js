import React, { useEffect, useState } from 'react';
import BackNavbar from '../component/BackNavbar';
import InputUnderBar from '../component/InputUnderBar';
import WarningMessage from '../component/WarningMessage';
import BlueButton2 from '../component/BlueButton2';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EmailDropDown from '../component/EmailDropDown';
import DuplicateCheck from '../component/DuplicateCheck';
import MatchCheck from '../component/MatchCheck';

const SignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailBase, setEmailBase] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [modalHeader, setModalHeader] = useState('');

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


  const handlePasswordCheck = () => {
    if (password === confirmPassword) {
      setModalHeader('암호가 일치합니다.');
    } else {
      setModalHeader('암호가 일치하지 않습니다.');
    }
  };

  return (
    <Container>
      <BackNavbar />
      <div className="text-center">
        <div className="login-page-header mt-2 ft28b" style={{ left: '10px' }}>
          회원가입
        </div>

        <div className="input-check">
          <InputUnderBar
            className="mt-4"
            style={{ maxWidth: '520px', width: '63vw' }}
            item="아이디를 입력해주세요."
            type="아이디"
          />
          <DuplicateCheck item="중복확인" type="아이디" />
        </div>

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

        <WarningMessage item1={'###################'} item2={'인증번호 발송'} />

        <div className="signup-box">
          <InputUnderBar
            style={{ backgroundColor: '#f0f0f0' }}
            item="인증번호를 입력해주세요."
            type="인증번호"
          />
          <WarningMessage
            style={{ marginTop: '30px' }}
            item1={'인증번호가 도착하지 않았다면?'}
            item2={'인증번호 재발송'}
          />
        </div>

            <InputUnderBar
              className="mt-4"
              style={{ maxWidth: '600px'}}
              item="암호를 입력해주세요.(최소 8자 최대 12자)"
              type="암호"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

          <div className="input-check">
            <InputUnderBar
                  className="mt-4"
                  style={{ maxWidth: '520px', width: '63vw' }}
                  item="암호를 재입력해주세요."
                  type="재입력암호"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
            />
            <MatchCheck item="일치 확인" onCheck={handlePasswordCheck} modalHeader={modalHeader} />
          </div>

        <div className="input-check">
          <InputUnderBar
            className="mt-4"
            style={{ maxWidth: '520px', width: '65vw' }}
            item="별명을 입력해주세요."
            type="별명"
          />
          <DuplicateCheck item="중복확인" type="별명" />
        </div>

        <div className="mt-4"></div>

        <BlueButton2
          item={{ path: '/signupend', text: '확인' }}
          onLinkClick={(path) => navigate(path)}
        />
      </div>

      <div className="mt-5"></div>
    </Container>
  );
};

export default SignUp;