import React from 'react';
import clsx from 'clsx';
import {
    Paper,
    Grid,
    MenuItem,
    TextField } from "@material-ui/core";
export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
	this.state = { name: '', email: '', message: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form>
        <div>
            <Grid container className="window-contact-us">
                <Grid item xs={12} sm={6} className="right-field left-field">
                    <TextField id="txt-name" name="name" label="Name" value={this.state.name} onChange={this.handleChange} margin="normal" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} className="right-field left-field">
                    <TextField id="txt-email" name="email" label="Email" value={this.state.email} onChange={this.handleChange} margin="normal" variant="outlined" />
                </Grid>
                <Grid item xs={12} className="right-field left-field">
                    <TextField id="txt-message" name="message" label="Message" placeholder="your message" value={this.state.message} onChange={this.handleChange} multiline rows="4" margin="normal" variant="outlined" />
                </Grid>
                <Grid item xs={12} className="right-field left-field">
                    <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                </Grid>
            </Grid>
    	</div>
  	</form>
	)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_6ujZ4Kn5';

	this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) { window.emailjs.send( 'gmail', templateId, variables ).then(res => { 
      console.log('Email successfully sent!') 
    })
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}