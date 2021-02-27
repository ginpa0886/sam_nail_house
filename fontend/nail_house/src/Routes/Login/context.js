import axios from 'axios'
import React, { useState } from 'react'
import { userApi, SetHeaderToken } from '../../api'

export const LoginContext = React.createContext()

const LoginContextProvieder = ({children}) => {
  
  const [email, setEmail] = useState({
    ischange:"",
    inputEmail:"",
    checkWrite:"false"
  })

  const [pw, setPw] = useState({
    isPwchange:"",
    inputPw:"",
    checkPw:"false"
  })

  const [afterLogin, setAfterLogin] = useState({
    isLogin:"false"
  })

  // 유저 토큰 확인
  const postUserLogin = async(email, pw) => {
    const checkedEmail = email;
    const checkedPw = pw;
    const responseFromServer = {
      token:"",
      user_id:""
    }
    const id = 71;
    // console.log(checkedEmail, checkedPw);
    if(checkedEmail && checkedPw){
      try{
        // 로그인 요청 axios
         const res = await userApi.UserLogin(checkedEmail,checkedPw)

        const { data:{ token, user_id }} = res
        responseFromServer.token = token;
        responseFromServer.user_id = user_id;
        
      }catch(e){
        alert("잘못된 정보입니다.")
      }
    }

    try{
      // 유저 로그인 확인 axios 요청
      const token = responseFromServer.token
      const user_id = responseFromServer.user_id
      const response = await userApi.UserCheck(id, token)

      // 로컬스토리지 저장
      if(response){
        localStorage.setItem("token", token)
        localStorage.setItem("user_id", user_id)

        return
      }else{
        console.log("token 정보가 올바르지 않습니다.");
        return
      }
  
    }catch(e){
      console.log({e});
    }
    // console.log(responseFromServer);
    
  }

  return (
    <LoginContext.Provider value={{email, setEmail, pw, setPw, postUserLogin, afterLogin, setAfterLogin}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvieder