import "./japfood.css"
import JapFoodMenu from "./JapFoodMenu.js"

function JapFood () {
    return <div>
        <JapFoodMenu/>
            <section id="hero">
            <div id="cta">
                <a href="#">
                Make a Booking
                </a>
            </div>
            </section>

            <section id="about-us">
            <div className="content">
                <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
            </div>
            </section>
        </div>

}

export default JapFood;