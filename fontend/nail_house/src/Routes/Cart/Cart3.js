import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from './context'

const Container = styled.section`
  width:100%;
`;

const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Button = styled.button`
  width:50px;
  height:50px;
  border:1px solid #35c5f0;
  background-color:${props => props.forColor === true ? "#35c5f0" : "white"};
  color:${props => props.forColor === true ? "white" : "#35c5f0"};
  font-size:22px;
  font-weight:700;
  border-radius:4px;
  margin-right:15px;

  &:last-child{
    margin-right:0;
  }

  &:focus{
    outline:none;
  }
`;



const Cart3 = () => {
  const {cartInfo, cartInfo:{loading}, page, setPage} = useContext(CartContext)
  let cartArray = []
  let howManyButton = 0;
  let repeatButton = []

  // 카트 정보가 들어오면 배열 만들기 위한 조건들
  if(loading){
    cartArray = cartInfo.infoCart
    howManyButton = Math.floor(cartArray.length / 5) + 1

    repeatButton = cartArray.filter((value, index) => {
      if(index <= howManyButton){
        return index
      }else{
        return
      }
    })
  }
  
  
  // console.log("뭐지?", cartArray.length, howManyButton);
  // console.log("안녕",repeatButton);

  // page 버튼 바뀌는 설정
  const changePage = (e) => {
    const {target: {innerText}} = e
    // string을 숫자화 시켜줘야함
    const typeInnerText = +innerText
    setPage({...page, page:typeInnerText})
  }
  

  return (
    <>
      {loading === false ? <></> : <Container>
        <Div>
          {repeatButton.map((value, index) => {
            const color = page.page === (index + 1) ? true : false;
            return (
              <Button key={index} forColor={color} onClick={changePage}>{index + 1}</Button>
            )
          })}
        </Div>
      </Container>}
    </>
  )
}

export default Cart3