# LearnHub - Online Learning Platform

A modern, responsive React-based online learning platform built with Vite, showcasing courses, pricing plans, testimonials, and a comprehensive contact form.

## 🌟 Features

### ✅ Core Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **React Functional Components** - Built with modern React hooks (useState, useEffect)
- **React Router DOM** - Multi-page navigation (Home, Courses, About, Contact)
- **Component-Based Architecture** - Modular and reusable components
- **Search Functionality** - Search courses in real-time
- **Form Validation** - Inline error messages for better UX

### 📚 Pages

#### Home Page
- **Navbar** - Navigation with active links and login button
- **Hero Section** - Eye-catching banner with search box
- **Feature Cards** - 4 key features of LearnHub
- **Categories** - Top course categories
- **Benefits Section** - Why choose LearnHub
- **Testimonials** - Student reviews and feedback
- **Footer** - Links and information

#### Courses Page
- **Course Overview** - Heading and description
- **Search Box** - Filter courses by title
- **Course Cards** - Dynamic course listing with details
- **Pricing Plans** - 3 subscription tiers (Basic, Standard, Pro)
- **Testimonials** - Student feedback section
- **FAQ Accordion** - Frequently asked questions

#### About Page
- **Mission & Vision** - Platform objectives
- **Team Cards** - Meet the team members
- **Timeline** - Company milestones

#### Contact Page
- **Contact Form** with:
  - Full Name (required)
  - Email (required, with validation)
  - Phone (required)
  - Course Selection (required)
  - Preferred Start Date
  - Learning Mode (Radio: Online/Offline/Hybrid)
  - Interests (Checkboxes: React, Node.js, Python, UI/UX)
  - Message
  - Submit & Reset buttons
- **Inline Validation** - Error messages below fields
- **Success Message** - Confirmation with SuccessMessage component

### 🎯 Additional Features
- **Enroll Popup** - Modal for course enrollment
- **Login Popup** - Toggle between Login and Sign Up
- **Mobile-Optimized** - Full responsive design with media queries
- **Smooth Animations** - Hover effects and transitions

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with media queries
- **JavaScript ES6+** - Modern JavaScript

## 📁 Folder Structure

```
learnhub/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── react.jpg
│   │   │   ├── nodejs.jpg
│   │   │   ├── python.jpg
│   │   │   └── ui_ux.jpg
│   │   ├── react.svg
│   │   └── hero.png
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Footer/
│   │   ├── CourseCard/
│   │   ├── FeatureCard/
│   │   ├── CategoryCard/
│   │   ├── BenefitCard/
│   │   ├── PricingCard/
│   │   ├── TestimonialCard/
│   │   ├── TeamCard/
│   │   ├── FAQ/
│   │   ├── ContactForm/
│   │   ├── SuccessMessage/
│   │   ├── EnrollForm/
│   │   └── LoginPopup/
│   ├── data/
│   │   ├── courses.js
│   │   ├── features.js
│   │   ├── categories.js
│   │   ├── team.js
│   │   ├── testimonials.js
│   │   ├── faq.js
│   │   └── pricing.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📋 Project Requirements Met

✅ **React Functional Components** - All components are functional with hooks  
✅ **useState** - Used for state management across all pages  
✅ **useEffect** - Set document title on Home page  
✅ **React Router DOM** - Multi-page navigation implemented  
✅ **Component-Based Architecture** - Modular structure with reusable components  
✅ **Props** - Data passed to components via props  
✅ **Git/GitHub** - Project committed with meaningful messages  
✅ **Responsive Design** - Media queries for 1024px, 768px, and 480px breakpoints  

### Contact Form Features
✅ Name field (required)  
✅ Email field (required, with validation)  
✅ Phone field (required)  
✅ Course dropdown (required)  
✅ Preferred Start Date (date input)  
✅ Learning Mode (radio buttons: Online, Offline, Hybrid)  
✅ Interests (checkboxes: React, Node.js, Python, UI/UX)  
✅ Message textarea  
✅ Submit button  
✅ Reset button  
✅ Inline validation messages  
✅ Success message component  

### Courses Page Features
✅ Course overview heading  
✅ Dynamic course rendering  
✅ Search functionality  
✅ FAQ accordion  
✅ Pricing cards (3 tiers)  
✅ Testimonials section  

### About Page Features
✅ Mission & Vision sections  
✅ Team member cards  
✅ Timeline  

### Home Page Features
✅ Navbar with active links  
✅ Hero section with search  
✅ Feature cards  
✅ Benefits section  
✅ Testimonials  
✅ Footer  

## 🎨 Styling Features

- **Responsive Grid Layouts** - Uses CSS Grid with auto-fit
- **Flexbox** - For flexible component layouts
- **Media Queries** - Breakpoints at 1024px, 768px, 480px
- **Hover Effects** - Interactive button and card transitions
- **Color Scheme** - Professional blue (#2563eb) accent color
- **Typography** - Clean and readable font sizing

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (full layout)
- **Tablet**: 768px - 1023px (adjusted padding, single column for grids)
- **Mobile**: Below 768px (stacked layout, optimized spacing)
- **Small Mobile**: 480px and below (compact design, smaller text)

## 🔧 Customization

### Adding a New Course
Edit `src/data/courses.js`:
```javascript
{
  id: 5,
  image: require('../assets/images/new-course.jpg'),
  title: "Course Title",
  instructor: "Instructor Name",
  duration: "X Hours",
  rating: "4.X",
  price: "₹XXX",
}
```

### Changing Colors
Update color references in CSS files (primary color: `#2563eb`)

### Adding FAQ Items
Edit `src/data/faq.js` with new questions and answers

## 📊 Performance

- **Optimized Bundle Size** - Vite provides fast builds
- **Code Splitting** - React Router enables route-based code splitting
- **Image Optimization** - Uses local images with proper sizing
- **CSS Organization** - Separate CSS files for each component

## 🚀 Future Enhancements

- [ ] Backend API integration for course data
- [ ] User authentication and profiles
- [ ] Payment gateway integration
- [ ] Course progress tracking
- [ ] Live chat support
- [ ] Video lectures player
- [ ] Certificates generation
- [ ] Discussion forum

## 👥 Team

- **Founder**: John Smith
- **UI/UX Designer**: Emma Johnson  
- **Lead Instructor**: Michael Brown

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by LearnHub Team**
