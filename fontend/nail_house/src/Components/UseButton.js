import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  ${props => props.css}
`;



const UseButton = ({ css, content, type}) => {
  const { CSS } = css;
  

  return (
      <Button css={CSS} type={`${type}`}>{content}</Button>
  )
}


export default UseButton