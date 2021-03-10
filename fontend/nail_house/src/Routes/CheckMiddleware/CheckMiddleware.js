import React from 'react'
import styled from 'styled-components'
import { userApi } from '../../api'

const Padding = styled.section`
  margin-top:130px;
`;

// 모든 페이지에 margin-top을 주기 위한 미들웨어 역할....
// 왜냐면 header가 계속해서 위에 박혀있어야 하기 때문에...
const CheckMiddleware = () => {
  // 토큰 유효성 검사하는 곳
  const ChecktheLogined = async(token, id) => {
    // console.log("로그인 확인 실행됨");
    const typeToken = token;
    const typeId = id
    if(token !== null){
      try{
        const res = await userApi.UserCheck(typeId, typeToken);
        // console.log(`res = ${res}`);
        if(res){
          // console.log("check");
          return
        }else{
          localStorage.removeItem("user_id");
          localStorage.removeItem("token");
          localStorage.removeItem("profile");
          return 
        }
      }catch(e){
        localStorage.removeItem("user_id");
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        // console.log("유저 정보가 만료되었습니다.");
        return 
      }
    }else{
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      // console.log("유저 정보가 만료되었습니다.");
      return 
    }
  }

  const token = localStorage.getItem("token")
  const id = localStorage.getItem("user_id")

  
  ChecktheLogined(token, id);
  
  

  return (
    <>
      <Padding></Padding>
    </>
  )
}

export default CheckMiddleware