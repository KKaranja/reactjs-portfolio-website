import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ls408qn",
      "template_bdz22q4",
      form.current,
      "0YurBnNETKA3xfgn_"
    );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>isaackimura@gmail.com</h5>
            <a
              href='mailto:isaackimura@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>isaac kimura</h5>
            <a href='https://m.me/' target='_blank' rel='noreferrer'>
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <RiWhatsappLine className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+254724996893</h5>
            <a
              href='https://api.whatsapp.com/send?phone+254724996893'
              target='_blank'
              rel='noreferrer'
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End of contact Options */}
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
