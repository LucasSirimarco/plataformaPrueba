import "./navBar.css"
import { Link } from "react-router-dom"


const NavBar = ()=>{

    return(
        <div className="container navBar">
            <Link className="links" to="/login">Login</Link>
            <Link className="links" to="/register">Register</Link>
        </div>
    )
}

export default NavBar