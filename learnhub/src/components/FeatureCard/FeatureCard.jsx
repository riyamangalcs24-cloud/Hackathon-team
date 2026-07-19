import "./FeatureCard.css";

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">

      <h2>{feature.icon}</h2>

      <h3>{feature.title}</h3>

      <p>{feature.description}</p>

    </div>
  );
}

export default FeatureCard;