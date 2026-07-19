import "./packageCard.css";

function PackageCard({ image, destination, duration, groupSize, price }) {
  return (
    <div className="package-card">
      <img src={image} alt={destination} />

      <h3>{destination}</h3>

      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Group:</strong> {groupSize}</p>

      <h2>{price}</h2>

      <button>Book Now</button>
    </div>
  );
}

export default PackageCard;