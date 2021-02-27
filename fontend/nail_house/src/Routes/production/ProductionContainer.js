import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import ProductionPresenter from './ProductionPresenter'
import Dispage from '../../Components/Dispage'
import { ProductionContext } from './context'

const ProductionContainer = ({ match: { params: { id } }}) => {
  const { detail, detail : { loading }, getProductionInfo } = useContext(ProductionContext)
  const productionId = id
  
  if(!loading){
    getProductionInfo(productionId, detail);
  }   
  

  return (
    <>
      <ProductionPresenter />
    </>
  )
}

export default withRouter(ProductionContainer)