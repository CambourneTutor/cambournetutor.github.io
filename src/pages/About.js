import React from 'react'
import aboutImg from '../img/about.jpg'

import Body from '../component/Body'
import Footer from '../component/Footer'

export default class About extends React.Component {
  render() {
    return (
      <div className='container'>
        
        <Body show='About' bgImg={aboutImg} classType="aboutimagetext" titleText="ABOUT"/>
        <Footer />
        
      </div>
      
    )
  }
}
