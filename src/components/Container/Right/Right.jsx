import React from 'react';
import './Right.css';

const RightContainer = () => {
    return (
        <div className='right-comp'>
            <div className='child-left'>
                <div className='empty'>
                    <img src='https://staticlearn.shine.com/l/m/images/blog/top_resume_skills_post_banner.png' alt='...' />
                </div>
                <div className='skills'>
                    <h1 className='h1'>Skills</h1>
                    <p>Microsoft Office Application, HTML, CSS, Bootstrap, Tailwindcss, DaisyUI,Figma to HTML, JSON, Ajax API, Javascript, Object Oriented Programming with Javascript, Python, C, DOM, ES6, Modern js, jQuery, React js, Git, GitHub, Netlify.</p>
                </div>
            </div>
            
            <div className='child-left-second'>
                <div className='empty'>
                    <img src='https://static.thenounproject.com/png/992984-200.png' alt='...' />
                </div>
                <div className='about'>
                    <h1 className='h1'>About</h1>
                    Mohammad Kajal is a highly skilled and talented front-end developer based in Dhaka, Bangladesh. With a passion for creating engaging and intuitive user interfaces, he has gained a reputation for his exceptional ability to bring designs to life through his coding expertise. Effortlessly, I can complete your task with highly expertise & hard work.
                </div>
            </div>
            
            <div className='child-left-third'>
                <div className='empty'>
                    <img src='https://cdn-icons-png.flaticon.com/512/5302/5302155.png' alt='...' />
                </div>
                <div className='contact'>
                    <h1 className='h1'>Contact</h1>
                    <div className='social-link'>
                        <a href='https://www.facebook.com/kajalmia3490'>Facebook</a>
                        <a href='https://www.linkedin.com/in/kajal-mia-b50328247/'>Linkdin</a>
                        <a href='https://web.whatsapp.com/'>WhatsApp</a>
                        <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightContainer;