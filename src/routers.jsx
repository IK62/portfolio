import { Route, Router } from '@solidjs/router'
import Layout from './layouts/layout'
import Home from './pages/home'

function Routers() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home}/>
      <Route path="/work" component={Home}/>
      <Route path="/about" component={Home}/>
    </Router>
  )
}

export default Routers
