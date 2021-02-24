import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  ${props => props.css}
`;



const UseButton = ({ css, content, prop}) => {
  const { CSS } = css;
  

  return (
      <Button css={CSS} cssprop={prop}>{content}</Button>
  )
}


export default UseButton