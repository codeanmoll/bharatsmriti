import React, { useRef } from 'react'
import Navbar from '../navigation/Navbar'
import "./style/Hero.css"
import gsap from "gsap"
import { useGSAP, } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

const Hero = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".softSlide", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: "power3.out",
      stagger: 0.25
    }),
      gsap.from(".softContent", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "power3.out",
        stagger: 0.25
      }),

      gsap.fromTo(
        imageRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -50,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: slidesRef.current,
            start: "top -10%",
            end: "top -30%",
            scrub: true,
            // markers: true,
            // pin: true,
            // pinType: "fixed",

          }
        }
      )

  }, { scope: slidesRef })


  return (
    <div className='hero' >
      <Navbar />
      <div ref={containerRef} className="heroCenter">

        <div ref={slidesRef} className="slides">
          <div className="taglineWrapper">
            <img src="/logo-b.png" className='logo softContent' alt="" />
            <p className='tagline uppercase softContent'>Culture is not HISTORY. <br /> It's memory.</p>
            <div className="subline">
              <p className='subline uppercase softContent'>Culture lives beyond dates and timelines. It exists in spaces, craftsmanship, rituals, and the stories passed through generations. This project preserves cultural heritage as immersive digital experiences, ensuring that monuments and memories remain accessible, understood, and protected even as time and change reshape the physical world.</p>
            </div>
          </div>


          <div ref={imageRef} className="textureWrapper">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
