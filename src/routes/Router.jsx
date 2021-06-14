import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {
  Home,
  Database,
  Detail,
  Pokedex,
  Types,
  About,
  Battle,
  NotFound
} from 'pages'
import ScrollToTop from 'components/ScrollToTop'
import Layout from 'components/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/database' component={Database} />
          <Route path='/pokedex' component={Pokedex} />
          <Route exact path='/detail' component={Detail} />
          <Route path='/detail/:id' component={Detail} />
          <Route exact path='/types' component={Types} />
          <Route path='/types/:type' component={Types} />
          <Route path='/battle' component={Battle} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
