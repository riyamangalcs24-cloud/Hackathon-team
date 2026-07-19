import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import PackageCard from "../components/PackageCard/PackageCard";
import GuideCard from "../components/GuideCard/GuideCard";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

import features from "../data/features";
import packages from "../data/package";
import guides from "../data/guides";
import faq from "../data/faq";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose TravelNest?</h2>

        <div className="card-container">
          {features.map((item) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>


      {/* Packages Section */}
      <section className="packages-section">
        <h2>Popular Packages</h2>

        <div className="card-container">
          {packages.map((item) => (
            <PackageCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>


      {/* Guides Section */}
      <section className="guides-section">
        <h2>Our Travel Guides</h2>

        <div className="card-container">
          {guides.map((item) => (
            <GuideCard
              key={item.id}
              image={item.image}
              name={item.name}
              location={item.location}
              experience={item.experience}
            />
          ))}
        </div>
      </section>


      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        {faq.map((item) => (
          <FAQ
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </section>


      <Footer />
    </>
  );
}

export default Home;