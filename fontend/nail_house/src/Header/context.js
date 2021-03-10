import React, { useState } from 'react'
import { userApi } from '../api'

export const HeaderContext = React.createContext()

const HeaderContextProvider = ({ children }) => {
  // console.log("여기는 context입니다.");
  const [click, setClick] = useState({
    store: ["스토어", "홈카테고리", "신혼가구", "베스트", "오늘의딜", "연휴특가", "월동준비", "리퍼마켓", "기획전"],
    community: ["홈", "사진", "집들이", "노하우", "전문가집들이", "셀프가이드", "질문과 답변", "이벤트"],
    interior: ["시공홈", "시공스토어"],
    hoverCheck: ""
  });

  // 글쓰기 드롭다운 내용
  const [write, setWrite] = useState({
    content: ["사진 올리기", "집들이 글쓰기", "영상집들이 글쓰기", "노하우 글쓰기", "상품 리뷰 쓰기", "시공 전문가 리뷰쓰기", "인테리어 질문하기", "고객센터"],
    dropdown: "none"
  })

  // 글쓰기 드롭다운 관련 함수
  const changeDisplay = (dropdown) => {
    if(dropdown === "block"){
      setWrite({...write, dropdown: "none"})
    }else{
      setWrite({...write, dropdown: "block"})
    }
  }

  // search input 관련 함수 - 나중에는 axios로 받아 올 수 있지 않을까해서 context에 넣어둠
  const [currentlySearch, setCurrentlySearch] = useState({
    list: [],
    display: "false",
    forBlur: "false"
  })

  const [afterLogin, setAfterLogin] = useState({
    isLogin:"false",
    loading:"false"
  })

  // 토큰 유효성 검사하는 곳
  const ChecktheLogined = async() => {
    console.log("로그인 확인 실행됨");
    try{
      const token = localStorage.getItem("token")
      const id = localStorage.getItem("user_id")
      const res = await userApi.UserCheck(id, token);
      // console.log(`res = ${res}`);
      if(res){
        // console.log("check");
        return
      }else{
        localStorage.removeItem("user_id");
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        setAfterLogin({...afterLogin, loading:"false"})
        return 
      }
    }catch(e){
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      setAfterLogin({...afterLogin, loading:"false"})
      // console.log("유저 정보가 만료되었습니다.");
      return 
    }
  }
    
  const [userInfo, setUserInfo] = useState({
    notice:[],
    alarm:[],
    cart:[],
    infoLoading:false
  })


  return (
  <HeaderContext.Provider value={{click, setClick, write, changeDisplay, currentlySearch, setCurrentlySearch, afterLogin, setAfterLogin, ChecktheLogined, userInfo, setUserInfo}}>
    {children}
  </HeaderContext.Provider>
  );
}



export default HeaderContextProvider