import React from 'react'
import styled from 'styled-components'
import '../../../../Asset/icomoonReal/style.css'

const Container = styled.section`
  width:100%;
  height:726px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`;
const InputArea = styled.div`
`;

const InputMain = styled.input`
  width:100%;
  height:40px;
  border:1px solid #3DA8F5;
  border-radius:4px;
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
  margin-bottom:8px;
  padding:8px 16px;
`;

const InputSub = styled.input`
  width:100%;
  height:40px;
  border:1px solid rgba(224, 226, 231, 1);
  border-radius:4px;
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
  padding:8px 16px;
`;

const Footer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const TotalContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:24px;
`;
const Word = styled.div`
  font-size:13px;
  line-height:1.538461538461538;
  font-weight:700;
  color:rgba(27, 28, 50, 1);
`;
const Price = styled.div`
  font-size:20px;
  line-height:1;
  font-weight:700;
  color:rgba(27, 28, 50, 1);
`;

const ButtonContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const ButtonOne = styled.button`
  width:55px;
  height:55px;
  border: 1px solid rgba(224, 226, 231, 1);
  border-radius:4px;
  color:#E0E2E7;
  background-color:white;
  margin-right:8px;
`;
const Icon = styled.i`
  font-size:32px;
`;
const ButtonTwo = styled.button`
  width:100%;
  height:55px;
  border:1px solid #3DA8F5;
  border-radius:4px;
  background-color:white;
  color:#3DA8F5;
  font-size:18px;
  letter-spacing:-0.02em;
  font-weight:700;
  line-height:1.555555555555556;
  margin-right:5.23px;
`;
const ButtonSam = styled.button`
  width:100%;
  height:55px;
  border:1px solid #3DA8F5;
  border-radius:4px;
  background-color:#3DA8F5;
  color:white;
  font-size:18px;
  letter-spacing:-0.02em;
  font-weight:700;
  line-height:1.555555555555556;
`;

const ProductionBar1 = () => {
  return (
    <>
      <Container>
        <InputArea>
          <InputMain placeholder="선택" />
          <InputSub placeholder="추가상품 (선택)" />
        </InputArea>
        <Footer>
          <TotalContainer>
            <Word>주문금액</Word>
            <Price>0원</Price>
          </TotalContainer>
          <ButtonContainer>
            <ButtonOne><Icon className="icon-Bookmark"></Icon></ButtonOne>
            <ButtonTwo>장바구니</ButtonTwo>
            <ButtonSam>바로구매</ButtonSam>
          </ButtonContainer>
        </Footer>
      </Container>
    </>
  )
}

export default ProductionBar1