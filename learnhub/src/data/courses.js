import reactImg from '../assets/images/react.jpg';
import nodejsImg from '../assets/images/nodejs.jpg';
import pythonImg from '../assets/images/python.jpg';
import uiuxImg from '../assets/images/ui_ux.jpg';

const courses = [
  {
    id: 1,
    image: reactImg,
    title: "React for Beginners",
    instructor: "John Doe",
    duration: "8 Hours",
    rating: "4.8",
    price: "₹499",
  },
  {
    id: 2,
    image: nodejsImg,
    title: "Node.js Essentials",
    instructor: "Emma Smith",
    duration: "10 Hours",
    rating: "4.7",
    price: "₹599",
  },
  {
    id: 3,
    image: pythonImg,
    title: "Python Programming",
    instructor: "Michael Lee",
    duration: "12 Hours",
    rating: "4.9",
    price: "₹699",
  },
  {
    id: 4,
    image: uiuxImg,
    title: "UI/UX Design",
    instructor: "Olivia Brown",
    duration: "6 Hours",
    rating: "4.6",
    price: "₹399",
  },
];

export default courses;