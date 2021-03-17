
import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import '../../../../Asset/icomoon/style.css'


const TotalSection = styled.section`
  width:100%;
`;
const ForKey = styled.div`
`;

const TotalContainer = styled.div`
  background-color:#f5f5f5;
  padding:10px;
  margin-bottom:8px;
`;

const TotalOne = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:10px;
`;
const TotalProduct = styled.div`
  color:#424242;
  font-size:15px;
  line-height:1.333333333333333;
  letter-spacing:-0.4px;
`;
const TotalIcon = styled.div`
  color:#757575;
`;


const TotalTwo = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const TotalCount = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:80px;
  background-color:white;
  border-radius:3px;
  border:solid 1px #dbdbdb;
  color:#424242;
  font-size:13px;
  line-height:1.692307692307692;
  padding:3px 5px;
  position:relative;
`;
const TotalButton = styled.button`
  background-color:white;
  border:none;

`;
const TotalButtonIcon = styled.div``;

const TotalPrice = styled.div`
  color:#424242;
  font-size:15px;
  font-weight:700;
  line-height:1.6;
  letter-spacing: -0.4px;
`;

const CountDropboxContainer = styled.div`
  display:none;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  width:100%;
  position:absolute;
  top:28px;
  left:0;
  border:solid 1px #dbdbdb;
`;
const CountButton = styled.button`
  width:100%;
  text-align:left;
  padding:3px 12px;
  border:none;
  background-color:white;

  &:hover{
    background-color:rgba(61,168,245,1);
    color:white;
  }
`;

const ProductionDes4_1 = () => {
  const { cart, cart: {production, price, count}, setCart } = useContext(ProductionContext)
  const cartContainer = {
    production,
    price,
    count
  }
  const dropbox = [1,2,3,4,5,6,7,8,9,10];
  

  const changeTotal = (e) => {
    
  }
  
  // console.log(cartContainer);
  // console.log(cartContainer.production.length);
  return (
    <>
      <TotalSection>
        {cartContainer.production.length === 0 ? <></> : 
            <>
              {cartContainer.production.map((value, index) => {
                const totalPrice = cartContainer.price[index] * cartContainer.count[index];
                return(
                  <ForKey key={index}>
                    <TotalContainer>
                      <TotalOne>
                        <TotalProduct>{value}</TotalProduct>
                        <TotalIcon className="icon-Close"></TotalIcon>
                      </TotalOne>
                      <TotalTwo>
                        <TotalCount onClick={changeTotal}>
                          <TotalButton>{cartContainer.count[index]}</TotalButton>
                          <TotalButtonIcon className="icon-Chevron"></TotalButtonIcon>
                          <CountDropboxContainer>
                            {dropbox.map((value, index) => 
                              <CountButton key={index}>{value}</CountButton>
                            )}
                          </CountDropboxContainer>
                        </TotalCount>
                        <TotalPrice>{(+totalPrice).toLocaleString()}원</TotalPrice>
                      </TotalTwo>
                    </TotalContainer>
                  </ForKey>
                )
              })}
          </>  
        }
    </TotalSection>
    </>
  )
}

export default ProductionDes4_1