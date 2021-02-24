import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { SigninContext } from '../context'

const PasswordHeader = styled.div`
  font-size: 15px;
  color:#292929;
  line-height:21px;
  font-weight:700;
  letter-spacing:-0.4px;
  margin-bottom:12px;
`;

const PasswordContainer = styled.div`
  margin-bottom:30px;

  &:last-child{
    margin-bottom:0;
  }
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


const Nickname = () => {
  const {nickname, nickname : { content, forDisplay, checkContent, isNickRigth }, setNickname} = useContext(SigninContext);

  const checkChange = (e) => {
    const { target: { value }} = e;
    if(value === undefined || value === ""){
      setNickname({...nickname, content: value, forDisplay: "true", checkContent: "필수 입력 항목입니다.", isNickRigth:"false"})
    }
    else if(value.length < 2){
      setNickname({...nickname, content: value, forDisplay: "true", checkContent: "2자 이상 입력해주세요.", isNickRigth:"false"})
    }
    else if(value.length > 15){
      setNickname({...nickname, content: value, forDisplay: "true", checkContent: "15자 이하로 입력해주세요",isNickRigth:"false"})
    }
    else{
      setNickname({...nickname, content: value, forDisplay: "false", checkContent: "" ,isNickRigth:"true"})
    }
  }

  return (
    <>
      <PasswordContainer>
        <PasswordHeader>별명</PasswordHeader>
        <PasswordSubHeader>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</PasswordSubHeader>
        <PasswordInput placeholder="별명 (2~15자)" onChange={checkChange} value={content}/>
        <RedWord display={forDisplay}>{checkContent}</RedWord>
      </PasswordContainer>
    </>
  )
}

export default Nickname