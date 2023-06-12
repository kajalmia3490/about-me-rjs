import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1 className='child-header'>
                    <FontAwesomeIcon className='dev-icon' icon={faCode} />
                    Developer</h1>
            </div>
            <div>
                <button className='header-btn'>
                    Hire Now
                </button>
            </div>
        </div>
    );
};

export default Header;