import { useEffect, useState } from "react";


const useVolunteersRegList = () => {
    const [volunteersRegList, setVolunteersRegList] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/volunteers-detail`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVolunteersRegList(data));
    }, []);

    return [volunteersRegList, setVolunteersRegList];
};

export default useVolunteersRegList;