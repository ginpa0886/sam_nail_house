import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductionContext } from '../../context'
import { productionApi } from '../../../../api'


const ButtonSection = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:40px;
`;

const CartButton = styled.div`
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
  padding:13px 73px;

  &:hover{
    cursor: pointer;
  }
`;

const OrderButton = styled.div`
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
  padding:13px 73px;

  &:hover{
    cursor: pointer;
  }
`;

const BackgroundCart = styled.section`
  display:${props => props.forDisplay === true ? "block" : "none"};
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(63, 65, 80, 0.5);
  z-index:10000;
  padding:329px 540px;
`;

const BackgroundOrder = styled.section`
  display:${props => props.forDisplay === true ? "block" : "none"};
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(63, 65, 80, 0.5);
  z-index:10000;
  padding:329px 540px;
`;

const Box = styled.div`
  background-color:white;
  width:360px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:32px;
  border-radius:4px;
`;
const Word = styled.div`
  width:100%;
  color:rgba(0, 0, 0, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  margin-bottom:24px;
  text-align:center;
`;
const GoCart = styled.button`
  width:100%;
  height:55px;
  color:white;
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  background-color:#3DA8F5;
  border:none;
  border-radius:4px;
  margin-bottom:16px;
  text-align:center;
  &:hover{
    cursor: pointer;
  }
`;

const Okay = styled.div`
  width:100%;
  height:55px;
  color:rgba(0, 0, 0, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  background-color:#E0E2E7;
  border:none;
  border-radius:4px;
  text-align:center;
  padding:13px 78px;

  &:hover{
    cursor: pointer;
  }
`;

const GoCartPage = styled(Link)`
  width:100%;
`;


const ProductionDes4_2 = () => {
  const {cart, setCart} = useContext(ProductionContext)
  const user_id = Number(localStorage.getItem("user_id"))
  
  const postInfo = {
    userId:user_id,
    productionId:cart.productionId,
    optionId:cart.optionId,
    amount:cart.count
  }

  const [completeCart, setCompleteCart] = useState({
    cart:false,
    order:false
  })

  // console.log(postInfo);
  
  // 장바구니 POST 요청 함수
  const postCart = () => {
    // console.log("post요청 함수는 실행됨");
    // user_id가 localStorage에 없을 때 undefined나 null이 되기 때문에 숫자로 표현하면 0 이다 
    // 그래서 조건 값에 0이 아닐때를 붙여줬다.
    if(postInfo.productionId.length !== 0 && user_id !== 0){
      postInfo.productionId.map(async(value, index) => {
        try{
          const res = await productionApi.ProductionCart(
                        postInfo.userId,
                        value,
                        postInfo.optionId[index],
                        postInfo.amount[index]
                      )
          console.log(res);
          console.log("장바구니 요청 완료 ㅎㅎ");
          setCompleteCart({...completeCart, cart:true})
        }catch(e){
          console.log("장바구니 요청 오류!");
        }
      })
    }
    else if(user_id === 0){
      alert('로그인 후 이용해 주세요!')
    }
    else{
      alert('상품을 선택해주세요!')
    }
  }

  // 바로구매 요청 함수...
  const postOrder = async() => {
    try{
      
    }catch(e){
      console.log("바로구매 요청 오류!");
    }
  }

  const RemoveBox = () => {
    setCompleteCart({...completeCart, cart:false})
  }

  return (
    <>
      <ButtonSection>
        <CartButton onClick={postCart}>장바구니</CartButton>
        <OrderButton onClick={postOrder}>바로구매</OrderButton>
      </ButtonSection>
      <BackgroundCart forDisplay={completeCart.cart}>
        <Box>
          <Word>장바구니에 상품을 담았습니다.</Word>
          <GoCartPage to='/mycart'><GoCart>장바구니 보러가기</GoCart></GoCartPage>
          <Okay onClick={RemoveBox}>확인</Okay>
        </Box>
      </BackgroundCart>
    </>
  )
}

export default ProductionDes4_2