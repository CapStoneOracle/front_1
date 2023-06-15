import { Route, Routes } from 'react-router-dom';

import StartLogo from './page/StartLogo';
import StartPage from './page/StartPage';
import LoginMain from './page/LoginMain';
import SignUp from './page/SignUp';
import SignUpEnd from './page/SignUpEnd';
import FindId from './page/FindId';
import FindPass1 from './page/FindPass1';
import FindPass2 from './page/FindPass2';
import Home from './page/Home';
import Mypage from './page/Mypage';
import Myinfo from './page/Myinfo';
import Logout from './page/Logout';
import MyinfoRewrite from './page/MyinfoRewrite';
import RecommendPage from './page/RecommendPage';
import Suggest from './page/Suggest';
import StoreInfo from './page/StoreInfo';
import SearchResult from './page/SearchResult';
import MemberOut from './page/MemberOut';

import './Font.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<StartLogo/>}/>
      <Route path="/startpage" element={<StartPage/>}/>
      <Route path="/login" element={<LoginMain/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signupend" element={<SignUpEnd/>}/>
      <Route path="/findid" element={<FindId/>}/>
      <Route path="/findpass1" element={<FindPass1/>}/>
      <Route path="/findpass2" element={<FindPass2/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/mypage" element={<Mypage/>}/>
      <Route path="/mypage/myinfo" element={<Myinfo/>}/>
      <Route path="/mypage/info_rewrite" element={<MyinfoRewrite/>}/>
      <Route path="/home/recommend_page" element={<RecommendPage/>}/>
      <Route path="/mypage/suggest" element={<Suggest/>}/>
      <Route path="/store/:id" element={<StoreInfo/>}/>
      <Route path="/searchresult" element={<SearchResult/>}/>
      <Route path="/mypage/member_out" element={<MemberOut/>}/>
      <Route path='/mypage/logout' element={<Logout/>}/>
    </Routes>
    </div>
  );
}

export default App;
