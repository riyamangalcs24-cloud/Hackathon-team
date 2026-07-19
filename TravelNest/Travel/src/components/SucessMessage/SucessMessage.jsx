import "./SucessMessage.css";

function SuccessMessage({ message }) {
  return (
    <div className="success-message">
      <h3>Success 🎉</h3>
      <p>{message}</p>
    </div>
  );
}

export default SuccessMessage;