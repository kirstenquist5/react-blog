import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar'
import Blogs from './components/Blogs'
import Blog from './components/Blog'

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/blogs' component={Blogs} />
      <Route exact path='/blogs/:id' component={Blog} />

    </Switch>
  </Fragment>
)

export default App;
