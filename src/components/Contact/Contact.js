import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ContactInfo from './ContactInfo';
import './Contact.css'

const Contact = () => {
    const [msg, setMsg] = useState(undefined);
    const [err, setErr] = useState(undefined);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rxquisq', 'template_6inygxu', form.current, 'user_1yWzUpfEaQGRwdnsOpTf3')
            .then((result) => {
                console.log(result);
                setTimeout(() => setMsg(result), 1000)
            }, (error) => {
                console.log(error.text);
                setErr(error)
            });
        e.target.reset()
    }
    return (
        <div>
            <div className="container">
                <div className="text-center mt-4">
                    <h2>CONTACT</h2>
                    <hr />
                </div>
            {msg && <p className='text-success'>"Successfully send your Email."</p>}
                    {err && <p>"Error"</p>}
                <section class="mb-4">
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                    <div class="row">

                        <div class="col-md-9 mb-md-0 mb-5">
                            <div className="container">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-group mb-3">
                                        <label>Name</label>
                                        <input type="text" name="name" class="form-control" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" class="form-control" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Subject</label>
                                        <input type="text" name="subject" class="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Message</label>
                                        <textarea name="message" class="form-control" placeholder="Message" />
                                    </div>
                                    <input type="submit" value="Send" class="btn btn-primary mi-button" />

                                </form>
                            </div>
                        </div>

                        <div class="col-md-3 ">
                            <ContactInfo></ContactInfo>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    );
};

export default Contact;