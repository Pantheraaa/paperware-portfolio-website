import React from 'react'
import './ContactUs.css'
import { FiPhoneCall } from 'react-icons/fi'
import { BiMailSend } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'
import { FcSalesPerformance } from 'react-icons/fc'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const ContactUs = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dpsc8ev', 'template_biooz58', form.current, '21HprXwTPqjme8OLQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    alert('Thank you for your Enquiry. Your E-mail has been sent successfully!');

    e.target.reset();
  };

  return (
    <div className="contact-us" id="contact-us">
      <h1>
        Contact Us
        <hr />
      </h1>
      <div className="contact-details">
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your name here" required />
            <input type="email" name="email" placeholder="Your e-mail" required />
            <input type="number" name="number" placeholder="Enter contact number" required />
            <input type="text" name="city" placeholder="City" />
            <textarea name="message" placeholder="Your message..." />
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
        <div className="contacts">
          <div className="address">
            <h2><GoLocation style={{ fill: '#FAC213', }} /> Head Office:</h2>
            <p>Paperware</p>
            <p>A-88, Sector 83, Noida, <br /> Gautam Budh Nagar,<br />Uttar
              Pradesh, India - 201301</p>
          </div>
          <div className="references">
            <h2><FcSalesPerformance /> Sales:</h2>
            <p>
              <FiPhoneCall size={16} /> +91-8766239804<br />
              <FiPhoneCall size={16} /> +91-8588869963<br />
              <BiMailSend size={17} />  paper-ware@outlook.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;