import React from 'react';
import "./Signin.css";
import logo from "../../Resources/logos/Group 1329.png";
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const Signin = () => {

    // console.log(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (googleError) {
        return (
            <div>
                <p>Error: {googleError.message}</p>
            </div>
        );
    }
    if (googleLoading) {
        return <p>Loading...</p>;
    }
    if (googleUser) {
        navigate("/");

        // return (
        //     <div>
        //         <p>Signed In User: {googleUser.email}</p>
        //         <p>{googleUser.user.displayName}</p>
        //         <img src={googleUser.user.photoURL} alt="" sizes="" srcset="" />
        //         {console.log(googleUser)}
        //     </div>
        // );
    };


    return (
        <div>
            <h1>Signin</h1>
            <main>
                <img src={logo} alt="Volunteer logo" sizes="" srcset="" />

                <div>
                    <h1>Login with</h1>
                    <button onClick={() => signInWithGoogle()} type="submit">
                        <img src="" alt="Google signin logo" sizes="" srcset="" />
                        <p>Continue with Google</p>
                    </button>
                    <div>
                        <p>Don't have an account? <span><Link to="/signup">Create an account free</Link></span>.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Signin;