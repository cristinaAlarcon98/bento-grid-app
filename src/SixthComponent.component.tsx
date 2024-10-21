import React from 'react';
import './styles.css';
import augustImage from './assets/images/illustration-consistent-schedule.jpg'

const SixthComponent = () => {
    return (
        <div className="sixth-container">
            <p style={{ color:'black'}}>
                Maintain a consistent posting schedule
            </p>
            <img src={augustImage} alt='create post' className='august-image'/>
        </div>
    );
};

export default SixthComponent;
