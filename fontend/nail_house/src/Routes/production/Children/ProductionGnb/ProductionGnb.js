import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  background-color:#F7F8FA;
  margin-bottom:36px;
`;

const ItemContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:148px;
  padding:15px 0;
  color:#3F4150;
  &:hover{
    cursor: pointer;
    color:rgba(61, 168, 245, 1);
    border-bottom:2px solid rgba(61, 168, 245, 1);
  }
`;

const Detail = styled.div`
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  font-weight:700;
  text-align:center;

`;
const Count = styled.span`
  display:block;
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:#3F4150;
  font-weight:700;
  text-align:center;
  color:#A2A5AF;
  margin-left:5px;
`;

const ProductionGnb = () => {
  return (
    <>
      <Container>
        <ItemContainer>
          <Detail>상품정보</Detail>
        </ItemContainer>
        <ItemContainer>
          <Detail>리뷰</Detail>
          <Count>566</Count>
        </ItemContainer>
        <ItemContainer>
          <Detail>문의</Detail>
          <Count>96</Count>
        </ItemContainer>
        <ItemContainer>
          <Detail>배송/문의</Detail>
        </ItemContainer>
      </Container>
    </>
  )
}

export default ProductionGnb