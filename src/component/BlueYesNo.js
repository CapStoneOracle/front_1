import React from 'react'

const BlueYesNo = ({ item, onClick }) => {
  return (
    <div>
       <button className='ft16r blue-yes-no' onClick={onClick}>{item}</button>
    </div>
  )
}

export default BlueYesNo