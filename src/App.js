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
  Routes,
  Route
} from "react-router-dom";
const App = () => {
    return (
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Project" element={<Project />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    )
}

export default App;


