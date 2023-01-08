/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from './Contact.module.css';

export default function About() {
  const [submitted, setSubmitted] = useState(false);

  const Userdata = async (event) => {
    event.preventDefault();
    console.log('Sending');
    setSubmitted(true);

    const userdata = {
      Name: event.target.Name.value,
      Email: event.target.Email.value,
      Message: event.target.Message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdata),
    });
  };

  return (
    <form className={styles.form} onSubmit={(e) => Userdata(e)}>
      <input
        type="text"
        className={styles.nameInput}
        placeholder="Title of the message"
        name="Name"
        id="Name"
        required
      />

      <input
        type="email"
        className={styles.emailInput}
        placeholder="your email"
        name="Email"
        id="Email"
        required
      />

      <textarea
        type="text"
        className={styles.message}
        placeholder="Write your message to the programmer"
        name="Message"
        id="Message"
        required
      />

      <button type="submit">Send</button>
      {submitted === true ? alert('Thank you for your message') : ''}
    </form>
  );
}
