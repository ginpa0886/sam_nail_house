import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'

const Background = styled.section`
  /* display:block; */
  display:${props => props.forDisplay === true ? "block" : "none"};
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:1000;
  background-color:rgba(63, 65, 80, 0.5);
  position:fixed;
`;

const Container = styled.section`
  width:760px;
  height:1064px;
  position:absolute;
  top:30px;
  left:480px;
`;

const Form = styled.form`
  padding:40px;
  background-color:white;
  border-radius:4px 4px 0 0;
`;

const Hedaer = styled.div`
  font-size:20px;
  text-align:center;
  font-weight:700;
  line-height:1.35;
  margin-bottom:30px;
`;
const Point = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding:10px 16px;
  background-color:#525b61;
  color:white;
  font-weight:700;
  letter-spacing:-0.4px;
  line-height:1;
  margin-bottom:20px;
`;
const Gray = styled.span`
  color:#a4acb3;
`;
const Blue = styled.span`
  color:#6cd5f4;
`;

const ProductionContent = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-bottom:30px;
`
const ProductionImg = styled.img`
  width:100px;
  height:100px;
  border-radius:4px;
  margin-right:12px;
`;
const ProductionNameContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:30px;
`;
const ProductionBrand = styled.div`
  color:#757575;
  font-size:11px;
  letter-spacing:-0.4px;
  line-height:1;
  margin-bottom:6px;
`;
const ProductionName = styled.div`
  color:#292929;
  font-size:15px;
  letter-spacing:-0.4px;
  line-height:1.2;
`;

const CommonContainer = styled.div`
  margin-bottom:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
`;
const CommonHeader = styled.div`
  margin-bottom:15px;
  font-size:15px;
  font-weight:700;
  letter-spacing:-0.4px;
  line-height:1;
`;
const Body = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`
const StarWord = styled.div`
  font-size:15px;
  line-height:42px;
  letter-spacing:-0.4px;
  margin-right:5px;
`;
const StarContainer = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;

const Star = styled.div`
  width:20px;
  height:20px;
  background-image:url(${props => props.bgImg});
  background-repeat:no-repeat;
  background-size:contain;
  position:relative;
`;

const ColorStar = styled.div`
  width:20px;
  height:20px;
  background-image:url(${props => props.bgImg});
  background-repeat:no-repeat;
  background-size:contain;
  position:absolute;
  display:${props => props.starDisplay === true ? "block" : "none"};
`;


const PhotoSub = styled.div`
  margin-bottom:10px;
  font-size:13px;
  letter-spacing:-0.4px;
  line-height:1;
`;

const PhotoButton = styled.button`
  background-color:white;
  border:1px solid #35c5f0;
  border-radius:4px;
  color:#35c5f0;
  font-size:15px;
  width:100%;
  height:45px;
  line-height:1;

  &:hover{
    cursor: pointer;
    background-color:#35c5f0;
    color:white;
  }
`;

const ReviewInput = styled.input`
  width:100%;
  height:110px;
`;

const CheckBody = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;
const CheckButton = styled.button`
  width:22px;
  height:22px;
  background-color:white;
  border-radius:4px;
  border:1px solid #35c5f0;

  &:hover{
    cursor: pointer;
  }
`;
const CheckWord = styled.div`
  padding-left:10px;
  color:#424242;
  font-size:15px;
  line-height:22px;
`;

const CompleteButton = styled.button`
  width:100%;
  height:45px;
  color:white;
  border:none;
  background-color:#35c5f0;
  border-radius:4px;
  font-size:17px;
  font-weight:700;

  &:hover{
    cursor: pointer;
    background-color:#2280C3;
  }
`;

const Footer = styled.section`
  color:#424242;
  background-color:#f7f8fa;
  border-radius:0 0 4px 4px;
  padding:20px 40px;
  line-height:1.46;
  font-size:11px;
  border-top:1px solid #ededed;
`;
const FooterWord = styled.div``;
const FooterRed = styled.span`
  color:#f06060;
`;


 

const WriteReview1 = () => {
  const { detail, detail :{ productioninfo }, test} = useContext(ProductionContext)
  const productionInfo = productioninfo;

  const brandName = productionInfo.brand.brand;
  const productName = productionInfo.production.info.name;
  const ProductImg = productionInfo.production.img[0].img_path;

  const starOnDisplay = false;
  
  
  console.log(test);
  
  return (
    <>
      <Background forDisplay={starOnDisplay}>
        <Container>
          <Form>
            <Hedaer>리뷰 쓰기</Hedaer>
            <Point>포토리뷰<Blue>250P</Blue>, 일반리뷰<Gray>0P</Gray></Point>
            <ProductionContent>
              <ProductionImg src={ProductImg}></ProductionImg>
              <ProductionNameContainer>
                <ProductionBrand>{brandName}</ProductionBrand>
                <ProductionName>{productName}</ProductionName>
              </ProductionNameContainer>
            </ProductionContent>
            <CommonContainer>
              <CommonHeader>별점 평가</CommonHeader>
              <Body>
                <StarWord>만족도</StarWord>
                <StarContainer>
                  <Star bgImg={require('../../../../Asset/ForBug/Shape (Stroke).png').default}>
                    <ColorStar bgImg={require('../../../../Asset/ForBug/FilledStar.png').default} starDisplay={starOnDisplay}></ColorStar>
                  </Star>
                  <Star bgImg={require('../../../../Asset/ForBug/Shape (Stroke).png').default}>
                    <ColorStar bgImg={require('../../../../Asset/ForBug/FilledStar.png').default} starDisplay={starOnDisplay}></ColorStar>
                  </Star>
                  <Star bgImg={require('../../../../Asset/ForBug/Shape (Stroke).png').default}>
                    <ColorStar bgImg={require('../../../../Asset/ForBug/FilledStar.png').default} starDisplay={starOnDisplay}></ColorStar>
                  </Star>
                  <Star bgImg={require('../../../../Asset/ForBug/Shape (Stroke).png').default}>
                    <ColorStar bgImg={require('../../../../Asset/ForBug/FilledStar.png').default} starDisplay={starOnDisplay}></ColorStar>
                  </Star>
                  <Star bgImg={require('../../../../Asset/ForBug/Shape (Stroke).png').default}>
                    <ColorStar bgImg={require('../../../../Asset/ForBug/FilledStar.png').default} starDisplay={starOnDisplay}></ColorStar>
                  </Star>
                </StarContainer>
              </Body>
            </CommonContainer>
            <CommonContainer>
              <CommonHeader>사진 첨부(선택)</CommonHeader>
              <PhotoSub>사진을 첨부해주세요. (최대 1장)</PhotoSub>
              <PhotoButton>사진 첨부하기</PhotoButton>
            </CommonContainer>
            <CommonContainer>
              <CommonHeader>리뷰 작성</CommonHeader>
              <ReviewInput placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 20자이상)" />
            </CommonContainer>
            <CommonContainer>
              <CommonHeader>상품을 직접 사용하고 작성한 리뷰인가요?</CommonHeader>
              <CheckBody>
                <CheckButton></CheckButton>
                <CheckWord>네, 상품을 직접 사용한 후 작성한 리뷰이며, 오늘의집 리뷰 정책에 동의합니다.</CheckWord>
              </CheckBody>
            </CommonContainer>
            <CompleteButton>완료</CompleteButton>
          </Form>
          <Footer>
            <FooterWord>- 비구매 상품 리뷰 포인트는 심사 후 지급됩니다.(영업일 기준 2~3일 소요)</FooterWord>
            <FooterWord>- 포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.</FooterWord>
            <FooterWord>- 사진 첨부시 <FooterRed>캡쳐, 도용, 유사상품 촬영, 동일상품 여부 식별이 불가한 경우</FooterRed>에는 등록이 거절되며 사유는 별도 안내되지 않습니다.</FooterWord>
            <FooterWord>- 상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한 리뷰는 사전 경고 없이 삭제 및 포인트 회수될 수 있습니다.</FooterWord>
          </Footer>
        </Container>
      </Background>
    </>
  )
}

export default WriteReview1