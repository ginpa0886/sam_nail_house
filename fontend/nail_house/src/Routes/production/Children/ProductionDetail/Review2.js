import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import { productionApi } from '../../../../api'

const Container = styled.div`
  padding:0 30px 40px 30px;
  margin-bottom:40px;
  border-bottom:1px solid #E0E2E7;

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


const Review2 = (index) => {
  const { detail : { productioninfo :{ production: { reviewUsers }} }} = useContext(ProductionContext)
  const reviewUserArray = reviewUsers
  
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

  return (
    <>
      {reviewUserArray.map((value, index) => {
        return (
          <Container key={index}>
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
    </>
  )
}

export default Review2