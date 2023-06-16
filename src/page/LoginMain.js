import React, { useState } from 'react';
import LoginInput from '../component/LoginInput';
import LoginFooter from '../component/LoginFooter';
import { useNavigate } from 'react-router-dom';

const LoginMain = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    console.log('아이디:', username);
    console.log('비밀번호:', password);
  };

  return (
    <div>
      <div style={{ height: '78px' }}></div>

      <div className='text-center'>
        <div className='login-page-header mt-5 ft28b'>로그인</div>
        <LoginInput
          className='margin-1'
          item='아이디를 입력해주세요.'
          type='text'
          value={username}
          onChange={handleUsernameChange}
        />
        <LoginInput
          className='margin-2'
          item='비밀번호를 입력해주세요.'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />

        <div>
          <LoginFooter
            blue={{ text: '로그인', path: '/home' }}
            item1={{ text: '아이디 찾기', path: '/findid' }}
            item2={{ text: '비밀번호 찾기', path: '/findpass1' }}
            item3={{ text: '회원가입', path: '/signup' }}
            onLinkClick={(path) => navigate(path)}
            onSubmit={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
