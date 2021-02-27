import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'


const PriceContainer = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
  margin-bottom:12px;
`;

const SellNum = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin-right:8px;
`;

const PriceSale = styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-end;
  font-size:44px;
  line-height:1.227272727272727;
  font-weight:700;
  color:rgba(61, 168, 245, 1);
  
  
`;

const SellPer = styled.div`
  font-size:20px;
  line-height:1;
  font-weight:700;
  color:rgba(61, 168, 245, 1);
  
`;
const Per = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right:16px;
`;


const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const Original = styled.div`
  font-size:14px;
  line-height:1.714285714285714;
  letter-spacing:-0.01em;
  color:rgba(133, 136, 150, 1);
  text-decoration:line-through;
`;

const OriginalWon = styled.div`
  font-size:14px;
  line-height:1.714285714285714;
  letter-spacing:-0.01em;
  color:rgba(133, 136, 150, 1);
`;

const SellPrice = styled.div`
  color:rgba(27, 28, 50, 1);
  font-size:32px;
  line-height:1;
  letter-spacing:-0.02em;
  font-weight:700;
`;

const SellPriceWon = styled.div`
  font-weight:400;
  font-size:28px;
  line-height:1.142857142857143;
`;

const Special = styled.div`
  border-radius:4px;
  background-color:rgba(248, 109, 125, 1);
  font-size:12px;
  line-height:1.666666666666667;
  font-weight:700;
  text-align:center;
  color:white;
  padding:0 6px;
`;

const ProductionDes1 = () => {
  const {detail: { productioninfo }} = useContext(ProductionContext)
  const information = productioninfo;
  const { production : { info : { original_price, sell_price}}} = information;

  const original = original_price;
  const sellPrice = sell_price;
  const persentage = Math.floor((sellPrice / original) * 100) ;


  return (
    <>
      <PriceContainer>
        <Per>
          <PriceSale>{persentage}
            <SellPer>%</SellPer>
          </PriceSale>
        </Per>
        <SellNum>
          <Div>
            <Original>{original}</Original>
            <OriginalWon>원</OriginalWon>
          </Div>
          <Div>
            <SellPrice>{sellPrice}</SellPrice>
            <SellPriceWon>원</SellPriceWon>
          </Div>
        </SellNum>
          <Div>
            <Special>특가</Special>
          </Div>
      </PriceContainer>
    </>
  )
}

export default ProductionDes1