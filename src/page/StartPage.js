import React from 'react';
import LoginFooter from '../component/LoginFooter';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  const styles = {
    startBackground: {
      margin : '0',
      backgroundRepeat: 'no-repeat',
      height : '100vh',
      backgroundSize:'cover',
      backgroundPosition: '70%',
      backgroundImage: `url(${process.env.PUBLIC_URL}/image/background.png)`,
    }
  };
  
  return (
    <div style={styles.startBackground}>
      <div className="text-center">
        <LoginFooter
          blue={{ text: '로그인하기', path: '/login' }}
          item1={{ text: '아이디 찾기', path: '/findid' }}
          item2={{ text: '비밀번호 찾기', path: '/findpass1' }}
          item3={{ text: '회원가입', path: '/signup' }}
          onLinkClick={(path) => navigate(path)}
        />
      </div>
    </div>
  );
}

export default StartPage;
