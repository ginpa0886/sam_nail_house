import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.backgroundcolor};
  color:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.color};
  width:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.width};
  height:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.height};
  font-size:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.fontsize};
  font-weight:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.fontweigth};
  line-height:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.lineheight};
  letter-spacing:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.letterspacing};
  border-radius:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.borderradius};
  border:${props => props.css.backgroundcolor === undefined ? "initial" : props.css.border};
  padding:${props => props.css.backgroundcolor === undefined ? "0" : props.css.padding};
  margin:${props => props.css.backgroundcolor === undefined ? "0" : props.css.margin};
`;

const DefaultButton = styled.button``;

const ReuseButton = ({ css }) => {
  if(!css){
    return (
      <DefaultButton></DefaultButton>
    )
  }

  const { backgroundcolor, color, width, height, fontsize, fontweigth, lineheight, letterspacing, borderradius, border, padding, margin } = css;

  const buttonCSS = { backgroundcolor, color, width, height, fontsize, fontweigth, lineheight, letterspacing, borderradius, border, padding, margin };

  return (
      <Button css={buttonCSS}/>
  )
}


export default ReuseButton