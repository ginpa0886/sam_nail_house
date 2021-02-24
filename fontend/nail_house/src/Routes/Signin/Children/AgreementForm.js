import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { SigninContext } from '../context'
import '../../../Asset/icomoon/style.css'


const Agreement = styled.div`
  border:1px solid #dbdbdb;
  padding:23px 23px 6px 16px;
  margin-bottom:30px;
`;

const AgDiv = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding-bottom:18px;
  margin-bottom:16px;
  &:first-child{
    border-bottom:1px solid #ededed;
  }

  &:last-child{
    margin-bottom:0;
  }
`;

const Agbutton = styled.span`
  width:22px;
  height:22px;
  background-color: ${props => props.buttoncheck === "false" ? "white" : "#35c5f0"};
  border-radius:4px;
  border:solid 1px #dbdbdb;
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
  &:hover{
    cursor: pointer;
  }
`;

const AgHeadContent = styled.div`
  color:#424242;
  font-size:14px;
  letter-spacing:-0.4px;
  line-height:1;
  padding-left:10px;
  font-weight:700;
`;

const AgContent = styled.div`
  color:#424242;
  font-size:14px;
  letter-spacing:-0.4px;
  line-height:1;
  padding-left:10px;
`;
const AgSpan = styled.span`
  color:#35c5f0;
  font-size:12px;
  margin-left:4px;
  line-height:18px;
  letter-spacing:-0.4px;
`;
const AgDiSpan = styled.span`
  color:#bdbdbd;
  font-size:12px;
  margin-left:4px;
  line-height:18px;
  letter-spacing:-0.4px;
`;

const Icon = styled.div`
  font-size:15px;
  color:white;
  position:absolute;
`;

const AgreementForm = () => {
  const { agreement, agreement : { isCheck1, isCheck2, isCheck3, isCheck4, isCheck5, loading, needCheck }, setAgreement} = useContext(SigninContext)

  const Check1 = () => {
      if(isCheck1 === "false"){
        setAgreement({...agreement, isCheck1: "true", isCheck2: "true", isCheck3: "true", isCheck4: "true", isCheck5:"true", loading:"true"})
      }else{
        setAgreement({...agreement, isCheck1: "false", isCheck2: "false", isCheck3: "false", isCheck4: "false", isCheck5: "false"})
      }
  }

  const Check2 = () => {
    if(isCheck2 === "false"){
      setAgreement({...agreement, isCheck2: "true", loading:"true"})
    }else{
      setAgreement({...agreement, isCheck2: "false", loading:"false"})
    }
}

  const Check3 = () => {
    if(isCheck3 === "false"){
      setAgreement({...agreement, isCheck3: "true", loading:"true"})
    }else{
      setAgreement({...agreement, isCheck3: "false", loading:"false"})
    }
  }

  const Check4 = () => {
    if(isCheck4 === "false"){
      setAgreement({...agreement, isCheck4: "true", loading:"true"})
    }else{
      setAgreement({...agreement, isCheck4: "false", loading:"false"})
    }
  }

  const Check5 = () => {
    if(isCheck5 === "false"){
      if(isCheck2 === "true" && isCheck3 === "true" && isCheck4 === "true"){
        setAgreement({...agreement, isCheck1:"true", isCheck5: "true"})
      }else{
        setAgreement({...agreement, isCheck5: "true"})
      }
    }else{
      setAgreement({...agreement, isCheck5: "false"})
    }
  }

  useEffect(() => {
    if(isCheck2 === "true" && isCheck3 === "true" && isCheck4 === "true" && loading === "true"){
      setAgreement({...agreement, needCheck:"true", loading:"false"})
    } 
  }, [agreement])
  

  return (
    <>
      <Agreement>
        <AgDiv>
          <Agbutton buttoncheck={isCheck1} onClick={Check1}>
            <Icon className="icon-Chevron"></Icon>
          </Agbutton>
          <AgHeadContent>전체동의</AgHeadContent>
        </AgDiv>
        <AgDiv>
          <Agbutton buttoncheck={isCheck2} onClick={Check2}>
            <Icon className="icon-Chevron"></Icon>
          </Agbutton>
          <AgContent>
            만 14세 이상입니다.
            <AgSpan>(필수)</AgSpan>
          </AgContent>
        </AgDiv>
        <AgDiv>
          <Agbutton buttoncheck={isCheck3} onClick={Check3}>
            <Icon className="icon-Chevron"></Icon>
          </Agbutton>
          <AgContent>
            이용약관
            <AgSpan>(필수)</AgSpan>
          </AgContent>
        </AgDiv>
        <AgDiv>
          <Agbutton buttoncheck={isCheck4} onClick={Check4}>
            <Icon className="icon-Chevron"></Icon>
          </Agbutton>
          <AgContent>
            개인정보처리방침
            <AgSpan>(필수)</AgSpan>
          </AgContent>
        </AgDiv>
        <AgDiv>
          <Agbutton buttoncheck={isCheck5} onClick={Check5}>
            <Icon className="icon-Chevron"></Icon>
          </Agbutton>
          <AgContent>
            이벤트, 알림 메일 및 SMS 수신
            <AgDiSpan>(선택)</AgDiSpan>
          </AgContent>
        </AgDiv>
      </Agreement>
    </>
  )
}

export default AgreementForm