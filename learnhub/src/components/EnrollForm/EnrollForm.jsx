import { useState } from "react";
import "./EnrollForm.css";

function EnrollForm({course, onClose}){
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: ""
  });

  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    
    if (!form.name || !form.email || !form.phone || !form.college) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      onClose();
      setForm({ name: "", email: "", phone: "", college: "" });
      setSuccess(false);
    }, 2000);
  }

  return(
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        {success ? (
          <div className="success-message">
            <h3>✓ Enrollment Successful!</h3>
            <p>We'll send further details to your email.</p>
          </div>
        ) : (
          <>
            <h2>Enroll in {course.title}</h2>
            <form onSubmit={handleSubmit}>
              <input 
                type="text"
                name="name"
                placeholder="Full Name" 
                value={form.name}
                onChange={handleChange}
              />
              <input 
                type="email"
                name="email"
                placeholder="Email" 
                value={form.email}
                onChange={handleChange}
              />
              <input 
                type="tel"
                name="phone"
                placeholder="Phone Number" 
                value={form.phone}
                onChange={handleChange}
              />
              <input 
                type="text"
                name="college"
                placeholder="College/School Name" 
                value={form.college}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EnrollForm;