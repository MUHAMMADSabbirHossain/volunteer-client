import React from 'react';
import "./AddEvent.css";

const AddEvent = () => {

    const handleAddEventForm = event => {
        event.preventDefault();

        const title = event.target.eventTitle.value;
        const date = event.target.eventDate.value;
        const description = event.target.eventDescription.value;
        const bannerLink = event.target.eventBanner.value;

        console.log(title, date, description, bannerLink);

        const addEvent = { title, date, description, bannerLink };

        const url = `http://localhost:5000/volunteers`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addEvent)
        })
            .then(res => res.json())
            .then(result => console.log(result));
    };


    return (
        <div>
            <h1>AddEvent</h1>
            <main>
                <h1>Add event</h1>

                <section>

                    <div>
                        <h2>Volunteers register list</h2>
                        <p>Add event</p>
                    </div>
                    <div>

                        <form className=" flex flex-col px-60" onSubmit={handleAddEventForm} action="">

                            <label class="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" htmlFor="eventTitle">Event Title: </label>
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" name="eventTitle" id="" placeholder="Enter title" />

                            <label class="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" htmlFor="eventDate">Event Date: </label>
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="datetime-local" name="eventDate" id="" />


                            <label class="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" htmlFor="eventDescription">Description: </label>
                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" name="eventDescription" id="" cols="30" rows="5" placeholder="Enter designation"></textarea>

                            <label class="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4" htmlFor="EventBanner">Banner: </label>
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" name="eventBanner" id="" placeholder="Banner links" />

                            <br />

                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AddEvent;