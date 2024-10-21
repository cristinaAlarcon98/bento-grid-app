import React from 'react';
import './styles.css';
import scheduleImage from './assets/images/illustration-schedule-posts.jpg'

const ThirdComponent = () => {
    return (
        <div className="third-container">
            <p style={{ color:'black'}}>
                Schedule to social media.
            </p>
            <img className='schedule-image' src={scheduleImage} alt='create post' />
            <p style={{fontSize: '1rem', fontWeight:100}}>
                Optimize post timings to publich content at the perfect time for your audience.
            </p>
        </div>
    );
};

export default ThirdComponent;
