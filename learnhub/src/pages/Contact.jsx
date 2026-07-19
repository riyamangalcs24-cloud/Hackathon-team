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
    startDate: "",
    mode: "",
    interests: [],
    message: ""
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      // Handle checkbox for interests
      setForm({
        ...form,
        interests: checked
          ? [...form.interests, value]
          : form.interests.filter(item => item !== value)
      });
    } else {
      // Handle text, email, select, radio, date inputs
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  function handleReset() {
    setForm({
      name: "",
      email: "",
      phone: "",
      category: "",
      startDate: "",
      mode: "",
      interests: [],
      message: ""
    });
    setSuccess(false);
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    // Validate name
    if (form.name.trim() === "") {
      newErrors.name = "❌ Name is required";
    }

    // Validate email
    if (form.email.trim() === "") {
      newErrors.email = "❌ Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "❌ Please enter a valid email";
    }

    // Validate phone
    if (form.phone.trim() === "") {
      newErrors.phone = "❌ Phone is required";
    }

    // Validate category
    if (form.category === "") {
      newErrors.category = "❌ Please select a course";
    }

    // If there are errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
      return;
    }

    // If no errors, submit successfully
    setErrors({});
    setSuccess(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      handleReset();
    }, 2000);
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
          handleReset={handleReset}
          errors={errors}
          success={success}
        />

      </section>

      <Footer />
    </>
  );
}

export default Contact;