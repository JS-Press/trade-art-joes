import './App.css';
import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {NavLink } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import ArtPage from './components/ArtPage'
import ArtistPage from './components/ArtistPage'

function App() {

  const [artworks, setArtworks] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)

  useEffect( () => {
    fetch(`/artworks`).then((r) => {
        if (r.ok) {
            r.json().then(data => {
            setArtworks(data)
            // console.log(data)
            })}
        })
        }, [])
  

  function handleLogin(){
    setLoggedIn(true)
}

function handleLogout(){
    setLoggedIn(false)
}


  return (
    <>
    <Router>
    <div className="App">
      <div id="header">
        <NavLink to='/' id='home'>Trade Art Joe's</NavLink>
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      </div>
    <Routes>
      <Route path='/' element={<Home artworks={artworks}/>} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login handleLogin={handleLogin} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/artworks/:id' element={<ArtPage />} />
      <Route path='/users/:id' element={<ArtistPage artworks={artworks}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
