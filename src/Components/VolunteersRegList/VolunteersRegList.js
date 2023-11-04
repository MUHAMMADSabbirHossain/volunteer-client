import React from 'react';
import "./VolunteersRegList.css";
import useVolunteersRegList from '../../Hooks/useVolunteersRegList';
import trash from "../../Resources/logos/trash-2 9.png";

const VolunteersRegList = () => {

    const [volunteersRegList, setVolunteersRegList] = useVolunteersRegList();
    // console.log(volunteersRegList);

    return (
        <div>
            <h1>volunteersRegList</h1>
            <main>
                <h1>Volunteers Register list</h1>
                <section>
                    <div>
                        <h2>Volunteers: ({volunteersRegList.length})</h2>
                        <p>Add event</p>
                    </div>

                    <div className="">

                        <table className="table-auto m-auto text-center text-sm ">
                            <thead className="border-b bg-gray-100 dark:border-neutral-500 rounded">
                                <tr>
                                    {/* <th>_id</th> */}
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Email ID</th>
                                    <th className="px-6 py-4">Registating date</th>
                                    <th className="px-6 py-4">Volunteer list</th>
                                    <th className="px-6 py-4">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    volunteersRegList.map(volunteerRegList =>
                                        <tr className="border-b dark:border-neutral-500">
                                            {/* <td>{volunteerRegList._id} </td> */}
                                            <td className="whitespace-nowrap px-6 py-4">{volunteerRegList.fullName}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{volunteerRegList.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{volunteerRegList.dateTime}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{volunteerRegList.eventTitle}</td>

                                            {/* <td>{volunteerRegList.description}</td> */}
                                            <td>
                                                <img className="bg-red-500 rounded mx-auto" src={trash} alt="" sizes="" srcset="" width="40px" />
                                            </td>
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