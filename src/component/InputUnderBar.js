import React, { useState } from 'react';

const InputUnderBar = ({ className, item, style, type }) => {
  const [inputValue, setInputValue] = useState('');

  const handleBlur = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log(`${type}:`, value);
  };

  return (
    <div className={className}>
      <input
        className='input-under-bar ft14r'
        type='text'
        placeholder={item}
        style={style}
        defaultValue={inputValue}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputUnderBar;
