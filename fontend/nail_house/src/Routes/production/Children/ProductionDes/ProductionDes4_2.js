import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import { productionApi } from '../../../../api'


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


const ProductionDes4_2 = () => {
  const {cart, setCart} = useContext(ProductionContext)
  const user_id = Number(localStorage.getItem("user_id"))
  const postInfo = {
    userId:user_id,
    productionId:cart.productionId,
    optionId:cart.optionId,
    amount:cart.count
  }

  // console.log(postInfo);
  
  const postCart = () => {
    // console.log("post요청 함수는 실행됨");
    postInfo.productionId.map(async(value, index) => {
      if(postInfo.productionId.length !== 0){
        try{
          const res = await productionApi.ProductionCart(
                        postInfo.userId,
                        value,
                        postInfo.optionId[index],
                        postInfo.amount[index]
                      )
          console.log(res);
          console.log("장바구니 요청 완료 ㅎㅎ");
        }catch(e){
          console.log("장바구니 요청 오류!");
        }
      }
      return
    })
    
  }

  const postOrder = async() => {
    try{
      
    }catch(e){
      console.log("바로구매 요청 오류!");
    }
  }

  return (
    <>
      <ButtonSection>
        <CartButton onClick={postCart}>장바구니</CartButton>
        <OrderButton onClick={postOrder}>바로구매</OrderButton>
      </ButtonSection>
    </>
  )
}

export default ProductionDes4_2