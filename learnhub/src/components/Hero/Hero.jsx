import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Learn New Skills <br />
          Anytime, Anywhere
        </h1>

        <p>
          Explore thousands of high-quality courses from expert instructors.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search courses..."
          />

          <button>
            Search
          </button>

        </div>

        <button className="explore-btn">
          Explore Courses
        </button>

      </div>

      <div className="hero-right">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Student"
        />

      </div>

    </section>
  );
}

export default Hero;