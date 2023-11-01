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

                        <form onSubmit={handleAddEventForm} action="">

                            <label htmlFor="eventTitle">Event Title: </label>
                            <input type="text" name="eventTitle" id="" placeholder="Enter title" />

                            <label htmlFor="eventDate">Event Date: </label>
                            <input type="datetime-local" name="eventDate" id="" />

                            <label htmlFor="eventDescription">Description</label>
                            <textarea name="eventDescription" id="" cols="30" rows="10" placeholder="Enter designation"></textarea>

                            <label htmlFor="EventBanner">Banner: </label>
                            <input type="text" name="eventBanner" id="" placeholder="Banner links" />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AddEvent;