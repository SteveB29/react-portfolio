import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // set up useState to check form elements
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  // destructure formState into components
  const { name, email ,message } = formState;
  // set's the errorMessage to blank on load
  const [errorMessage, setErrorMessage] = useState('');

  // checks if the element just moved out of on form is valid or has content
  // runs every time a form element is blurred
  function handleChange(e) {
    if(e.target.name === 'email') {
      const isValid = validateEmail(e.target.value.trim());

      if(!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('');
      }
    } else {
      const input = e.target.value.trim()
      if (!input.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value})
    }
  };

  // handles form submit, currently just has an alert that it is not hooked up
  // review services that will forward the email
  function handleSubmit(e) {
    e.preventDefault();
    alert('Please use the email at the bottom of this screen, message via form coming soon!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Name">Name:</label>
        <input type="text" defaultValue={name} onBlur={handleChange} name="Name" />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
      </div>
      <div>
        <label htmlFor="Message">Message:</label>
        <textarea name="Message" defaultValue={message} onBlur={handleChange} rows="5" />
      </div>

      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}

      <div><button type="submit" data-testid="contactSubmit">Submit</button></div>
    </form>
  )
}

export default Contact;