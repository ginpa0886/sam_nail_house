import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import '../Asset/icomoon/style.css'

const UserItem = styled.i`
  width: 32px;
  height: 32px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #858896;
  margin-right: 8px;
  text-align: center;
  
  &:hover{
    background-color: #3DA8F5;
    color: #FFFFFF;
    border-radius: 50%;
    cursor: pointer;
  }
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

  return(
    <>
      <UserItem className="icon-Bookmark"></UserItem>
      <UserItem className="icon-Bell"></UserItem>
      <UserItem className="icon-Cart"></UserItem>
      <UserIcon bgUser={require("../Asset/userIcon/userIcon.jpg").default} onClick={DisplayChange} tabIndex="0" onBlur={() => setUserDo({ ...userDo, nowDisplay: "false"})}>
        <ForDisplay display={userDo.nowDisplay}>
          <UserCanDoContainer>
            {userDo && userDo.do.map((value, index) => {
              return (
                <UserCanDo key={index}>{value}</UserCanDo>
              )
            })}
          </UserCanDoContainer>
        </ForDisplay>
      </UserIcon>
    </>
  )
}

export default UserPlace