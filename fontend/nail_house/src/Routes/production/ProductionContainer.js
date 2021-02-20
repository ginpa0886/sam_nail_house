import { testApi } from '../../api'
import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import ProductionPresenter from './ProductionPresenter'
import Dispage from '../../Components/Dispage'
import { ProductionContext } from './context'

const ProductionContainer = ({ match: { params: { id } }}) => {
  const { detail, setDetail, getProductionInfo } = useContext(ProductionContext)
  const productionId = id
  // console.log(detail);
  

  useEffect(() => {
    getProductionInfo(productionId)   
  })
  
  

  return (
    <>
      <ProductionPresenter />
    </>
  )
}

export default withRouter(ProductionContainer)