import { Route, Router } from '@solidjs/router'
import Layout from './layouts/layout'
import Home from './pages/home'
import Works from './pages/works'
import About from './pages/about'

function Routers() {
  return (
    <Router base='/portfolio' root={Layout}>
      <Route path="/" component={Home}/>
      <Route path="/works/:name?" component={Works}/>
      <Route path="/work/:name?" component={Works}/>
      <Route path="/about" component={About}/>
    </Router>
  )
}

export default Routers
