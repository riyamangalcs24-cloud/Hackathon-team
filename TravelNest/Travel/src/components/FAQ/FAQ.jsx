import "./FAQ.css";

function FAQ({ question, answer }) {
  return (
    <div className="faq-card">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

export default FAQ;