import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function Contact() {
  return (
    <div id='contact'>
      <div className="contact-form">
        <p>"I'd love to hear from you! Feel free to drop me a message."</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows={6}></textarea>
          <button>Send Message</button>
        </form>
      </div>
      <div className="contact-content">``
        <p>Let's Connect and Create Something Amazing Together!</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/akuthotamanikanta/" target='_black'><i className="fa fa-linkedin fa-2x"></i></a>
          <a href="https://github.com/Manikantaakuthot" target='_black'><i className="fa fa-github fa-2x"></i></a>
          <a href="mailto:akuthotamanikanta653@gmail.com?body=Hey buddy nice Portfolio" target='_black'><i className="fa fa-envelope fa-2x"></i></a>
          <a href="https://instagram.com/manikanta5049" target='_black'><i className="fa fa-instagram fa-2x"></i></a>
          <a href="https://twitter.com/AkuthotaManika4" target='_black'><i class="fa fa-2x fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
}
