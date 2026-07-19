import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleSearch() {
    if (search.trim() !== "") {
      navigate(`/courses?search=${search}`);
    } else {
      alert("Please enter a course name.");
    }
  }

  function handleExplore() {
    navigate("/courses");
  }

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
            placeholder="Search Courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={handleSearch}>
            Search
          </button>

        </div>

        <button
          className="explore-btn"
          onClick={handleExplore}
        >
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