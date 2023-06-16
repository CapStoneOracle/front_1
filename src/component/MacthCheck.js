import React, { useState } from 'react';
import Modal from './Modal';
import '../modal.css';

const MacthCheck = ({ item }) => {
    const [modalOpen, setModalOpen] = useState(false);
      
    const openModal = () => {
         setModalOpen(true);
    };
      
    const closeModal = () => {
      setModalOpen(false);
    };
      
    const handleConfirm = () => {
      closeModal();
    };

  return (
    <div className="duplicate-checkbox">
      <button className="duplicate-check ft12r" onClick={openModal}>
      {`${item}`}
      </button>
      <Modal open={modalOpen} close={closeModal} header={`암호가 일치하지 않습니다.`}>
        <div>
          <button className="yes-button" onClick={handleConfirm}>
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default MacthCheck
