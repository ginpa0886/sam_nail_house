import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import { productionApi } from '../../../../api'

const Container = styled.div`
  padding:0 30px 40px 30px;
  margin-bottom:40px;
  border-bottom:1px solid #E0E2E7;
  display:${props => props.forPage === true ? "block" : "none"};
  &:last-child{
    border-bottom:none;
  }
`;

const Div = styled.div``;
const UserContainer = styled.section`
  position: relative;
  margin-bottom:20px;
`;
const Word = styled.div`
  font-size:13px;
  line-height:1.538461538461538;
  color:rgba(63, 65, 80, 1);
  margin-bottom:20px;
`;

const UserName = styled.div`
  font-size:13px;
  line-height:1.538461538461538;
  color:rgba(63, 65, 80, 1);
`;

const Header = styled.div``
const StarContainer = styled.div``;
const Day = styled.div`
  font-size:12px;
  line-height:1.333333333333333;
  color:rgba(133, 136, 150, 1);
`
const UserIcon = styled.img`
  position:absolute;
  width:24px;
  height:24px;
  border-radius:50%;
  top:6px;
  left:-32px;
`;

const UserPhoto = styled.img`
  width:112px;
  height:112px;
  border-radius:4px;
  margin-bottom:20px;
`;

const Footer = styled.section`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;


const Good = styled.button`
  background-color:white;
  border:1px solid #3DA8F5;
  color:#3DA8F5;
  border-radius:4px;
  font-size:14px;
  line-height:1.714285714285714;
  letter-spacing:-0.01em;
  font-weight:700;
  margin-right:8px;
  transition:background-color 0.35s ease,
              color 0.35s ease;

  &:hover{
    cursor: pointer;
    background-color:#3DA8F5;
    color:white;
  }
`;
const Help = styled.div`
  font-size:12px;
  line-height:1.333333333333333;
  color:#1B1C32;
`;
const How = styled.span`
  font-weight:700;
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
const ButtonDiv = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:40px;
`;


const Review2 = () => {
  const { detail : { productioninfo :{ production: { reviewUsers }}, loading}} = useContext(ProductionContext)
  const reviewUserArray = reviewUsers
  const howManyButton = Math.floor(reviewUserArray.length / 5) + 1
  const repeatButton = reviewUserArray.filter((value, index) => {
    if(index <= howManyButton){
      return index
    }else{
      return
    }
  })
  // console.log(reviewUserArray);

  const sendGood = async(reviewId, good) => {
    const inReviewId = reviewId;
    const inGood = good;

    try{
      const res = await productionApi.reviewGood(inReviewId, inGood)
      if(!res){
        console.log("백엔드에서 반응이 없습니다.");
        return
      }
      console.log(res);
    }catch(e){
      console.log("오류발생!");
    }
  }

  const [reviewPage, setReviewPage] = useState({
    page:1,
    pageSize:5
  })

  const test = true

  const pageChange = (e) => {
    const { target: {innerText}} = e;
    const typeInnerText = +innerText
    setReviewPage({...reviewPage, page:typeInnerText})
  }
  
  return (
    <>
      {reviewUserArray.map((value, index) => {
        const checkPage = (Math.floor(index / reviewPage.pageSize) + 1) === reviewPage.page ? true : false;
        return (
          <Container key={index} forPage={checkPage}>
            <Div>
              <UserContainer>
                <UserName>{value.nickname}</UserName>
                <Header>
                  <StarContainer></StarContainer>
                  <Day>2020.12.29 ∙ 오늘의집 구매</Day>
                </Header>
                <UserIcon src={value.profile !== null ? value.profile : require('../../../../Asset/ForBug/defaultIcon.png').default}/>
              </UserContainer>
            </Div>
            <Div>
              <UserPhoto src={value.picture !== null ? value.picture : require('../../../../Asset/ForBug/Thumbnail-1.png').default}/>
            </Div>
            <Div>
              <Word>
                {value.text}
              </Word>
            </Div>
            <Div>
              <Footer>
                <Good onClick={() => sendGood(value.review_id, value.good)}>도움이 돼요</Good>
                <Help><How>{value.good}</How>명에게 도움이 되었습니다.</Help>
              </Footer>
            </Div>
          </Container>
          
        )
      })}
      <ButtonDiv>
        {repeatButton.map((value, index) => {
          const color = reviewPage.page === (index + 1) ? true : false;
          
          return (
            <Button key={index} onClick={pageChange} forColor={color}>{index + 1}</Button>
          )
          
        })}
      </ButtonDiv>
    </>
  )
}

export default Review2