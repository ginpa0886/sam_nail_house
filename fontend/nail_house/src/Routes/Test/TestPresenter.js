import React from 'react'
import styled from 'styled-components'
import ReuseInput from '../../Components/ReuseInput'
import ReuseButton from '../../Components/ReuseButton'

const dong = {
  backgroundcolor : "black",
  width:"200px",
  height:"200",
  border: "3px solid red",
  padding: "5px"
}



const TestPresenter = () => {
  
  return (
    <>
      <ReuseInput css={dong}/> 
      <ReuseButton />
    </>
  )
}

export default TestPresenter