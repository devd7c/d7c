import React, { Component } from "react";
import { Axios, db } from '../../firebase/firebaseConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ContactThree extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };
    }
    handleSubmit(e){
        e.preventDefault();
        toast.configure()
        toast.info("Send email", {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: false,
            pauseOnHover: false
        });
        Axios.post(
            'https://us-central1-d7c-web.cloudfunctions.net/submit',
            this.state
        )
        .then(res => {
            this.resetForm()
            toast.success("Your mail has been sent successfully!", {
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: true,
                pauseOnHover: true
            });
            /*db.collection('emails').add({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date(),
            })*/
        })
        .catch(error => {
            alert("Message failed to send.")
            console.log(error)
        })
    }
    resetForm(){
        this.setState({name: "", email: "", subject: "", message: ""})
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-12 order-2 order-lg-1 bg-overlay">
                            <div className="section-title text-center ptb--60">
                                <h2>Start your project today</h2>
                            </div>
                            <div className="form-wrapper">
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <label htmlFor="item01">
                                        <input type="text" name="name" className="form-control" id="name" value={this.state.name}
                                        onChange={this.onNameChange.bind(this)} placeholder="Your Name *" />
                                    </label>

                                    <label htmlFor="item02">
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={this.state.email} 
                                        onChange={this.onEmailChange.bind(this)} required placeholder="Your email *" />
                                    </label>

                                    <label htmlFor="item03">
                                        <input type="text" className="form-control" name="subject" id="subject" value={this.state.subject} 
                                        onChange={this.onSubjectChange.bind(this)} required placeholder="Write a Subject" />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea type="text" id="message" className="form-control" rows="5" name="message" value={this.state.message} 
                                        onChange={this.onMessageChange.bind(this)} required placeholder="Your Message" />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    onNameChange(e) { this.setState({name: e.target.value}) }
    onEmailChange(e) { this.setState({email: e.target.value}) }
    onSubjectChange(e) { this.setState({subject: e.target.value}) }
    onMessageChange(e) { this.setState({message: e.target.value}) }
}
export default ContactThree;