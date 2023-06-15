import React from 'react'
import BackHomeNavbar from '../component/BackHomeNavbar'
import MypageBox from '../component/MypageBox'

const Mypage = () => {
  return (
    <div>
        <BackHomeNavbar/>
        <div className='fafafa'>
          <div className='mypage-logo'>
             <img className='logo-style' src='/image/로고.png' alt='Logo'/>
          </div>
          <div className='mypage-column ft16r'>
            <MypageBox item='' path=''/>
            <MypageBox item='내 정보' path='/mypage/myinfo'/>
            <MypageBox item='정보 수정' path='/mypage/info_rewrite'/>
            <MypageBox item='로그아웃' path='/mypage/logout'/>
            <MypageBox item='문의 / 건의' path='/mypage/suggest'/>
            <MypageBox item='회원 탈퇴' path='/mypage/member_out'/>
          </div>
        </div>
        
    </div>
  )
}

export default Mypage
