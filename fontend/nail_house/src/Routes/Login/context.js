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
      user_id:"",
      user_profile:""
    }
    // console.log(checkedEmail, checkedPw);
    if(checkedEmail && checkedPw){
      try{
        // 로그인 요청 axios
        const res = await userApi.UserLogin(checkedEmail,checkedPw)

        const { data:{ token, user_id, profile }} = res
        responseFromServer.token = token;
        responseFromServer.user_id = user_id;
        responseFromServer.user_profile = profile
        

      }catch(e){
        alert("잘못된 정보입니다.....")
        console.log(e);
      }
    }

    try{
      // 유저 로그인 확인 axios 요청
      const token = responseFromServer.token
      const user_id = responseFromServer.user_id
      const profile = responseFromServer.user_profile
      const response = await userApi.UserCheck(user_id, token)

      // 로컬스토리지 저장
      if(response){
        localStorage.setItem("token", token)
        localStorage.setItem("user_id", user_id)
        localStorage.setItem("profile", profile)
        window.location.replace('/')
        return
      }else{
        console.log("token 정보가 올바르지 않습니다.");
        localStorage.removeItem("token")
        localStorage.removeItem("user_id")
        localStorage.removeItem("profile")
        return
      }
  
    }catch(e){
      localStorage.removeItem("token")
      localStorage.removeItem("user_id")
      localStorage.removeItem("profile")
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