import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import './App.css';

import { Header } from "./components/header/header";

import Home from './components/home'
import Contact from './components/contact'
import Service from './components/service'
import About from './components/about'
 
import './App.css';

const App = () => {

  const [expend, setExpend] =  useState(false);
  
  const expended = isExpended => {
		console.log(isExpended)
    setExpend(isExpended)
	}

  return (
      <Router>
        <Header  expended={expended}  />
        <div className={`content ${expend ? "show" : " "}`}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
  )
}

export default App;
