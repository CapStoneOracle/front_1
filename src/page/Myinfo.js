import React, { useState } from 'react';
import BackHomeNavbar from '../component/BackHomeNavbar';
import RewriteModal from '../component/RewriteModal';

const Myinfo = () => {
  const [modalOpen, setModalOpen] = useState({ nickname: false, email: false, password: false });

  const handleModalOpen = (type) => {
    setModalOpen({ ...modalOpen, [type]: true });
  };

  const handleModalClose = (type) => {
    setModalOpen({ ...modalOpen, [type]: false });
  };

  const handleConfirmChange = (title, value) => {
    console.log(`${title} 변경될 값: `, value);
    handleModalClose(title);
    // 여기에 변경 이벤트를 정의하십시오
  };

  return (
    <div>
      <BackHomeNavbar />
      <div className='fafafa'>
        <div className='mypage-logo'>
          <img className='logo-style' src='/image/로고.png' alt='Logo' />
        </div>
        <div className='ft14r'>
          <div className='info-column'/>
          <div className='info-column'>
            <div>
              <div>별명</div>
              <div>#####</div>
            </div>
            <button className='info-button' onClick={() => handleModalOpen("nickname")}>변경</button>
            <RewriteModal show={modalOpen.nickname} title="별명" onClose={() => handleModalClose("nickname")} onConfirm={(value) => handleConfirmChange("별명", value)} />
          </div>
          <div className='info-column'>
            <div>
              <div>이메일</div>
              <div>#######</div>
            </div>
            <button className='info-button' onClick={() => handleModalOpen("email")}>변경</button>
            <RewriteModal show={modalOpen.email} title="이메일" onClose={() => handleModalClose("email")} onConfirm={(value) => handleConfirmChange("이메일", value)} />
          </div>
          <div className='info-column'>
            <div>
              <div>비밀 번호</div>
              <div>#######</div>
            </div>
            <button className='info-button' onClick={() => handleModalOpen("password")}>변경</button>
            <RewriteModal show={modalOpen.password} title="비밀 번호" onClose={() => handleModalClose("password")} onConfirm={(value) => handleConfirmChange("비밀 번호", value)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myinfo;