import React from 'react';

const InputUnderBar = ({ className, item, style, value, onChange}) => {


  return (
    <div className={className}>
      <input
        className='input-under-bar ft14r'
        type='text'
        placeholder={item}
        style={style}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputUnderBar;
