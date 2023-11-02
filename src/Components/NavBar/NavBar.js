import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import logo from "../../Resources/logos/Group 1329.png";

const NavBar = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <nav className="sm:flex justify-between px-10">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Volunteer logo" srcset="" width="20%" />
                    </Link>
                </div>

                <div className="">
                    <Link to="/">Home</Link>
                    <Link to="/donation">Donation</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/signin">Signin</Link>
                    <Link to="/admin">Admin</Link>
                    {/* <Link to=""></Link>
                    <Link to=""></Link> */}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;