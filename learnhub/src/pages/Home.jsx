import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import CourseCard from "../components/CourseCard/CourseCard";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import BenefitCard from "../components/BenefitCard/BenefitCard";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import Footer from "../components/Footer/Footer";

import categories from "../data/categories";
import testimonials from "../data/testimonials";

import features from "../data/features";
import courses from "../data/courses";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="features-section">

        <h2>Why LearnHub?</h2>

        <div className="features-grid">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </section>

      <section className="categories-section">

  <h2>Top Categories</h2>

  <div className="features-grid">
    {categories.map((category) => (
      <CategoryCard
        key={category.id}
        category={category}
      />
    ))}
  </div>

</section>

<section className="benefits-section">

  <h2>Why Choose LearnHub?</h2>

  <div className="features-grid">

    <BenefitCard
      icon="🎓"
      title="Expert Instructors"
      text="Learn from professionals."
    />

    <BenefitCard
      icon="🌍"
      title="Learn Anywhere"
      text="Study at your own pace."
    />

    <BenefitCard
      icon="📜"
      title="Certificate"
      text="Earn a course certificate."
    />

    <BenefitCard
      icon="💼"
      title="Career Support"
      text="Boost your career."
    />

  </div>

</section>

<section className="testimonial-section">

  <h2>What Our Students Say</h2>

  <div className="features-grid">
    {testimonials.map((item) => (
      <TestimonialCard
        key={item.id}
        testimonial={item}
      />
    ))}
  </div>

</section>

<Footer />
    </>
  );
}

export default Home;