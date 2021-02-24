import axios from 'axios'
import React, { useState } from 'react'
import { userApi } from '../../api'

export const SigninContext = React.createContext()

const SiginContextProvider = ({children}) => {
  const [dropdown, setDropdown] = useState({
    content: ["선택해주세요", "naver.com", "hanmail.net", "daum.net", "gmail.com", "nate.com", "hotmail.com", "outlook.com", "icloud.com", "직접입력"],
    nowClick: "선택해주세요",
    isClick: "false",
    change:"",
    laoding:"true",
    isEmailRight:"false"
  })

  const [password, setPassword] = useState({
    passWord:"",
    secondPassword:"",
    secondPasswordForLook:"",
    forInput: "false",
    check1:"false",
    forSecondInput: "false",
    check2:"false",
    inputContent: "",
    secondInput:"",
    lodaing:"true",
    isRight:"false"
  })

  const [nickname, setNickname] = useState({
    content:"",
    forDisplay:"false",
    checkContent:"",
    isNickRigth:"false"
  })

  const [agreement, setAgreement] = useState({
    isCheck1:"false",
    isCheck2:"false",
    isCheck3:"false",
    isCheck4:"false",
    isCheck5:"false",
    loading:"true",
    needCheck:"false"
  })

  const [userInfo, setUserInfo] = useState({
    email:"", 
    pw:"",
    nickname:"", 
  })

  // 유저 회원가입 POST 요청 보내는 함수
  const postUser = async(email, pw, nickname) => {
    try{
      const respose = await userApi.UserSignin(email, pw, nickname)
      console.log(respose);
      
    }catch(e){
      console.log(e);
    }
  }

  return (
    <SigninContext.Provider value={{dropdown, setDropdown, password, setPassword, userInfo, setUserInfo, nickname, setNickname, agreement, setAgreement, postUser}}>
      {children}
    </SigninContext.Provider>
  )
}

export default SiginContextProvider