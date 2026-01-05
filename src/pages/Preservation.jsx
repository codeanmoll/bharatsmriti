import React from 'react'
import "./styles/preservation.css"
import Navbar from '../components/navigation/Navbar'
import SideBar from '../components/navigation/SideBar'
import "./styles/preservation.css" 
const Preservation = () => {
  return (
    <>
      <Navbar backgroundColor="#FAFAFA" border="1px solid #E4E4E7" />
      <SideBar />
      <div className='preservation'>

        <div class="card-container">
          <div class="card">
            <img src="https://asi.nic.in/images/conservationSlide1.jpg" alt="Card 1"/>
              <div class="card-title">Structural Conservation</div>
          </div>
          <div class="card">
            <img src="https://i.abcnewsfe.com/a/ea00c9bc-fdbf-4929-8cee-00b729e683a3/wirestory_3fb9db4f8c02e33bda685ac0e4922beb_16x9.jpg" alt="Card 2"/>
              <div class="card-title">Material Conservation</div>
          </div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/TAj_mahal_given_mud_pack_treatment.JPG" alt="Card 3"/>
              <div class="card-title">Surface Cleaning & Protection</div>
          </div>
          <div class="card">
            <img src="https://keyt.b-cdn.net/2025/06/Screenshot-2025-06-25-at-5.05.27%E2%80%AFPM.png" alt="Card 4"/>
              <div class="card-title">Environmental Protection</div>
          </div>
          <div class="card">
            <img src="https://19948058.fs1.hubspotusercontent-na1.net/hubfs/19948058/3D%20laser%20scanning%20of%20a%20heritage%20structure.jpg" alt="Card 5"/>
              <div class="card-title">Digital Documentation & Archiving</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preservation
