import React from 'react';
import './User.css';

function User({ avatar, first_name, last_name, email }) {
    return (
        <div className='user-card' style={{ height: 'calc(30vh + 10px)', backgroundImage: "url(../assets/Field_SVG_1488px.svg)" }}>
            <img className='card-img' src={avatar} alt={first_name} title={`${first_name} ${last_name}'s avatar`} />
            <div className='card-body'>
                <h2 className='card-title'>{first_name} {last_name}</h2>
                <p className='card-header'>
                    <span style={{ color: '#33333f' }}>First Name: </span>{first_name}
                </p>
                <p className='card-header'>
                    <span style={{ color: '#33333f' }}>Last Name: </span>{last_name}
                </p>
                <p className='card-subtitle'>
                    Email-id: <span className='card-text' onClick={(e) => { e.preventDefault(); window.open(`mailto:${email}`, '_blank') }}>{email}</span>
                </p>
            </div>
        </div>
    );
}

export default User;