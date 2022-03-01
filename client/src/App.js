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
import MyTrades from './components/MyTrades'
import TradeMake from './components/TradeMake'
import TradesSent from './components/TradesSent'
import TradesRec from './components/TradesRec'
import TradesComp from './components/TradesComp'

function App() {

  const [user, setUser] = useState({})
  const [artworks, setArtworks] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [selectedArtwork, setSelectedArtwork] = useState({})

  useEffect( () => {
    fetch(`/artworks`).then((r) => {
        if (r.ok) {
            r.json().then(data => {
            setArtworks(data)
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
      <Route path='/signup' element={<Signup handleLogin={handleLogin} />} />
      <Route path='/artworks/:id' element={<ArtPage setTradeArtwork={setSelectedArtwork} loggedIn={loggedIn}/>} />
      <Route path='/users/:id' element={<ArtistPage artworks={artworks}/>} />
      <Route path='/tradeMake' element={<TradeMake selectedArtwork={selectedArtwork} user={user} artworks={artworks} />} />
      <Route path='/myTrades' element={<MyTrades user={user} />} />
      <Route path='/tradesSent' element={<TradesSent user={user} />} />
      <Route path='/tradesReceived' element={<TradesRec user={user} />} />
      <Route path='/tradesCompleted' element={<TradesComp user={user} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
