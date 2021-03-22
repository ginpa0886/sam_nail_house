import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import '../../../../Asset/icomoonReal/style.css'
import {ProductionContext} from '../../context'
import '../../../../Asset/icomoon/style.css'
import ProductionBar1 from './ProductionBar1'

const Container = styled.section`
  width:100%;
  height:726px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
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

const LowContainer = styled.section`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  padding-top:10px;
  width:100%;
`;
const LowInCon = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:relative;
  margin-bottom:8px;
  background-color:#f5f5f5;
  padding:10px;
  width:100%;
`;

const LowCloseIcon = styled.i`
  position:absolute;
  top:8px;
  right:5px;
`;

const LowHeadCon = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
`;
const LowHead = styled.div`
  font-size:15px;
  line-height:20px;
  color:#424242;
  letter-spacing: -0.4px;
  margin-bottom:10px;
  padding-right:22px;
`
const LowSub = styled.div`
  font-size:13px;
  line-height:20px;
  color:#424242;
  margin-bottom:10px;
  padding-right:22px;
`;

const LowFootCon = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const LowDropboxCon = styled.div`
  position:relative;
  padding-left:10px;
  background-color:white;
  width:80px;
  font-size:13px;
  border-radius:3px;
  line-height:22px;
  height:24px;
`;
const LowDropboxContent = styled.div`
  position: relative;
`;
const LowDropboxIcon = styled.i`
  position:absolute;
  top:6px;
  right:10px;
`;

const LowTotal = styled.div`
  font-size:15px;
  font-weight:700;
  line-height:24px;
  color:#424242;
  letter-spacing: -0.4px;
`;

const DropboxCon = styled.div`
  width:100%;
  display:${props => props.bgDropbox === true ? "flex" : "none"};
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  position:absolute;
  top: 20px;
  left:0;
  z-index:200;
  background-color:white;
`;
const DropboxContent = styled.div`
  width:100%;
  
  &:hover{
    background-color:gray;
    color:white;
  }
`;



const ProductionBar0 = () => {
  const { cart, cart: {production, price, count, totalmoney}, setCart } = useContext(ProductionContext)
  const cartContainer = {
    production,
    price,
    count
  }
  const [dropboxCheckArray, setdropboxCheckArray] = useState({
    array:[]
  })
  const typeTotalmoney = totalmoney

  // dropbox active관리
  const dropboxFns = (index) => {
    const arrayNum = +index;
    const typeArray = dropboxCheckArray.array;
    let resultArray = [];
    
    if(typeArray.includes(arrayNum)){
      resultArray = typeArray.filter(v => {
        if(v === arrayNum){
          return
        }else{
          return v
        }
      })
    }else{
      typeArray.push(arrayNum);
      resultArray = typeArray
    }
    
    setdropboxCheckArray({...dropboxCheckArray, array:resultArray})
  }
  
  // dropbox에서 숫자 선택시 상품 선택 갯수 변와 및 총 가격 업데이트 하는 함수
  const changeCount = (e) => {
    
    const {target:{innerText, id}} = e;
    const typeText = +innerText;
    const typeId = id;
    const cartCountArray = cart.count;
    cartCountArray[typeId] = typeText;

    // 총 구입액 구하는 곳
    const typeTotal = {
      total:0
    }
    cartContainer.price.map((value, index) => typeTotal.total += value * cartContainer.count[index]);
    

    setCart({...cart, count:cartCountArray, totalmoney:typeTotal.total});
  }

  return (
    <>
      <Container>
        <ProductionBar1 />
        
        <LowContainer>
        {/* product cart bar 반복문 */}
        {cartContainer.production && cartContainer.production.map((value, index) => {
          const bgCheckdropBox = dropboxCheckArray.array.includes(index) ? true : false;

          return (
            <LowInCon key={index}>
              <LowCloseIcon className="icon-Close"></LowCloseIcon>
              <LowHeadCon>
                <LowHead>{cartContainer.production[index]}</LowHead>
              </LowHeadCon>
              <LowFootCon>
                <LowDropboxCon>
                  <LowDropboxContent onClick={() => dropboxFns(index)}>{cartContainer.count[index]}
                    <DropboxCon bgDropbox={bgCheckdropBox}>
                      <DropboxContent onClick={changeCount} id={index}>1</DropboxContent>
                      <DropboxContent onClick={changeCount} id={index}>2</DropboxContent>
                      <DropboxContent onClick={changeCount} id={index}>3</DropboxContent>
                      <DropboxContent onClick={changeCount} id={index}>4</DropboxContent>
                      <DropboxContent onClick={changeCount} id={index}>5</DropboxContent>
                      <DropboxContent onClick={changeCount} id={index}>6</DropboxContent>
                      <DropboxContent onClick={changeCount} id={index}>7</DropboxContent>
                      <DropboxContent onClick={changeCount} id={index}>8</DropboxContent>
                      <DropboxContent onClick={changeCount} id={index}>9</DropboxContent>
                    </DropboxCon>
                  </LowDropboxContent>
                  <LowDropboxIcon className="icon-Chevron"></LowDropboxIcon>
                </LowDropboxCon>
                <LowTotal>{(cartContainer.price[index] * count[index]).toLocaleString()}원</LowTotal>
              </LowFootCon>
            </LowInCon>
          )
          })}
        </LowContainer>
        <Footer>
          <TotalContainer>
            <Word>주문금액</Word>
            <Price>{(+typeTotalmoney).toLocaleString()}원</Price>
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

export default ProductionBar0