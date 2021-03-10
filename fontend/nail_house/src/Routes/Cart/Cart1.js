import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { CartContext } from './context'
import Loader from '../../Components/Loader'
import { userApi } from '../../api'
import { Link, withRouter } from 'react-router-dom'
import '../../Asset/icomoon/style.css'

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
  background-color:${props => props.allCheck === true ? "#3DA8F5" : "white"};
  border:1px solid rgb(133, 133, 133);
  margin-right:10px;
  border-radius:4px;

  &:focus{
    outline:none;
  }
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
  margin-bottom:12px;
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
  background-color:${props => props.bgCheck === true ? "#3DA8F5" : "white"};
  border:1px solid rgb(133, 133, 133);
  border-radius:4px;
  top:20px;
  left:15px;
  &:focus{
    outline:none;
  }
  &:hover{
    cursor: pointer;
  }
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
  position: relative;
  padding:2px 10px;
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

const SLink = styled(Link)`
  width:100%;
`;

const Div = styled.div`
  display:${props => props.forPage === true ? "block" : "none"};
`;

const Dropbox = styled.div`
  width:100%;
  background-color:white;
  position: absolute;
  display:${props => props.bgDisplay === true ? "block" : "none"};
`;
const Number = styled.div`
  width:100%;
  height:20px;
  &:hover{
    background-color:blue
  }
`;

const IconCheovn = styled.div`
  position:absolute;
  top:5px;
  right:10px;
  font-size:17px;
`;

const Cart1 = ({ history }) => {
  const { cartInfo, cartInfo:{infoCart, loading}, setCartInfo, forBuy, forBuy:{count}, setForBuy, page, page:{canShow}, setPage} = useContext(CartContext)
  let cartArray = [];
  let displayArray = []
  const UserId = localStorage.getItem("user_id")
  // console.log(infoCart);

  // 카트정보에 대한 정보가 받아져 오면 실행되는 로직( 해당 유저의 카트정보를 받아오는데 그중에 enabled가 1인 것만 받아오는 것)
  if(loading){
    cartArray = infoCart.filter(v => {
      if(v.enabled !== 0 ){
        return v
      }
    })
  }

  // 처음 카트 목록을 가져왔을 때만 실행이 되는 부분
  if(cartInfo.loading && forBuy.loading === true){
    displayArray = cartArray.map(v => 1)
    setForBuy({...forBuy, count:displayArray, loading:false})
  }
  // console.log(forBuy);
  
  
  // local State ( 삭제될 상품들이 데이터가 담기는 곳 )
  const [removeCart, setRemoveCart] = useState({
    list:[],
    allcheck:false,
    display:[],
    loading:false,
    forDrop:[]
  })

  // checkBox 이벤트 함수
  // State에 체크한 상품들 담는 것(지울려고)
  const checkBox = (e) => {
    const { target: { id }} = e;
    const removeList = removeCart.list
    const wantRemove = +id
    if(removeList.includes(wantRemove)){
      // 
      const noRemoveList = removeList.filter(value => {
        if(value === wantRemove){
          return
        }else{
          return value
        }
      })
      setRemoveCart({...removeCart, list:noRemoveList, allcheck:false})
      return
    }
    // 만약 체크박스가 전부 체크되었다면 allcheck박스도 색이 바뀌게 만드는 것
    if(removeCart.list.length + 1 === cartArray.length){
      setRemoveCart({...removeCart, list:[...removeCart.list, wantRemove], allcheck:true})
      return
    }else{
      setRemoveCart({...removeCart, list:[...removeCart.list, wantRemove], allcheck:false})
    }
  }

  
  // 선택 삭제 버튼에 해당하는 이벤트
  const removeItem = async(UserId, RemoverArray) => {
    const inId = UserId;
    const intestArray = RemoverArray;

    // 아무것도 담겨 있지 않았을시에 선택하신 상품이 없다고 알람 뜨는 곳
    if(intestArray.length < 1){
      alert("선택하신 상품이 없습니다")
      return
    }

    try{
      await userApi.UserCartRemove(inId, intestArray)
      window.location.replace('/mycart')
      setCartInfo({...cartInfo})
    }catch(e){
      console.log("문제발생...");
    }
    return
  }

  // allCheck Box
  const allCheck = () => {
    if(removeCart.allcheck === false){
      const forAllcheckArray = cartArray.map(v => v.cart_id)
      setRemoveCart({...removeCart, list:forAllcheckArray, allcheck:true})
      return
    }else{
      setRemoveCart({...removeCart, list:[], allcheck:false})
      return
    }
  }

  // 상품 숫자 카운트 드롭박스
  const dropBox = (index) => {
    const typeIndex = index
    if(removeCart.forDrop.includes(typeIndex) === false){
      setRemoveCart({...removeCart, forDrop:[...removeCart.forDrop, typeIndex]})
    }else{
      const pushArray = removeCart.forDrop.filter(v => {
        if(v === typeIndex){
          return
        }
        return v
      })
      setRemoveCart({...removeCart, forDrop:pushArray})
    }
  }

  // dropBox에서 눌린 숫자들에 대한 상품 숫자 조절 함수
  const numFnc = (e) => {
    const { target: { innerText, parentElement:{ id } }} = e;
    const typeInnerText = +innerText

    const pushArray = forBuy.count
    pushArray[id] = typeInnerText
    setForBuy({...forBuy, count:pushArray})
  }

  

  return (
    <Container>
      <ChooseSection>
        <FlexDiv onClick={allCheck} >
          <AllButton allCheck={removeCart.allcheck}></AllButton>
          <AllWord>모두선택</AllWord>
        </FlexDiv>
        <Remove onClick={() => removeItem(UserId, removeCart.list)}><SLink to="/mycart" onClick={() => history.push('/mycart')}>선택삭제</SLink></Remove>
      </ChooseSection>
      {loading === false ? <Loader /> : cartArray.map((value, index) => {
        // 해당 상품 버튼이 눌렸는지에 대한 index
        const typeIndex = removeCart.list.includes(value.cart_id) === true ? true : false;
        // dropbox관련 index
        const dropIndex = removeCart.forDrop.includes(index) === true ? true : false;
        // dropbox에서 눌린 숫자 * 원래의 값
        const numAndprice = +forBuy.count[index] * +value.option_sell_price;
        // page에 따른 index값
        const pageIndex = Math.floor(index / page.pageSize) === (page.page - 1) ? true : false;

        // Cart테이블에서 enabled가 1인 데이터들만 보이게 처리
        if(value.enabled === 1){
          return (
            <Div key={index} forPage={pageIndex}>
              <CartContainer>
                <Header>
                  <HeaderContent>{value.brand}</HeaderContent>
                </Header>
                <Body>
                  <BodyButton onClick={checkBox} id={value.cart_id} bgCheck={typeIndex}></BodyButton>
                  <BodyOne>
                    <BodyImg src={value.img_path} />
                    <OneCon>
                      <OneName>[{value.brand}] {value.name}</OneName>
                      <OneDeli>{value.free === 1 ? "무료배송" : "유료배송"} | {value.type}</OneDeli>
                    </OneCon>
                  </BodyOne>
                  <BodyTwo>
                    <TwoName>{value.option_name}</TwoName>
                    <TwoCon>
                      <TwoCount onClick={() => dropBox(index)}>{forBuy.count[index]}
                        <IconCheovn className="icon-Chevron"></IconCheovn>
                        <Dropbox bgDisplay={dropIndex} id={index}>
                          <Number onClick={numFnc}>1</Number>
                          <Number onClick={numFnc}>2</Number>
                          <Number onClick={numFnc}>3</Number>
                          <Number onClick={numFnc}>4</Number>
                          <Number onClick={numFnc}>5</Number>
                          <Number onClick={numFnc}>6</Number>
                          <Number onClick={numFnc}>7</Number>
                          <Number onClick={numFnc}>8</Number>
                          <Number onClick={numFnc}>9</Number>
                        </Dropbox>
                      </TwoCount>
                      <SmallTotal>{numAndprice}원</SmallTotal>
                    </TwoCon>
                  </BodyTwo>
                  <BodySam>
                    <SamCon>
                      <Option>옵션변경</Option>
                      <Option>|</Option>
                      <Option>바로구매</Option>
                    </SamCon>
                    <Total>{numAndprice}원</Total>
                  </BodySam>
                </Body>
                <Footer>
                  <FooterContent>배송비 무료</FooterContent>
                </Footer>
              </CartContainer>
            </Div>
          )
        }
        
      })}
      
    </Container>
  )
}


export default withRouter(Cart1)