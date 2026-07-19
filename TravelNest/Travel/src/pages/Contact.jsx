import { useState } from "react";
import SuccessMessage from "../components/SucessMessage/SucessMessage";
import Footer from "../components/Footer/Footer";

function Contact() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="contact-section">

        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>

          <input 
            type="text" 
            placeholder="Your Name"
            required
          />

          <input 
            type="email" 
            placeholder="Your Email"
            required
          />

          <textarea 
            placeholder="Your Message"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>


        {
          submitted && 
          <SuccessMessage 
            message="Your message has been sent successfully!"
          />
        }

      </section>

      <Footer />
    </>
  );
}

export default Contact;