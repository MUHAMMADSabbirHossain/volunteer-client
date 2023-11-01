import React from 'react';
import "./Home.css";
import useEvents from '../../Hooks/useEvents';

const Home = () => {

    const [events, setEvents] = useEvents();

    return (
        <div>
            <h1>Home</h1>
            <main>
                <h1>I grow by helping people in need.</h1>

                <form action="">
                    <input type="text" name="searchEvents" id="" placeholder="Serach events... " />
                    <button type="submit">Search</button>
                </form>

                <h2>Search Results ({events.length})</h2>

                {
                    events.map(event =>
                        <div key={event._id}>ad
                            <img src={event.bannerLink} alt="" srcset="" />
                            <p>{event.title}</p>
                        </div>
                    )
                }



            </main>
        </div>
    );
};

export default Home;