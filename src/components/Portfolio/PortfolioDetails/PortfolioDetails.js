import React from 'react';
import './PortfolioDetails.css'

const PortfolioDetails = (props) => {
    const { img, title, url } = props.data
    return (
        <div className="container col-md-4">
            <div class="">
                <img src={img} alt="Avatar" class="image" />
                <div class="overlay">
                    <div class="text">{title}</div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;