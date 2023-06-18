import React, { useState } from 'react';
import Modal from '../component/Modal';
import '../modal.css';

const WarningMessage = ({ item1, item2, onSendVerificationCode }) => {
  const [isModalOpen, setModalOpen] = useState(false); // State for the modal

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="warning-message container">
      <div
        className="ft12b"
        style={{
          color: item1 === '인증번호가 도착하지 않았다면?' ? 'black' : 'red',
          visibility: item1 === '############' || item1 === '###################' ? 'hidden' : 'visible'
        }}
      >
        {item1}
      </div>

      {item2 !== '############' && (
        <div
          className="ft12b"
          style={{ color: '#0064FF', textDecoration: 'underline', visibility: 'visible', cursor: 'pointer' }}
          onClick={() => {
            onSendVerificationCode();
            openModal();
          }}
        >
          {item2}
        </div>
      )}

      <Modal open={isModalOpen} 
        header="인증 메일이 발송되었습니다."        
      >
        <div>
          <button className="yes-button" onClick={closeModal}>
            확인
          </button>
        </div>
      </Modal>

    </div>
  );
};

export default WarningMessage;
