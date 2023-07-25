import React, { useEffect, useState } from "react";
import User from "./User.tsx";
import './GetUser.css';

export default function GetUser(props) {
    const [users, setUsers] = useState([{}]);
    useEffect(
        () => {
            const y = async () => {
                await fetch("https://reqres.in/api/users?page=1").then((res) => {
                    res.json().then((users:any) => setUsers(users.data))
                }
                );
            }
            y();
        },
        []
    );

    return(
        <div>
            <div className="nav-bar">
                <nav> Brand </nav>
        <nav>
            Get Users
        </nav>
            </div>
        <div className="user-cards">
                {users.map((user)=><User key={user.id+4} avatar = {user.avatar} email={user.email} first_name={user.first_name} last_name = {user.last_name}/>)}
        </div>
        </div>
    )
};