import React from 'react';
import "./Home.css";
import useEvents from '../../Hooks/useEvents';
import { Link } from 'react-router-dom';

const Home = () => {

    const [events, setEvents] = useEvents();

    const handleRegEvent = event => {
        // console.log(event);
    };

    return (
        <div>
            <h1>Home</h1>
            <main>
                <h1 className="uppercase text-2xl font-semibold my-6 sm:text-4xl md:text-5xl">I grow by helping people in need.</h1>

                <form action="">
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-6 sm:w-80" type="text" name="searchEvents" id="" placeholder="Serach events... " />

                    <button className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 " type="submit">Search</button>
                </form>

                <h2>Search Results: ({events.length})</h2>

                <section className="flex flex-wrap justify-middle">
                    {
                        events.map(event =>
                            <div onClick={() => handleRegEvent(event._id)} className="mx-auto my-6 inline " key={event._id}>

                                <Link to={`/register-as-volunteer/${event._id}`}>

                                    <img src={event.bannerLink} alt="" srcset="" width="300px" />

                                    <p className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-3 rounded items-center">{event.title}</p>
                                </Link>
                            </div>
                        )
                    }
                </section>

            </main>
        </div>
    );
};

export default Home;