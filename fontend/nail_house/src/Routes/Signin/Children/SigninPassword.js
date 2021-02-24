import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { SigninContext } from '../context'

const PasswordContainer = styled.div`
  margin-bottom:30px;

  &:last-child{
    margin-bottom:0;
  }
`;

const PasswordHeader = styled.div`
  font-size: 15px;
  color:#292929;
  line-height:21px;
  font-weight:700;
  letter-spacing:-0.4px;
  margin-bottom:12px;
`;

const PasswordSubHeader = styled.div`
  color:#757575;
  font-size:13px;
  line-height:1.4;
  letter-spacing:-0.4px;
`;
const PasswordInput = styled.input`
  height:40px;
  width:100%;
  padding:0 15px;
  border-radius:4px;
  border:solid 1px #dbdbdb;
  font-size:15px;
  color:#424242;
  margin-top:10px;
`;

const RedWord = styled.div`
  display:${props => props.display === "false" ? "none" : "block"};
  color:#f77;
  font-size:13px;
  line-height:21px;
  margin:10px 0;
  letter-spacing:-0.4px;
`;

const SigninPassword = () => {
  const { password , password: { passWord, secondPassword, secondPasswordForLook, forInput, inputContent, secondInput, forSecondInput, loading, isRight, check1, check2 }, setPassword } = useContext(SigninContext);

  // 비밀번호 input창 value 확인 함수
  const checkInput = () => {
    if(passWord === ""){
      setPassword({...password, forInput: "true", inputContent: "필수 입력 항목입니다.", check1:"false"})
    }
    else if(passWord.length < 8){
      setPassword({...password, forInput: "true", inputContent: "8자 이상 입력해주세요.", check1:"false"})
    }
    else{
      setPassword({...password, forInput: "false", inputContent: "", check1:"true"})
    }
  }

  // 비밀번호 input 창 onChange 함수
  const checkChange = (e) => {
    const { target : { value }} = e;
    setPassword({...password, passWord: value})
  }
  
  // 비밀 번호 확인 input창 onChange 함수
  const secondChange = (e) => {
    const { nativeEvent : { data } ,target : { value }} = e;
    
    setPassword({...password, secondPassword: value}) 
  }

  // 비밀 번호 확인 input창에 *로 표시해주는 함수
  const CantView = (secondPassword) => {
    let answer = "";
    for(let i = 0; i < secondPassword.length; i++){
      answer += "*";
    }

    return answer
  }

  // 비밀번호 확인 input에서 원하는 값을 들여놓지 않았을 때 실행되는 함수
  const checkSecondInput = () => {
    if(passWord !== secondPassword){
      setPassword({...password, forSecondInput: "true" ,secondInput: "확인을 위해 비밀번호를 한 번 더 입력해주세요.", check2:"false"})
    }else{
      console.log("여기아니가");
      setPassword({...password, forSecondInput: "false" ,secondInput: "", check2:"true", loading:"false"})
    }
  }

  useEffect(() => {
    if(loading === "false" && check1 === "true" && check2 === "true"){
      setPassword({...password, isRight: "true", loading: "true"})
    }
  }, [password])

  


  return (
    <>
      <PasswordContainer>
        <PasswordHeader>비밀번호</PasswordHeader>
        <PasswordSubHeader>8자 이상 입력해주세요.</PasswordSubHeader>
        <PasswordInput placeholder="비밀번호" onBlur={checkInput} onChange={checkChange} value={passWord}/>
        <RedWord display={forInput}>{inputContent}</RedWord>
      </PasswordContainer>
      <PasswordContainer>
        <PasswordHeader>비밀번호 확인</PasswordHeader>
        <PasswordInput placeholder="비밀번호 확인" onChange={secondChange} onBlur={checkSecondInput} value={secondPassword}  />
        <RedWord display={forSecondInput}>{secondInput}</RedWord>
      </PasswordContainer>
    </>
  )
}

export default SigninPassword