import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav class=" navbar navbar-expand-lg navbar-light ">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse font-weight-bold" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="/">ABIDUR</a>
                        <ul class="navbar-nav ms-auto">
                            <Link class="nav-item nav-link active" to="/">Home
                            </Link >
                            <Link  class="nav-item nav-link" to="/about">About
                            </Link >
                            <Link  class="nav-item nav-link" to="/resume">Resume
                            </Link >
                            <Link  class="nav-item nav-link" to="/portfolios">Portfolios
                            </Link >
                            <Link  class="nav-item nav-link" to="/contact">Contact
                            </Link >
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;