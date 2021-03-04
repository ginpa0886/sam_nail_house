import React, { useContext, useEffect, useState } from 'react'
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
  transform:${props => props.forTest === true ? "translateX(-520px)" : "none"};
  transition:transform 0.35s ease;
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
  display:${props => props.forLast === true ? "block" : "none"};
  position:absolute;
  background-color:white;
  font-size:28px;
  border-radius:50%;
  color:rgba(63, 65, 80, 1);
  transform:rotate(-90deg);
  right:24px;
  top:240px;
  padding:6px 5px 6px 6px;
  &:hover{
    cursor: pointer;
  }
`;

const PreviousButton = styled.div`
  display:${props => props.forLast === true ? "block" : "none"};
  position:absolute;
  background-color:white;
  font-size:28px;
  border-radius:50%;
  color:rgba(63, 65, 80, 1);
  transform:rotate(90deg);
  left:24px;
  top:240px;
  padding:6px 5px 6px 6px;
  &:hover{
    cursor: pointer;
  }
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

const Div = styled.div`
  
`

// 유저들의 스타일링샷
const Detail1 = () => {
  const { detail : { productioninfo : {production: { userImg }}}} = useContext(ProductionContext)
  const userImgArray = userImg
  let displayFor = false;

  const [check, setCheck] = useState({
    index:[-1, 0, 1],
    Array:[0, userImgArray[0], userImgArray[1]],
    display:true,
    twodisplay:false,
    test:false
  })

 
  const NextFnc = () => {
    displayFor = true
    setTimeout(() => {
      const newIndex = check.index.map((value) => value + 1)
    if(check.index[0] === -1){
      const initialIndex = [0, 1, 2]
      const newArray = [userImgArray[initialIndex[0]], userImgArray[initialIndex[1]], userImgArray[initialIndex[2]]]
      setCheck({...check, index:newIndex, Array:newArray, twodisplay:true})
      return
    }

    if(newIndex[2] === userImgArray.length){
      const initialIndex = [userImgArray.length - 2, userImgArray.length - 1, -1]
      const newArray = [userImgArray[initialIndex[0]], userImgArray[initialIndex[1]], -1]
      setCheck({...check, index:initialIndex, Array:newArray, display:false})
      return
    }
    const newArray = [userImgArray[newIndex[0]], userImgArray[newIndex[1]], userImgArray[newIndex[2]]]
    setCheck({...check, index:newIndex, Array:newArray, twodisplay:true})
    }, 1000);
  }

  const PreviousFnc = () => {
    const newIndex = check.index.map((value) => value - 1)
    
    if(newIndex[0] === -1){
      const initialIndex = [-1, 0, 1]
      const newArray = [-1, userImgArray[check.index[0]], userImgArray[check.index[1]]]
      setCheck({...check, index:initialIndex, Array:newArray, twodisplay:false})
      return
    }
    if(check.index[2] === -1){
      const initialIndex = [userImgArray.length - 3, userImgArray.length - 2, userImgArray.length - 1]
      const newArray = [userImgArray[initialIndex[0]], userImgArray[initialIndex[1]], userImgArray[initialIndex[2]]]
      setCheck({...check, index:initialIndex, Array:newArray, display:true})
      return
    }
    const newArray = [userImgArray[newIndex[0]], userImgArray[newIndex[1]], userImgArray[newIndex[2]]]
    setCheck({...check, index:newIndex, Array:newArray})
  }




  return (
    <>
      <Section>
        <Big>
          <BigContainer>
              <BigSubContainer>
                {check.Array.map((value, index) => {
                  const indexA = index + 1000;
                  if(value === -1){
                    return (
                      <BigAb forTest={displayFor} key={index}>
                        <BigItem bgImg={require('../../../../Asset/ForBug/white.png').default} key={indexA} ></BigItem>
                      </BigAb>
                    )
                  }
                  else{
                    return (
                      <BigAb forTest={displayFor} key={index}>
                        <BigItem bgImg={value.photo_path} key={indexA}></BigItem>
                      </BigAb>
                    )
                  }
                })}
                <NextButton className="icon-Chevron" onClick={NextFnc} forLast={check.display}></NextButton>
                <PreviousButton className="icon-Chevron" onClick={PreviousFnc} forLast={check.twodisplay}></PreviousButton>
              </BigSubContainer>
          </BigContainer>
        </Big>
        <Small>
          <SmallContainer>
            <SmallSubContainer>
                {userImgArray.map((value, index) => {
                  const indexA = index + 1000;
                    return (
                      <SmallAb forTest={check.test} key={index}>
                        <SamllItem bgImg={value.photo_path} key={indexA} ></SamllItem>
                      </SmallAb>
                    )
                })}
                {/*  */}
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

    // <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-1.png').default}></SamllItem>
    //             </SmallAb>
    //             <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-2.png').default}></SamllItem>
    //             </SmallAb>
    //             <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-3.png').default}></SamllItem>
    //             </SmallAb>
    //             <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-5.png').default}></SamllItem>
    //             </SmallAb>
    //             <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-6.png').default}></SamllItem>
    //             </SmallAb>
    //             <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-7.png').default}></SamllItem>
    //             </SmallAb>
    //             <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-8.png').default}></SamllItem>
    //             </SmallAb>
    //             <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-9.png').default}></SamllItem>
    //             </SmallAb>
    //             <SmallAb>
    //               <SamllItem bgImg={require('../../../../Asset/ForBug/Thumbnail-10.png').default}></SamllItem>
    //             </SmallAb>