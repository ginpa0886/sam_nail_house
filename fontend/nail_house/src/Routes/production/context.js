import React, { useState } from 'react'
import { productionApi } from '../../api'

export const ProductionContext = React.createContext()

const ProductionContextProvider = ({ children }) => {
  const [detail, setDetail] = useState({
    productioninfo: {},
    userId:0,
    productionId:0,
    loading: false,
  })

  

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
          return
        }
      } catch(e){
        console.log(e);
        return 
      }

    }else{
      console.log("뭔가 문제가 있을 때");
      return
    }
  }

  // 구매관련 State
  const [cart, setCart] = useState({
    production:[],
    price:[],
    count:[],
    productionId:[],
    optionId:[],
    totalmoney:0,
    loading:false
  });

  // 리뷰쓰기 관련 State
  const [test, setTest] = useState({
    reviewDisplay:false
  });
  
  
  return (
    <ProductionContext.Provider value={{detail, setDetail, getProductionInfo, cart, setCart, test, setTest}}>
      {children}
    </ProductionContext.Provider>
  )
}

export default ProductionContextProvider