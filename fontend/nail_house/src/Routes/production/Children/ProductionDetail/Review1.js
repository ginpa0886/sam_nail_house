import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'

const Container = styled.section`
  margin-bottom:34px;
`;


const Header = styled.article`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:18px 0px;
`;
const Div = styled.div`
  margin-right:70px;

  &:first-child{
    margin-right:76px;
  }

  &:last-child{
    margin-right:0;
  }
`;

const DivHeader = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
const Word = styled.div`
  color:rgba(27, 28, 50, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  margin-right:8px;
`;
const Number = styled.span`
  color:rgba(61, 168, 245, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  margin-right:8px;
`;

const WriteButton = styled.button`
  color:rgba(61, 168, 245, 1);
  font-size:16px;
  line-height:1.5;
  letter-spacing:-0.01em;
  font-weight:700;
  border:none;
  background-color:white;
`;

const Body = styled.article`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:26px 69px;
  background-color:#F7F8FA;
`;

const StarContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Stars = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right:16px;
`

const RatingStar = styled.div`
  width:24px;
  height:24px;
  background-image: url(${props => props.bgimg});
  background-repeat:no-repeat;
  
`;

const RatingStarColor = styled.div`
  width:${props => props.widthPer}%;
  height:24px;
  background-image: url(${props => props.bgimg});
  background-repeat:no-repeat;
`;

const RatingNum = styled.div`
  font-size:24px;
  line-height:1.416666666666667;
  font-weight:700;
  color:rgba(27, 28, 50, 1);
`

const Border = styled.div`
  width:0;
  height:72px;
  border: 1px solid rgba(224, 226, 231, 1);
`
const SoreContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:4px;
  
  &:last-child{
    margin-bottom:0;
  }
`
const Sore = styled.div`
  margin-right:8px;
  font-size:12px;
  line-height:1.333333333333333;
  color:${props => props.forColor};
  font-weight:700;
`;
const SoreBar = styled.div`
  width:180px;
  height:5px;
  background-color:#E0E2E7;
  border-radius:10px;
  margin-right:8px;
  position:relative;
`;
const SoreColor = styled.div`
  width:${props => props.forWidth}px;
  height:100%;
  position:absolute;
  left:0;
  border-radius:10px;
  background-color:#3DA8F5;
`

// 리뷰
const Review1 = () => {
  const { detail : { productioninfo :{ production: { review }} }} = useContext(ProductionContext)
  const userReivewArray = review

  const totalReviewCount = userReivewArray.length
  let sumRating = 0
  userReivewArray.map((value) => sumRating += value.rating)
  // 평균 낸 리뷰 별점의 소수 첫째 자리까지만 표현
  const totalRating = (sumRating / totalReviewCount).toFixed(1)
  
  const ratingArray = [0, 0, 0, 0, 0]
  const percentage = [100, 100, 100, 100, 100]

  userReivewArray.filter((value) => {
    if(value.rating === 1){
      return ratingArray[4]++
    }
    else if(value.rating === 2){
      return ratingArray[3]++
    }
    else if(value.rating === 3){
      return ratingArray[2]++
    }
    else if(value.rating === 4){
      return ratingArray[1]++
    }
    else if(value.rating === 5){
      return ratingArray[0]++
    }
  })

  // 가장 많이 받은 리뷰 개수 색 바꾸기 위한 확인 변수
  const max = Math.max(...ratingArray)
  


  return (
    <> 
      <Container>
        <Header>
          <DivHeader>
            <Word>리뷰</Word>
            <Number>{totalReviewCount}</Number>
          </DivHeader>
          <WriteButton>리뷰쓰기</WriteButton>
        </Header>
        <Body>
          <Div>
            <StarContainer>
              <Stars>
                {percentage.map((value, index) => {
                  const indexA = index + 1000;
                  if(index + 1 > totalRating){
                    const per = (1 - ((index + 1) - totalRating)) * 100
                    return (
                      <RatingStar bgimg={require('../../../../Asset/ForBug/Shape (Stroke).png').default} key={index}>
                        <RatingStarColor bgimg={require('../../../../Asset/ForBug/FilledStar.png').default} widthPer={per} key={indexA}></RatingStarColor>
                      </RatingStar>
                    )
                  }else{
                    return (
                      <RatingStar bgimg={require('../../../../Asset/ForBug/Shape (Stroke).png').default} key={index}>
                        <RatingStarColor bgimg={require('../../../../Asset/ForBug/FilledStar.png').default} widthPer={value} key={indexA}></RatingStarColor>
                      </RatingStar>
                    )
                  }
                })}
              </Stars>
              <RatingNum>{totalRating}</RatingNum>
            </StarContainer>
          </Div>
          <Div>
            <Border></Border>
          </Div>
          <Div>
            {ratingArray.map((value, index) => {
              const barWidth = (value / totalReviewCount) * 180
              const sore = ratingArray.length - index
              if(value === max){
                const color = "rgba(61, 168, 245, 1)"
                return (
                  <>
                    <SoreContainer key={index}>
                      <Sore forColor={color}>{sore}점</Sore>
                      <SoreBar>
                        <SoreColor forWidth={barWidth}></SoreColor>
                      </SoreBar>
                      <Sore forColor={color}>{value}</Sore>
                    </SoreContainer>
                  </>
                )
              }else{
                const color = "rgba(162, 165, 175, 1)"
                return (
                  <>
                    <SoreContainer key={index}>
                      <Sore forColor={color}>{sore}점</Sore>
                      <SoreBar>
                        <SoreColor forWidth={barWidth}></SoreColor>
                      </SoreBar>
                      <Sore forColor={color}>{value}</Sore>
                    </SoreContainer>
                  </>
                )
              }
            })}
          </Div>
        </Body>
      </Container>
    </>
  )
}

export default Review1