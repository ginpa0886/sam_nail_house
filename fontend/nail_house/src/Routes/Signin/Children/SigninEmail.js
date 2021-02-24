import React, { useContext, useEffect } from 'react'
import { SigninContext } from '../context'
import styled from 'styled-components'
import UseButton from '../../../Components/UseButton'

const ThridContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin-bottom:30px;
`;

const ThirdDvi = styled.div`
  margin-bottom:12px;
`;
const ThirdDivContent = styled.div`
  color:#292929;
  font-size:15px;
  line-height:21px;
  font-weight:700;
`;

const ThirdInputContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ThirdInput = styled.input`
  width:155.5px;
  height:40px;
  padding: 0 15px;
  border: solid 1px #dbdbdb;
  font-size: 15px;
  border-radius: 4px;
  color: rgb(66, 66, 66);
  margin-bottom:12px;
`;

const ThirdInputDiv = styled.div`
  color:#dbdbdb;
  text-align:center;
  font-size:20px;
  line-height:40px;
  letter-spacing:-0.4px;
  margin-bottom:13px;
`;
const ThirdInputDropdownContainer = styled.div`
  position: relative;
  width:100%;
`;

const Div = styled.div`
  width:100%;
  &:last-child{
    display:${props => props.checkClick === "false" ? "none" : "block"};
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.18);
    position:absolute;
    top:40px;
  }
`;

const ThirdInputDropdown = styled.div`
  width:155.5px;
  background-color:white;
  border: solid 1px #dbdbdb;
  padding:10px 30px 0 15px;
  text-align:left;
  border-radius:4px;
  height:40px;
  margin-bottom:12px;
  &:hover{
    background-color: #dbdbdb;
  }

  &:focus{
    outline:none;
  }
`;

const ThirdInputDropdownIcon = styled.i`
  position:absolute;
  top:10px;
  right:10px;
`;

const EventDiv = styled.div``;

const Button = styled.button`
  position:absolute;
  border:solid 1px #dbdbdb;
  width:100%;
  font-size:15px;
  background-color: white;
  color:#424242;
  padding: 0 15px 0 30px;
  text-align:left;
  display:${props => props.checkClick === "true" ? "block" : "none"};

  &:first-child{
    background-color: #dbdbdb;
    color: gray;
  }

  &:hover{
    color:white;
    background-color: gray;
  }
  &:focus{
    outline:none;
  }
`;

const ButtonCSS = {
  CSS:`border:solid 1px #dbdbdb;
  width:100%;
  font-size:15px;
  background-color: white;
  color:#424242;
  padding: 0 30px 0 15px;
  text-align:left;
  

  &:hover{
    color:white;
    background-color: skyblue;
    &:first-child{
      background-color: #dbdbdb;
      color: gray;
    }
  }
  &:focus{
    outline:none;
  }
  
  `
}

const SigninEmail = () => {
  const { dropdown, dropdown : { content, nowClick, isClick, change, loading, isEmailRight }, setDropdown } = useContext(SigninContext)
  
  const dropdownEvent = (e) => {
    const { target : { textContent }} = e;
    if(isClick === "true"){
      setDropdown({...dropdown, nowClick: textContent, isClick: "false", loading:"true"})
    }else{
      setDropdown({...dropdown, nowClick: textContent, isClick: "true", loading:"true"})
    }
  }

  const lastEvent = () => {
    if(isClick === "true"){
      setDropdown({...dropdown, nowClick: "", isClick: "false", loading:"true"})
    }else{
      setDropdown({...dropdown, nowClick: "", isClick: "true", loading:"true"})
    }
  }

  const checkChange = (e) => {
    const { target : { value }} = e;

    setDropdown({...dropdown, change: value, loading:"true"})
  }

  useEffect(() => {
    if(nowClick !== undefined && nowClick !== "" && change !== undefined && change !== "" && loading === "true"){
      setDropdown({...dropdown, isEmailRight:"true", loading:"false"})
    }
  }, [dropdown])

 
  return (
    <>
      <ThridContainer>
        <ThirdDvi>
          <ThirdDivContent>이메일</ThirdDivContent>
        </ThirdDvi>
        <ThirdInputContainer>
          <ThirdInput placeholder="이메일" onChange={checkChange} value={change}/>
          <ThirdInputDiv>@</ThirdInputDiv>
          <ThirdInputDropdownContainer>
            <Div onClick={dropdownEvent}>
              <ThirdInputDropdown value={nowClick}>{nowClick}</ThirdInputDropdown>
              <ThirdInputDropdownIcon className="icon-Chevron"></ThirdInputDropdownIcon>
            </Div>
            <Div checkClick={isClick}>
              {content && content.map((value, index) => {
                const indexA = (index + 1000)
                if(index === content.length - 1){
                  return (
                    <EventDiv key={index} onClick={lastEvent}>
                      <UseButton key={indexA} css={ButtonCSS} content={value} />
                    </EventDiv>
                  )
                }else{
                  return (
                    <EventDiv key={index} onClick={dropdownEvent}>
                      <UseButton key={indexA} css={ButtonCSS} content={value} />
                    </EventDiv>
                  )
                }
              }
              )}
            </Div>
          </ThirdInputDropdownContainer>
        </ThirdInputContainer>
      </ThridContainer>
    </>
  )
}

export default SigninEmail