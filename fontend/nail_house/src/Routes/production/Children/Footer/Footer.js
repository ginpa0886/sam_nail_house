import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'

const Container = styled.section`
  padding:32px 0 40px 0;
  background-color:#F7F8FA;
`;

const Header = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:20px;
`;
const Senter = styled.div`
  color:rgba(27, 28, 50, 1);
  font-size:14px;
  line-height:1.714285714285714;
  font-weight:700;
  letter-spacing:-0.01em;
`;
const Phone = styled.div`
  color:rgba(27, 28, 50, 1);
  font-size:24px;
  line-height:1.416666666666667;
  font-weight:700;
`;
const Time = styled.div`
  color:rgba(133, 136, 150, 1);
  font-size:12px;
  line-height:1.666666666666667;
`;

const Body = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
`;
const Company = styled.div`
  color:#858896;
  font-size:12px;
  line-height:1.666666666666667;

`;
const Address = styled.div`
  color:#858896;
  font-size:12px;
  line-height:1.666666666666667;
`;

const Footer = () => {
  const { detail : { productioninfo :{ production: { question }} }} = useContext(ProductionContext)


  return (
    <>
      <Container>
        <Header>
          <Senter>고객센터</Senter>
          <Phone>1004-1004</Phone>
          <Time>평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</Time>
        </Header>
        <Body>
          <Company>상호명 : 버그가 너무 많아 김버그    이메일(고객문의) kimbugx@gmail.com (제휴문의) kimbugx@gmail.com    대표이사 : 김버그</Company>
          <Address>주소 : 서울 서초구</Address>
        </Body>
      </Container>
    </>
  )
}

export default Footer