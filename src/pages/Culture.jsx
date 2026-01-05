import React, { useEffect, useState } from 'react'
import Navbar from '../components/navigation/Navbar'
import SideBar from '../components/navigation/SideBar'
import "./styles/heritage.css"

// const images = [
//     "https://images.unsplash.com/photo-1604079628040-94301bb21b91",
//     "https://images.unsplash.com/photo-1548013146-72479768bada",
//     "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1",
//     "https://theroamingshoes.com/wp-content/uploads/2023/08/DSC_0631.jpg",
//     "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
//     "https://images.unsplash.com/photo-1545156521-77bd85671d30",
//     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//     "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
//     "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
//     "https://theroamingshoes.com/wp-content/uploads/2023/08/DSC_0631.jpg",
//     "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
//     "https://images.unsplash.com/photo-1545156521-77bd85671d30",
//     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
// ]

 


const Culture = () => {
       const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/json/Culture.json")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div>
       <Navbar backgroundColor="#FAFAFA" border="1px solid #E4E4E7"/>
            <SideBar />
           
            <div className="culture-content">
                <div style={{position:"relative",top:700}}  className="masonry">
                    {data.map((item) => (
                        <>
                        <div className="masonry-item" key={item.id}>
                            <img src={item.url} alt="" />
                            
                        </div>
                        <p style={{color:"#000",position:"relative",bottom:20,fontSize:22}}>{item.name}</p>
                        </>
                    ))}
                </div>
            </div>
             
        </div>
    )
}

export default Culture
