import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../Asset/icomoon/style.css'
import { HeaderContext } from './context'
import { userApi } from '../api'

const ItemContainer = styled.div`
  width:32px;
  height:32px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right: 8px;
  color: #858896;
  &:hover{
    background-color: #3DA8F5;
    border-radius: 50%;
    cursor: pointer;
    color:white;
  }
`

const UserItem = styled.i`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const News = styled.div`
  position:absolute;
  color:white;
  left:12px;
  bottom:12px;
  width:16px;
  height:16px;
  background-color:#F86D7D;
  border-radius:50%;
  font-size:10px;
  line-height:16px;
  letter-spacing:-0.01em;
  font-weight:700;
`;

const BeforeLogin = styled.div`
  color: #757575;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.4px;
  margin-right:10px;
  &:hover{
    color:#3DA8F5;
  }
`;

const SLink = styled(Link)`

`;

const UserIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 32px;
  background-image: url(${props => props.bgUser});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  &:hover{
    cursor: pointer;
    border: 2px solid #3DA8F5;
  }

  &:focus{
    outline: none;
  }
`;

const ForDisplay = styled.div`
  display: ${props => props.display === "true" ? "block" : "none"};
  opacity: ${props => props.display === "true" ? 1 : 0.5};
  position: absolute;
  top: 43px;
  left: -64px;
`;

const UserCanDoContainer = styled.div`
  width: 200px;
  height: 192px;
  padding: 8px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.18);

  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

`;

const UserCanDo = styled.div`
  width: 100%;
  padding: 10px 12px;
  color: #3F4150;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  font-weight: 400;

  &:hover{
    background-color: #F7F8FA;
    cursor: pointer;
  }
`;


const UserPlace = () => {
  const { afterLogin, afterLogin:{ loading }, setAfterLogin, ChecktheLogined, userInfo, userInfo:{infoLoading, cart} ,setUserInfo } = useContext(HeaderContext)
  let isLogin = false;
  const id = localStorage.getItem("user_id")
  const token = localStorage.getItem("token")
  const profile = localStorage.getItem("profile")
  // console.log(profile);
  // console.log(`토큰을 불러왔습니다. ${token}`);
  // localStorage.removeItem("token")
  // 토큰 유효성 검증 하는 곳
  if(token !== null){
    // ChecktheLogined(id);
    isLogin = true;
  }

  // 토큰이 없을 때
  else if(token === null){
    isLogin = false;
  }

  const [userDo, setUserDo] = useState({
    do: ["마이페이지", "나의 쇼핑", "이벤트", "로그아웃"],
    nowDisplay: "false"
  })

  const DisplayChange = () => {
    if(userDo.nowDisplay === "false"){
      setUserDo({...userDo, nowDisplay: "true"})
    }else{
      setUserDo({...userDo, nowDisplay: "false"})
    }
  }

  // 해당 유저의 카트정보를 불러오는 함수
  const cartInfo = async(id) => {
    const typeId = +id
    try{
      const res = await userApi.UserCart(typeId)
      const { data : {UserCartInfo: {info}}} = res
      setUserInfo({...userInfo, cart:info, infoLoading:true})
    }catch(e){
      console.log("카트정보 불러오기 오류 발생");
    }
  }

  // 로그인이 확인되어 있는 상태에서 아직 유저관련 데이터(카트, 소식등이)가 State에 담기지 않았을 때
  if(isLogin && infoLoading === false){
    cartInfo(id)
  }

  const logOut = (e) => {
    const { target: { innerText }} = e

    if(innerText === "로그아웃"){
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      window.location.replace('/')
      return
    }
    return
  }
  

  return(
    <>
      {isLogin === false ? <>
        <ItemContainer>
          <UserItem className="icon-Cart">
          </UserItem>
        </ItemContainer>
        <BeforeLogin>
          <SLink to="/login">로그인</SLink>
        </BeforeLogin>
        <BeforeLogin>
          <SLink to="/signin">회원가입</SLink>
        </BeforeLogin>
        </> : <>
          <ItemContainer>
            <UserItem className="icon-Bookmark">
              <News>1</News>
            </UserItem>
          </ItemContainer>
          <ItemContainer>
            <UserItem className="icon-Bell">
              <News>1</News>
            </UserItem>
          </ItemContainer>
          <ItemContainer>
            <SLink to="/mycart">
              <UserItem className="icon-Cart">
                {userInfo.cart.length === 0 ? "" : <News>{userInfo.cart.length}</News>}
              </UserItem>
            </SLink>
          </ItemContainer>
          <UserIcon 
            bgUser={profile ? profile : require("../Asset/userIcon/userIcon.jpg").default} 
            onClick={DisplayChange} 
            tabIndex="0" 
            onBlur={() => setUserDo({ ...userDo, nowDisplay: "false"})}>
            <ForDisplay 
              display={userDo.nowDisplay}>
              <UserCanDoContainer>
                {userDo && userDo.do.map((value, index) => {
                  return (
                    <UserCanDo onClick={logOut}
                      key={index}>{value}
                    </UserCanDo>
                  )
                })}
              </UserCanDoContainer>
            </ForDisplay>
          </UserIcon>
        </>}
  
    </>
  )
}

export default UserPlace