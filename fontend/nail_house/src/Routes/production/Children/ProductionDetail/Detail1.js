import React from 'react'
import styled from 'styled-components'
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
  justify-content:flex-start;
  align-items:center;
  overflow:hidden;
`;

const BigAb = styled.div`
  &:first-child{
    margin-left:80px;
  }
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

const Detail1 = () => {
  return (
    <>
      <Section>
        <Big>
          <BigContainer>
              <BigSubContainer>
                <BigAb>
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
                </BigAb>
                <NextButton className="icon-Chevron"></NextButton>
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