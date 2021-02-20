import React, { useEffect, useState } from 'react'
import { productionApi } from '../../api'

export const ProductionContext = React.createContext()

const ProdcutionContextProvider = ({ children }) => {
  const [detail, setDetail] = useState({
    productioninfo: null,
    loading: true,
  })

  const getProductionInfo = async(id) => {
    const typeId = +id
    if(typeId){
      try{
        const {data: { productionDetail }} = await productionApi.ProductionInfo(typeId)

        if(productionDetail){
          console.log(productionDetail);
          // setDetail({...detail, productioninfo: productionDetail})
          return
        }else{
          console.log();
          return
        }

      } catch(e){
        console.log("에러가 뜨면 안되는데 에러가 떠요");
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

export default ProdcutionContextProvider