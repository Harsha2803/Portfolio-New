import './App.css'
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const App = () => {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/about'><About/></Route>
          <Route exact path='/Project'><Project/></Route>
          <Route exact path='/skill'><Skill/></Route>
          <Route exact path='/contact'><Contact/></Route>
        </Switch>
        <Footer/>
      </Router>
    )
}

export default App;


