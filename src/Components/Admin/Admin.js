import React from 'react';
import VolunteersRegList from '../VolunteersRegList/VolunteersRegList';
import AddEvent from '../AddEvent/AddEvent';
import { Link, Route } from 'react-router-dom';
import logo from "../../Resources/logos/Group 1329.png";

const Admin = () => {
    return (
        <div>
            <h1>Admin</h1>

            <main>
                <section>

                    <img src={logo} alt="" sizes="" srcset="" />

                    <Link to="/admin/volunteers-register-list">Volunteer registers list</Link>
                    <Link to="/admin/add-event">+ Add event</Link>
                </section>

                <section>
                    <AddEvent></AddEvent>
                    <VolunteersRegList></VolunteersRegList>
                </section>
            </main>

        </div>
    );
};

export default Admin;