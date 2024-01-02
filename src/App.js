import React from "react"
import { Link, Outlet } from "react-router-dom";
import Logo from './img/logo.png'

import AboutButton from "./component/AboutButton";
import LocationButton from "./component/LocationButton";
import FeesButton from "./component/FeesButton";
import BookingButton from "./component/BookingButton";
import BlogButton from "./component/BlogButton";

const app = () => {
  return (
    <>
      <nav className="header">
        <Link to="/"><img src={Logo} className="img" alt="Cambourne Piano Tutor" /></Link>
        <div className="buttonGroup"><Link to="/About"><AboutButton /></Link>
          <Link to="/Location"><LocationButton /></Link>
          <Link to="/Fees"><FeesButton /></Link>
          <Link to="/Booking"><BookingButton /></Link>
          <Link to="/Blog"><BlogButton /></Link>
          <button className="buttonPhone"><a href="tel:07960 482002">07960 482002</a></button>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default app 