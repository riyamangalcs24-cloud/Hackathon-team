# LearnHub – Online Course Platform

LearnHub is a responsive React-based frontend prototype for an online learning platform. It allows users to browse courses, learn about the platform, and contact the team through an interactive form.

---

## Features

### Home Page
- Responsive Navbar with navigation links
- Hero section with search bar
- Explore Courses button
- Feature cards rendered using `.map()`
- Benefits section
- Categories section
- Testimonials section
- Footer

### Courses Page
- Dynamic course cards
- Search courses
- FAQ accordion using `useState`
- Course details including instructor, duration, rating, and price

### About Page
- Mission and Vision
- Team members rendered using `.map()`
- Company timeline

### Contact Page
- Controlled contact form
- JavaScript validation
- Success message after submission

---

## Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6)
- CSS
- HTML5

---

## React Concepts Used

- Functional Components
- useState
- useEffect
- React Router DOM
- Props
- Component-based Architecture
- Conditional Rendering
- Event Handling (`onClick`, `onChange`, `onSubmit`)
- Dynamic Rendering using `.map()`

---

## Folder Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── FeatureCard/
│   ├── CourseCard/
│   ├── CategoryCard/
│   ├── BenefitCard/
│   ├── TestimonialCard/
│   ├── TeamCard/
│   ├── FAQ/
│   ├── ContactForm/
│   └── Footer/
│
├── data/
│   ├── courses.js
│   ├── features.js
│   ├── categories.js
│   ├── testimonials.js
│   ├── faq.js
│   └── team.js
│
├── pages/
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository

```bash
git clone <repository-link>
```

Go to the project folder

```bash
cd LearnHub
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:5173
```

---

## Future Improvements

- Login and Signup Popup
- Course Enrollment Form
- Responsive Enhancements
- Better Course Images
- Backend Integration
- User Authentication

---

## Author

**Dhruv**

B.Tech CSE Student

React Frontend Project

---

## License

This project is created for educational and learning purposes only.
