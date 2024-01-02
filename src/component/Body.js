import React from "react"
import Detail from "./Detail";

const mainBody = ({ show, bgImg, classType, titleText}) => {
  return (
    <>
        <div className="text-on-image">
          <div className="bgImg" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <p className={classType}>{titleText}</p>
          </div>
          
        </div> 
        <div><Detail show={show} /></div>
    </>
  )
}

export default mainBody