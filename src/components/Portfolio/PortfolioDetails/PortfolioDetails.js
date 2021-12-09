import React from 'react';
import './PortfolioDetails.css'

const PortfolioDetails = (props) => {
    const { img, title, url } = props.data
    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="row  image-container">
                <div class="card image" style={{ width: '22rem' }}>
                    <img class="card-img-top" src={img} alt="" />
                    <div class="card-body">
                        <div class="overlay">
                            <h5 class="text">{title}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <a href={url}>Live Site</a>
            </div>
        </div>
    );
};

export default PortfolioDetails;