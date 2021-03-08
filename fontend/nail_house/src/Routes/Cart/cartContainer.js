import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import Cart1 from './Cart1'
import Cart2 from './Cart2'
import { CartContext } from './context'
import { userApi } from '../../api'

const Background = styled.div`
  width:100%;
  height:100%;
  z-index:-1000;
  background-color:rgb(245, 245, 245);
`;
const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const CartContainer = () => {
  const {cartInfo, cartInfo:{infoCart, loading}, setCartInfo, GetCartInfomation} = useContext(CartContext)

  if(loading === false){
    const userId = localStorage.getItem("user_id")
    GetCartInfomation(userId)
  }
  

  return (
    <Background>
      <Container className="container">
        <Row className="row">
          <Col className="col-8">
            <Cart1 />
          </Col>
          <Col className="col-4">
            <Cart2 />
          </Col>
        </Row>
      </Container>
    </Background>
  )
}

export default CartContainer