import React, { useState } from 'react';
import '../../style/Contact.css'
import Layout from '../Layout/Layout';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');

  };
  return (
    <>
    <Layout showFooter={true}>
    <div className='contact-page'>
      <div className='containercont'>
      <h1>Contact Us</h1>
      <p>   Got a question? We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
      
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={name} onChange={(e) => setEmail(e.target.value)} required/>
      
       <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
     
     <button type="submit">Submit</button>
      </form>
      </div>
      <p className='aditional-text'>Contact Us <br/>
      The Busy Birds Services Pvt.Ltd  <br/>
      Address: Maitidevi - 30, Kathmandu, Nepal  <br/>
      Email: info@auctionsbazar.com <br/>
      Mobile: +977 9851127611
       </p>
      </div>
      </Layout>
      </>
  )
};

export default Contact;