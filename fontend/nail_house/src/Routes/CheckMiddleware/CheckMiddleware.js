import React from 'react'
import styled from 'styled-components'

const Padding = styled.section`
  margin-top:130px;
`;

// 모든 페이지에 margin-top을 주기 위한 미들웨어 역할....
// 왜냐면 header가 계속해서 위에 박혀있어야 하기 때문에...
const CheckMiddleware = () => {
  // localStorage.removeItem("token")
  return (
    <>
      <Padding></Padding>
    </>
  )
}

export default CheckMiddleware