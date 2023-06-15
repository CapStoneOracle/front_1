import React from 'react'

const LoginInput = ({ className, item }) => {
  return (
    <div className={className}>
      <input className='login-input ft14r' type='text' placeholder={item}/>
    </div>
  )
}

export default LoginInput
