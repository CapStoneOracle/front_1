import React, { useState } from 'react';
import Modal from '../component/Modal';
import '../modal.css';

const DuplicateCheck = ({ type, item, onClick }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const openModal = (isDuplicate) => {
    setModalOpen(true);
    setIsDuplicate(isDuplicate);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    closeModal();
  };

  const handleCheck = () => {
    onClick()
      .then((response) => {
        const isDuplicate = response.data;
        openModal(isDuplicate);
      });
  };

  return (
    <div className="duplicate-checkbox">
      <button className="duplicate-check ft12r" onClick={handleCheck}>
        {`${item}`}
      </button>
      <Modal
        open={modalOpen}
        close={closeModal}
        header={isDuplicate ? `사용가능한 ${type}입니다.` : `중복된 ${type}입니다.`}
      >
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
