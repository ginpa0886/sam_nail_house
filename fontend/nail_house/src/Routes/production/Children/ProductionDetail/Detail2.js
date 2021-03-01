import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'

const Section = styled.section`
  width:692px;
  margin-bottom:80px;
`;

const Header = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding:18px 0;
`;
const HeaderContent = styled.div`
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  color:rgba(27, 28, 50, 1);
  font-weight:700;
`;

const Main = styled.article`
  width:100%;
`;

const Des = styled.img`
  width:100%;
  height:auto;
`;


// 상품정보 쭉 나오는 곳
const Detail2 = () => {
  const { detail : { productioninfo : {production: { img }}}} = useContext(ProductionContext)
  const imgArray = img;
  const desImg = imgArray.filter((value) => {
    if(value.img_description === 1){
      return value
    }
  })
  // console.log(desImg);
  // console.log(desImg[0].img_path);
  return (
    <>
      <Section>
        <Header>
          <HeaderContent>상품정보</HeaderContent>
        </Header>
        <Main>
          {desImg && desImg.map((value, index) => {
            return (
                <Des key={index} src={`${value.img_path}`} />
            )
          })}    
        </Main>
      </Section>
    </>
  )
}

export default Detail2

{/* 
  <Des src={require('../../../../Asset/ForBug/detail-1.png').default} />
          <Des src={require('../../../../Asset/ForBug/detail-2.png').default} />
          <Des src={require('../../../../Asset/ForBug/detail-3.png').default} />
          <Des src={require('../../../../Asset/ForBug/detail-4.png').default} />
          <Des src={require('../../../../Asset/ForBug/detail-5.png').default} />
          <Des src={require('../../../../Asset/ForBug/detail-6.png').default} /> */}