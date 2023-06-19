import React, { useState } from 'react';
import LoginInput from '../component/LoginInput';
import LoginFooter2 from '../component/LoginFooter2';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import LoginModal from '../component/LoginModal';

const LoginMain = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalConfirmPath, setModalConfirmPath] = useState(null);

   // 로그인
   const login = () => {
    console.log(id, password);
    axios
      .post(`http://localhost:8080/login/`, null, {
        params: {
          id: id,
          password: password,
        },
      })
      .then((response) => {
        if (response.data) {
          setModalMessage('로그인에 성공하였습니다');
          setModalOpen(true);
          setModalConfirmPath({ pathname: '/home', state: { memId: id } });
        } else {
          setModalMessage('정보가 일치하지 않습니다');
          setModalOpen(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const modalConfirm = () => {
    if (modalConfirmPath) {
      navigate(modalConfirmPath.pathname,  { state: modalConfirmPath.state });
    }
    setModalOpen(false);
  };

  return (
    <div>
      <div style={{ height: '78px' }}></div>

      <div className="text-center">
        <div className="login-page-header mt-5 ft28b">로그인</div>
        <LoginInput className="margin-1" type="text" item="아이디를 입력해주세요." value={id} onChange={handleIdChange} />
        <LoginInput
          className="margin-2"
          type="password"
          item="비밀번호를 입력해주세요."
          value={password}
          onChange={handlePasswordChange}
        />

        <div>
          <LoginFooter2
            blue={{ text: '로그인', path: '/home', onClick: login }}
            item1={{ text: '아이디 찾기', path: '/findid' }}
            item2={{ text: '비밀번호 찾기', path: '/findpass1' }}
            item3={{ text: '회원가입', path: '/signup' }}
            onLinkClick={(path) => navigate(path)}
          />
        </div>
      </div>

      <LoginModal open={modalOpen} close={() => setModalOpen(false)} onConfirm={modalConfirm}>
        {modalMessage}
      </LoginModal>
    </div>
  );
};

export default LoginMain;