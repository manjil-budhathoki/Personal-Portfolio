import React, { useRef } from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: 'YOUR_ACTUAL_ACCESS_KEY', data: Object.fromEntries(formData) }),
      });
      if (response.ok) {
        await response.json();
        toast.success('Message sent successfully!');
        form.current.reset();
      } else {
        const errorData = await response.json();
        console.error('Web3Forms Error:', errorData);
        throw new Error('Error submitting form');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message. Please try again later.');
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span></h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">Feel free to get in touch with me.  I am always open to discussing new projects, creative ideas, or opportunities.</p>
          <div className="contact__info">
            <div className="info__item"><FaEnvelopeOpen className="info__icon" /><div><span className="info__title">Mail me</span><h4 className="info__desc">your.email@example.com</h4></div></div> {/* Replace email */}
            <div className="info__item"><FaPhoneSquareAlt className="info__icon" /><div><span className="info__title">Call me</span><h4 className="info__desc">+123 456 7890</h4></div></div> {/* Replace phone */}
          </div>
          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/budhathoki-manjil/" className="contact__social-link" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a> 
            <a href="https://x.com/BudhathokiM1" className="contact__social-link" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="YOUR_YOUTUBE_CHANNEL" className="contact__social-link" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div"><input type="text" name="name" placeholder="Your Name" className="form__control" required /></div>
            <div className="form__input-div"><input type="email" name="email" placeholder="Your Email" className="form__control" required /></div>
            <div className="form__input-div"><input type="text" name="subject" placeholder="Your Subject" className="form__control" required /></div>
          </div>
          <div className="form__input-div"><textarea name="message" placeholder="Your Message" className="form__control textarea" required></textarea></div>
          <button type="submit" className="button">Send Message<span className="button__icon contact__button-icon"><FiSend /></span></button>
        </form>
      </div>
    </section>
  );
};

export default Contact;