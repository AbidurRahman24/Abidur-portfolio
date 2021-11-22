import React from 'react';
import './Resume.css'
import ProgressBar from "@ramonak/react-progress-bar";

const skill = [
    {
        title: 'HTML',
    }
]


const Resume = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div className="resume-header-text">
                        <h2>My Skill</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="resume-progressBar">
                                <h6>HTML</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={90} />
                                </div>
                            </div>
                            <div className="resume-progressBar">
                                <h6>Javascript</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={70} />
                                </div>
                            </div>
                            <div className="resume-progressBar">
                                <h6>ReactJS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={90} />
                                </div>
                            </div>
                            <div className="resume-progressBar">
                                <h6>NextJS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={80} />
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="resume-progressBar">
                                <h6>CSS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={80} />
                                </div>
                            </div>
                            <div className="resume-progressBar">
                                <h6>bootstrap</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={90} />
                                </div>
                            </div>
                            <div className="resume-progressBar">
                                <h6>NODE JS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={60} />
                                </div>
                            </div>
                            <div className="resume-progressBar">
                                <h6>EXPRESS JS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={80} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;