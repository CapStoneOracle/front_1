import React, { useState } from 'react';
import Modal from '../component/Modal';
import '../modal.css';

const DuplicateCheck = ({ type,item }) => {
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
      <Modal open={modalOpen} close={closeModal} header={`중복된 ${type}입니다.`}>
        <div>
          <button className="yes-button" onClick={handleConfirm}>
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DuplicateCheck;
