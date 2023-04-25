import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FaViber } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>imericrob@gmail.com</h5>
            <a href="mailto:imericrob@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>John Ericsson Robarios</h5>
            <a href="https://m.me/ericssownn" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaViber/>
            <h4>Viber</h4>
            <h5>09279281053</h5>
            <a href="viber://chat?number=09279281053" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact