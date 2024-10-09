import React from 'react';
import './styles.css';
import audienceImage from './assets/images/illustration-audience-growth.jpg'

const SeventhComponent = () => {
    return (
        <div className="seventh-container">
            <p style={{fontSize: '3rem', margin: 0}}>56%</p>
            <p style={{fontSize:'1rem'}}>faster audience growth</p>
            <img src={audienceImage} alt='create post' className='august-image'/>
        </div>
    );
};

export default SeventhComponent;
