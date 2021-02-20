import React, { useContext, useState } from 'react'
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

const DropdownContainer = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0px 4px 6px 0px #000000 18%;
  border: 1px solid #E0E2E7;
  border-radius: 4px;
  top: 44px;
  left: 0px;
`;

const NewlyKey = styled.div`

`;

const NewlyKeyContent = styled.div``;

const ItemContainer = styled.div`
  
`;

const Item = styled.div`
  color: #3F4150;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.01em;
`;
const ItemIcon = styled.div``;

const SerachIcon = styled.div`
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
  // useContext(HeaderContext)
  console.log(search);

  const userSubmit = (e) => {
    e.preventDefault()
    setSearch("")
  }

  const userChange = e => {
    const { target : { value }} = e;
    setSearch(value)
  }
  return (
    <>
      <Form onSubmit={userSubmit}>
        <SerachIcon className="icon-Search"></SerachIcon>
        <Input value={search} type="text" placeholder={"스토어 검색"} onChange={userChange} />
        <DropdownContainer>
          <NewlyKey>
            <NewlyKeyContent></NewlyKeyContent>
            <NewlyKeyContent></NewlyKeyContent>
          </NewlyKey>
          <ItemContainer>
            
          </ItemContainer>
        </DropdownContainer>
      </Form>
    </>
  )
}

export default SearchInput