import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  ${props => props.css}
`;

const UseInput = ({ css, placeholder }) => {
  const { CSS } = css;
  

  return (
      <Input css={CSS} placeholder={placeholder === undefined ? '' : placeholder}/>
  )
}


export default UseInput