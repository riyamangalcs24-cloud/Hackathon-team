import "./PricingCard.css";

function PricingCard({ plan }) {
  return (
    <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>
      {plan.popular && <span className="badge">Most Popular</span>}
      <h3>{plan.name}</h3>
      <div className="price">
        <span className="currency">₹</span>
        <span className="amount">{plan.price}</span>
      </div>
      <p className="description">per month</p>
      <ul className="features">
        {plan.features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      <button className="enroll-btn">Choose Plan</button>
    </div>
  );
}

export default PricingCard;
