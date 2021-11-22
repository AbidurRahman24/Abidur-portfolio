import React from 'react';
import './About.css'
import aboutImage from '../../Images/about-image.jpg'
import cv from '../../Images/Resume.pdf'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="about-section-title ">
                    <h2>About</h2>
                </div>
                <div className="row">
                    <div className="col-md-5 about-section-image">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="col-md-7 about-content">
                        <div>
                            <h3 className='header-text'>Hi, I am <span className='theme-color'> Devid Chester </span></h3>
                            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                            <ul>
                                <li><b>Full Name </b>  Devid Chester</li>
                                <li><b>Nationality </b> American</li>
                                <li><b>Languages </b> Bangla (Native), English</li>
                                <li><b>Address </b> Sylhet, Bangladesh</li>
                                <li><b>Freelance </b> Available</li>
                            </ul>
                            <a href={cv} className='mi-button'>DOWNLOAD CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;