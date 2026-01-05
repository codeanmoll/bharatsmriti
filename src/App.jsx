import React from 'react'
import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/landingPage'
import Explore from './pages/Explore'
import Navigation from './components/navigation/Navigation'
import Culture from './pages/Culture'
import Login from './pages/Login'
import About from './pages/About'
import Signup from "./pages/Signup"
import Preservation from './pages/Preservation'
import Vision from './pages/Vision'
import TajModel from './pages/monuments/Tajmahal'
import MusicPerformingArts from './pages/MusicPerformingArts'
const App = () => {
  return (
    <div>
      {/* <Navigation/> */}

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/culture' element={<Culture />}></Route>
        <Route path='/preservation' element={<Preservation/>}></Route>
        <Route path='/vision' element={<Vision/>}></Route>
        <Route path='/explore/musicperformingarts' element={<MusicPerformingArts/>}></Route>
        <Route path='/explore/tajmahal' element={<TajModel/>}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>


    </div>
  )
}

export default App
