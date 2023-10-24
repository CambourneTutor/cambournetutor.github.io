import React from "react"
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import "../css/BookingDetail.css"

const booking = () => {
    return (
        <>
            <div className="bookingDetail">
                <h2>Please include these answers in the booking</h2>
                <div className="questionList">
                    <ol>&#10003; Your mobile number</ol>
                    <ol>&#10003; Your children name and age</ol>
                    <ol>&#10003; Piano current grade</ol>
                </div>
                <div className='contactPhone'>
                    <BsTelephoneFill />
                    <h4>07960 482 002</h4>
                </div>
                <div className='contactEmail'>
                    <MdOutlineEmail />
                    <h4>
                        <a href="mailto:cambournepianotutor@gmail.com?subject=Booking Enquiry">cambournepianotutor@gmail.com</a>
                    </h4>
                </div>
            </div>
        </>
    )
}
export default booking;