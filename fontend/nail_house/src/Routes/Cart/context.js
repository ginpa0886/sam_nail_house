import React, { useState } from 'react'
import { userApi } from '../../api'

export const CartContext = React.createContext();

const CartContextProvider = ({children}) => {

  const [cartInfo, setCartInfo] = useState({
    infoCart:{},
    loading:false
  })

  const GetCartInfomation = async(id) => {
    const userId = id;
    try{
      const res = await userApi.UserCart(userId)
      if(!res){
        console.log("값이 없음");
        return
      }
      
      const {data : { UserCartInfo : { info }}} = res
      setCartInfo({...cartInfo, infoCart:info, loading:true})
      return

    }catch(e){
      console.log("카드 불러오기에 오류가 발생하였습니다.");
      return
    } 
  }

  return (
    <CartContext.Provider value={{cartInfo, setCartInfo, GetCartInfomation}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider