import "../css/japfood.css"
import JapFoodMenu from "./JapFoodMenu.js"
import JapfoodContent from "./JapfoodContent.js"
import Booking from "./Booking.js"
import React from 'react';

function JapFood() {
    return <div>
        
        <JapFoodMenu home="Home" about="About Us" menu="Our Menu" contact="Contact Us"/>
        <Booking/>
        <JapfoodContent/>
    </div>
}

export default JapFood;