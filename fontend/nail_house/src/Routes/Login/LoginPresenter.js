import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import UseInput from '../../Components/UseInput'
import UseButton from '../../Components/UseButton'
import { LoginContext } from './context'

const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const LoginContainer = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  padding:40px 0;
`;

const HomeLogo = styled.div`
  width:200px;
  height:70px;
  margin:30px 0;
  background-image: url(${props => props.bgLogo});
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center center;
`;

const SnsContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:30px;
`;

const Sns = styled.div`
  margin:0 10px;
  width:48px;
  height:48px;
  border-radius:50%;
  background-image: url(${props => props.bgSns});
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Input = styled.input`
  width:100%;
  height:50px;
  font-size:15px;
  line-height:50px;
  padding:0 15px;
  color:#424242;
  border:solid 1px #dbdbdb;
  border-radius:4px 4px 0 0;

  &:last-child{
    border-radius:0 0 4px 4px;
  }
`;

const Button = styled.button`
  width:100%;
  height:50px;
  padding:13px 15px;
  font-size:17px;
  font-weight:bold;
  line-height:1.41;
  margin:20px 0;
  background-color:#35c5f0;
  color:white;
  border-radius:4px;
  border: 1px solid #35c5f0;

  &:hover{
    cursor: pointer;
    background-color:rgb(53, 200, 240);
  }
`;

const buttoncss = {
  CSS:`
  width:100%;
  height:50px;
  padding:13px 15px;
  font-size:17px;
  font-weight:bold;
  line-height:1.41;
  margin:20px 0;
  background-color:#35c5f0;
  color:white;
  border-radius:4px;
  border: 1px solid #35c5f0;

  &:hover{
    cursor: pointer;
    background-color:rgb(53, 200, 240);
  }
  `
};

const buttonContent = '로그인'

const Two = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  color:#424242;
  font-size:15px;
  line-height:1.4;
  margin-bottom:20px;
  text-align:center;
  letter-spacing:-0.4px;
`;

const TwoItem = styled.div`
  margin:0 10px;
`;

const SnsContent = styled.div`
  margin:15px 0;
  color:#757575;
  font-size:12px;
  text-align:center;
  font-weight:normal;
  line-height:1.33;
  letter-spacing:-0.4px;
`;

const NotUser = styled.div`
  width:100%;
  color:#424242;
  font-size:15px;
  line-height:1.4;
  margin-bottom:20px;
  text-align:center;
  letter-spacing:-0.4px;
  border-top:1px solid #dbdbdb;
  padding:40px 0;
`;

const Footer = styled.footer`
  margin: 20px 0 25px 0;
  text-align: center;
  color: #757575;
  font-size: 10px;
  line-height: 20px;
  letter-spacing:-0.4px;
`;
const FooterSpan = styled.span``;

const GotoSginin = styled(Link)`

`;


const LoginPresenter = () => {
  const {email, setEmail, pw, setPw, email:{ inputEmail, checkWrite }, pw:{ inputPw, checkPw }, postUserLogin} =useContext(LoginContext)
  let checkLogin = false;

  const firstInputchange = (e) => {
    const { target: { value }} = e;
    if(value === undefined || value === ""){
      setEmail({...email, inputEmail:value, checkWrite:"false"})
    }else{
      setEmail({...email, inputEmail:value, checkWrite:"true"})
    }
    
  }

  const secondInputchange = (e) => {
    const { target: { value }} = e;
    if(value === undefined || value === ""){
      setPw({...pw, inputPw:value, checkPw:"false"})
    }else{
      setPw({...pw, inputPw:value, checkPw:"true"})
    }
  }

  const LoginSubmit = (e) => {
    const {target: { children }} = e;
    const userEmail = children[1].value;
    const userPw = children[2].value;
    // console.log("submit");
    if(checkPw === "true" && checkWrite === "true" && userEmail && userPw){
      checkLogin = true;
    }

    if(checkLogin === true){
      postUserLogin(userEmail, userPw)
    }
  }

  return (
    <>
      <Container className="container">
        <Row className="row">
          <Col className="col-4"></Col>
          <Col className="col-4">
            <LoginContainer onSubmit={LoginSubmit}>
              <HomeLogo bgLogo={require('../../Asset/ForLogin/house_logo.png').default}></HomeLogo>
              <Input placeholder="이메일" onChange={firstInputchange} value={inputEmail}/>
              <Input placeholder="비밀번호" onChange={secondInputchange} value={inputPw}/>
              <Button type="submit">로그인</Button>
              <Two>
                <TwoItem>비밀번호 재설정</TwoItem>
                <TwoItem><GotoSginin to="/signin">회원가입</GotoSginin></TwoItem>
              </Two>
              <SnsContent>Sns계정으로 간편 로그인/회원가입</SnsContent>
              <SnsContainer>
                <Sns bgSns={require('../../Asset/ForLogin/facebook_log.png').default}></Sns>
                <Sns bgSns={require('../../Asset/ForLogin/kakaotalk_logo.png').default}></Sns>
                <Sns bgSns={require('../../Asset/ForLogin/naver_logo.png').default}></Sns>
              </SnsContainer>
              <NotUser>비회원 주문 조회하기</NotUser>
              <Footer>
                <FooterSpan>©Bucketplace Inc. All Rights Reserved</FooterSpan>
              </Footer>
            </LoginContainer>
          </Col>
          <Col className="col-4"></Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPresenter