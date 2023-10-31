import React from 'react';
import "./AddEvent.css";

const AddEvent = () => {
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

                        <form action="">

                            <label htmlFor="eventTitle">Event Title: </label>
                            <input type="text" name="eventTitle" id="" placeholder="Enter title" />

                            <label htmlFor="eventDate">Event Date: </label>
                            <input type="datetime-local" name="eventDate" id="" />

                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="" cols="30" rows="10" placeholder="Enter designation"></textarea>

                            <label htmlFor="banner">Banner: </label>
                            <input type="text" name="banner" id="" placeholder="Banner links" />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AddEvent;