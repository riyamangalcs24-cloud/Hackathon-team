import { useState } from "react";
import EnrollForm from "../EnrollForm/EnrollForm";
import "./CourseCard.css";

function CourseCard({ course }) {
    const [showEnroll, setShowEnroll] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <>
            <div className="course-card">
                <img src={course.image} alt={course.title} />

                <h3>{course.title}</h3>

                <p>Instructor: {course.instructor}</p>

                <p>Duration: {course.duration}</p>

                <p>⭐ {course.rating}</p>

                <h4>{course.price}</h4>

                <button
                    onClick={() => {
                        setSelectedCourse(course);
                        setShowEnroll(true);
                    }}
                >
                    Enroll Now
                </button>
            </div>

            {showEnroll && selectedCourse && (
                <EnrollForm
                    course={selectedCourse}
                    onClose={() => setShowEnroll(false)}
                />
            )}
        </>
    );
}

export default CourseCard;