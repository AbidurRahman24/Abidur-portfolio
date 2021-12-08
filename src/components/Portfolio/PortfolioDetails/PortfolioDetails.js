import React from 'react';
import './PortfolioDetails.css'

const PortfolioDetails = (props) => {
    const { img, title, url } = props.data
    return (
        <div className="col-12 col-md-4">
            <div className="row p-3">
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={img} alt="" />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;