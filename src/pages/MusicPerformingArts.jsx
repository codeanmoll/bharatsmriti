import React from 'react'
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar'
import "../pages/styles/MusicPerformingArts.css"

const MusicPerformingArts = () => {
  return (
    <div className='MusicPerformingArts'>
      <SideBar />
      <Navbar backgroundColor="#FAFAFA" border="1px solid #E4E4E7" />

      <section >
        <p style={{color:"gray", textAlign:"center",margin:16}}>Dhrupad (Ancient Vocal Music)</p>
        <div className="artistWrapper">
          <img src="" alt="" />
          <div className="artistContent">
            <span></span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MusicPerformingArts
