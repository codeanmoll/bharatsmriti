import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Search from '../Search';
import "./navigation.css"
const Navbar = ({backgroundColor, border}) => {
  const [ShowSearch, setShowSearch] = useState(false);
  return (
    <>
      {ShowSearch && (<Search isOpen={ShowSearch} onClose={()=>setShowSearch(false)} />)}
      <div style={{border:border, backgroundColor:backgroundColor}} className="navigationPanel">
        <div className="items">
          <div className="item">
            <span>BHARATSMRITI</span>
          </div>
          <div className="item">
            <div className="searchBar" onClick={()=>setShowSearch(true)}> <i className='bi bi-search' style={{ marginRight: 6 }}></i> Click here to search...</div>
          </div>
          <div className='item'>
            <NavLink to="/explore"> <i>Explore</i></NavLink>
            <NavLink to="/culture"> <i>Culture</i></NavLink>
            <NavLink to="/preservation"> <i>Preservation</i></NavLink>
            <NavLink to="/vision"><i>Vision</i></NavLink>
            <NavLink to="/about"> <i>About</i></NavLink>
            <NavLink to="/login"><button>Login</button></NavLink>
          </div>


        </div>
      </div>
    </>
  )
}

export default Navbar
