import React from 'react';
import './Contact.css'

import {BsWhatsapp, BsFillEnvelopeFill, BsPinMap } from "react-icons/bs";

const ContactInfo = () => {
    return (
        <div>
            <ul class="list-unstyled mb-0">
                <li>
                    <div className="contact-infoblock">
                        <div className="row">
                            <div className="contact-info-grid col-md-3 d-flex justify-content-center align-items-center">
                                <BsWhatsapp />
                            </div>
                            <div className="contact-info-grid col-md-9 m-0 p-0">
                                <h5>Phone/Whatsapp</h5>
                                <p>+88 01740100570</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="contact-infoblock">
                        <div className="row">
                            <div className="contact-info-grid col-md-3 d-flex justify-content-center align-items-center">
                                <BsFillEnvelopeFill />
                            </div>
                            <div className="contact-info-grid col-md-9 m-0 p-0">
                                <h5>Email</h5>
                                <p>niloybdesh@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                <div className="contact-infoblock">
                        <div className="row">
                            <div className="contact-info-grid col-md-3 d-flex justify-content-center align-items-center">
                                <BsPinMap />
                            </div>
                            <div className="contact-info-grid col-md-9 m-0 p-0">
                                <h5>Address</h5>
                                <p>Sylhet, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;