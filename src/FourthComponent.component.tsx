import React from 'react';
import chatImage from './assets/images/illustration-ai-content.jpg'
import './styles.css';

const FourthComponent = () => {
    return (
        <div className="fourth-container">
            <p style={{ color: 'black' }}>
                Write your content using AI
            </p>
            <img className='chat-image' src={chatImage} alt='chat image' />
        </div>
    );
};

export default FourthComponent;