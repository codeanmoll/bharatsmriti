import React, { useEffect, useState } from 'react'
import "./styles/explore.css"
import Card from '../components/Explore/Card'
import ArtCard from '../components/Explore/ArtCard';
import "../components/navigation/navigation.css"
import Navbar from '../components/navigation/Navbar';
import SideBar from '../components/navigation/SideBar';
import Ai from '../components/ai/ai';

const Explore = () => {

    //india monuments
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/json/indiaMonument.json")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, []);


    //world monuments
    const [Worlddata, setWorldData] = useState([]);

    useEffect(() => {
        fetch("/json/worldMonument.json")
            .then((res) => res.json())
            .then((json) => setWorldData(json))
            .catch((err) => console.error(err));
    }, []);


    //up monuments
    const [up, setupdData] = useState([]);

    useEffect(() => {
        fetch("/json/uttarpradesh.json")
            .then((res) => res.json())
            .then((json) => setupdData(json))
            .catch((err) => console.error(err));
    }, []);


    //delhi monuments
    const [delhi, setdelhiData] = useState([]);

    useEffect(() => {
        fetch("/json/delhi.json")
            .then((res) => res.json())
            .then((json) => setdelhiData(json))
            .catch((err) => console.error(err));
    }, []);


    //rajasthan monuments
    const [rajasthan, setrajasthanData] = useState([]);

    useEffect(() => {
        fetch("/json/rajasthan.json")
            .then((res) => res.json())
            .then((json) => setrajasthanData(json))
            .catch((err) => console.error(err));
    }, []);



    //punjab monuments
    const [punjab, setpunjabData] = useState([]);

    useEffect(() => {
        fetch("/json/punjab.json")
            .then((res) => res.json())
            .then((json) => setpunjabData(json))
            .catch((err) => console.error(err));
    }, []);



    //kashmir monuments
    const [kashmir, setkashmirData] = useState([]);

    useEffect(() => {
        fetch("/json/kashmir.json")
            .then((res) => res.json())
            .then((json) => setkashmirData(json))
            .catch((err) => console.error(err));
    }, []);


    //kerala monuments
    const [kerala, setkeralaData] = useState([]);

    useEffect(() => {
        fetch("/json/kerala.json")
            .then((res) => res.json())
            .then((json) => setkeralaData(json))
            .catch((err) => console.error(err));
    }, []);


    //arts
    const [Arts, setArtsData] = useState([]);

    useEffect(() => {
        fetch("/json/Arts.json")
            .then((res) => res.json())
            .then((json) => setArtsData(json))
            .catch((err) => console.error(err));
    }, []);







    return (
<>

   <Navbar backgroundColor="#FAFAFA" border="1px solid #E4E4E7"/>

        <div className='bg-accent'>
          
            <SideBar />
            <div className='Explore'>

                <section>
                    <div className="header">
                        <img src="/explore/slide-1.png" alt="" />
                    </div>
                    <div className="main" style={{marginTop:-40}}>


                        <p className='subHeading'>Discover India’s Timeless Wonders</p>
                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {data.map((item) => (<Card data={item} />))}
                        </div>

                        <p className='subHeading'>Journey Through the Wonders of World</p>
                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {Worlddata.map((item) => (<Card data={item} />))}
                        </div>

                        <p className='subHeading'>Discover Uttar Pradesh Timeless Wonders</p>
                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {up.map((item) => (<Card data={item} />))}
                        </div>


                        <p className='subHeading'>Historic Landmarks of the National Capital</p>
                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {delhi.map((item) => (<Card data={item} />))}
                        </div>


                        <p className='subHeading'>Royal Forts and Palaces of Rajasthan</p>
                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {rajasthan.map((item) => (<Card data={item} />))}
                        </div>


                        <p className='subHeading'>Cultural and Spiritual Heritage of Punjab</p>
                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {punjab.map((item) => (<Card data={item} />))}
                        </div>


                        <p className='subHeading'>Timeless Wonders of Kashmir</p>
                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {kashmir.map((item) => (<Card data={item} />))}
                        </div>


                        <p className='subHeading'>Cultural and Natural Wonders of Kerala</p>
                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {kerala.map((item) => (<Card data={item} />))}
                        </div>

                        <p className='subHeading'>ancient Indian culture paintings</p>

                         <div style={{ display: "flex", overflowX: "scroll" ,}}>
                        {Arts.map((item) => (
                            <ArtCard data={item} />
                        ))}
                        </div>
                    </div>
                </section>

            </div>

        </div>
   </>

    )
}

export default Explore
