import React from 'react';
import "./Signin.css";
import logo from "../../Resources/logos/Group 1329.png";
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import googleLogo from "../../Resources/social/Google__G__Logo.svg.png";
import facebookLogo from "../../Resources/social/facebook.png";

const Signin = () => {

    // console.log(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    if (googleError || facebookError) {
        return (
            <div>
                <p>Error: {googleError?.message}</p>
                <p>Error: {facebookError?.message}</p>
            </div>
        );
    }
    if (googleLoading || facebookLoading) {
        return <p>Loading...</p>;
    }
    if (googleUser || facebookUser) {
        navigate("/");
        console.log(googleUser, facebookUser)

        return (
            <div>

            </div>
        );
    };


    return (
        <div>
            <h1>Signin</h1>
            <main>
                <img className="mx-auto my-4 " src={logo} alt="Volunteer logo" sizes="" srcset="" width="25%" />

                <div className="inline-block p-4 border ">
                    <h1 className="my-8 text-2xl font-semibold">Login with</h1>

                    <button className="w-full px-4 py-1 border rounded flex items-center " onClick={() => signInWithGoogle()} type="submit">
                        <img src={googleLogo} alt="Google signin logo" sizes="" srcset="" width="40px" />
                        <span className="px-10 text-gray-500 font-semibold">Continue with Google</span>
                    </button>

                    <br />

                    <button className="w-full px-4 py-1 border rounded flex items-center " onClick={() => signInWithFacebook()} type="submit">
                        <img src={facebookLogo} alt="Facebook signin logo" sizes="" srcset="" width="40px" />
                        <span className="px-10 text-gray-500 font-semibold">Continue with Facebook</span>
                    </button>

                    <div className="py-2">
                        <p className="text-gray-500 font-semibold">Don't have an account? <span className="text-blue-600 font-semibold"><Link to="/signup">Create an account free</Link></span>.</p>
                    </div>
                </div >
            </main >
        </div >
    );
};

export default Signin;