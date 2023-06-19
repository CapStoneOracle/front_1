import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, onCancel, onConfirm }) => {
  const handleClose = () => {
    onCancel();
  };

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <Modal className='modal-position' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>확인</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        정말 변경하시겠습니까?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          취소
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;