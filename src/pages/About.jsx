import React from "react"
import Navbar from "../components/navigation/Navbar"
import SideBar from "../components/navigation/SideBar"
import teamImage from "../assets/about.svg"
import "./styles/about.css"

const About = () => {
    return (
        <div>
            

            <div className="about-wrapper">
                <div className="about-card">

                    <div className="about-left">
                        <h1>About Us</h1>

                        <p>
                            Bharat Smriti is a digital initiative dedicated to
                            preserving, exploring, and celebrating the cultural,
                            architectural, and historical heritage of India.
                            From ancient civilizations to living traditions,
                            we bring India’s timeless legacy into the modern world.
                        </p>

                        <p>
                            Our mission is to make heritage accessible, immersive,
                            and engaging through technology, storytelling, and
                            curated knowledge.
                        </p>

                        <button>Learn More</button>
                    </div>

                    <div className="about-right">
                        <img src={teamImage} alt="Our Team Illustration" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
