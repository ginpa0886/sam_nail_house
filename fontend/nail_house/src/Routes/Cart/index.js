import CartContainer from './CartContainer'
import CartContextProvider from './context'

const Cart = () => {
  return (
    <CartContextProvider>
      <CartContainer />
    </CartContextProvider>

  )
}

export default Cart