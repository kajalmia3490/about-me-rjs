import React from 'react';
import './Main.css'
import Profile from '../Profile-container/Profile';
import LeftContainer from '../Left/Left';
import RightContainer from '../Right/Right';

const Main = () => {
    
    const handleHire = () => {
        alert('Contact with himself')
    }
    return (
        <div className='main'>
            <Profile />
            <div className='available'>
                <strong className='vartical'>|</strong>
                <label>Kajal is <span>available</span> for hire</label>
                <button 
                    onClick={handleHire}
                    className='hire-kajal-btn'>
                    Hire Kajal
                </button>
            </div>
            <div className='container'>
                <LeftContainer />
                <RightContainer />
            </div>
        </div>
    );
};

export default Main;