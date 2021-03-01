import React, { useContext, useDebugValue } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'

const Container = styled.section`
  margin-bottom:80px;
`

const Header = styled.article`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:18px 0px;
`;

const Div = styled.div`
`;

const DivHeader = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
const Word = styled.div`
  color:rgba(27, 28, 50, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  margin-right:8px;
`;

const Body = styled.section``;

const BodySection = styled.section`
  padding-left:12px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  border-bottom:1px solid #C4C4C4;
`;
const Delivery = styled.div`
  width:140px;
  height:48px;
  font-size:14px;
  line-height:1.714285714285714;
  color:rgba(133, 136, 150, 1);
  letter-spacing:-0.01em;
  margin-right:12px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;
const Type = styled.div`
  color:#3F4150;
  font-size:14px;
  line-height:1.714285714285714;
  letter-spacing:-0.01em;
  margin-right:12px;

`;


const Refund1 = () => {
  const { detail : { productioninfo :{ production: { info }} }} = useContext(ProductionContext)
  const deliveryInfo = info;
  
  
  return (
    <>
      <Container>
        <Header>
          <DivHeader>
            <Word>교환/환불</Word>
          </DivHeader>
        </Header>
        <Body>
          <BodySection>
            <Delivery>반품배송비</Delivery>
            <Type>{deliveryInfo.return_fee}원 (최초 배송비가 무료인 경우 {(deliveryInfo.return_fee * 2)}원 부과</Type>
          </BodySection>
          <BodySection>
            <Delivery>교환배송비</Delivery>
            <Type>{deliveryInfo.exchange_fee}원</Type>
          </BodySection>
          <BodySection>
            <Delivery>보내실 곳</Delivery>
            <Type>{deliveryInfo.return_address}</Type>
          </BodySection>
        </Body>
      </Container>
    </>
  )
}

export default Refund1