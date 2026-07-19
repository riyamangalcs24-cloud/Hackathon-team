import "./TestimonialCard.css";

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">

      <p>"{testimonial.review}"</p>

      <h3>{testimonial.name}</h3>

      <span>{testimonial.role}</span>

    </div>
  );
}

export default TestimonialCard;