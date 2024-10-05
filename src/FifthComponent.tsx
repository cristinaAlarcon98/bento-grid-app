import React from 'react';
import './styles.css';
import socialMediaImage from './assets/images/illustration-multiple-platforms.jpg'

const FifthComponent = () => {
    return (
        <div className="fifth-container">
            <p style={{ color:'black'}}>
                Schedule to social media.
            </p>
            <img src={socialMediaImage} alt='create post' className='socialmediaImage'/>
        </div>
    );
};

export default FifthComponent;
