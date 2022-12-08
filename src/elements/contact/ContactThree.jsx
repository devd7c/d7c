import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { Axios, db } from '../../firebase/firebaseConfig'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { getAuth } from "firebase/auth";

const ContactThree = () =>{
    const auth = getAuth();
    const user = auth.currentUser;
    const {executeRecaptcha} = useGoogleReCaptcha();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [tokenCaptcha, setTokenCaptcha] = useState('')

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
          console.log('Execute recaptcha not yet available');
          return;
        }
        const token = await executeRecaptcha('yourAction');
        setTokenCaptcha(token)
    }, [executeRecaptcha]);

    useEffect(() => {
        setName(user?.displayName || '')
        setEmail(user?.email || '')
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify, user]);

    const handleSubmit = async (e) => {
        toast.configure();
        e.preventDefault();
        if(tokenCaptcha.length > 0) {
            toast.info("Send email", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
                hideProgressBar: false,
                pauseOnHover: false
            });
            const data = {
                name: name,
                email: email,
                subject: subject,
                message: message,
            }
            Axios.post('https://us-central1-d7c-web.cloudfunctions.net/submit', data)
            .then(() => {
                toast.success("Your mail has been sent successfully!", {
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true,
                    pauseOnHover: true
                });
                db.collection('emails').add({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    time: new Date(),
                })
                resetForm()
            })
            .catch(() => {
                toast.error("failed to send.", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2700,
                    hideProgressBar: false,
                    pauseOnHover: false
                });
            })
        } else {
            toast.error("Token Error", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2700,
                hideProgressBar: false,
                pauseOnHover: false
            });
        }
    }
    const resetForm = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setTokenCaptcha('')
    }
    const onNameChange = (e) => { setName(e.target.value) }
    const onEmailChange = (e) => { setEmail(e.target.value) }
    const onSubjectChange = (e) => { setSubject(e.target.value) }
    const onMessageChange = (e) => { setMessage(e.target.value) }
    return (
        <div className="contact-form--1">
            <div className="container">
                <div className="row row--35 align-items-start">
                    <div className="col-lg-12 order-2 order-lg-1 bg-overlay">
                        <div className="section-title text-center ptb--60">
                            <h2>Start your project today</h2>
                        </div>
                        <div className="form-wrapper">
                                <form id="contact-form" onSubmit={handleSubmit} method="POST">
                                    <label htmlFor="item01">
                                        <input type="text" name="name" className="form-control" id="name" value={name}
                                        onChange={onNameChange} required placeholder="Your Name *" />
                                    </label>

                                    <label htmlFor="item02">
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} 
                                        onChange={onEmailChange} required placeholder="Your email *" />
                                    </label>

                                    <label htmlFor="item03">
                                        <input type="text" className="form-control" name="subject" id="subject" value={subject} 
                                        onChange={onSubjectChange} required placeholder="Write a Subject" />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea type="text" id="message" className="form-control" rows="5" name="message" value={message} 
                                        onChange={onMessageChange} required placeholder="Your Message" />
                                    </label>
                                    <div className="row">
                                        <div className="col-12">
                                        </div>
                                        <div className="col-12 mt--15">
                                            <button className="rn-button-style--2 btn-solid" type="submit" value="submit"
                                            disabled={tokenCaptcha.length > 0 ? false : true}
                                            name="submit" id="mc-embedded-subscribe">Submit</button>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ContactForm () {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SITE_KEY} 
        scriptProps={{
            async: false,
            defer: false,
            appendTo: "body",
            nonce: undefined
        }}
        container={{
            element: document.getElementById('grecaptcha-badge'),
            parameters: {
                badge: 'bottomleft',
                theme: 'light'
            },
        }}>
            <ContactThree />
        </GoogleReCaptchaProvider>
    )
}
export default withRouter(ContactForm);