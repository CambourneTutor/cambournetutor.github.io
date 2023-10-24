import React from "react"
import main from '../img/main.jpg'

const Home = () => {
  return (
    <div class='bodyContainer'>
      <div className="bgImg" style={{
        backgroundImage: `url(${main})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>    
      <div className='intro'>
        <h1>Cambourne Piano Tutor</h1>    
        <p> &#10003; Personalized lessons from a Grade 7 pianist</p>
        <p> &#10003; Learning in a comfortable home environment with an modern upright piano</p>
        <p> &#10003; Affordable pricing for accessible music education</p>
        <p> &#10003; Patient and tailored instruction to nurture young talents</p>
        <p> &#10003; Inspiring, educational, and convenient music lessons at home</p>
        <p><a href="mailto:cambournepianotutor@gmail.com?subject=Booking Enquiry">Book Now</a></p> 
      </div>
     </div>
    </div>
  )
}

export default Home