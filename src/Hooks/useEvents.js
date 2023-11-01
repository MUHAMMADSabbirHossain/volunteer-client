import { useEffect, useState } from 'react';

const useEvents = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/volunteers`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);
    return [events, setEvents];
};

export default useEvents;