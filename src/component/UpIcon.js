import React from 'react'

const UpIcon = () => {
    const handleIconClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div onClick={handleIconClick}>
            <img className='up-icon' src='/image/Up.png' alt='위로가기'/>
        </div>
    )
}

export default UpIcon