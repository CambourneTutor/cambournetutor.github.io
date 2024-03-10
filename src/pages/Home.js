import React from "react"
import main from '../img/main.jpg'

const Home = () => {
  return (
    <div className='bodyContainer'>
      <div className="bgImg" style={{
        backgroundImage: `url(${main})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>   
      <div className='intro'>
        <h1>Cambourne Piano Tutor</h1>    
        <p> &#10003; Get personalized lessons from a <b>qualified Grade 8 pianist</b></p>
        <p> &#10003; Learning in a comfortable home environment with an <b>modern upright piano</b></p>
        <p> &#10003; <b>Affordable pricing</b> for accessible music education</p>
        <p> &#10003; Suitable for <b>all ages and ability</b> </p>
        <p> &#10003; Local piano tutor based in <b>Cambourne, Cambridge</b></p>
        <p><a href="mailto:cambournepianotutor@gmail.com?subject=Booking Enquiry">Book Now</a></p> 
        <br></br>
        <i> Find an experienced and qualified piano tutor near me in Cambourne, Cambridge. Suitable for all ages to start learning! Lessons from £10 per session.</i>
        
      </div>
     </div>
    </div>
  )
}

export default Home