import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [showEnroll,setShowEnroll] = useState(false);
const [selectedCourse,setSelectedCourse] = useState(null);
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/courses"
        element={<Courses />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

    </Routes>
  );
}

export default App;