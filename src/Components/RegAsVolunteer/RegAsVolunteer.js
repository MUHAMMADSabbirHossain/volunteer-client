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
                <img className="mx-auto my-10 " src={logo} alt="" sizes="" srcset="" width="25%" />

                <h1 className="text-2xl text-blue-500 sm:text-4xl">Register as a Volunteer</h1>

                <div class="inline-block border-2 border-gray-200 rounded  py-4 px-8 my-6">

                    <form onSubmit={handleVolunteerForm} action="">
                        <label className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" for="grid-first-name" htmlFor="fullName">Full Name: </label>
                        <input className=" appearance-none block w-80 bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="fullName" id="" />

                        <label className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" for="grid-first-name" htmlFor="email">Username or Email: </label>
                        <input className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="email" id="" />

                        <label className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" for="grid-first-name" htmlFor="dateTime">Date and Time: </label>
                        <input className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="datetime-local" name="dateTime" id="" />

                        <label className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" for="grid-first-name" htmlFor="description">Description: </label>
                        <textarea className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="description" id="" cols="30" rows="5"></textarea>

                        <label className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" for="grid-first-name" htmlFor="eventTitle">Event Title: </label>
                        <input className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="eventTitle" id="" />

                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" >Submit</button>
                    </form>
                </div>
            </main >
        </div >
    );
};

export default RegAsVolunteer;