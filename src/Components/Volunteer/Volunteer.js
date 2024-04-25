import VolunteerCard from "./Volunteercard/Card";
import "./volunteer.css";


function Volunteer(){
    return(
        <div className="cardContainer">
            <div>
                <h3 className="Volunteer">OUR VOLUNTEERS</h3>
                <h1 className="Volunteerdesc">Volunteers Our Precious Assets</h1>
            </div>
            <VolunteerCard/>
        </div>
    )
}
export default Volunteer;