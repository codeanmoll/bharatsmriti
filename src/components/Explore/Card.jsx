import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Card = ({ data }) => {


  //
  return (
<Link to={data.linkUrl}>
    <div className="MonumentsCard">
      <div style={{
        backgroundImage:
          `   linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),
        url(${data.url})`
      }} className="MonumentsImg">
        <div className="aboutMonuments">
          <div style={{display:"grid",margin:12,width:150,marginRight:0}}>
          <span className='Monumentstitle'>{data.name}</span>
          <span style={{fontSize:12,fontWeight:400,margintop:0}}>{data.place}</span>
          </div>
          <button className='explore-btn'>Explore</button>
        </div>
      </div>
    </div>
</Link>



  )
}

export default Card
