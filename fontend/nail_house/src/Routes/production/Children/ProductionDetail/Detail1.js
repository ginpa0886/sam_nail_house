import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductionContext } from '../../context'
import '../../../../Asset/icomoon/style.css'

const Section = styled.section`
  width:692px;
  margin-bottom:80px;
`;
const Big = styled.div`
  margin-bottom:4px;
`;

const BigContainer = styled.div`
`;

const BigSubContainer = styled.div`
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
`;

const BigAb = styled.div`
  left:${props => props.testdisplay};
  
`;

const BigItem = styled.div`
  width:520px;
  height:520px;
  background-image: url(${props => props.bgImg});
  background-repeat:no-repeat;
  background-size: 520px 520px;
  background-position: center center;
  border-radius:6px;
  margin-right:4px;
`;

const NextButton = styled.div`
  position:absolute;
  background-color:white;
  font-size:28px;
  border-radius:50%;
  color:rgba(63, 65, 80, 1);
  transform:rotate(-90deg);
  right:24px;
  top:240px;
  padding:6px 5px 6px 6px;
`;



const Small = styled.section``;
const SmallContainer = styled.div``;
const SmallSubContainer = styled.article`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  overflow:hidden;
`;
const SmallAb = styled.div``;


const SamllItem = styled.div`
  width:75px;
  height:75px;
  background-image: url(${props => props.bgImg});
  background-repeat:no-repeat;
  background-size: 75px 75px;
  background-position: center center;
  border-radius:4px;
  margin-right:4px;

`;

// 유저들의 스타일링샷
const Detail1 = () => {
  const { detail : { productioninfo : {production: { userImg }}}} = useContext(ProductionContext)
  const userImgArray = userImg
  const dong = 30
  const test = (e) => {
    console.log(e);

  }
  return (
    <>
      <Section>
        <Big>
          <BigContainer>
              <BigSubContainer>
                <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/white.png').default}></BigItem>
                </BigAb>
                <BigAb testdisplay={dong}>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-1.png').default}></BigItem>
                </BigAb>
                <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-2.png').default}></BigItem>
                </BigAb>
                {/* <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-3.png').default}></BigItem>
                </BigAb> */}
                {/* <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-5.png').default}></BigItem>
                </BigAb>
                <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-6.png').default}></BigItem>
                </BigAb>
                <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-7.png').default}></BigItem>
                </BigAb>
                <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-8.png').default}></BigItem>
                </BigAb>
                <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-9.png').default}></BigItem>
                </BigAb>
                <BigAb>
                  <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-10.png').default}></BigItem>
                </BigAb> */}
                <NextButton className="icon-Chevron" onClick={test}></NextButton>
              </BigSubContainer>
          </BigContainer>
        </Big>
        <Small>
          <SmallContainer>
            <SmallSubContainer>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-1.png').default}></SamllItem>
                </SmallAb>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-2.png').default}></SamllItem>
                </SmallAb>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-3.png').default}></SamllItem>
                </SmallAb>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-5.png').default}></SamllItem>
                </SmallAb>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-6.png').default}></SamllItem>
                </SmallAb>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-7.png').default}></SamllItem>
                </SmallAb>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-8.png').default}></SamllItem>
                </SmallAb>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-9.png').default}></SamllItem>
                </SmallAb>
                <SmallAb>
                  <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-10.png').default}></SamllItem>
                </SmallAb>
            </SmallSubContainer>
          </SmallContainer>
        </Small>
      </Section>
    </>
  )
}

export default Detail1

{/* <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-1.png').default}></BigItem>
    </BigAb>
    <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-2.png').default}></BigItem>
    </BigAb>
    <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-3.png').default}></BigItem>
    </BigAb>
    <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-5.png').default}></BigItem>
    </BigAb>
    <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-6.png').default}></BigItem>
    </BigAb>
    <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-7.png').default}></BigItem>
    </BigAb>
    <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-8.png').default}></BigItem>
    </BigAb>
    <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-9.png').default}></BigItem>
    </BigAb>
    <BigAb>
      <BigItem bgImg={require('../../../../Asset/ForBug/Thumbnail-10.png').default}></BigItem>
    </BigAb> */}

    // {userImgArray && userImgArray.map((value, index) => {
    //   return (
    //     <BigAb key={index}>
    //       <BigItem bgImg={value.photo_path}></BigItem>
    //     </BigAb>
    //   )
    // })}