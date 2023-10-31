import React from 'react';
import "./RegAsVolunteer";
import logo from "../../Resources/logos/Group 1329.png";

const RegAsVolunteer = () => {
    return (
        <div>
            <h1>RegAsVolunteer</h1>

            <main>
                <img src={logo} alt="" sizes="" srcset="" />

                <div>
                    <h1>Register as a Volunteer</h1>

                    <label htmlFor="fullName">Full Name: </label>
                    <input type="text" name="fullName" id="" />

                    <label htmlFor="email">Username or Email: </label>
                    <input type="text" name="email" id="" />

                    <label htmlFor="dateTime">Date and Time: </label>
                    <input type="datetime-local" name="dateTime" id="" />

                    <label htmlFor="description">Description: </label>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>

                    <label htmlFor="eventName">Event Name: </label>
                    <input type="text" name="eventName" id="" />

                    <button type="submit" >Submit</button>
                </div>
            </main>
        </div>
    );
};

export default RegAsVolunteer;