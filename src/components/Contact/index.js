import React from "react";

function Contact() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" defaultValue='name' name="name" />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" defaultValue='email' name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" defaultValue='message' rows="5"></textarea>
      </div>

      <div>
        <p>Error goes here</p>
      </div>

      <div><button type="submit" data-testid="contactSubmit">Submit</button></div>
    </form>
  )
}

export default Contact;