import { useState } from "react";
import "./LoginPopup.css";

function LoginPopup({onClose}){
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isLogin) {
      if (!form.email || !form.password) {
        alert("Please fill all fields");
        return;
      }
      alert("Login Successful!");
    } else {
      if (!form.name || !form.email || !form.password) {
        alert("Please fill all fields");
        return;
      }
      alert("Account Created Successfully!");
    }
    onClose();
  }

  return(
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        {isLogin ? (
          <>
            <h2>Login to LearnHub</h2>
            <form onSubmit={handleSubmit}>
              <input 
                type="email"
                name="email"
                placeholder="Email" 
                value={form.email}
                onChange={handleChange}
              />
              <input 
                type="password"
                name="password"
                placeholder="Password" 
                value={form.password}
                onChange={handleChange}
              />
              <button type="submit">Login</button>
              <p className="toggle-text">
                Don't have an account? 
                <span onClick={() => {
                  setIsLogin(false);
                  setForm({ name: "", email: "", password: "" });
                }}>
                  Sign Up
                </span>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2>Create Account</h2>
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
                type="password"
                name="password"
                placeholder="Password" 
                value={form.password}
                onChange={handleChange}
              />
              <button type="submit">Sign Up</button>
              <p className="toggle-text">
                Already have an account? 
                <span onClick={() => {
                  setIsLogin(true);
                  setForm({ name: "", email: "", password: "" });
                }}>
                  Login
                </span>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPopup;