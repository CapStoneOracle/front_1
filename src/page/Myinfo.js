import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BackHomeNavbar from '../component/BackHomeNavbar';
import RewriteModal from '../component/RewriteModal';
import ConfirmModal from '../component/ConfirmModal';
import axios from 'axios';

const Myinfo = () => {
  const [modalOpen, setModalOpen] = useState({ nickname: false, email: false, password: false });
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [changedValue, setChangedValue] = useState('');
  const [serverError, setServerError] = useState(false);

  const location = useLocation();
  const userData = location.state?.userdata;
  const memId = location.state?.memId

  const handleModalOpen = (type) => {
    setModalOpen({ ...modalOpen, [type]: true, memId: memId });
  };

  const handleModalClose = (type) => {
    setModalOpen({ ...modalOpen, [type]: false });
  };

  const handleConfirmChange = (title, value) => {
    setChangedValue(value);
    handleModalClose(title);
  };

  const handleConfirm = async (title) => {
    try {
      if (title === '별명') {
        await axios.put('http://localhost:8080/change/name', null, {
          params: {
            id: memId,
            name: changedValue
          }
        });
        setNickname(changedValue);
      } else if (title === '이메일') {
        await axios.put('http://localhost:8080/change/email', null, {
          params: {
            id: memId,
            email: changedValue
          }
        });
        setEmail(changedValue);
      } else if (title === '비밀 번호') {
        await axios.put('http://localhost:8080/change/password', null, {
          params: {
            id: memId,
            password: changedValue
          }
        });
        setPassword(changedValue);
      }
  
      setChangedValue('');
    } catch (error) {
      console.error(error);
      setServerError(true);
    }
  };
  



  useEffect(() => {
    if (userData) {
      console.log(userData)
    }
  }, [userData]);


  return (
    <div>
      <BackHomeNavbar memId={memId} />
      <div className='fafafa'>
        <div className='mypage-logo'>
          <img className='logo-style' src='/image/로고.png' alt='Logo' />
        </div>
        <div className='ft14r'>
          <div className='info-column' />
          <div className='info-column'>
            <div>
              <div>별명</div>
              <div>{userData[0] && userData[0].memberName}</div>
              <div>{serverError ? '서버 연결 필요' : changedValue ? changedValue : nickname}</div>
            </div>
            <button className='info-button' onClick={() => handleModalOpen('nickname', memId)}>
              변경
            </button>
            <RewriteModal
              show={modalOpen.nickname}
              title="별명"
              onClose={() => handleModalClose('nickname')}
              onConfirm={(value) => handleConfirmChange('별명', value)}
              memId={memId} // Pass the memId prop to RewriteModal
            />
            <ConfirmModal show={changedValue !== ''} onConfirm={() => handleConfirm('별명')} onCancel={() => setChangedValue('')} memId={memId} />
          </div>
          <div className='info-column'>
            <div>
              <div>이메일</div>
              <div>{userData[0] && userData[0].memberEmail}</div>
              <div>{serverError ? '서버 연결 필요' : changedValue ? changedValue : email}</div>
            </div>
            <button className='info-button' onClick={() => handleModalOpen('email')}>
              변경
            </button>
            <RewriteModal
              show={modalOpen.email}
              title='이메일'
              onClose={() => handleModalClose('email')}
              onConfirm={(value) => handleConfirmChange('이메일', value)}
              memId={memId}
            />
            <ConfirmModal show={changedValue !== ''} onConfirm={() => handleConfirm('이메일')} onCancel={() => setChangedValue('')} memId={memId} />
          </div>
          <div className='info-column'>
            <div>
              <div>비밀 번호</div>
              <div>{userData[0] && userData[0].memberPassword}</div>
              <div>{serverError ? '서버 연결 필요' : changedValue ? changedValue : password}</div>
            </div>
            <button className='info-button' onClick={() => handleModalOpen('password')}>
              변경
            </button>
            <RewriteModal
              show={modalOpen.password}
              title='비밀 번호'
              onClose={() => handleModalClose('password')}
              onConfirm={(value) => handleConfirmChange('비밀 번호', value)}
              memId={memId}
            />
            <ConfirmModal show={changedValue !== ''} onConfirm={() => handleConfirm('비밀 번호')} onCancel={() => setChangedValue('')} memId={memId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myinfo;
