import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  width:100%;
`;
const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const OptionInput = styled.input`
  width:100%;
  height:40px;
  border: 1px solid rgba(61, 168, 245, 1);
  border-radius:4px;
  margin-bottom:8px;
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:#3F4150;
  padding: 8px 16px;
`;
const OptionAddInput = styled.input`
  width:100%;
  height:40px;
  border: 1px solid rgba(224, 226, 231, 1);
  border-radius:4px;
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:#3F4150;
  padding: 8px 16px;
  margin-bottom:20px;
`;

const CostSection = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
`;

const CostContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Span = styled.span`
  font-size:13px;
  line-height:1.538461538461538;
  font-weight:700;
  color:#1B1C32;
`;

const Cost = styled.div`
  text-align:right;
  color:#1B1C32;
  font-size:20px;
  line-height:1;
  font-weight:700;
`;
const Won = styled.div`
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  font-weight:700;
  color:#1B1C32;
`;

const ButtonSection = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:40px;
`;

const CartButton = styled.button`
  width:100%;
  height:55px;
  background-color:white;
  border: 1px solid rgba(61, 168, 245, 1);
  border-radius:4px;
  color:rgba(61, 168, 245, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  margin-right:8px;
`;

const OrderButton = styled.button`
  width:100%;
  height:55px;
  border:none;
  background-color:rgba(61, 168, 245, 1);;
  border-radius:4px;
  color:white;
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
`;

const ProductionDes4 = () => {
  return (
    <>
      <Form>
        <Div>
          <OptionInput placeholder="선택" />
          <OptionAddInput placeholder="추가상품 (선택)"/>
        </Div>
        <CostSection>
          <Span>주문금액</Span>
          <CostContainer>
            <Cost>0</Cost>
            <Won>원</Won>
          </CostContainer>
        </CostSection>
        <ButtonSection>
          <CartButton>장바구니</CartButton>
          <OrderButton>바로구매</OrderButton>
        </ButtonSection>
      </Form>
    </>
  )
}

export default ProductionDes4