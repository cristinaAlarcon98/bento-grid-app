import React from 'react';
import './styles.css';
import growFollowers from './assets/images/illustration-grow-followers.jpg'

const EightComponent = () => {
    return (
        <div className="eight-container" style={{flexDirection:'row'}}>
             <img src={growFollowers} alt='create post' className='august-image'/>
            <p style={{color: '#ffffff'}}>Grow followers with non-stop content</p>
        </div>
    );
};

export default EightComponent;
