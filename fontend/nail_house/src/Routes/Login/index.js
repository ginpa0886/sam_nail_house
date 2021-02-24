import LoginContainer from './LoginContainer'
import LoginContextProvieder from './context'

const Login = () => {
  return (
    <LoginContextProvieder>
      <LoginContainer />
    </LoginContextProvieder>
  )
}

export default Login