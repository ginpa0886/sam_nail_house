import { logDOM } from '@testing-library/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import '../Asset/icomoon/style.css'
import { HeaderContext } from './context'

const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  border: 1px solid #E0E2E7;
  border-radius: 4px;
  color: #A2A5AF;
  height: 40px;
  padding: 8px 10px;
  padding-left: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  margin-right: 32px;

  &:hover{
    cursor: pointer;
    background-color: #F7F8FA;
  }
`;

const DropdownContainer = styled.ul`
  display: ${props => (props.display === "true" ? "block" : "none")};
  position: absolute;
  width: 264px;
  /* 질문할곳. */
  max-height: 274px;
  overflow: hidden;
  padding: 8px;
  background-color: white;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.18);
  border: 1px solid #E0E2E7;
  border-radius: 4px;
  top: 44px;
  left: 0px;

  &:focus{
    outline:none;
  }
`;

const NewlyKey = styled.li`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px;
`;

const NewlyKeyContent = styled.div`
  color: #858896;
  font-size: 13px;
  line-height: 1.538461538461538;
  font-weight: 400;

  &:last-child{
    cursor: pointer;
    &:active{
      opacity: 0.5;
    }
  }
`;

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px 10px 16px;

  &:hover{
    cursor: pointer;
    background-color: #F7F8FA;
  }
`;

const Item = styled.div`
  color: #3F4150;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.01em;
`;
const ItemIcon = styled.div`
  font-size: 16px;
  color: #858896;
  text-align: center;

  &:hover{
    cursor: pointer;
  }
`;

const SerachIcon = styled.i`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #858896;
  font-size: 20px;
  left: 10px;
  top: 10px;
`;




const SearchInput = () => {
  const [search, setSearch] = useState("")
  const { currentlySearch, currentlySearch: { list, display }, setCurrentlySearch } = useContext(HeaderContext)
  let forBlur = false;

  // form 제출 함수
  const userSubmit = (e) => {
    e.preventDefault()
    if(search !== ""){
      setCurrentlySearch({...currentlySearch, list: [search, ...list], display: "true"})
      // console.log(currentlySearch);
      // console.log(list);
    }
    setSearch("")
  }

  // input에 value 입력시 실행되는 함수
  const userChange = e => {
    const { target : { value }} = e;
    setSearch(value)
  }

  const removeAll = () => {
    setCurrentlySearch({
      list: [],
      display: "false"
    })
  }

  // 검색나오는것을 거꾸로 나오게 하는 부분 해야됨
  // const listReverse = (list) => {
  //   const reverseList = list
  //   reverseList.reverse();
  //   return reverseList
  // }

  // 해당 검색만 삭제
  const removeOne = (index, list) => {
    const fixList = list;
    const where = index;

    fixList.splice(where, 1)
    setCurrentlySearch({...currentlySearch, list: [...fixList]})
  }



  // focus 됐을 때 함수
  const whenFocus = (list) => {
    if(list.length < 1){
      return
    }else{
      setCurrentlySearch({...currentlySearch, display: "true"})
    }
  }

  const whenBlurOnForm = () => {
    if(forBlur === true){
      return
    }else{
      setCurrentlySearch({...currentlySearch, display: "false"})
    }
  }

  const MouseEnter = () => {
    forBlur = true;
  }

  const onMouseLeave = () => {
    forBlur = false;
  }

  // 항상 감시하는 친구
  useEffect(() => {
    if(list.length < 1){
      setCurrentlySearch({...currentlySearch, display: "false"})
    }else{
      setCurrentlySearch({...currentlySearch, display: "true"})
    }
  }, [list])

  return (
    <>
      <Form onSubmit={userSubmit} onBlur={whenBlurOnForm}>
        <SerachIcon className="icon-Search"></SerachIcon>
        <Input value={search} type="text" placeholder={"스토어 검색"} onChange={userChange} onFocus={() => whenFocus(list)} />
        <DropdownContainer display={display} tabIndex="0" onBlur={() => setCurrentlySearch({...currentlySearch, display: "false"})} onMouseEnter={MouseEnter} onMouseLeave={onMouseLeave}>
          <NewlyKey>
            <NewlyKeyContent>최근 검색어</NewlyKeyContent>
            <NewlyKeyContent onClick={removeAll}>전체 삭제</NewlyKeyContent>
          </NewlyKey>
          {list && list.length > 0 && 
            list.map((value, index) => {
              const indexA = index;
              const indexB = (index + 100000);

              return (
                <ItemContainer key={index}>
                  <Item key={indexA}>{value}</Item>
                  <ItemIcon className="icon-Close" key={indexB} onClick={() => removeOne(index, list)} ></ItemIcon>
                </ItemContainer>
              )
            })
          }
        </DropdownContainer>
      </Form>
    </>
  )
}

export default SearchInput






// --------------------------
// const BlurHandler = () => {
//   console.log("블러 실행");
//   forBlur = setTimeout(() => {
//     setCurrentlySearch({...currentlySearch, display: "false"})
//   })
// }

// const FocusHandler = () => {
//   console.log("클리어 실행");
//   clearTimeout(forBlur)
// }