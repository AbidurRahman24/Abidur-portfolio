import React from 'react';
import './Home.css'
import headerPhoto from '../../Images/dark.jpg'
import cv from '../../Images/Resume.pdf'

const Home = () => {
    return (
        <div className="container ">
            <div className="row align-self-center">
                <div className="col-md-4 bg">
                    <img className='' src={headerPhoto} alt="" />
                </div>
                <div className="col-md-8 d-flex justify-content-center align-self-center" style={{}}>
                    <div>
                        <h1 className='header-text'>Hi, I am <span className='theme-color'> Devid Chester </span></h1>
                        <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                        <a  href={cv} className='mi-button'>DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;