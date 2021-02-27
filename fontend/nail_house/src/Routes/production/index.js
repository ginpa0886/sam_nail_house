import ProductionContainer from './ProductionContainer'
import ProductionContextProvider from './context'

const Production = () => {
  return(
    <>
      <ProductionContextProvider>
        <ProductionContainer />
      </ProductionContextProvider> 
    </>
  )
}

export default Production