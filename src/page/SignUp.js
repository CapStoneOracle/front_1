import React from 'react';
import BackNavbar from '../component/BackNavbar';
import InputUnderBar from '../component/InputUnderBar';
import WarningMessage from '../component/WarningMessage';
import BlueButton2 from '../component/BlueButton2';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EmailDropDown from '../component/EmailDropDown';
import DuplicateCheck from '../component/DuplicateCheck';
import MacthCheck from '../component/MacthCheck';

const SignUp = () => {
  const navigate = useNavigate();

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
          />
          <DuplicateCheck item="중복확인" type="아이디" />
        </div>

        <div className="email-input">
          <InputUnderBar
            className="mt-4"
            style={{ maxWidth: '460px', width: '50vw' }}
            item="이메일을 입력해주세요."
          />
          <div className="mail-box">
            <div className="ft20b e9e9e9">@</div>
            <EmailDropDown />
          </div>
        </div>
        <WarningMessage item1={'###################'} item2={'인증번호 발송'} />

        <div className="signup-box">
          <InputUnderBar
            style={{ backgroundColor: '#f0f0f0' }}
            item="인증번호를 입력해주세요."
          />
          <WarningMessage
            style={{ marginTop: '30px' }}
            item1={'인증번호가 도착하지 않았다면?'}
            item2={'인증번호 재발송'}
          />
        </div>

        <InputUnderBar
          className="mt-4" style={{ maxWidth: '600px'}}
          item="암호를 입력해주세요.(최소 8자 최대 12자)"
        />

        <div className="input-check">
          <InputUnderBar
            className="mt-4"
            style={{ maxWidth: '520px', width: '63vw' }}
            item="암호를 재입력해주세요."
          />
          <MacthCheck item="일치 확인"/>
        </div>

        <div className="input-check">
          <InputUnderBar
            className="mt-4"
            style={{ maxWidth: '520px', width: '63vw' }}
            item="별명을 입력해주세요."
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
