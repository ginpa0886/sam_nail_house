import SigninContainer from './SigninContainer'
import SiginContextProvider from './context'

const Signin = () => {
  return (
    <SiginContextProvider>
      <SigninContainer />
    </SiginContextProvider>
  )
}

export default Signin