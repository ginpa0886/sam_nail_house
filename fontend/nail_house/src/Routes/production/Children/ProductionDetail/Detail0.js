import React from 'react'
import styled from 'styled-components'
import '../../../../Asset/icomoon/style.css'

const Section = styled.section`
  width:692px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:21px 6px 21px 0;
`;

const HeaderContainer = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;

const Header = styled.div`
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
  color:rgba(27, 28, 50, 1);
  margin-right:8px;
`;

const Num = styled.span`
  color:rgba(61, 168, 245, 1);
  font-size:18px;
  line-height:1.555555555555556;
  letter-spacing:-0.02em;
  font-weight:700;
`;

const UserButton = styled.div`
  transform:rotate(-90deg);
  color:rgba(133, 136, 150, 1);
  font-size:22px;
`;

const Detail0 = () => {
  return (
    <>
      <Section>
        <HeaderContainer>
          <Header>유저들의 스타일링샷</Header>
          <Num>461</Num>
        </HeaderContainer>
        <UserButton className="icon-Chevron"></UserButton>
      </Section>
    </>
  )
}

export default Detail0