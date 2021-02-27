import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import ProductionDes4_1 from './ProductionDes4_1'
import ProductionDes4_2 from './ProductionDes4_2'

const Form = styled.form`
  width:100%;
`;

const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:relative;
`;


const OptionButton = styled.button`
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
  text-align:left;
  background-color:white;

  &:hover{
    cursor: pointer;
    background-color:rgba(224, 226, 231, 1);
  }
`;


const OptionAddButton = styled.button`
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
  text-align:left;
  background-color:white;

  &:hover{
    cursor: pointer;
    background-color:rgba(224, 226, 231, 1);
  }
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

const OptionBarContainer = styled.section`
  width:100%;
  max-height:300px;
  overflow-y:scroll;
  position:absolute;
  top:40px;
  display:${props => props.bgProps === false ? "none" : "flex"};
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  margin-top:4px;
  z-index:100;
`;

const OptionItem = styled.button`
  width:100%;
  background-color:white;
  border:1px solid rgba(224, 226, 231, 1);;
  border-radius:4px 4px 0 0;
  padding:8px 20px 8px 20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;

  &:hover{
    cursor: pointer;
    background-color:rgba(224, 226, 231, 1);
  }
`;



const OptDiv = styled.div``;
const OptDivTwo = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;

const OptioName = styled.div`
  color:#424242;
  font-size:13px;
  line-height:1.230769230769231;
`;

const OptionSale = styled.div`
  margin-right:6px;
  color:#35c5f0;
  font-size:17px;
  line-height:1.352941176470588;
  font-weight:700;
`;
const OptionPrice = styled.div`
  margin-right:5px;
  color:#000;
  font-size:17px;
  line-height:1.352941176470588;
  font-weight:700;
`;

const OptionSpecial = styled.div`
  border-radius:4px;
  padding:1px 3px;
  background-color:rgb(255, 119, 119);
  color:white;
  font-size:11px;
`;

const ForKey = styled.div`
  width:100%;
`;



const ProductionDes4 = () => {
  const {detail: { productioninfo }, cart, cart: {production, price, count, totalmoney, productionId, optionId}, setCart} = useContext(ProductionContext)
  const information = productioninfo;
  const { option, production : { info : { original_price }} } = information;
  const optionArray = option;
  const originalPrice = original_price;
  const one = 1;
  const two = 2;
  
  const [button, setButton] = useState({
    firstDisplay:false,
    secondDisplay:false
  })

  const Click = (num) => {
    if(num === 1){
      if(button.firstDisplay === false){
        setButton({...button, firstDisplay:true})
      }else{
        setButton({...button, firstDisplay:false})
      }
    }else{
      if(button.secondDisplay === false){
        setButton({...button, secondDisplay:true})
      }else{
        setButton({...button, secondDisplay:false})
      }
    }
  }

  // 상품이 담기게 해주는 이벤트
  // 질문 1 이벤트에서 눌리는 것 관련해서
  const AddProduction = (e) => {
    const { target : { children }} = e;
    
    const name = children[0].innerText;
    const cost = children[1].children[1].innerText; 

    // State에 total 금액 계산
    const total = totalmoney + (+cost);
    
    // option_id 와 production_id를 담기게 하는 것
    const chckoptionId = [];
     optionArray.map((value) => {
      if(value.option_name === name){
        chckoptionId.push(value.option_id, value.production_option_id)
        return 
      }
    })
  
     if(!production.includes(name)){
      setCart({...cart, production:[...production, name], price:[...price, cost], count:[...count, 1], productionId:[...productionId, chckoptionId[1]], optionId:[...optionId, chckoptionId[0]], totalmoney:total})
     }else{
       alert("이미 담겨진 상품입니다.")
     }
  }

  // 카트에 상품이 추가되면 dropbox의 display가 false로 바뀌게 해주는 useEffect
  useEffect(() => {
    setButton({...button, firstDisplay:false, secondDisplay:false})
  }, [cart])

  
  return (
    <>
      <Form>
        <Div>
          <OptionButton onClick={() => Click(one)}>선택</OptionButton>
          <OptionBarContainer bgProps={button.firstDisplay}>
            {optionArray && optionArray.map((value, index) => {
              const sale = 100 - Math.floor((value.option_sell_price / originalPrice) * 100);
              const indexA = index + 1000;
              const indexB = index + 2000;
              const indexC = index + 3000;
              const indexD = index + 4000;
              const indexE = index + 5000;
              const indexF = index + 6000;
              const indexG = index + 7000;
              if(value.option_type === 0){
                return (
                  <ForKey key={indexG} onClick={AddProduction}>
                    <OptionItem key={index}>
                      <OptDiv key={indexA}>
                        <OptioName key={indexC}>{value.option_name}</OptioName>
                      </OptDiv>
                      <OptDivTwo key={indexB}>
                        <OptionSale key={indexD}>{sale}%</OptionSale>
                        <OptionPrice key={indexE}>{value.option_sell_price}</OptionPrice>
                        <OptionSpecial key={indexF}>특가</OptionSpecial>
                      </OptDivTwo>
                    </OptionItem>
                  </ForKey>
                )
              } 
            }
            )}
          </OptionBarContainer>
        </Div>
        <Div>
          <OptionAddButton onClick={() => Click(two)}>추가상품 (선택)</OptionAddButton> 
          <OptionBarContainer bgProps={button.secondDisplay}>
            {optionArray && optionArray.map((value, index) => {
              const sale = 100 - Math.floor((value.option_sell_price / originalPrice) * 100);
              const indexA = index + 1000;
              const indexB = index + 2000;
              const indexC = index + 3000;
              const indexD = index + 4000;
              const indexE = index + 5000;
              const indexF = index + 6000;
              const indexG = index + 7000;
              if(value.option_type === 1){
                return (
                  <ForKey key={indexG} onClick={AddProduction}>
                    <OptionItem key={index}>
                      <OptDiv key={indexA}>
                        <OptioName key={indexC}>{value.option_name}</OptioName>
                      </OptDiv>
                      <OptDivTwo key={indexB}>
                        <OptionSale key={indexD}>{sale}%</OptionSale>
                        <OptionPrice key={indexE}>{value.option_sell_price}</OptionPrice>
                        <OptionSpecial key={indexF}>특가</OptionSpecial>
                      </OptDivTwo>
                    </OptionItem>
                  </ForKey>
                )
              }
            }
            )}
          </OptionBarContainer>
        </Div>
        <ProductionDes4_1 />
        <CostSection>
          <Span>주문금액</Span>
          <CostContainer>
            <Cost>{totalmoney}</Cost>
            <Won>원</Won>
          </CostContainer>
        </CostSection>
        <ProductionDes4_2 />
      </Form>
    </>
  )
}

export default ProductionDes4