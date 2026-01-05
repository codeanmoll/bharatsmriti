import React, { useRef } from 'react'
import Navbar from "../navigation/Navbar"
import BlurText from "../common/BlurText"
import Masonry from "../common/Masonry"
import TextType from "../common/TextType"
import ScrollFloat from '../common/ScrollFloat';
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import "./style/Hero.css"
import TajScene from '../models/TajScene'
const Hero = () => {
  const items = [
    {
      id: "1",
      img: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1200",
      url: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1200",
      height: 500,
    },
    {
      id: "2",
      img: "https://images.pexels.com/photos/34201914/pexels-photo-34201914.jpeg?_gl=1*jxmav8*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODMyNDMkajU4JGwwJGgw",
      url: "https://images.pexels.com/photos/34201914/pexels-photo-34201914.jpeg?_gl=1*jxmav8*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODMyNDMkajU4JGwwJGgw",
      height: 800,
    },
    {
      id: "3",
      img: "https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?_gl=1*77n6k2*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM0MTQkajQ1JGwwJGgw",
      url: "https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?_gl=1*77n6k2*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM0MTQkajQ1JGwwJGgw",
      height: 600,
      width: 500,
    },
    {
      id: "4",
      img: "https://images.pexels.com/photos/14496568/pexels-photo-14496568.jpeg?_gl=1*1k9lmmj*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM0OTQkajU5JGwwJGgw",
      url: "https://images.pexels.com/photos/14496568/pexels-photo-14496568.jpeg?_gl=1*1k9lmmj*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM0OTQkajU5JGwwJGgw",
      height: 800,
    },
    {
      id: "5",
      img: "https://images.pexels.com/photos/33797757/pexels-photo-33797757.jpeg?_gl=1*wi5uhm*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM2MTUkajQ0JGwwJGgw",
      url: "https://images.pexels.com/photos/33797757/pexels-photo-33797757.jpeg?_gl=1*wi5uhm*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM2MTUkajQ0JGwwJGgw",
      height: 250,
    },
    {
      id: "6",
      img: "https://images.pexels.com/photos/13819269/pexels-photo-13819269.jpeg?_gl=1*ret060*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODMyODkkajEyJGwwJGgw",
      url: "https://images.pexels.com/photos/13819269/pexels-photo-13819269.jpeg?_gl=1*ret060*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODMyODkkajEyJGwwJGgw",
      height: 900,
    }, {
      id: "7",
      img: "https://images.pexels.com/photos/2682248/pexels-photo-2682248.jpeg?_gl=1*w9pm50*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM2MTUkajQ0JGwwJGgw",
      url: "https://images.pexels.com/photos/2682248/pexels-photo-2682248.jpeg?_gl=1*w9pm50*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM2MTUkajQ0JGwwJGgw",
      height: 400,
    },
    {
      id: "8",
      img: "https://images.pexels.com/photos/34298211/pexels-photo-34298211.jpeg?_gl=1*117zp83*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM3ODgkajU5JGwwJGgw",
      url: "https://images.pexels.com/photos/34298211/pexels-photo-34298211.jpeg?_gl=1*117zp83*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM3ODgkajU5JGwwJGgw",
      height: 800,
    },
    {
      id: "9",
      img: "https://images.pexels.com/photos/1484776/pexels-photo-1484776.jpeg?_gl=1*1dx4rw5*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM4NzEkajU5JGwwJGgw",
      url: "https://images.pexels.com/photos/1484776/pexels-photo-1484776.jpeg?_gl=1*1dx4rw5*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM4NzEkajU5JGwwJGgw",
      height: 600,
    }, {
      id: "10",
      img: "https://images.pexels.com/photos/764689/pexels-photo-764689.jpeg?_gl=1*dt6s13*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM5MzgkajU5JGwwJGgw",
      url: "https://images.pexels.com/photos/764689/pexels-photo-764689.jpeg?_gl=1*dt6s13*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODM5MzgkajU5JGwwJGgw",
      height: 400,
    },
    {
      id: "11",
      img: "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?_gl=1*1szp8wu*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODQwMzYkajU5JGwwJGgw",
      url: "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?_gl=1*1szp8wu*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODQwMzYkajU5JGwwJGgws://example.com/two",
      height: 800,
    },
    {
      id: "12",
      img: "https://images.pexels.com/photos/15167632/pexels-photo-15167632.jpeg?_gl=1*1v5a17o*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODQxNDgkajU5JGwwJGgw",
      url: "https://images.pexels.com/photos/15167632/pexels-photo-15167632.jpeg?_gl=1*1v5a17o*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYwODMxMzAkbzQkZzEkdDE3NjYwODQxNDgkajU5JGwwJGgw",
      height: 600,
    },
    // ... more items
  ];
  gsap.registerPlugin(ScrollTrigger);
  const scaleContainer = useRef(null);
  useGSAP(() => {


 gsap.fromTo(".modelHeadline",
      { y: 100, opacity: 0, scale: 1 },
      {
        y: 50,
        opacity: 1,
        scale: 1,
        duration: 3,
        scrollTrigger: {
          trigger: ".modelHeadline",
          start: "top 30%",
          end: "top 10%",
          scrub: true,
          // pin:true,
          // markers:true,
        }
      });
    

    gsap.fromTo(".landingText",
      { y: 100, opacity: 1, scale: 1 },
      {
        y: -50,
        opacity: 0,
        scale: 1,
        duration: 3,
        scrollTrigger: {
          trigger: ".landingText",
          start: "top 10%",
          end: "top 0%",
          scrub: true,
          // markers:true,
        }
      });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".masonry-div",
        start: "top 80%",
        end: "top -40%",   // 👈 extra scroll space
        scrub: true,
      }
    });

    tl.fromTo(
      scaleContainer.current,
      { y: 50, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 1 }
    )

      // 2️⃣ Disappear on further scroll
      .to(
        scaleContainer.current,
        { y: -100, opacity: 0, scale: 1, duration: 1 }
      );


  }, { scope: scaleContainer.current })

  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full bg-black relative">
        {/* Midnight Mist */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
        `,
          }}
        />
        <div className='landingText'>
          <BlurText
            text="CULTURE IS NOT HISTORY. IT'S MEMORY"
            delay={300}
            animateBy="words"
            direction="top"

            className="text-2xl mb-8"
          />
        </div>
      </div>
      <div style={{
        backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
         
        `, height: "100vh", rotate: "180deg", display: "grid", alignItems: "center", alignContent: "center",
      }}>
        <div ref={scaleContainer} style={{ rotate: "180deg", height: "100vh", transform: "scale(1)" }} className='masonry-div'>


          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
          <div style={{ margin: 20, position: "relative", top: "-270px", width: "100%", background: "#fffs", display: "flex", justifyContent: "center" }}>
            <TextType
              text={["Our Popular Monuments", "TAJMAHAL | AGRA", "RED-FORT | DELHI", "QUTUB MINAR | DELHI", "INDIA GATE | NEW DELHI", "CHARMINAR | HYDERABAD", "AND MANY MORE..."]}
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>

      </div>

      <div className="section3" style={{ height: "100vh" }}>
        <TajScene />
      </div>

      <h1 style={{color:"#fff",textAlign:"center",position:"relative",top:20,fontWeight:600,fontSize:70}} className='modelHeadline'>Taj Mahal</h1>
      <div className="aboutModel"> 
      <p
    className="
      max-w-md
    p-4
    text-left
    text-sm
    md:text-base
    leading-relaxed
    text-[#e6e3dc]
    font-['Libre_Baskerville']
    bg-black/60
    backdrop-blur-[10]
    rounded-lg
    border border-white/40
    shadow-lg
    
    "
  >
    Our 3D models preserve history beyond photographs. They allow you to explore
    monuments, artifacts, and cultural structures in depth, understanding their
    form, scale, and craftsmanship as they exist in space. Each model is designed
    to keep memory alive, enabling future generations to experience heritage not
    as distant history, but as a living presence.
  </p>



    <div
  className="

     max-w-md
    p-4
    text-left
    text-sm
    md:text-base
    leading-relaxed
    text-[#e6e3dc]
    font-['Libre_Baskerville']
    bg-black/60
    backdrop-blur-[10]
    rounded-lg
    border border-white/40
    shadow-lg
  ">

  <p>
    Beyond visual beauty, monuments like the Taj Mahal represent engineering
    brilliance and cultural vision. Symmetry, geometry, and material precision
    reflect the advanced knowledge of their time, reminding us that heritage is
    not only art, but innovation preserved in stone.
  </p>
     </div>

     <div
  className="
     max-w-md
    p-4
    text-left
    text-sm
    md:text-base
    leading-relaxed
    text-[#e6e3dc]
    font-['Libre_Baskerville']
    bg-black/60
    backdrop-blur-[10]
    rounded-lg
    border border-white/40
    shadow-lg
  ">

  <p>
    The Taj Mahal is more than a symbol of love. Its precise proportions,
    harmonious geometry, and flawless alignment reveal a deep understanding of
    mathematics, astronomy, and craftsmanship.
  </p>
     </div>





      </div>
    </div>



    //          <div className="min-h-screen w-full relative">
    //   {/* Radial Gradient Background */}
    //   <div
    //     className="absolute inset-0 z-0"
    //     style={{
    //       background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    //     }}
    //   />
    //      {/* Your Content/Components */}
    // </div>


  )
}

export default Hero
