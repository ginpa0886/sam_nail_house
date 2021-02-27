import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'


const Div = styled.div`
  width:100%;
  border: 1px solid rgba(224, 226, 231, 1);
`;

const UnderDiv = styled.div`
  width:100%;
  border: 1px solid rgba(224, 226, 231, 1);
  margin-bottom:24px;
`;

const DeliveryContainer = styled.div`
  padding: 16px 0 20px 0;
  
`;

const DeliveryType = styled.div`
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
  margin-bottom:7px;
`;
const DeliveryFree = styled.div`
  border-radius:4px;
  color:rgba(133, 136, 150, 1);
  font-size:12px;
  line-height:1.666666666666667;
  font-weight:700;
  text-align:center;
  background-color:rgba(224, 226, 231, 1);
`;

const ProductionDes3 = () => {
  const {detail: { productioninfo }} = useContext(ProductionContext)
  const information = productioninfo;
  const { production : { info : { type, free}}} = information;

  const deliveryType = type;
  const isFree = free;
  let checkFree = "무료배송"

  if(isFree === 0){
    checkFree = "유료배송"
  }


  return (
    <>
      <Div></Div>
      <DeliveryContainer>
        <DeliveryType>{deliveryType}</DeliveryType>
        <DeliveryFree>{checkFree}</DeliveryFree>
      </DeliveryContainer>
      <UnderDiv></UnderDiv>
    </>
  )
}

export default ProductionDes3