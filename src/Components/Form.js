import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="container">
      	<div className="flex-row blog-header">
			<div className="flex-row">
				<h2 className="ab-head">Get in touch</h2>
			</div>	
		</div>	
		<div className="container contact">
			<div>
				<h2>Contact us</h2>
	      		<p>Cray deep v ethical, iceland celiac slow-carb mustache chillwave. Squid chicharrones salvia umami, keytar raw denim woke. Kitsch cred fingerstache, poutine neutra kombucha distillery squid.</p>
	      		<p>
	      			<span>Critics Review Inc.</span>
	      			<span>123 The Street St, Fl 1, NYC</span>
	      			<span>+1(123) 456-7891</span>
	      		</p>
	      	</div>
	      	<form>
	        	{/* Name field */}
		        <Field
		          label="Name*"
		          onChange={(event) => this.updateField('name', event.target.value)}
		          value={this.state.name}
		        />
		        {/* Email field */}
		        <Field
		          label="Email*"
		          onChange={(event) => this.updateField('email', event.target.value)}
		          value={this.state.email}
		        />
		        {/* Message textarea */}
		        <Field
		          label="Message*"
		          onChange={(event) => this.updateField('message', event.target.value)}
		          /* This should be written like 'textarea' */
		          textarea={true}
		          value={this.state.message}
		        />
		        {/* Submit button */}
		        <Button
		          email="kgadams93@gmail.com"
		          formValues={this.state}
		        />
		        <p>* required</p>
	        </form>
        </div>
      </div>
    );
  }
}

export default Form;