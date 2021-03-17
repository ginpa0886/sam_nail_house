import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {ProductionContext} from '../../context'

const InputArea = styled.div`
  width:100%;
`;

const InputMain = styled.div`
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
  position:relative;
`;

const InputSub = styled.div`
  width:100%;
  height:40px;
  border:1px solid rgba(224, 226, 231, 1);
  border-radius:4px;
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  color:rgba(63, 65, 80, 1);
  padding:8px 16px;
  position: relative;
`;

const OptionBarContainer = styled.section`
  width:100%;
  max-height:300px;
  overflow-y:scroll;
  position:absolute;
  top:40px;
  left:0;
  display:${props => props.bgProps === false ? "none" : "flex"};
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  margin-top:4px;
  z-index:100;
`;

const OptionItem = styled.div`
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

const ProductionBar1 = () => {
  const { detail: { productioninfo }, cart, cart: {production, price, count, totalmoney, productionId, optionId, loading}, setCart } = useContext(ProductionContext)
  const { option, production : { info : { original_price }} } = productioninfo;
  const optionArray = option;
  const options = productioninfo.option;
  
  const typeOption = options
  
  const [dropbox, setDropbox] = useState({
    mainDisplay:false,
    subDisplay:false
  })

  // dropbox display
  const displayClick = (num) => {
    const typeNum = num;
    if(typeNum === 1){
      if(dropbox.mainDisplay === true){
        setDropbox({...dropbox, mainDisplay:false})
      }else{
        setDropbox({...dropbox, mainDisplay:true})
      }
    }else{
      if(dropbox.subDisplay === true){
        setDropbox({...dropbox, subDisplay:false})
      }else{
        setDropbox({...dropbox, subDisplay:true})
      }
    }
  }

  
    const AddProduction = (e) => {
      const { target : { children }} = e;
      const name = children[0].innerText;
      const cost = children[1].children[1].innerText; 
  
      // string형태의 자릿수에 (,)콤마가 찍혀있는 것들 제거해주는 replace함수
      const typecost = cost.replace(",", "");
      
      // State에 total 금액 계산
      // typecost가 string이므로 이를 Number로 바꿔주기의해 +typecost로 작성
      const total = totalmoney + (+typecost);
      
      // option_id 와 production_id를 담기게 하는 것
      const chckoptionId = [];
       optionArray.map((value) => {
        if(value.option_name === name){
          chckoptionId.push(value.option_id, value.production_option_id)
          return 
        }
      })
    
       if(!production.includes(name)){
        setCart({...cart, production:[...production, name], price:[...price, typecost], count:[...count, 1], productionId:[...productionId, chckoptionId[1]], optionId:[...optionId, chckoptionId[0]], totalmoney:total, loading:true})
       }else{
         alert("이미 담겨진 상품입니다.")
       }
    }
  


  return (
    <InputArea>
      <InputMain onClick={() => displayClick(1)}>선택
        <OptionBarContainer bgProps={dropbox.mainDisplay}>
          {typeOption && typeOption.map((value, index) => {
            const sale = 100 - Math.floor((value.option_sell_price / original_price) * 100);
            if(value.option_type === 0){
              return (
                <OptionItem key={index} onClick={AddProduction}>
                  <OptDiv>
                    <OptioName>{value.option_name}</OptioName>
                  </OptDiv>
                  <OptDivTwo>
                    <OptionSale>{sale}%</OptionSale>
                    <OptionPrice>{(+value.option_sell_price).toLocaleString()}</OptionPrice>
                    <OptionSpecial>특가</OptionSpecial>
                  </OptDivTwo>
                </OptionItem>
              )
            }else{
              return
            }
          })}
        </OptionBarContainer>
      </InputMain>
      <InputSub onClick={() => displayClick(2)}>추가상품 (선택)
        <OptionBarContainer bgProps={dropbox.subDisplay}>
          {typeOption && typeOption.map((value, index) => {
            
            if(value.option_type === 1){
              return (
                <OptionItem key={index} onClick={AddProduction}>
                  <OptDiv>
                    <OptioName>{value.option_name}</OptioName>
                  </OptDiv>
                  <OptDivTwo>
                    <OptionPrice>{(+value.option_sell_price).toLocaleString()}</OptionPrice>
                    <OptionSpecial>특가</OptionSpecial>
                  </OptDivTwo>
                </OptionItem>
              )
            }else{
              return
            }
          })}
        </OptionBarContainer>
      </InputSub>
    </InputArea>
  )
}

export default ProductionBar1