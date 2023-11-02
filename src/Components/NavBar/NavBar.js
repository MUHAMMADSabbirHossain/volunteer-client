import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import logo from "../../Resources/logos/Group 1329.png";

const NavBar = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <nav className="font-semibold justify-around sm:flex">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Volunteer logo" srcset="" width="25%" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row">
                    <Link className="mx-1 px-1" to="/">Home</Link>
                    <Link className="mx-1 px-1" to="/donation">Donation</Link>
                    <Link className="mx-1 px-1" to="/events">Events</Link>
                    <Link className="mx-1 px-1" to="/blogs">Blogs</Link>
                    <Link className="mx-1 px-1" to="/signin">Signin</Link>
                    <Link className="mx-1 px-1" to="/admin">Admin</Link>
                    {/* <Link to=""></Link>
                    <Link to=""></Link> */}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;