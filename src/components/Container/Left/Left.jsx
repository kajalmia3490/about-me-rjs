import React from 'react';
import './Left.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const LeftContainer = () => {
    return (
        <div className='left'>
            <div className='times'>
                <FontAwesomeIcon className='clock' icon={faClock} />
                <p className='time'><strong>Available:</strong>Full-time/Part-time/Remote/Any marketplaces</p>
            </div>

            <div>
                <h3 className='experience'>IT/Training Centre & Experience:</h3>
                <p>
                    <p><strong>Office Application</strong></p>
                    Bhairab Upazilla computer training centre, Kishoregonj.
                </p>
                <p>
                    <p><strong>Web Design with Responsive</strong></p>
                    Online Course, Stack Learner.
                    <p><strong>Front End Development</strong></p>
                    Online Course, Stack Learner.
                    <p><strong>Wordpress Development</strong></p>
                    Online Course.
                </p>
            </div>

            <div className='preffered'>
                <h3 className='h3'>Preffered Environment:</h3>
                <p>WindowsOS, Visual studio, Sublime Text, Zoom, GitHub, Netlify</p>
            </div>

            <h3 className='projects'>All Projects:</h3>
            <a className='a' href='https://github.com/kajalmia3490?tab=repositories'>See All</a>
        </div>
    );
};

export default LeftContainer;