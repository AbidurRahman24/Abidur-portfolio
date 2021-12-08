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
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="resume-header-text">
                        <div className="text-center mt-4">
                            <h2>SKILL</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="resume-progressBar mt-3">
                                <h6>HTML</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={90} />
                                </div>
                            </div>
                            <div className="resume-progressBar mt-3">
                                <h6>CSS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={80} />
                                </div>
                            </div>
                            <div className="resume-progressBar mt-3">
                                <h6>BOOTSTRAPS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={90} />
                                </div>
                            </div>
                            <div className="resume-progressBar mt-3">
                                <h6>JAVASCRIPT</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={70} />
                                </div>
                            </div>
                        </div>

                        {/* 2nd colom */}
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="resume-progressBar mt-3">
                                <h6>REACT JS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={90} />
                                </div>
                            </div>
                            <div className="resume-progressBar mt-3">
                                <h6>NODE JS</h6>
                                <div className="progressBar-inner">
                                    <ProgressBar completed={60} />
                                </div>
                            </div>
                            <div className="resume-progressBar mt-3">
                                <h6>EXPRESS JS</h6>
                                <div className="progressBar-inner ">
                                    <ProgressBar completed={80} />
                                </div>
                            </div>
                            <div className="resume-progressBar mt-3">
                                <h6>MONGO DB</h6>
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