import React from 'react';
import './Button.css'

const Button = ({name}) => {
    return (
        <div>
            <button className='skill-btn'>
                {name}
            </button>
        </div>
    );
};

export default Button;