import { testApi } from '../../api'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import ProductionDetail from './ProductionPresenter'

const Test = ({ match: { params: { id } }}) => {
  console.log(id);
  const plzaxios = async() => {
    try{
      const {data: { productionDetail }} = await testApi.ProductionInfo(id)
      // await fetch('http://localhost:3003/production/').then(res => res.json()).then(data => console.log(data))
      // console.log(prodcutionDetail);
      console.log(productionDetail);
      
    } catch(e){
      console.log("에러가 뜨면 안되는데 에러가 떠요 짜증나게");
    }
  }
  plzaxios();
  

  return (
    <>
      <ProductionDetail />
    </>
  )
}

export default withRouter(Test)