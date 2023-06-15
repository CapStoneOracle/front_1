import React from 'react'

const InputUnderBar = ({className,item,style}) => {
  return (
    <div className={className}>
        <input className='input-under-bar ft14r' type='text' placeholder={item} style={style}/>
    </div>
  )
}

export default InputUnderBar
