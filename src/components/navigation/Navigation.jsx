import React from 'react'
import { Link } from 'react-router-dom'
import "./navigation.css"
const Navigation = () => {
  return (
    <div>
          <div className="navigation">
                    <div className='sideMenu'><img src="/logo-w.png" alt="" /></div>
                    <div className='sideMenu'>
                        <div className="menu">
                            <p className='subTitle'>Menu</p>
                            <Link to="/explore">
                                <div><span className="text-[20px] p-3">Explore</span></div>
                            </Link>

                            <Link to="/culture">
                                <div> <i className='bi bi-building'></i><span className=" text-[20px] p-3" >Culture</span></div>
                            </Link>

                            <Link to="/preservation">
                                <div> <i className='bi bi-life-preserver'></i> <span className=" text-[20px] p-3" >Preservation</span></div>
                            </Link>

                            <Link to="/vision">
                                <div> <i className='bi bi-heart'></i> <span className=" text-[20px] p-3">Favorites</span></div>
                            </Link>

                            <Link to="/about">
                                <div> <i className='bi bi-people'></i> <span className=" text-[20px] p-3" >About</span></div>
                            </Link>
                        </div>
                    </div>

                    <div className='sideMenu'><div className="ai"></div></div>
                </div>
    </div>
  )
}

export default Navigation
