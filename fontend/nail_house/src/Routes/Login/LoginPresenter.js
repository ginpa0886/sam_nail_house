import React from 'react'
import styled from 'styled-components'
import UseInput from '../../Components/UseInput'
import UseButton from '../../Components/UseButton'

const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const LoginContainer = styled.div`
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

const cssone = {
  CSS: `
  width:100%;
  height:50px;
  font-size:15px;
  line-height:50px;
  padding:0 15px;
  color:#424242;
  border:solid 1px #dbdbdb;
  border-radius:4px 4px 0 0;`
}
const placeone = "이메일"

const csstwo = {
  CSS: `
  width:100%;
  height:50px;
  font-size:15px;
  padding:0 15px;
  line-height:50px;
  color:#424242;
  border:solid 1px #dbdbdb;
  border-radius:0 0 4px 4px;`
}

const placetwo = "비밀번호"

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
  margin: -5px 0 25px;
  text-align: center;
  color: #757575;
  font-size: 10px;
  line-height: 20px;
  letter-spacing:-0.4px;
`;
const FooterSpan = styled.span``;


const LoginPresenter = () => {
  return (
    <>
      <Container className="container">
        <Row className="row">
          <Col className="col-4"></Col>
          <Col className="col-4">
            <LoginContainer>
              <HomeLogo bgLogo={require('../../Asset/ForLogin/house_logo.png').default}></HomeLogo>
              <UseInput css={cssone} placeholder={placeone} />
              <UseInput css={csstwo} placeholder={placetwo} />
              <UseButton css={buttoncss} content={buttonContent}/>
              <Two>
                <TwoItem>비밀번호 재설정</TwoItem>
                <TwoItem>회원가입</TwoItem>
              </Two>
              <SnsContent>Sns계정으로 간편 로그인/회원가입</SnsContent>
              <SnsContainer>
                <Sns bgSns={require('../../Asset/ForLogin/facebook_log.png').default}></Sns>
                <Sns bgSns={require('../../Asset/ForLogin/kakaotalk_logo.png').default}></Sns>
                <Sns bgSns={require('../../Asset/ForLogin/naver_logo.png').default}></Sns>
              </SnsContainer>
              <NotUser>비회원 주문 조회하기</NotUser>
            </LoginContainer>
          </Col>
          <Col className="col-4"></Col>
        </Row>
        <Row className="row">
        <Col className="col-4"></Col>
        <Col className="col-4">
          <Footer>
            <FooterSpan>©Bucketplace Inc. All Rights Reserved</FooterSpan>
          </Footer>
        </Col>
        <Col className="col-4"></Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPresenter