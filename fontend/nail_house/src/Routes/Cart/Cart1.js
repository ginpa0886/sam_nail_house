import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from './context'

const Container = styled.section`
  width:100%;
  margin-bottom:12px;
`;
const ChooseSection = styled.section`
  width:100%;
  margin-top:30px;
  margin-bottom:30px;
  
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const FlexDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0 21px 0 15px;
`;
const AllButton = styled.button`
  width:25px;
  height:25px;
  background-color:white;
  border:1px solid rgb(133, 133, 133);
  margin-right:10px;
  border-radius:4px;
`;
const AllWord = styled.div`
  font-size:15px;
  letter-spacing: -0.4px;
  line-height: 21px;
`;

const Remove = styled.div`
  color:rgb(66, 66, 66);
  font-size: 12px;
  line-height: 1;
  transition:opacity 0.1s ease;
  &:hover{
    opacity:0.5;
    cursor: pointer;
  }
`;

const CartContainer = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border:1px solid #ededed;
  border-radius:4px;
`;
const Header = styled.div`
  width:100%;
  border-bottom:1px solid #ededed;
`;
const HeaderContent = styled.div`
  font-weight:500;
  line-height:20px;
  font-size:15px;
  color:#424242;
  background-color:white;
  text-align:center;
  padding:20px 0;
`;
const Body = styled.div`
  width:100%;
  position:relative;
  background-color:white;
  padding:20px 15px 20px 54px;
`;
const BodyButton = styled.button`
  position:absolute;
  width:25px;
  height:25px;
  background-color:white;
  border:1px solid rgb(133, 133, 133);
  border-radius:4px;
  top:20px;
  left:15px;
`;

const BodyOne = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
`;
const BodyImg = styled.img`
  width:70px;
  height:70px;
  margin-right:12px;
  border-radius:4px;

`;
const OneCon = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  position:relative;
`;
const OneName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  line-height: 21px;
  letter-spacing: -0.4px;
  margin-bottom:8px;
`;
const OneDeli = styled.div`
  font-size: 11px;
  line-height: 15px;
  color: #757575;
  letter-spacing: -0.4px;
`;


const BodyTwo = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  background-color:#f5f5f5;
  border-radius:6px;
  padding:10px;
  margin-bottom:24px;
`;
const TwoName = styled.div`
  line-height: 20px;
  color: #424242;
  font-size: 15px;
  letter-spacing: -0.4px;
  margin-bottom:8px;
`;
const TwoCon = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const TwoCount = styled.div`
  width:80px;
  height:24px;
  background-color:white;
`;
const SmallTotal = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  color: #424242;
  letter-spacing: -0.4px;
`;



const BodySam = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const SamCon = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const Option = styled.div`
  font-size: 12px;
  line-height: 1;
  color: #424242;
  margin-left:3px;
`;

const Total = styled.div`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

const Footer = styled.div`
  width:100%;
  padding:10px 0;
  border-top:1px solid #ededed;
  background-color:white;
  text-align:center;
`;
const FooterContent = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: #424242;
  letter-spacing: -0.4px;
`;

const Cart1 = () => {
  const { cartInfo, cartInfo:{infoCart}, setCartInfo } = useContext(CartContext)
  const cartArray = infoCart;
  
  return (
    <Container>
      <ChooseSection>
        <FlexDiv>
          <AllButton></AllButton>
          <AllWord>모두선택</AllWord>
        </FlexDiv>
        <Remove>선택삭제</Remove>
      </ChooseSection>
      <CartContainer>
        <Header>
          <HeaderContent>가쯔 배송</HeaderContent>
        </Header>
        <Body>
          <BodyButton></BodyButton>
          <BodyOne>
            <BodyImg src={require('../../Asset/userIcon/userIcon.jpg').default} />
            <OneCon>
              <OneName>[가쯔] 캠핑 접이식 원목 롤테이블...</OneName>
              <OneDeli>무료배송 | 일반택배</OneDeli>
            </OneCon>
          </BodyOne>
          <BodyTwo>
            <TwoName>롤테이블 M</TwoName>
            <TwoCon>
              <TwoCount>1</TwoCount>
              <SmallTotal>54900원</SmallTotal>
            </TwoCon>
          </BodyTwo>
          <BodySam>
            <SamCon>
              <Option>옵션변경</Option>
              <Option>|</Option>
              <Option>바로구매</Option>
            </SamCon>
            <Total>54900원</Total>
          </BodySam>
        </Body>
        <Footer>
          <FooterContent>배송비 무료</FooterContent>
        </Footer>
      </CartContainer>
    </Container>
  )
}


export default Cart1