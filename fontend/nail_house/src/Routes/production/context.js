import React, { useEffect, useState } from 'react'
import { productionApi } from '../../api'

export const ProductionContext = React.createContext()

const ProductionContextProvider = ({ children }) => {
  const [detail, setDetail] = useState({
    productioninfo: {},
    loading: false,
  })

  // 상품 세부정보 불러오는 함수
  const getProductionInfo = async(id) => {
    const typeId = +id
    if(typeId){
      try{
        const {data: { productionDetail }} = await productionApi.ProductionInfo(typeId)
        if(productionDetail){
          
          // console.log(productionDetail);
          setDetail({...detail, productioninfo: {...productionDetail}, loading:true})
        }else{
          return
        }
      } catch(e){
        console.log(e);
        return 
      }

    }else{
      return
    }
    
  }
  
  return (
    <ProductionContext.Provider value={{detail, setDetail, getProductionInfo}}>
      {children}
    </ProductionContext.Provider>
  )
}

export default ProductionContextProvider