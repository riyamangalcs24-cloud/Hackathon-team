import "./GuideCard.css";

function GuideCard({ image, name, experience, location }) {
  return (
    <div className="guide-card">

      <img src={image} alt={name} />

      <div className="guide-content">
        <h3>{name}</h3>
        <p>{location}</p>
        <span>{experience} Experience</span>
      </div>

    </div>
  );
}

export default GuideCard;