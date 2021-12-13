import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email ,message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

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

  return (
    <form>
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