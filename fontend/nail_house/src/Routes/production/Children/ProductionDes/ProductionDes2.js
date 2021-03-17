import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'

const NomalDiv = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-bottom:16px;
`;

const Point = styled.span`
  color:rgba(61, 168, 245, 1);
  font-size:13px;
  line-height:1.538461538461538;
  font-weight:700;
  margin-right:3px;
`;
const PointContent = styled.div`
  color:rgba(133, 136, 150, 1);
  font-size:13px;
  line-height:1.538461538461538;
  font-weight:400;
`;

const ProductionDes2 = () => {
  const {detail: { productioninfo }} = useContext(ProductionContext)
  const information = productioninfo;
  const { production : { info : { sell_price, point}}} = information;

  const sellPrice = sell_price;
  const productionPoint = point;
  const userPoint = Math.floor(sellPrice * productionPoint/100).toLocaleString();
  

  return (
    <>
      <NomalDiv>
        <Point>{userPoint}P</Point>
        <PointContent>적립해드립니다. (VIP 3배 혜택 적용됨)</PointContent>
      </NomalDiv>
    </>
  )
}

export default ProductionDes2