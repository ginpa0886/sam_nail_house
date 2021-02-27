import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'


const StarDiv = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-bottom:15px;
`;


const Star = styled.div`
  width:16px;
  height:16px;
  background-image: url(${prosp => prosp.bgStar});
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center center;
  

`;

const StarCount = styled.span`
  margin-left:8px;
  color:rgba(61, 168, 245, 1);
  font-size:13px;
  font-weight:700;
  line-height:1.538461538461538;
`;


const ProductionDes0 = () => {
  const {detail: { productioninfo }} = useContext(ProductionContext)

  
  return (
    <>
      <StarDiv>
        <Star bgStar={require('../../../../Asset/ForBug//FilledStar.png').default}></Star>
        <Star bgStar={require('../../../../Asset/ForBug/FilledStar.png').default}></Star>
        <Star bgStar={require('../../../../Asset/ForBug/FilledStar.png').default}></Star>
        <Star bgStar={require('../../../../Asset/ForBug/FilledStar.png').default}></Star>
        <Star bgStar={require('../../../../Asset/ForBug/Shape (Stroke).png').default}></Star>
        <StarCount>566개 리뷰</StarCount>
      </StarDiv>
    </>
  )
}

export default ProductionDes0