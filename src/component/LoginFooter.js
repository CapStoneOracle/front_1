import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BlueButton from './BlueButton';

const LoginFooter = ({ blue, item1, item2, item3, onLinkClick }) => {
  return (
    <div className='fixed-bottom marginFooter'>
      <div className='mb-5'>
        <BlueButton item={blue.text} onClick={() => onLinkClick(blue.path)} />
      </div>
      <Row className='ft14r' style={{margin:'0 15px'}}>
        <Col onClick={() => onLinkClick(item1.path)}>{item1.text}</Col>
        <Col onClick={() => onLinkClick(item2.path)}>{item2.text}</Col>
        <Col onClick={() => onLinkClick(item3.path)}>{item3.text}</Col>
      </Row>
    </div>
  );
};

export default LoginFooter;
