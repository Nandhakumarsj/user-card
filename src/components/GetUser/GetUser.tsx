import React, { useState } from "react";
import User from "../User/User.tsx";
import './GetUser.css';
import Loader from "../Loader/Loader.tsx";
import NoImage from "../assets/NoImage.jpg"

export default function GetUser(props) {
    const [load, setLoad] = useState(false);
    const [users, setUsers] = useState([{id:2004,first_name : "Nandhakumar",last_name : "S J",email : "excelnandhu@gmail.com",avatar : NoImage}]);
    // To use load the users
    const setUserHandler = async () => {
                    const ran = Math.floor(Math.random()*3);
                    await fetch(`https://reqres.in/api/users?page=${ran}`).then((res) => {
                        res.json().then((users: any) => {setUsers(users.data)
                            setLoad(false);
                        });
                    },
                    (reject)=>{
                        setLoad(true);
                    }
                    );
                }
                
    return (
        <div className="body">
            <div className="nav-bar">
                <nav className="nav-brand" onClick={()=>{window.open('#nandhakumar', '_top')}}> Random User Generator </nav>
                <nav className="nav" onClick={async(e)=>{await setLoad(true);await setUserHandler();}}>
                    Get Users
                </nav>
            </div>
            {!load && users ?
            <div className="user-cards">
                {users.map((user) => <User key={user.id + 4} avatar={user.avatar} email={user.email} first_name={user.first_name} last_name={user.last_name} />)}
            </div>
            : <Loader />
}
        </div>
)
};