import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color:${props => props.css.backgroundcolor === undefined ? "inherit" : props.css.backgroundcolor};
  color:${props => props.css.color === undefined ? "inherit" : props.css.color};
  width:${props => props.css.width === undefined ? "inherit" : props.css.width};
  height:${props => props.css.height === undefined ? "inherit" : props.css.height};
  font-size:${props => props.css.fontsize === undefined ? "inherit" : props.css.fontsize};
  font-weight:${props => props.css.fontweigth === undefined ? "inherit" : props.css.fontweigth};
  line-height:${props => props.css.lineheight === undefined ? "inherit" : props.css.lineheight};
  letter-spacing:${props => props.css.letterspacing === undefined ? "inherit" : props.css.letterspacing};
  border-radius:${props => props.css.borderradius === undefined ? "inherit" : props.css.borderradius};
  border:${props => props.css.border === undefined ? "inherit" : props.css.border};
  padding:${props => props.css.padding === undefined ? "0" : props.css.padding};
  margin:${props => props.css.margin === undefined ? "0" : props.css.margin};
  
  
  &:hover{
    cursor:${props => props.css.cursor === undefined ? "inherit" : props.css.cursor};
    background-color:${props => props.css.hoverbackgroundcolor === undefined ? props.css.backgroundcolor : props.css.hoverbackgroundcolor}; 
  }

  &:focus{
    border:${props => props.css.focusborder === undefined ? props.css.border : props.css.focusborder};
    background-color:${props => props.css.focusbackgroundcolor === undefined ? props.css.backgroundcolor : props.css.focusbackgroundcolor};
  }
`;

const DefaultButton = styled.button``;

const ReuseButton = ({ css, content }) => {
  if(!css){
    return (
      <DefaultButton></DefaultButton>
    )
  }

  const { backgroundcolor, color, width, height, fontsize, fontweigth, lineheight, letterspacing, borderradius, border, padding, margin, cursor, hoverbackgroundcolor, focusborder, focusbackgroundcolor } = css;

  const buttonCSS = { backgroundcolor, color, width, height, fontsize, fontweigth, lineheight, letterspacing, borderradius, border, padding, margin, cursor, hoverbackgroundcolor, focusborder, focusbackgroundcolor };

  return (
      <Button css={buttonCSS}>{content}</Button>
  )
}


export default ReuseButton