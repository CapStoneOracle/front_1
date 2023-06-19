import React from 'react';

const LoginInput = ({ className, type, item, value, onChange }) => {
  

  return (
    <div className={className}>
      <input className="login-input ft14r" type={type} placeholder={item} value={value} onChange={onChange} />
    </div>
  );
};

export default LoginInput;
