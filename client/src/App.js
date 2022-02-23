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
import MakeTrade from './components/MakeTrade'

function App() {

  const [user, setUser] = useState({})
  const [artworks, setArtworks] = useState([])
  const [trades, setTrades] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [tradeArtwork, setTradeArtwork] = useState({})

  useEffect( () => {
    fetch(`/artworks`).then((r) => {
        if (r.ok) {
            r.json().then(data => {
            setArtworks(data)
            })}
        })
        }, [])

  useEffect( () => {
    fetch(`/trades`).then((r) => {
        if (r.ok) {
            r.json().then(data => {
            setTrades(data)
            })}
        })
        }, [])

  useEffect(() => {
    fetch(`/me`).then((r) => {
      if (r.ok) {
        r.json().then(data => {
          setUser(data)
          setLoggedIn(true)
        })}
      })
    }, [])

  // console.log(trades)
  

  function handleLogin(u){
    setLoggedIn(true)
    setUser(u)
}

function handleLogout(){
    setLoggedIn(false)
    setUser(null)
}


  return (
    <>
    <Router>
    <div className="App">
      <div id="header">
        <NavLink to='/' id='home'>Trade Art Joe's</NavLink>
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout} user={user} />
      </div>
    <Routes>
      <Route path='/' element={<Home artworks={artworks}/>} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login handleLogin={handleLogin} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/artworks/:id' element={<ArtPage setTradeArtwork={setTradeArtwork} loggedIn={loggedIn}/>} />
      <Route path='/users/:id' element={<ArtistPage artworks={artworks}/>} />
      <Route path='/makeTrade' element={<MakeTrade tradeArtwork={tradeArtwork} user={user}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
