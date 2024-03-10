import React from "react"

import '../css/LocationDetail.css'

const sitemap = () => {
    return (
        <>
            <div className='locationDetail'>
               <h2>We cover the following areas around Cambourne, Cambridge CB23 area &nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:cambournepianotutor@gmail.com?subject=Booking Enquiry">Book Now</a></h2> 
                <table>
                    <tbody>
                        <tr>
                            <td><b>Cambridge</b></td>
                            <td><b>Cambourne</b></td>
                            <td>Caxton</td>
                            <td>Caldecote</td>
                        </tr>
                        <tr>
                            <td>Dry Drayton</td>
                            <td>Hardwick</td>
                            <td>Coton</td>
                            <td>Madingley</td>
                        </tr>
                         <tr>
                            <td>Barton</td>
                            <td>Knapwell</td>
                            <td>Comberton</td>
                            <td>Kingston</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default sitemap;