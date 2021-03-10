import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import ProductionPresenter from './ProductionPresenter'
import Dispage from '../../Components/Dispage'
import { ProductionContext } from './context'
import { productionApi } from '../../api'

const ProductionContainer = ({ match: { params: { id } }}) => {
  const { detail, detail : { loading }, setDetail} = useContext(ProductionContext)
  const productionId = id
  
  // 상품 세부정보 불러오는 함수
  const getProductionInfo = async(id) => {
    const typeId = +id
    if(typeId){
      try{
        const {data: { productionDetail }} = await productionApi.ProductionInfo(typeId)
        if(productionDetail){
          console.log(productionDetail);
          setDetail({...detail, productioninfo: {...productionDetail}, loading:true})
        }else{
          alert('상품 오류!')
          return
        }
      } catch(e){
        alert('상품 오류!')
        return 
      }

    }else{
      console.log("뭔가 문제가 있을 때");
      return
    }
  }
  
  if(!loading){
    getProductionInfo(productionId);
  }   
  

  return (
    <>
      <ProductionPresenter />
    </>
  )
}

export default withRouter(ProductionContainer)