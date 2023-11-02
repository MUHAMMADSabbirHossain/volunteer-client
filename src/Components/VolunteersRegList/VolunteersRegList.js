import React, { useEffect, useState } from 'react';
import "./VolunteersRegList.css";

const VolunteersRegList = () => {

    const [volunteersRegList, setVolunteersRegList] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/volunteers-detail`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVolunteersRegList(data));
    }, []);


    return (
        <div>
            <h1>volunteersRegList</h1>
            <main>
                <h1>Volunteers Register list</h1>
                <section>
                    <div>
                        <h2>Volunteers register list ({volunteersRegList.length})</h2>
                        <p>Add event</p>
                    </div>

                    <div>

                        <table>
                            <thead>
                                <tr>
                                    <th>_id</th>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Registating date</th>
                                    <th>Volunteer list</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    volunteersRegList.map(volunteerRegList =>
                                        <tr>
                                            <td>{volunteerRegList._id} </td>
                                            <td>{volunteerRegList.fullName}</td>
                                            <td>{volunteerRegList.email}</td>
                                            <td>{volunteerRegList.dateTime}</td>
                                            <td>{volunteerRegList.eventTitle}</td>

                                            {/* <td>{volunteerRegList.description}</td> */}
                                            <td>X</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>

                </section>
            </main>
        </div>
    );
};

export default VolunteersRegList;