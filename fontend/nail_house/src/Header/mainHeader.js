import React, { useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import '../Asset/icomoon/style.css'
import { HeaderContext } from './context'
import SearchInput from './SearchInput'
import UserPlace from './UserPlace'
import SubHeader from './SubHeader'


const Headers = styled.header`
  
`;

const Container = styled.div``;
const Row = styled.div``;
const Col = styled.div``;

const HeaderFlex = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items: center;
  padding: 20px 0;
  background-color: white;
  border-bottom: 1px solid #E0E2E7;
`;

const List = styled.ul `
  display:flex;
  justify-content:center;
`;

const Home = styled.li`
  display: block;
  width: 82px;
  height: 24px;
  background-image: url(${props => props.bgLogo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #1B1C32;
  margin-right: 70px;
`;

const Navi = styled.li`
  color: ${props => props.currnet ? "#3DA8F5" : "#3F4150"};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555555555555556;
  letter-spacing: -0.02em;
  margin-right: 37px;
  display: block;
  text-align: center;
   

  &:last-child{
    margin-right: 110px;
  }

  &:hover{
    cursor: pointer;
    color: #3DA8F5;
  }

  &:active{
    opacity: 0.5;
  }
`;

const SLink = styled(Link)`

`;

const SerachArea = styled.div`
`;



const UserInfoArea = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items: center;
`;



const Write = styled.div`
  position: relative;
  &:hover{
    cursor: pointer;
  }
  
`;

const Writedown = styled.div`
  border-radius: 4px;
  height: 40px;
  background-color: #3DA8F5;
  padding: 7px 13px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WritedownLetter = styled.div`
  margin-right: 2px;
  letter-spacing: -0.01em;
  font-size:16px;
  font-weight:700;
  line-height: 1.5;
`;

const WritedownIcon = styled.div`
  font-size: 16px;
`;

const Writebar = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  background-color: white;
  border: 1px solid #E0E2E7;
  border-radius: 4px;
  display: ${props => props.dropdown};
  
`;

const WriteThing = styled.div`

`;



const MainHeader = ({ location : { pathname }}) => {
  const { click, click: { hoverCheck }, setClick, write: {content, dropdown}, changeDisplay} = useContext(HeaderContext)

 
  //메모... (props)일때 consoloe.log({ props })로 볼 수 있음.
  // console.log({ props });

  const checkHoverNavi = (e) => {
    const { target: { innerText } } = e;
    const TypeText = innerText;

    switch(TypeText){
      case "커뮤니티":
        setClick({...click, hoverCheck: "community"})
        return 
      case "스토어":
        setClick({...click, hoverCheck: "store"})
        return 
      case "인테리어시공":
        setClick({...click, hoverCheck: "interior"})
        return
      default: setClick({...click, hoverCheck: "community"})
        return
    }
  }
  
  return (
    <>
    <Headers>
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <HeaderFlex>
              <SLink to="/"><Home bgLogo={require('../Asset/homepageLogo/Logo.png').default} currnet={pathname === '/'}></Home></SLink>
              <List>
                <Navi currnet={pathname === '/community'} onMouseEnter={checkHoverNavi}><SLink to="/community">커뮤니티</SLink></Navi>
                <Navi currnet={pathname === '/store'} onMouseEnter={checkHoverNavi}><SLink to="/store">스토어</SLink></Navi>
                <Navi currnet={pathname === '/interior'} onMouseEnter={checkHoverNavi}><SLink to="/interior">인테리어시공</SLink></Navi>
              </List>
              <SerachArea>
                <SearchInput />
              </SerachArea>
              <UserInfoArea>
                <UserPlace />
              </UserInfoArea>
              <Write onClick={() => changeDisplay(dropdown)}>
                <Writedown>
                  <WritedownLetter>글쓰기</WritedownLetter>
                  <WritedownIcon className="icon-Chevron"></WritedownIcon>
                </Writedown>
                <Writebar dropdown={dropdown}>
                  {content && content.map((value, index) => <WriteThing key={index}>{value}</WriteThing>)}
                </Writebar>
              </Write>
            </HeaderFlex>
          </Col>
        </Row>
        <SubHeader />
      </Container>
    </Headers>
    </>
  )
}

export default withRouter(MainHeader);