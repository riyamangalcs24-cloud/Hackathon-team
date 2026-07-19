import "./SuccessMessage.css";

function SuccessMessage() {
  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h2>Success!</h2>
        <p>Your form has been submitted successfully.</p>
        <p className="success-sub">We'll get back to you soon.</p>
      </div>
    </div>
  );
}

export default SuccessMessage;
