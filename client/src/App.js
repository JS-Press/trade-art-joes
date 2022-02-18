import './App.css';
import React, { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {NavLink } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import ArtPage from './components/ArtPage'

function App() {
  
  const [loggedIn, setLoggedIn] = useState(true)
  const [selectedArt, setselectedArt] = useState(null)

  function handleLogin(){
    setLoggedIn(true)
}

function handleLogout(){
    setLoggedIn(false)
}

function handleSelectArt(a){
  setselectedArt(a)
}

console.log(selectedArt)

  return (
    <>
    <Router>
    <div className="App">
      <div id="header">
        <NavLink to='/' id='home'>Trade Art Joe's</NavLink>
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      </div>
    <Routes>
      <Route path='/' element={<Home handleSelectArt={handleSelectArt} />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login handleLogin={handleLogin} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/artworks/:id' element={<ArtPage artwork={selectedArt} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
