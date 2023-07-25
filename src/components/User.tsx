import React from 'react';
import './User.css';

function User({ avatar, first_name, last_name, email }) {
    return (
        <div className='user-card' style={{backgroundImage:avatar, height:'calc(30vh + 10px)'}}>
            <img className='card-img' src={avatar} alt={first_name} />
            <div className='card-body'>
                <h2 className='card-title'>{first_name} {last_name}</h2>
                <p className='card-header'>
                    {`Firstname: ${first_name}`}
                    </p>
                    <p className='card-header'>
                    {`Lastname: ${last_name}`}
                    </p>
                <p>
                Email: <span className='card-text'>
                     {email}
                    </span>
                    </p>
            </div>
        </div>
    );
}

export default User;