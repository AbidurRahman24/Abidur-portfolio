import React from 'react';
import './Home.css'
import headerPhoto from '../../Images/niloy.jpg'
import cv from '../../Images/Resume.pdf'

const Home = () => {
    return (
        <div className="container ">
            <div style={{ height: '600px', }} className="row d-flex align-items-center">
                <div className='text-center'>
                    <h1 className='header-text pb-2'>Hi, I am <span className='theme-color'> Abidur Rahman </span></h1>
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    <p>I have more than 1.5 years of experience in the web development sector. I have developed Doctors Portal Website, Gym Fitness, E Commerce, Booking website.</p>
                    <a href={cv} className='mi-button'>DOWNLOAD CV</a>
                </div>
            </div>
        </div>
    );
};

export default Home;