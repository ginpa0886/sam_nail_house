
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

  &:hover{
    cursor:pointer;
  }
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
const TotalButton = styled.div`
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
  text-align:left;
  
  &:hover{
    background-color:gray;
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

  const [dropboxCheckArray, setdropboxCheckArray] = useState({
    array:[]
  })
  
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

  // 상품 삭제 함수
  const removeProduction = (num) => {
    const typeIndex = num;
    cartContainer.production.splice(typeIndex, 1);
    cartContainer.price.splice(typeIndex, 1);
    cartContainer.count.splice(typeIndex, 1);

    // 총 구입액 구하는 곳
    const typeTotal = {
      total:0
    }
    cartContainer.price.map((value, index) => typeTotal.total += value * cartContainer.count[index]);

    setCart({...cart, production:cartContainer.production, price:cartContainer.price, count:cartContainer.count, totalmoney:typeTotal.total});
  }
  
 
  return (
    <>
      <TotalSection>
        {cartContainer.production.length === 0 ? <></> : 
            <>
              {cartContainer.production.map((value, index) => {
                const totalPrice = cartContainer.price[index] * cartContainer.count[index];
                const bgCheckdropBox = dropboxCheckArray.array.includes(index) ? true : false;
                return(
                  <ForKey key={index}>
                    <TotalContainer>
                      <TotalOne>
                        <TotalProduct>{value}</TotalProduct>
                        <TotalIcon className="icon-Close" onClick={() => removeProduction(index)}></TotalIcon>
                      </TotalOne>
                      <TotalTwo>
                        <TotalCount onClick={() => dropboxFns(index)}>
                          <TotalButton>{cartContainer.count[index]}
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
                          </TotalButton>
                          <TotalButtonIcon className="icon-Chevron"></TotalButtonIcon>
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