import React from 'react';
import Form from 'react-bootstrap/Form';

function CheckRadio({ setSource }) {
  const handleChange = (event) => {
    setSource(event.target.id);
  };

  return (
    <Form>
      {['radio'].map((type) => (
        <div className='ft12b' key={`inline-${type}`}>
          <Form.Check
            inline
            label="네이버"
            name="group1"
            type={type}
            id='naver'
            onChange={handleChange}
            defaultChecked
          />
          <Form.Check
            inline
            label="구글"
            name="group1"
            type={type}
            id='google'
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="망고플레이트"
            name='group1'
            type={type}
            id='mango'
            onChange={handleChange}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckRadio;