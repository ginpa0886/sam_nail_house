import React, { useContext } from 'react'
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


const Delivery1 = () => {
  const { detail : { productioninfo :{ production: { info }} }} = useContext(ProductionContext)
  const deliveryInfo = info;
  const checkDelivery = [];
  let cantDelivery = '';

  const one = deliveryInfo.delivery_to_backwoods === 1 ? '' : checkDelivery.push("산간지역");
  const two = deliveryInfo.delivery_to_capital === 1 ? '' : checkDelivery.push("수도권지역");
  const sam = deliveryInfo.delivery_to_jeju === 1 ? '' : checkDelivery.push("제주지역");
  
  if(checkDelivery.length !== 0){
    cantDelivery = checkDelivery.join(',')
    cantDelivery += " 배송이 불가합니다."
  }
  
  return (
    <>
      <Container>
        <Header>
          <DivHeader>
            <Word>배송</Word>
          </DivHeader>
        </Header>
        <Body>
          <BodySection>
            <Delivery>배송</Delivery>
            <Type>{deliveryInfo.type}</Type>
          </BodySection>
          <BodySection>
            <Delivery>배송비</Delivery>
            <Type>{deliveryInfo.free === 1 ? "무료배송" : "유료배송"}</Type>
          </BodySection>
          <BodySection>
            <Delivery>배송불가 지역</Delivery>
            <Type>{checkDelivery.length === 0 ? "배송불가 지역이 없습니다." : cantDelivery}</Type>
          </BodySection>
        </Body>
      </Container>
    </>
  )
}

export default Delivery1