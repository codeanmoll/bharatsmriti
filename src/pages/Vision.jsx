import React from 'react';
import SideBar from '../components/navigation/SideBar';
import Navbar from '../components/navigation/Navbar';
import "./styles/vision.css"

const Vision = () => {
    return (
        <div>
            <SideBar />
            <Navbar backgroundColor="#FAFAFA" border="1px solid #E4E4E7" />
            <div className="vision">
                <h1>Incidents Changes our Vision</h1>
                <div style={{
                    backgroundImage:
                        `   linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),
        url(https://encyclopedia.pub/media/common/202504/jallianwala_bagh_massacre_day-67fbd030bf7df.jpg)`
                }} className="item">
                    <div>
                        <span>The Jallianwala Bagh Massacre </span>
                        <span>Location: Jallianwala Bagh, a public garden in Amritsar, Punjab.</span>
                        <span>People had gathered to celebrate the Baisakhi festival and to peacefully protest the Rowlatt Act, which allowed for imprisonment without trial.</span>
                    </div>
                </div>

                <div style={{
                    backgroundImage:
                        `   linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),
        url(https://www.allindiansmatter.in/wp-content/uploads/2020/11/Cover-Non-Cooperation-Movement-1.jpeg)`
                }} className="item">
                    <div>
                        <span>The Non-Cooperation Movement </span>
                        <span>A repressive law allowing the government to imprison political activists without trial for up to two years.</span>
                        <span> High taxes, soaring prices, and food shortages after the war caused widespread distress</span>
                    </div>
                </div>


                <div style={{
                    backgroundImage:
                        `   linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),
        url(https://img.jagranjosh.com/images/2022/August/1282022/compress_INM.webp)`
                }} className="item">
                    <div>
                        <span>India gained independence from British</span>
                        <span> August 15, 1947</span>
                        <span>This historic achievement was the result of a century-long struggle involving diverse movements, from armed revolts to large-scale non-violent resistance. </span>
                    </div>
                </div>


                <div style={{
                    backgroundImage:
                        `   linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),
        url(https://media.istockphoto.com/id/1821767361/photo/mohenjo-daro-ruins-close-indus-river-in-larkana-district-sindh-pakistan.jpg?s=612x612&w=0&k=20&c=f4RyYafTEy9bYiAK6hqHTsBsZqxcnZQr-jSheAzR_dc=)`
                }} className="item">
                    <div>
                        <span>Indus Valley Civilization</span>
                        <span>the Harappan Civilization</span>
                        <span> it was one of the three earliest cradles of civilization alongside Egypt and Mesopotamia, and the most extensive in terms of geographical area.  </span>
                    </div>
                </div>



                <div style={{
                    backgroundImage:
                        `   linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),
        url(https://www.clearias.com/up/Officers-During-the-Vedic-Period.jpg)`
                }} className="item">
                    <div>
                        <span>The Vedic Period (c. 1500 – 600 BCE)</span>
                        <span> ancient Indian history following the decline of the Indus Valley Civilization.</span>
                        <span>Society: Primarily tribal and egalitarian. The family (kula) was the basic unit, led by a kulapa. Society was patriarchal but women held a respectable position, participated in assemblies, and composed hymns (e.g., Lopamudra).</span>
                    </div>
                </div>









            </div>

        </div>
    )
}
export default Vision;
