import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginPopup from "../LoginPopup/LoginPopup";
import "./Navbar.css";

function Navbar() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="logo">LearnHub</div>

                <ul className="nav-links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/courses">Courses</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>

                <button onClick={() => setShowLogin(true)}>Login</button>
            </nav>

            {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
        </>
    );
}

export default Navbar;