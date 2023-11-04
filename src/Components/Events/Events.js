import React from 'react';
import useVolunteersRegList from '../../Hooks/useVolunteersRegList';
import useEvents from '../../Hooks/useEvents';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Events = () => {

    const [volunteersRegList, setVolunteersRegList] = useVolunteersRegList();
    const user = useAuthState(auth);
    const [events, setEvents] = useEvents();
    // console.log(user[0]?.displayName, volunteersRegList, events);

    const userName = volunteersRegList.filter(volunteer => volunteer.fullName === user[0]?.displayName);
    // console.log(userName);
    console.log(userName, events)


    let allSelectedEvents = [];
    for (let i = 1; i < user.length; i++) {
        console.log(i);
        allSelectedEvents = events.filter(event => event.eventTitle === user.eventTitle)
    }

    console.log(events, allSelectedEvents);


    return (
        <div>
            <h1>Events</h1>

            <main>
                <h1>Event Tasks</h1>

                <section className="flex flex-wrap">
                    {
                        allSelectedEvents.map(event =>
                            <div className="m-4 font-semibold shadow-lg p-2 grid sm:grid-cols-2">
                                <img src={event.bannerLink} alt="Event logo" sizes="" srcset="" width="200px" />
                                <div className="my-auto">
                                    <h2 className="text-gray-500">{event.title}</h2>
                                    <p className="">{event.date}</p>
                                    <button className="bg-red-500 px-3 py-1 text-white rounded" type="submit">Cancel</button>
                                </div>
                            </div>
                        )
                    }

                </section>
            </main>
        </div>
    );
};

export default Events;