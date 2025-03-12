import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import personImage from "../assets/testimonial.jpg";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
  RiCodeLine,
  RiTerminalLine,
  RiServerLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Lakshan Jayaweera",
  role: "Front End Developer",
  subheading:
    "Passionate Front-End Developer Dedicated to Creating Seamless and Engaging Web Interfaces.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Food ordering web application",
    description:
      "Developed a comprehensive food ordering web application, 'Tomato,' enabling users to seamlessly browse menus, place orders, and manage their delivery information.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project1,
    link: "https://github.com/LakshanJayaweera426/Full-Stack-Food-Delivery-Application-with-MERN",
  },
  {
    id: 2,
    title: "E-commerce web application",
    description:
      "The application is named SHOPPER and offers a user-friendly interface for browsing and purchasing products.  It includes features for different user roles, customers and administrators.  ",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project2,
    link: "https://github.com/LakshanJayaweera426/Full-Stack-E-commerce-web-aplication-with-MERN",
  },
  {
    id: 3,
    title: "E-commerce web application",
    description:
      "This Django project appears to be an e-commerce application focused on selling dairy or food products. It includes features for product management, customer accounts, shopping carts, order placement, payment processing, and wishlists.",
    techStack: ["Python", "Django"],
    imgSrc: project3,
    link: "https://github.com/LakshanJayaweera426/Ecommerce-Web-Application",
  },
  {
    id: 4,
    title: "Student Registration System",
    description:
      "This web application allows students to register for university online, using HTML, CSS, JS for the frontend, PHP for the backend, Bootstrap for the framework, and MySQL for the database.",
    techStack: ["HTML 5", "CSS", "JavaScript", "PHP", "MySQL"],
    imgSrc: project4,
    link: "https://github.com/LakshanJayaweera426/Student-Registration-System",
  },
  {
    id: 5,
    title: "Real-Time Face Detection Application",
    description:
      "Real-time face detection program using OpenCV & python. Updating the timer as long as a face was continuously detected.",
    techStack: ["Python", "OpenCV"],
    imgSrc: project5,
    link: "https://github.com/LakshanJayaweera426/Real-Time-Face-Detection-Application",
  },
  {
    id: 6,
    title: "Weather Application",
    description:
      "A Weather App for Website using HTML CSS and JavaScript. We will get the current weather data from Fess API fey from OpenWeatherMap and display the weather information like Temperature, Weather condition, Humidity and Wind Speed according to the city on our website or app.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project6,
    link: "https://github.com/LakshanJayaweera426/Weather-Application",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Python",
    icon: <RiCodeLine className="text-blue-500" />,
  },
  {
    name: "Django",
    icon: <RiServerLine className="text-green-500" />,
  },
  {
    name: "Java",
    icon: <RiTerminalLine className="text-red-500" />,
  },
  {
    name: "Spring Boot",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "PHP",
    icon: <RiCodeLine className="text-purple-500" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Feb 2024 - Aug 2024",
    role: "Full Stack Developer (Internship)",
    company: "Unify IT Solutions",
    description:
      "Full Stack Development Intern at Unify IT Solutions, utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) to develop and maintain responsive web applications. Contributed to both front-end and back-end development, ensuring a seamless user experience and efficient data management.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB", "Express.js "],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Information Communication Technology (honours)",
    institution: "University of Jaffna",
    duration: "Sep 2020 - Feb 2025",
    description:
      "I graduated with honors in Information Communication Technology, specializing in algorithms, data structures, and web development. As part of my degree program, I completed a 6-month internship, gaining hands-on experience in applying theoretical knowledge to real-world projects. Additionally, I conducted research that further enhanced my understanding of cutting-edge technologies, equipping me with a strong foundation for solving complex problems and building innovative solutions.",
  },
];

export const TESTIMONIAL = {
  name: "Samadhi Gunawardena",
  title: "Senior web developer, Unify IT Solutions",
  quote:
    "Working with Lakshan was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
