import React, { useContext }from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderContext } from './context'

const Navi = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 13px 450px;
  border-bottom: 1px solid #E0E2E7;
  background-color:white;
`;

const Item = styled.div`
  color: #1B1C32;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.714285714285714;
  letter-spacing: -0.01em;
  margin-right: 20px;

  &:last-child{
    margin-right: 0;
  }

  &:hover{
    cursor: pointer;
    color: #3DA8F5;
  }
  
  &:active{
    opacity: 0.5;
  }
`;

const SubHeader = () => {
  // const nowPath = pathname.split('/')[1]
  const { click: { community, store, interior, hoverCheck } } = useContext(HeaderContext);
  let sub = [];
  
  switch(hoverCheck){
    case "community":
      sub = community
      break;
    case "store":
    case "":
      sub = store
      break;
    case "interior":
      sub = interior
      break;
    default:
      break;
  }

  return (
    <>
          <Navi>
            {sub.map((value, index) => (<Item key={index}>{value}</Item>))}
          </Navi>
    </>
  );
}

export default withRouter(SubHeader)