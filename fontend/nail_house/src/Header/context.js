import React, { useState } from 'react'


export const HeaderContext = React.createContext()

const HeaderContextProvider = ({ children }) => {
  // 
  const [click] = useState({
    store: ["스토어", "홈카테고리", "신혼가구", "베스트", "오늘의딜", "연휴특가", "월동준비", "리퍼마켓", "기획전"],
    community: ["홈", "사진", "집들이", "노하우", "전문가집들이", "셀프가이드", "질문과 답변", "이벤트"],
    interior: ["시공홈", "시공스토어"]
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


  return (
  <HeaderContext.Provider value={{click, write, changeDisplay}}>
    {children}
  </HeaderContext.Provider>
  );
}



export default HeaderContextProvider