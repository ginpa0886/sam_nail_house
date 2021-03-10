import React, { useState } from 'react'


export const ProductionContext = React.createContext()

const ProductionContextProvider = ({ children }) => {
  const [detail, setDetail] = useState({
    productioninfo: {},
    userId:0,
    productionId:0,
    loading: false,
  })


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

  const [questionPage, setQuestionPage] = useState({
    questionDisplay:false
  })
  
  
  return (
    <ProductionContext.Provider value={{detail, setDetail, cart, setCart, test, setTest, questionPage, setQuestionPage}}>
      {children}
    </ProductionContext.Provider>
  )
}

export default ProductionContextProvider