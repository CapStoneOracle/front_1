import React, { useState } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import ConfirmModal from './ConfirmModal';

const RewriteModal = ({ show, title, onClose }) => {
  const [value, setValue] = useState('');
  const [confirmShow, setConfirmShow] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleConfirm = () => {
    setConfirmShow(true); // Open the confirmation modal
    onClose(); // Close the original modal
  };

  const handleFinalCancel = () => {
    setConfirmShow(false); // Close the confirmation modal
  };

  const handleFinalConfirm = () => {
    console.log(`변경 ${title} :`, value); // Print the final value with the title
    setValue(''); // Reset the value after confirming
    setConfirmShow(false); // Close the confirmation modal
  };

  const handleClose = () => {
    onClose();
    setValue(''); // Reset the value when closing the modal
  };

  return (
    <>
      <Modal className='modal-position' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} 변경</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder={`새로운 ${title}을(를) 입력하세요.`}
              aria-label={title}
              aria-describedby="basic-addon2"
              value={value}
              onChange={handleInputChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            변경 저장
          </Button>
        </Modal.Footer>
      </Modal>

      <ConfirmModal
        show={confirmShow}
        onCancel={handleFinalCancel}
        onConfirm={handleFinalConfirm}
      />
    </>
  );
};

export default RewriteModal;