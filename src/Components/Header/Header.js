import { NavLink } from "react-router-dom";
import Button from "./Button/Button";

import "./Header.css";

function Header(){
    return(
        <div className="navbarposition">
            <div className="HeaderContainer1">
                <div className="continer">
                    <img className="Headerlogo" src="https://dignityofnoble.org/logo/logo2.png" alt="Header logo"/>
                </div>

            <nav>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div className="firstpart">
                        <NavLink to="/Home" className="navLink"><h1 className="clickabledetails">Home</h1></NavLink>
                        <NavLink to = "/About" className="navLink"><h1 className="clickabledetails">About</h1></NavLink>
                        <NavLink to="/Volunteer" className="navLink"><h1 className="clickabledetails">Volunteers</h1></NavLink>
                        <NavLink to = "/Testnomials" className="navLink"><h1 className="clickabledetails">Testnomials</h1></NavLink>
                        <NavLink to = "/News&Blogs" className="navLink"><h1 className="clickabledetails">News&Blogs</h1></NavLink>
                        <NavLink to="/Contact" className="navLink"><h1 className="clickabledetails">Contact Us</h1></NavLink>
                        <NavLink to = "/FAQ" className="navLink"><h1 className="clickabledetails">FAQ</h1></NavLink>
                    </div>
                    {/* <div><Button color="primary" className="NavButton">Lets Connect</Button></div> */}
                    <div>
                        <Button/>
                    </div>
                </div>
            </nav>
                </div>
        </div>
    )
}
export default Header