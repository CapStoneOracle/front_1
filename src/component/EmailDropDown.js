import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function EmailDropDown({onSelectDomain}) {
  const [selectedItem, setSelectedItem] = useState('이메일 선택');

  const handleSelect = (eventKey) => {
    onSelectDomain(eventKey);
    setSelectedItem(eventKey)
  };

  return (
    <DropdownButton className='ft14r'
      id="dropdown-variants-secondary"
      variant="secondary"
      title={selectedItem}
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="naver.com">naver.com</Dropdown.Item>
      <Dropdown.Item eventKey="daum.net">daum.net</Dropdown.Item>
      <Dropdown.Item eventKey="google.com">google.com</Dropdown.Item>
      <Dropdown.Item eventKey="nate.com">nate.com</Dropdown.Item>
    </DropdownButton>
  );
}

export default EmailDropDown;