import React from 'react';
import starsImage from './assets/images/illustration-five-stars.jpg';
import './styles.css'; 

const SecondComponent = () => {
    return (
        <div className="second-container">
            <h1>
                Social Media 10X Faster with AI
            </h1>
            <img className='stars-image' src={starsImage} alt='create post' />
            <p style={{ color: 'white' }}>
                Over 4,000 5-star reviews
            </p>
        </div>
    );
};

export default SecondComponent;
