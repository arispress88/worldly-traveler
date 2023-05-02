import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations/create">Add Your Location</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/links">Helpful Links</Link>
            </li>
            {
                localStorage.getItem("worldly_user")
                ? <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("worldly_user")
                        navigate("/", {replace: true})
                    }}>Logout</Link>
                </li>
                : ""
            }
        </ul>
    )

}