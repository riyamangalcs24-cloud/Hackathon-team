import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    mode: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.name === "" || form.email === "") {
      alert("Please fill required fields");
      return;
    }

    setSuccess(true);
  }

  return (
    <>
      <Navbar />

      <section className="contact-page">

        <h1>Contact Us</h1>

        <ContactForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          success={success}
        />

      </section>

      <Footer />
    </>
  );
}

export default Contact;