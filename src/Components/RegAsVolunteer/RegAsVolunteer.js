import React from 'react';
import "./RegAsVolunteer";
import logo from "../../Resources/logos/Group 1329.png";

const RegAsVolunteer = () => {

    // register as a volunteer
    const handleVolunteerForm = event => {
        event.preventDefault();

        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const dateTime = event.target.dateTime.value;
        const description = event.target.description.value;
        const eventTitle = event.target.eventTitle.value;

        console.log(fullName, email, dateTime, description, eventTitle);

        const volunteerDetails = { fullName, email, dateTime, description, eventTitle };

        //post
        const url = `http://localhost:5000/volunteers-detail`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(volunteerDetails)
        })
            .then(res => res.json())
            .then(result => console.log(result));
    };


    return (
        <div>
            <h1>RegAsVolunteer</h1>

            <main>
                <img src={logo} alt="" sizes="" srcset="" />

                <div>
                    <h1>Register as a Volunteer</h1>

                    <form onSubmit={handleVolunteerForm} action="">
                        <label htmlFor="fullName">Full Name: </label>
                        <input type="text" name="fullName" id="" />

                        <label htmlFor="email">Username or Email: </label>
                        <input type="text" name="email" id="" />

                        <label htmlFor="dateTime">Date and Time: </label>
                        <input type="datetime-local" name="dateTime" id="" />

                        <label htmlFor="description">Description: </label>
                        <textarea name="description" id="" cols="30" rows="10"></textarea>

                        <label htmlFor="eventTitle">Event Title: </label>
                        <input type="text" name="eventTitle" id="" />

                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default RegAsVolunteer;