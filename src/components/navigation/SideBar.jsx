import React, { useState } from 'react'
import "./SideBar.css"
import Ai from '../ai/ai'
import { NavLink } from 'react-router-dom';
const SideBar = () => {
    const [showAi, setShowAi] = useState(false);
    return (
        <>
            {showAi && (<Ai isOpen={showAi} onClose={() => setShowAi(false)} />)}
            <div className='SideBar'>
                <div className="Categories">
                    <p>Categories</p>
                    <div className="items">
                        <NavLink to="/explore/musicperformingarts">
                            <div className="item"><span>Music & Performing Arts</span> <i className='bi bi-chevron-right'></i> </div></NavLink>
                        <NavLink to="/i">
                            <div className="item"><span>Art, Culture & Traditions</span> <i className='bi bi-chevron-right'></i> </div></NavLink>
                        <NavLink to="/h">
                            <div className="item"><span> Historic Events</span> <i className='bi bi-chevron-right'></i></div></NavLink>
                        <NavLink to="/g">
                            <div className="item"><span>Architecture & Engineering</span> <i className='bi bi-chevron-right'></i> </div></NavLink>
                        <NavLink to="/f">
                            <div className="item"><span>Literature & Languages</span> <i className='bi bi-chevron-right'></i> </div></NavLink>
                    </div>
                </div>


                <div className="Categories">
                    <p>Popular topics</p>
                    <div className="items">
                        <NavLink to="/e">
                            <div className="item"><span>Ancient Civilizations of India</span> <i className='bi bi-chevron-right'></i> </div></NavLink>
                        <NavLink to="/d">
                            <div className="item"><span>Indian Art & Paintings</span> <i className='bi bi-chevron-right'></i> </div></NavLink>
                        <NavLink to="/c">
                            <div className="item"><span>Indian Literature & Texts</span> <i className='bi bi-chevron-right'></i></div></NavLink>
                        <NavLink to="/b">
                            <div className="item"><span>Religion & Spirituality</span> <i className='bi bi-chevron-right'></i> </div></NavLink>
                        <NavLink to="/a">
                            <div className="item"><span>Indian Dynasties & Rulers</span> <i className='bi bi-chevron-right'></i> </div></NavLink>
                    </div>
                </div>

                <div style={{ cursor: "pointer" }} className="bot-container" onClick={() => setShowAi(true)}>
                    <div className="wrapper">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfY5Qwmih16LGrArB8l1Y_QcLCtX10y7QLA&s" alt="" />
                        <div className="context">
                            <span>AI Assistant</span>
                            <span>Think faster with AI</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
