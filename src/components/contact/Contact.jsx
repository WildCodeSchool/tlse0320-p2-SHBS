import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact us</h1>
      <p>Hey, feel free to contact us if you have any questions or suggestions about the game.</p>
      <ContactForm />
    </div>
  );
};

export default Contact;
