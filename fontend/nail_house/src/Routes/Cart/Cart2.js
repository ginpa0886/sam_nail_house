import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from './context'


const Container = styled.section`
  background-color:white;
  border-radius:4px;
  border:1px solid #ededed;
  padding:40px 20px 10px 20px;
`;

const Padding = styled.div`
  width:100%;
  height:85px;
`;

const Header = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const PriceCon = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const Word = styled.div`
  color:#424242;
  font-size:15px;
  letter-spacing: -0.4px;
  margin-bottom:20px;
`;
const Price = styled.div`
  color:#424242;
  font-size:15px;
  letter-spacing: -0.4px;
  font-weight:700;
`;
const Total = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:20px 0 30px 0;
`;
const TotalWord = styled.div`
  font-weight:700;
  line-height:1;
  font-size:15px;
  letter-spacing: -0.4px;
`;
const TotalPrice = styled.div`
  font-weight:700;
  line-height:1;
  font-size:24px;
  letter-spacing: -0.4px;
`;

const ButtonSection = styled.div`
  width:100%;
  background-color:#35c5f0;
  color:white;
  border-radius:4px;
  line-height: 20px;
  font-size: 17px;
  font-weight:700;
  padding:15px 0;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Cart2 = () => {
  const {cartInfo, cartInfo: { infoCart, loading }, setCartInfo, forBuy} = useContext(CartContext)
  let cartArray = []

  
  if(loading){
    cartArray = infoCart.filter(v => {
      if(v.enabled !== 0 ){
        return v
      }
    })
  }
  // console.log(cartArray);

  // 상품 카트 모달에 들어갈 변수들 ( 상품원가격합산, 세일한 가격합산, 최종가격합산 )
  let totalOriginal = 0;
  let totalPrice = 0;
  let salePrice = 0;
  let deliveryFee = 0;
  // 카트 상품 총 개수
  const productCount = cartArray.length;

  if(loading === true){
    cartArray.map((value, index) => totalOriginal += value.original_price * forBuy.count[index]);
    cartArray.map((value, index) => totalPrice += value.option_sell_price * forBuy.count[index]);
    cartArray.map((value) => deliveryFee += value.fee);
    salePrice = totalPrice - totalOriginal;
  }

  

  return (
    <>
      <Padding></Padding>
      <Container>
        <Header>
          <PriceCon>
            <Word>총 상품금액</Word>
            <Price>{totalOriginal}원</Price>
          </PriceCon>
          <PriceCon>
            <Word>총 배송비</Word>
            <Price>+{deliveryFee}원</Price>
          </PriceCon>
          <PriceCon>
            <Word>총 할인금액</Word>
            <Price>{salePrice}원</Price>
          </PriceCon>
          <Total>
            <TotalWord>결제금액</TotalWord>
            <TotalPrice>{totalPrice + deliveryFee}원</TotalPrice>
          </Total>
        </Header>
        <ButtonSection>
          {productCount}개 상품 구매하기
        </ButtonSection>
      </Container>
    </>
  )
}

export default Cart2