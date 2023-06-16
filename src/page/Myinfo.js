import React from 'react';
import BackHomeNavbar from '../component/BackHomeNavbar';

const Myinfo = () => {
  return (
    <div>
      <BackHomeNavbar />
      <div className='fafafa'>
        <div className='mypage-logo'>
          <img className='logo-style' src='/image/로고.png' alt='Logo' />
        </div>
        <div className='ft14r'>
          <div className='info-column'/>
          <div className='info-column'>
            <div>
              <div>별명</div>
              <div>#####</div>
            </div>
            <button className='info-button'>변경</button>
          </div>
          <div className='info-column'>
            <div>
              <div>이메일</div>
              <div>#######</div>
            </div>
            <button className='info-button'>변경</button>
          </div>
          <div className='info-column'>
            <div>
              <div>비밀 번호</div>
              <div>#######</div>
            </div>
            <button className='info-button'>변경</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myinfo;
