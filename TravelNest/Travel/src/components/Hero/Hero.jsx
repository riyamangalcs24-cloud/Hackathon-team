import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Explore the World with TravelNest ✈️</h1>

        <p>
          Discover breathtaking destinations, exciting adventures,
          and unforgettable travel experiences with our curated
          tour packages.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Destinations
          </button>

          <button className="secondary-btn">
            View Packages
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
          alt="Travel Destination"
        />
      </div>
    </section>
  );
}

export default Hero;