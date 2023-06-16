
import React, { useState } from 'react';
import Modal from './Modal';
import '../modal.css';

const MatchCheck = ({ item, onCheck, modalHeader }) => {
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
        <button className="duplicate-check ft12r" onClick={() => { onCheck(); openModal(); }}>
          {`${item}`}
        </button>
        <Modal open={modalOpen} close={closeModal} header={modalHeader}>
          <div>
            <button className="yes-button" onClick={handleConfirm}>
              확인
            </button>
          </div>
        </Modal>
      </div>
    );
  };
  export default MatchCheck