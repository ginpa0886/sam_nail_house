import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../Asset/icomoon/style.css'

const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const LoginContainer = styled.div`
  padding-top: 40px;
`;

const HomepageLogo = styled.div`
  width: 90px;
  height: 30px;
  background-image: url(${props => props.bgHome});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const TwoDvi = styled.div`
  padding: 60px 0;
`;

const TwoContent = styled.div`
  color: #424242;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1;
`;

const TwoDviOne = styled.div`
  color: #757575;
  font-size: 12px;
  text-align: center;
  letter-spacing: -0.4px;
  line-height: 1;
  margin: 15px 0;
`;

const TwoDivTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(237, 237, 237);
  margin-bottom: 30px;
`;

const TwoDviIcon = styled.div`
  width:40px;
  height:40px;
  background-image: url(${props => props.bgSns});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  border-radius: 50%;
  margin-right: 20px;

  &:last-child{
    margin-right: 0;
  }
`;
const ThridContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:30px;
`;

const ThirdDvi = styled.div`
  margin-bottom:12px;
`;
const ThirdDivContent = styled.div`
  color:#292929;
  font-size:15px;
  line-height:21px;
  font-weight:700;

`;

const ThirdInputContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ThirdInput = styled.input`
  height:40px;
  padding: 0 15px;
  border: solid 1px #dbdbdb;
  font-size: 15px;
  border-radius: 4px;
  color: rgb(66, 66, 66);
  margin-bottom:12px;
`;

const ThirdInputDiv = styled.div`
  color:#dbdbdb;
  text-align:center;
  font-size:13px;
  line-height:40px;
  letter-spacing:-0.4px;
`;
const ThirdInputDropdownContainer = styled.div`
  position: relative;
`;

const ThirdInputDropdown = styled.button`
  width:100%;
  background-color:white;
  border: solid 1px #dbdbdb;
  text-align:center;
  border-radius:4px;
  

  &:hover{
    background-color: #dbdbdb;
  }

  &:focus{
    outline:none;
  }
`;

const ThirdInputDropdownIcon = styled.i`
  position:absolute;
  top:10px;
  right:10px;
`;

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

const Agbutton = styled.button`
  width:22px;
  height:22px;
  background-color: white;
  border-radius:4px;
  border:solid 1px #dbdbdb;
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

const SubmitButton = styled.button`
  background-color:#35c5f0;
  color:white;
  text-align:center;
  width:100%;
  border:none;
  border-radius:4px;
  font-weight:700;
  font-size:18px;
  padding:26px 0;
`;
const SubmitContent = styled.div``;

const Footer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding-bottom:60px;
  margin-top:30px;
`;

const FooterContent = styled.div`
  color:#424242;
  font-size:15px;
  text-align:center;
  line-height:1;
  letter-spacing:-0.4px;
`;

const SLink = styled(Link)`
  padding-left:10px;
  text-decoration:underline;
  font-weight:700;
  font-size:15px;
  letter-spacing:-0.4px;
  line-height:1;

  &:hover{
    cursor: pointer;
  }
`;

const LoginPresenter = () => {
  return (
    <>
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <LoginContainer>
              <HomepageLogo bgHome={require('../../Asset/ForLogin/house_logo.png').default}></HomepageLogo>
            </LoginContainer>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-4"></Col>
          <Col className="col-4">
            <TwoDvi>
              <TwoContent>회원가입</TwoContent>
            </TwoDvi>
          </Col>
          <Col className="col-4"></Col>
        </Row>
        <Row className="row">
          <Col className="col-4"></Col>
          <Col className="col-4">
            <TwoDviOne>
              SNS계정으로 간편하게 회원가입
            </TwoDviOne>
            <TwoDivTwo>
              <TwoDviIcon bgSns={require('../../Asset/ForLogin/facebook_log.png').default}></TwoDviIcon>
              <TwoDviIcon bgSns={require('../../Asset/ForLogin/kakaotalk_logo.png').default}></TwoDviIcon>
              <TwoDviIcon bgSns={require('../../Asset/ForLogin/naver_logo.png').default}></TwoDviIcon>
            </TwoDivTwo>
          </Col>
          <Col className="col-4"></Col>
        </Row>
        <Row className="row">
          <Col className="col-4"></Col>
          <Col className="col-4">
            <ThridContainer>
              <ThirdDvi>
                <ThirdDivContent>이메일</ThirdDivContent>
              </ThirdDvi>
              <ThirdInputContainer>
                <ThirdInput placeholder="이메일" />
                <ThirdInputDiv>@</ThirdInputDiv>
                <ThirdInputDropdownContainer>
                  <ThirdInputDropdown>선택해주세요</ThirdInputDropdown>
                  <ThirdInputDropdownIcon className="icon-Chevron"></ThirdInputDropdownIcon>
                </ThirdInputDropdownContainer>
              </ThirdInputContainer>
            </ThridContainer>
            <PasswordContainer>
              <PasswordHeader>비밀번호</PasswordHeader>
              <PasswordSubHeader>8자 이상 입력해주세요.</PasswordSubHeader>
              <PasswordInput placeholder="비밀번호"/>
            </PasswordContainer>
            <PasswordContainer>
              <PasswordHeader>비밀번호 확인</PasswordHeader>
              <PasswordInput placeholder="비밀번호 확인"/>
            </PasswordContainer>
            <PasswordContainer>
              <PasswordHeader>별명</PasswordHeader>
              <PasswordSubHeader>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</PasswordSubHeader>
              <PasswordInput placeholder="별명 (2~15자)"/>
            </PasswordContainer>
            <PasswordHeader>약관 동의</PasswordHeader>
            <Agreement>
              <AgDiv>
                <Agbutton></Agbutton>
                <AgHeadContent>전체동의</AgHeadContent>
              </AgDiv>
              <AgDiv>
                <Agbutton></Agbutton>
                <AgContent>
                  만 14세 이상입니다.
                  <AgSpan>(필수)</AgSpan>
                </AgContent>
              </AgDiv>
              <AgDiv>
                <Agbutton></Agbutton>
                <AgContent>
                  이용약관
                  <AgSpan>(필수)</AgSpan>
                </AgContent>
              </AgDiv>
              <AgDiv>
                <Agbutton></Agbutton>
                <AgContent>
                  개인정보처리방침
                  <AgSpan>(필수)</AgSpan>
                </AgContent>
              </AgDiv>
              <AgDiv>
                <Agbutton></Agbutton>
                <AgContent>
                  이벤트, 알림 메일 및 SMS 수신
                  <AgDiSpan>(선택)</AgDiSpan>
                </AgContent>
              </AgDiv>
            </Agreement>
            <SubmitButton>
              <SubmitContent>회원가입 완료</SubmitContent>
            </SubmitButton>
            <Footer>
              <FooterContent>이미 아이디가 있으신가요?</FooterContent>
              <SLink to="/">로그인</SLink>
            </Footer>
          </Col>
          <Col className="col-4"></Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPresenter