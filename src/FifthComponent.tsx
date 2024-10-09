import React from 'react';
import './styles.css';
import socialMediaImage from './assets/images/illustration-multiple-platforms.jpg'

const FifthComponent = () => {
    return (
        <div className="fifth-container">
            <img src={socialMediaImage} alt='create post' className='socialmediaImage'/>
            <p style={{ color:'black'}}>
                Manage multiple accounts and platforms 
            </p>
            
        </div>
    );
};

export default FifthComponent;
