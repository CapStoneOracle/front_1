import React, { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackHomeNavbar from '../component/BackHomeNavbar';
import MypageBox from '../component/MypageBox';
import Modal from '../component/Modal';
import '../modal.css';
import axios from 'axios';

const Mypage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const memId = location.state?.memId;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleYes = () => {
    // 예 버튼을 클릭했을 때 처리할 로직 추가
    navigate('/login')
    console.log('예 버튼 클릭');
    closeModal();
  };

  const handleNo = () => {
    // 아니오 버튼을 클릭했을 때 처리할 로직 추가
    console.log('아니오 버튼 클릭');
    closeModal();
  };

  useEffect(() => {
    // 서버에서 사용자 정보 가져오기
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/find/id?id=${memId}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  },[memId]);
  console.log(memId)

  return (
    <div>
      <BackHomeNavbar memId={memId} />
      <div className='fafafa'>
        <div className='mypage-logo'>
          <img className='logo-style' src='/image/로고.png' alt='Logo' />
        </div>
        <div className='mypage-column ft16r'>
          <MypageBox item='' path='' userdata={userData} memId={memId}/>
          <MypageBox item='내 정보' path='/mypage/myinfo' userdata={userData} memId={memId}/>
          <button className='non-button mypage-box' onClick={openModal}>로그아웃</button>
          <Modal open={modalOpen} close={closeModal} header="로그아웃 하시겠습니까?" memId={memId}>
            <div>
              <button className="yes-button"
              onClick={handleYes}>예</button>
              <button className="no-button" onClick={handleNo}>아니오</button>
            </div>
          </Modal>
          <MypageBox item='회원 탈퇴' path='/mypage/member_out' memId={memId}/>
          <div className='ft14r fixed-bottom mb-3 eee'>문의 사항은 alfzks88@naver.com</div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;