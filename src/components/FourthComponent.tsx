import React from 'react';
import chatImage from '../assets/images/illustration-ai-content.jpg'
import './styles.css';

const FourthComponent = () => {
    return (
        <div className="first-container">
            <p style={{ color: 'black' }}>
                Create and schedule content quicker
            </p>
            <img src={chatImage} alt='create post' />
        </div>
    );
};

export default FourthComponent;
