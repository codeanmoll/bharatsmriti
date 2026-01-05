import { useEffect, useState, useRef } from "react";
import "../styles/monument.css"
import Navbar from '../../components/navigation/Navbar'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import TajScene from "../../components/models/TajScene"
const Tajmahal = () => {
    const items = [
        "https://images.pexels.com/photos/19149641/pexels-photo-19149641.jpeg?_gl=1*9i4q0g*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYxODI2ODckbzkkZzAkdDE3NjYxODI2ODckajYwJGwwJGgw",
        "https://images.pexels.com/photos/7263943/pexels-photo-7263943.jpeg?_gl=1*b03ii3*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYxODI2ODckbzkkZzAkdDE3NjYxODI2ODckajYwJGwwJGgw",
        "https://images.pexels.com/photos/602607/pexels-photo-602607.png?_gl=1*9i4q0g*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYxODI2ODckbzkkZzAkdDE3NjYxODI2ODckajYwJGwwJGgw",
        "https://images.pexels.com/photos/30638768/pexels-photo-30638768.jpeg?_gl=1*158wph9*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYxODI2ODckbzkkZzAkdDE3NjYxODI2ODckajYwJGwwJGgw"];
    const [index, setIndex] = useState(0);


    const nextItem = () => {
        setIndex((prev) => Math.min(prev + 1, items.length - 1));
    };

    const prevItem = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };


    const [scrolled, setScrolled] = useState(false);


    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        const handleScroll = () => {
            setScrolled(el.scrollTop > 50);
        };

        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    //   console.log("scrolling", scrolled)


    return (
        <>
            <Navbar backgroundColor={scrolled ? "#FAFAFA" : "transparent"} border={scrolled ? "1px solid #E4E4E7" : "none"} />
            <div className='monuments'>
                <section ref={containerRef}  >
                    <div style={{
                        backgroundImage: `  
            linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),url(${items[index]})`
                    }} className="headers">
                        <div className="prevFor">
                            <button onClick={prevItem} className='bi bi-chevron-compact-left'></button>
                            <button onClick={nextItem} className='bi bi-chevron-compact-right'></button>
                        </div>

                        <div className="bottomHeaderMain" style={{ display: scrolled ? "none" : "flex" }}>
                            <div className="context">
                                <span>Taj Mahal</span>
                                <span>Located in Agra UttarPradesh, India</span>
                                {/* <span>Constructed in 1632 CE</span>
                <span>Developed under the patronage of</span>
                <span>Shah Jahan</span>
               */}
                            </div>

                            <div className="btnWrapper">
                                <button className="bi bi-heart"></button>
                                <button className="bi bi-share"></button>
                                <button className="bi bi-chat-square-dots"></button>
                                <button className="bi bi-three-dots-vertical"></button>
                            </div>
                        </div>

                    </div>
                    <div className="main">
                        <div className="content">
                            <div style={{
                                backgroundImage: `  
            linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),url(https://cdn-ildlnng.nitrocdn.com/zzPCjlPNrSLjfXiGFkqSwDKqBBGBICDN/assets/images/optimized/rev-065a54f/www.etajmahaltour.com/blog/wp-content/uploads/2025/05/Shah-Jahan-The-Mughal-Emperor-1.png)`
                            }} className="mainImg1">
                                <span>Shahab-ud-din Muhammad Khurram</span>
                            </div>
                            {/* <div className="sideContent">
                                <p>Heading</p>
                                <p>Description...</p>
                            </div> */}
                            <div className="moreContainer">
                                <div className="items">
                                    <div style={{
                                        backgroundImage: `  
            linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),url(https://images.pexels.com/photos/34723190/pexels-photo-34723190.jpeg?_gl=1*2t3v28*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYyMTU3MzUkbzExJGcxJHQxNzY2MjE1ODI1JGozNyRsMCRoMA..)`
                                    }} className="item">
                                        <span style={{ color: "#FFF", margin: 8 }}>RedFort</span>
                                    </div>

                                    <div style={{
                                        backgroundImage: `  
            linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),url(https://images.pexels.com/photos/9467617/pexels-photo-9467617.jpeg?_gl=1*1o7npmo*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYyMTU3MzUkbzExJGcxJHQxNzY2MjE1NzQ2JGo0OSRsMCRoMA..)`
                                    }} className="item">
                                        <span style={{ color: "#FFF", margin: 8 }}>Fatehpur Sikri</span>
                                    </div>

                                    <div style={{
                                        backgroundImage: `  
            linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),url(https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?_gl=1*pjem89*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYyMTU3MzUkbzExJGcxJHQxNzY2MjE1ODU1JGo3JGwwJGgw)`
                                    }} className="item">
                                        <span style={{ color: "#FFF", margin: 8 }}>India Gate</span>
                                    </div>

                                    <div style={{
                                        backgroundImage: `  
            linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),url(https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?_gl=1*1e9n8um*_ga*MjQ4MzkzNDQ4LjE3NjE4MTkxMjI.*_ga_8JE65Q40S6*czE3NjYyMTU3MzUkbzExJGcxJHQxNzY2MjE1OTIzJGo1OSRsMCRoMA..)`
                                    }} className="item">
                                        <span style={{ color: "#FFF", margin: 8 }}>Hawa Mahal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main2">
                        {/* <img style={{margin:12, borderRadius:12}} src="https://i.etsystatic.com/23853574/r/il/2539ee/3589290679/il_570xN.3589290679_6sx6.jpg?utm_source=chatgpt.com" alt="" /> */}
                        <img style={{width:"100%",marginBottom:100}} src="https://mapacademy.io/wp-content/uploads/2023/05/taj-mahal-pietra-dura-8m.jpg" alt="" />
                    </div>

                    <div className="footer">
                        <div className="content">
                            <h1 className="contextHeading">Taj Mahal</h1>
                            <p className="subheading">Agra, Uttar Pradesh, India</p>
                            <p className="paragraph">
                                Origin and Historical Background of the Taj Mahal

                                The Taj Mahal emerged during the height of the Mughal Empire in the seventeenth century, a period marked by political stability, artistic refinement, and architectural ambition. Commissioned in 1632 CE by Emperor Shah Jahan, the monument was conceived as a royal mausoleum dedicated to Mumtaz Mahal, his chief consort. The project reflected both personal loss and imperial authority, aligning Mughal funerary traditions with Islamic concepts of paradise. Strategically positioned along the River Yamuna, the site symbolized continuity between life, death, and the eternal, while reinforcing Agra’s status as a political and cultural center of the empire.

                                SEO keywords: origin of Taj Mahal, Taj Mahal history, Mughal era architecture, Shah Jahan Mumtaz Mahal


                                Construction and Planning of the Taj Mahal

                                The planning of the Taj Mahal was guided by strict principles of geometry, symmetry, and cosmological alignment. Construction began in 1632 CE under centralized imperial supervision, ensuring uniformity in design and execution. The project required large-scale logistical coordination, including the transport of marble and stone across long distances using river routes and specially constructed ramps. The layout of the complex was finalized before vertical construction began, reflecting a master-planned approach where architecture, landscape, and spatial hierarchy were integrated into a single coherent vision.

                                SEO keywords: Taj Mahal construction, planning of Taj Mahal, Mughal construction techniques, Taj Mahal complex layout


                                Architectural Features and Design of the Taj Mahal

                                Architecturally, the Taj Mahal represents the highest refinement of Mughal aesthetic principles. The structure is defined by its central domed chamber, axial symmetry, and precise proportional balance. Decorative elements include Quranic inscriptions, floral motifs, and geometric patterns executed in pietra dura inlay work. The surrounding structures—mosque, guest house, gateways, and gardens—are arranged to enhance visual harmony and ceremonial movement. Every design element serves both aesthetic and symbolic purposes, reinforcing the monument’s spiritual and visual unity.

                                SEO keywords: Taj Mahal architecture, Mughal design features, pietra dura Taj Mahal, Taj Mahal symmetry


                                Engineering and Structural Excellence of the Taj Mahal

                                The Taj Mahal is also an engineering achievement of exceptional sophistication. Its foundation system employs a series of deep wells filled with stone and mortar to stabilize the structure on riverbank soil. Load distribution is carefully balanced through the use of arches, domes, and layered masonry. The minarets are intentionally inclined outward to reduce structural risk during seismic activity. These engineering solutions reflect advanced knowledge of materials, weight management, and environmental adaptation long before modern structural science.

                                SEO keywords: Taj Mahal engineering, Taj Mahal foundation, earthquake resistant Taj Mahal, Mughal structural techniques


                                Cultural, Political, and Economic Impact of the Taj Mahal

                                Over centuries, the Taj Mahal has evolved from a royal mausoleum into a global cultural icon. Politically, it symbolized Mughal authority and artistic dominance during its time. Culturally, it has influenced architecture, literature, visual art, and popular imagination across continents. Economically, the monument plays a central role in India’s tourism industry, supporting livelihoods and local economies. Its recognition as a UNESCO World Heritage Site further strengthened its role in global heritage conservation discourse.

                                SEO keywords: Taj Mahal cultural impact, Taj Mahal political significance, Taj Mahal tourism economy, UNESCO Taj Mahal


                                Aftereffects and the Fate of Shah Jahan

                                The construction of the Taj Mahal marked both the peak and the turning point of Shah Jahan’s reign. In his later years, internal power struggles led to his deposition by his son Aurangzeb. Shah Jahan spent the final years of his life confined within Agra Fort, separated from the monument he created. After his death in 1666 CE, he was buried beside Mumtaz Mahal inside the mausoleum. This personal conclusion transformed the Taj Mahal into a shared resting place, completing its emotional and historical narrative.

                                SEO keywords: Shah Jahan fate, Shah Jahan imprisonment, Shah Jahan tomb Taj Mahal, Mughal succession history


                                Symbolism and Religious Significance of the Taj Mahal

                                Symbolism lies at the core of the Taj Mahal’s design and purpose. The complex reflects Islamic beliefs in the afterlife, divine justice, and eternal reward. Its garden layout symbolizes paradise, while the central mausoleum represents the throne of God. Quranic inscriptions emphasize themes of resurrection and mercy. The monument’s orientation, spatial hierarchy, and ceremonial approach were designed to guide spiritual contemplation, making the Taj Mahal not only a tomb but a sacred architectural expression of faith and transcendence.

                                SEO keywords: Taj Mahal symbolism, religious significance of Taj Mahal, Islamic architecture Taj Mahal, Taj Mahal paradise concept


                            </p>
                        </div>
                    </div>

                        <div className="threeDContainer">
                            <div className="model">
                                <p className="title">3D MODEL</p>
                                
                                    <TajScene />
                                
                            </div>
                        </div>
                </section>
            </div>
        </>
    )
}

export default Tajmahal
