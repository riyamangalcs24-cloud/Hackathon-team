import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">

      <img
        src={course.image}
        alt={course.title}
      />

      <h3>{course.title}</h3>

      <p>Instructor: {course.instructor}</p>

      <p>Duration: {course.duration}</p>

      <p>⭐ {course.rating}</p>

      <h4>{course.price}</h4>

      <button>
        Enroll Now
      </button>

    </div>
  );
}

export default CourseCard;