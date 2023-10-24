import React from "react"

import '../css/FeesDetail.css'

const FeeDetails =() => {
    
    const email = "mailto:cambournepianotutor@gmail.com?subject=Booking Enquiry"
    
    return (
        <div className='priceDiv'>
            <table className='priceDetail'>
                <thead>
                    <tr><th>Type</th><th>Duration</th><th>Price</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>Beginner</td><td>30 mins</td><td>£10</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Grade 1-4</td><td>30 mins</td><td>£15</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Grade 1-4</td><td>60 mins</td><td>£25</td><td><button><a href={email}>Book</a></button></td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default FeeDetails