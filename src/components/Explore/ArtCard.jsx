import React from 'react'
import "../../pages/styles/explore.css"
const ArtCard = ({data}) => {
  return (
     
      <div style={{
        backgroundImage:
          `   linear-gradient(to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)),
        url(${data.url})`,
      }} className="ArtImg">
        <div className="aboutMonuments">
          <div style={{display:"grid",margin:12,width:150,marginRight:0}}>
          <span className='Monumentstitle'>{data.name}</span>
          <span style={{fontSize:12,fontWeight:400,margintop:0}}>1. {data.description.first}</span>
          <span style={{fontSize:12,fontWeight:400,margintop:0}}>2. {data.description.second}</span>
          <span style={{fontSize:12,fontWeight:400,margintop:0}}>3. {data.description.third}</span>
          <span style={{fontSize:12,fontWeight:400,margintop:0}}>4. {data.description.fourth}</span>
          
          </div>
        
        </div>
      </div>
   

  )
}

export default ArtCard
