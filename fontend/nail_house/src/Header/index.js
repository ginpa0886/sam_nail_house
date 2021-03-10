import MainHeader from './mainHeader'
import SubHeader from './SubHeader'
import HeaderContextProvider from './context'

const Header = () => {
  
  return (
    <>
    <HeaderContextProvider>
      <MainHeader />
    </HeaderContextProvider>
    </>
  )
}


export default Header