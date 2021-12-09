import React from 'react';
import './About.css'
import aboutImage from '../../Images/about-image.jpg'
import cv from '../../Images/Resume.pdf'

const About = () => {
    return (
        <>
            <div className="container">
                <div className="text-center mt-4">
                    <h2>ABOUT</h2>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 about-section-image">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 about-content">
                        <div>
                            <h3 className='header-text'>Hi, I am <span className='theme-color'> Abidur Rahman </span></h3>
                            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                           </p>
                           <p> I am expert in React, Next.js, Node.js and ExpressJS.</p>
                            <ul>
                                <li><b>Full Name </b>  Abidur Rahman Niloy</li>
                                <li><b>Nationality </b> Bangladeshi</li>
                                <li><b>Languages </b> Bangla (Native), English</li>
                                <li><b>Address </b> Sylhet, Bangladesh</li>
                                <li><b>Freelance </b> Available</li>
                            </ul>
                            <a href={cv} className='mi-button'>DOWNLOAD CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;