import { useEffect, useState } from "react";

const useSelectedEvent = (eventId) => {
    const [selectedEvent, setSelectedEvent] = useState([]);
    const url = `http://localhost:5000/register-as-volunteer/${eventId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedEvent(data));
    }, []);
    // console.log(selectedEvent);
    return [selectedEvent, setSelectedEvent];
};

export default useSelectedEvent;