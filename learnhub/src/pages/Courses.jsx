import { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CourseCard from "../components/CourseCard/CourseCard";
import FAQ from "../components/FAQ/FAQ";

import courses from "../data/courses";
import faq from "../data/faq";

function Courses() {

    const location = useLocation();

const params = new URLSearchParams(location.search);

const initialSearch = params.get("search") || "";

const [search, setSearch] = useState(initialSearch);

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <>

            <Navbar />

            <section className="courses-page">

                <h1>Our Courses</h1>

                <input

                    type="text"

                    placeholder="Search Course..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

                <div className="courses-grid">

                    {

                        filteredCourses.map((course) => (

                            <CourseCard

                                key={course.id}

                                course={course}

                            />

                        ))

                    }

                </div>

            </section>

            <section className="faq-section">

                <h2>

                    Frequently Asked Questions

                </h2>

                {

                    faq.map((item) => (

                        <FAQ

                            key={item.id}

                            item={item}

                        />

                    ))

                }

            </section>

            <Footer />

        </>

    )

}

export default Courses;