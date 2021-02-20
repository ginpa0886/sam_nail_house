import ProductionContainer from './ProductionContainer'
import ProdcutionContextProvider from './context'

const Production = () => {
  return(
    <>
      <ProdcutionContextProvider>
        <ProductionContainer />
      </ProdcutionContextProvider> 
    </>
  )
}

export default Production