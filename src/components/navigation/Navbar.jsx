import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
const Navbar = () => {
  const [show, setShow] = useState(false)

  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".nav-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power3.out",
      stagger: 0.15,
    });
  }, { scope: containerRef })

  return (
    <div className="fixed top-0 left-0 w-full z-50" ref={containerRef}>
      <div className=" bg-[#0B0E11]/60 backdrop-blur-[8px]  border-b flex items-center justify-between px-0 py-0">

        {/* Logo */}
        <div className="text-[#F5F1E8] font-bold text-xl ">
          <span className="nav-text">LOGO</span>
        </div>

        {/* Navigation */}
        <div
          className={`
            flex gap-6 px-6 py-3
        
            shadow-lg

            transform transition-all duration-700 ease-out
          
          `} 
        >
          <Link to="/">
            <span className="text-[30px] text-[#F5F1E8] nav-text" style={{ fontFamily: "Cinzel Decorative" }}>Explore</span>
          </Link>

          <Link to="/heritage">
            <span className=" text-[30px] text-[#F5F1E8] nav-text" style={{ fontFamily: "Cinzel Decorative" }}>Heritage</span>
          </Link>

          <Link to="/preservation">
            <span className=" text-[30px] text-[#F5F1E8] nav-text" style={{ fontFamily: "Cinzel Decorative" }}>Preservation</span>
          </Link>

          <Link to="/vision">
            <span className=" text-[30px] text-[#F5F1E8] nav-text" style={{ fontFamily: "Cinzel Decorative" }}>Vision</span>
          </Link>

          <Link to="/about">
            <span className=" text-[30px] text-[#F5F1E8] nav-text" style={{ fontFamily: "Cinzel Decorative" }}>About</span>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
