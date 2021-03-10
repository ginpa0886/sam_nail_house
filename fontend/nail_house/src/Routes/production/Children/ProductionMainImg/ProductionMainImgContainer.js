import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ProductionMainImgContainer from '.';
import { ProductionContext } from '../../context'

const MainSection = styled.section`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
`;

const SideImg = styled.div`
  margin-right:8px;
`;

const SideContainer = styled.div`
  margin-bottom:8px;
`

const SideImgItem = styled.div`
  width:75px;
  height:75px;
  background-image: url(${prosp => prosp.bgImg});
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center center;
  border-radius:4px;

  border:${props => props.changeBorder === false ? "none" : "3px solid rgba(61, 168, 245, 1)"};

  &:last-child{
    margin-bottom:0;
  }
`;

const MainImg = styled.section``;
const MainImgItem = styled.div`
  width:500px;
  height:500px;
  background-image: url(${prosp => prosp.bgMainImg});
  background-repeat:no-repeat;
  background-size: contain;
  background-position: center center;
  border-radius:10px;
`;




const ProductionMainImageContainer = () => {
  const {detail: { productioninfo : { production : { img }} }} = useContext(ProductionContext)
  const imgArray = img;

  const [border, setBorder] = useState({
    mainImg:0,
    number:0,
    loading:false
  })

  if(img && border.loading === false){
    setBorder({...border, mainImg:img[0].img_path,loading:true})
  }
  
  const changeState = (img, index) => {
    setBorder({...border, mainImg: img, number: index})
  }

  return (
    <>
      <MainSection>
        <SideImg>
          {imgArray && imgArray.map((value, index) => 
            {
              const indexA = index + 1000;
              if(value.img_description === 0){
                let check = false;
                if(border.number === index){
                  check = true
                }
                return (
                  <SideContainer key={index}>
                    <SideImgItem 
                    key={indexA} 
                    bgImg={value.img_path} 
                    onMouseEnter={() => changeState(value.img_path, index)} 
                    changeBorder={check}
                    ></SideImgItem>
                  </SideContainer>
                )
              }
            }
            
          )}
        </SideImg>
        <MainImg>
          {imgArray &&imgArray.map((value, index) =>
            {
              if(index === 0 && value.img_description === 0){
                return (
                  <MainImgItem key={index} bgMainImg={border.mainImg}></MainImgItem>
                )
              }
            }
          )}
          
        </MainImg>
      </MainSection>
    </>
  )
}

export default ProductionMainImageContainer