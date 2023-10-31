import React from 'react';
import "./Signin.css";
import logo from "../../Resources/logos/Group 1329.png";
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div>
            <h1>Signin</h1>
            <main>
                <img src={logo} alt="Volunteer logo" sizes="" srcset="" />

                <div>
                    <h1>Login with</h1>
                    <div>
                        <img src="" alt="Google signin logo" sizes="" srcset="" />
                        <p>Continue with Google</p>
                    </div>
                    <div>
                        <p>Don't have an account? <span><Link to="/signup">Create an account free</Link></span>.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Signin;