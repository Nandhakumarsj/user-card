import React from 'react';
import './User.css';

function User({ avatar, first_name, last_name, email }) {
    const firstName = first_name?first_name: "Nandhakumar"
    const lastName = last_name?last_name: "S J"
    const EmailID = email?email:"excelnandhu@gmail.com"
    return (
        <div className='user-card' style={{ backgroundImage: avatar, height: 'calc(30vh + 10px)' }}>
            <img className='card-img' src={avatar} alt={firstName} title={`${firstName} ${lastName}`} />
            <div className='card-body'>
                <h2 className='card-title'>{firstName} {lastName}</h2>
                <p className='card-header'>
                    <span style={{color:'#33333f'}}>Firstname: </span>{firstName}
                </p>
                <p className='card-header'>
                    <span style={{color:'#33333f'}}>Lastname: </span>{lastName}
                </p>
                <p className='card-subtitle'>
                    EmailID:
                    <span className='card-text' onClick={(e) => { e.preventDefault(); window.open(`mailto:${EmailID}`, '_blank') }}>
                        {EmailID}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default User;