import React from 'react';

const LoginInput = ({ className, item, type, value, onChange }) => {
  const handleBlur = () => {
    console.log(`${item}:`, value);
  };

  return (
    <div className={className}>
      <input
        className='login-input ft14r'
        type={type}
        placeholder={item}
        value={value}
        onBlur={handleBlur}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default LoginInput;
