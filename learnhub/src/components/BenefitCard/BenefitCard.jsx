import "./BenefitCard.css";

function BenefitCard({ title, text, icon }) {
  return (
    <div className="benefit-card">
      <h2>{icon}</h2>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default BenefitCard;