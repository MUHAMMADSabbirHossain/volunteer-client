import React from 'react';
import VolunteersRegList from '../VolunteersRegList/VolunteersRegList';
import AddEvent from '../AddEvent/AddEvent';
import { Link, Route } from 'react-router-dom';
import logo from "../../Resources/logos/Group 1329.png";

const Admin = () => {
    return (
        <div>
            <h1>Admin</h1>

            <main className="grid lg:grid-cols-6 ">
                <section className="">

                    <img className="mx-auto px-4 my-2" src={logo} alt="" sizes="" srcset="" />

                    <Link className="font-semibold my-2 inline-block" to="/admin/volunteers-register-list">Volunteer registers list</Link>
                    <Link className="font-semibold my-2 inline-block" to="/admin/add-event"><span className="text-xl font-bold">+</span>Add event</Link>
                </section>

                <section className="lg:col-span-5">
                    <AddEvent></AddEvent>
                    <VolunteersRegList></VolunteersRegList>
                </section>
            </main>

        </div>
    );
};

export default Admin;