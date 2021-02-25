import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../Asset/icomoon/style.css'
import { SigninContext } from './context'
import SigninEmail from './Children/SigninEmail'
import SigninPassword from './Children/SigninPassword'
import AgreementForm from './Children/AgreementForm'
import Nickname from './Children/Nickname'

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

const PasswordHeader = styled.div`
  font-size: 15px;
  color:#292929;
  line-height:21px;
  font-weight:700;
  letter-spacing:-0.4px;
  margin-bottom:12px;
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
const HLink = styled(Link)`

`;

const Form = styled.form``;

const SigninPresenter = () => {
  const { dropdown : { isEmailRight }, password : { isRight }, nickname: { isNickRigth }, agreement: { needCheck }, postUser} = useContext(SigninContext)
  let submitCheck = false;

const checkSubmit = (e) => {
  const { target : { children }} = e;
  const email1 = children[0].children[1].children[0].value;
  const email2 = children[0].children[1].children[2].children[0].children[0].innerText;
  const pw1 = children[1].children[2].value;
  const pw2 = children[2].children[1].value;
  const nickname1 = children[3].children[2].value;

  const realEmail = `${email1}@${email2}`
  const realPw = pw2;
  const nickName = nickname1;
  // console.log(
  //   `email1: ${email1}
  //   email2: ${email2}
  //   pw1: ${pw1}
  //   pw2:${pw2}
  //   nickname1:${nickname1}
  //   `
  // );
  console.log("실행됨");

  // 1차 확인
  if(isEmailRight === "true" && isRight === "true" && isNickRigth === "true" && needCheck === "true"){
      submitCheck = true
  }else{
    return
  }

  if(submitCheck === true){
    postUser(realEmail, realPw, nickName)
  }
}

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
            <Form onSubmit={checkSubmit} type="submit">
              <SigninEmail />
              <SigninPassword />
              <Nickname />
              <PasswordHeader>약관 동의</PasswordHeader>
              <AgreementForm />
              <SubmitButton type="submit">
                <SubmitContent>회원가입 완료</SubmitContent>
              </SubmitButton>
              <Footer>
                <FooterContent>이미 아이디가 있으신가요?</FooterContent>
                <SLink to="/login">로그인</SLink>
              </Footer>
            </Form>
          </Col>
          <Col className="col-4"></Col>
        </Row>
      </Container>
    </>
  )
}

export default SigninPresenter