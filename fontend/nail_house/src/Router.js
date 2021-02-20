import React from "react"
import { HashRouter as Routers, Route, Redirect, Switch } from "react-router-dom"
import Header from "./Header"
import Home from './Routes/Home'
import Production from "./Routes/production"
import Store from './Routes/Store'
import Community from './Routes/Community'
import Interior from './Routes/Interior'

const Router = () => {
  return (
    <>
    <Routers>
      <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/community" exact component={Community} />
        <Route path="/store" exact component={Store} />
        <Route path="/interior" exact component={Interior} />
        <Route path="/production/:id" exact component={Production} />
        <Redirect from="*" to="/" />
      </Switch>
      </>
    </Routers>
    </>
  )
}

export default Router