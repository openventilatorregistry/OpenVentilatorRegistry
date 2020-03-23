import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Home/Register/Register';
import Offers from './Home/Offers/Offers';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Register' component={Register}/>
      <Route path='/Offers' component={Offers}/>
    </Switch>
  </main>
)

export default Main
