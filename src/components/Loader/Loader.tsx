import React from 'react';
import './Loader.css';
import loader from '../assets/Loader.svg';

function Loader() {
    return (
        <div className='loader'>
            <img alt='Loading...' src={loader} />
        </div>
    );
}

export default Loader;