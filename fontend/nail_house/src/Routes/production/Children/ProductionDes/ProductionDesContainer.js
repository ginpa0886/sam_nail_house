import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import ProductionDes0 from './ProductionDes0'
import ProductionDes1 from './ProductionDes1'
import ProductionDes2 from './ProductionDes2'
import ProductionDes3 from './ProductionDes3'
import ProductionDes4 from './ProductionDes4'

const InfoSection = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
`;

const InfoBrand = styled.span`
  color:rgba(61, 168, 245, 1);
  font-size:13px;
  line-height:1.538461538461538;
  font-weight:700;
  text-align:center;
  margin-bottom:4px;
`;

const Name = styled.div`
  font-size:24px;
  line-height:1.416666666666667;
  font-weight:400;
  color:rgba(27, 28, 50, 1);
  margin-bottom:8px;
`;




const ProductionDesContainer = () => {
  const {detail: { productioninfo }} = useContext(ProductionContext)
  const information = productioninfo;
  const { production: { info : { name }} ,brand : { brand} } = information;

  return (
    <>
      <InfoSection>
        <InfoBrand>{brand}</InfoBrand>
        <Name>{name}</Name>
        <ProductionDes0 />
        <ProductionDes1 />
        <ProductionDes2 />
        <ProductionDes3 />
        <ProductionDes4 />
      </InfoSection>
    </>
  )
}

export default ProductionDesContainer