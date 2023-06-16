import React from 'react'

const WarningMessage = ({ item1, item2, style }) => {
    return (
      <div className='warning-message container'>
        <div className='ft12b' style={{ color: item1 === '인증번호가 도착하지 않았다면?' ? 'black' : 'red',
                                        visibility: item1 === '############'|| item1 === '###################' ? 'hidden' : 'visible' }}>
          {item1}
        </div>

        {<div className='ft12b' style={{ color: '#0064FF', textDecoration: 'underline', visibility: item2 === '############' ? 'hidden' : 'visible' }}>
            {item2}
          </div>
        }
      </div>
    );
  };

export default WarningMessage
