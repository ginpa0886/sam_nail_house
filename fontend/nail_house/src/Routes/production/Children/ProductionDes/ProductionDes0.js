import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'


const StarDiv = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-bottom:15px;
`;


const Star = styled.div`
  width:16px;
  height:16px;
  background-image: url(${prosp => prosp.bgStar});
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center center;
  
`;

const StarCount = styled.span`
  margin-left:8px;
  color:rgba(61, 168, 245, 1);
  font-size:13px;
  font-weight:700;
  line-height:1.538461538461538;
`;

const StarAbove = styled.div`
  width:${props => props.bgFor}%;
  height:16px;
  background-image: url(${prosp => prosp.bgStar});
  background-repeat:no-repeat;
`;


const ProductionDes0 = () => {
  const {detail: { productioninfo }} = useContext(ProductionContext)
  // console.log(productioninfo);
  let totalRating = 0;

  // 별점 체크기
  let starCheckNum = 0;
  productioninfo.production.review.map(v =>{
    totalRating += v.rating
  })
  
  // 리뷰 전체 길이
  const typeReivewCount = productioninfo.production.review.length;
  
  // 전체 리뷰 rating의 합 / 리뷰 전체 길이 => 평균 rating (소수점 첫번째 자리까지만 표현)
  totalRating = (totalRating / typeReivewCount).toFixed(1);

  const forStarCount = [0, 0, 0, 0, 0];
  
  
  return (
    <>
      <StarDiv>
        {forStarCount && forStarCount.map((value, index) => {
          // 전체 별점보다 낮거나 같은 index 값일 경우는 꽉채운 star
          if(index + 1 <= totalRating){
            return (
              <Star bgStar={require('../../../../Asset/ForBug/FilledStar.png').default} key={index}></Star>
            )
          // 별점의 소수 점 부분을 나타내기 위한 조건문
          }else{
            starCheckNum++;
            // 처음으로 별점보다 index값이 큰 부분에서만 별점의 %를 나타내주면되기 때문에 starCheckNum이 1일때만 실행되는 조건문
            if(starCheckNum === 1){
              const jum = (totalRating - index) * 100;
              return (
                <Star bgStar={require('../../../../Asset/ForBug/Shape (Stroke).png').default} key={index}>
                  <StarAbove bgStar={require('../../../../Asset/ForBug/FilledStar.png').default} bgFor={jum}></StarAbove>
              </Star>
              )
            // 나머지는 전부 빈별만 출력
            }else{
              return (
                <Star bgStar={require('../../../../Asset/ForBug/Shape (Stroke).png').default} key={index}></Star>
                )
            }
          }
        })}
        <StarCount>{typeReivewCount}개 리뷰</StarCount>
      </StarDiv>
    </>
  )
}

export default ProductionDes0