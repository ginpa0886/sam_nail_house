import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  ${props => props.css}
`;



const UseButton = ({ css, content }) => {
  const { CSS } = css;
  

  return (
      <Button css={CSS}>{content}</Button>
  )
}


export default UseButton