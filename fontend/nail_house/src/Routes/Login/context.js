import React from 'react'

export const LoginContext = React.createContext()

const LoginContextProvieder = ({children}) => {
  

  return (
    <LoginContext.Provider >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvieder