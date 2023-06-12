import React from 'react';
import './Profile.css';
import Img from '../../../images/passport-size.jpg';
import Button from '../Button/Button';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='image'>
                <div>
                    <img className='img' src={Img} alt='...' />
                </div>
            </div>

            <div className='profile-text'>
                <h2>Mohammad Kajal</h2>
                <p className='title'>Front End Developer</p>
                <h4>Location</h4>
                <p className='location'>Dhaka, Bangladesh</p>
                <hr></hr>
                <p className='profile-complement'>
                    Highly expert Front end developer, Javascript Programmer, Responsive web designer, Web designer, Figma Designer, Compatible website. I always stay prepare for taking new chellenge. New techonology is my curiousity. Proffessionally I love all given below technologies. Effortlessly, You can hire me for your project.
                </p>
                <hr></hr>

                <div className='btn-group'>
                    <div className='top'>
                        <Button name='Ms Office' />
                        <Button name='HTML' />
                        <Button name='CSS' />
                        <Button name='Bootstrap' />
                        <Button name='Tailwindcss' />
                        <Button name='DaisyUI' />
                        <Button name='Javascript' />
                        <Button name='DOM' />
                    </div>

                    <div className='bottom'>
                        <Button name='OOP with js' />
                        <Button name='ES6 Javasript' />
                        <Button name='jQuery' />
                        <Button name='React js' />
                        <Button name='Git' />
                        <Button name='GitHub' />
                        <Button name='Python' />
                        <Button name='C' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;