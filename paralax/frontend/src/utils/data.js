// data.js
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiWebpack,
  SiGit,
} from "react-icons/si";

const personalDetails = {
  name: "Your Name",
  jobTitle: "Your Job Title (e.g., Full Stack Developer)",
  location: "City, Country",
  links: [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FaGithub />,
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      name: "Portfolio",
      url: "https://yourportfolio.com",
      icon: <FaGlobe />,
    },
    {
      id: 4,
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: <FaEnvelope />,
    },
    {
      id: 5,
      name: "Phone",
      url: "tel:+1234567890",
      icon: <FaPhone />,
    },
  ],
  about: `
    I am a highly motivated and skilled web developer with a passion for building modern, responsive web applications. 
    With expertise in the MERN stack, I enjoy solving problems and creating intuitive user experiences. 
    Always eager to learn and grow, I strive to stay up-to-date with the latest technologies.
  `,
};

const skills = [
  {
    id: 1,
    name: "JavaScript (ES6+)",
    icon: <SiJavascript />,
  },
  {
    id: 2,
    name: "React.js",
    icon: <SiReact />,
  },
  {
    id: 3,
    name: "Node.js",
    icon: <SiNodeDotJs />,
  },
  {
    id: 4,
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    id: 5,
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    id: 6,
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    id: 7,
    name: "CSS3",
    icon: <SiCss3 />,
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 9,
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    id: 10,
    name: "Webpack",
    icon: <SiWebpack />,
  },
  {
    id: 11,
    name: "Git & GitHub",
    icon: <SiGit />,
  },
];

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A fully responsive portfolio website with a 3D background, built using React, Three.js, and Tailwind CSS. Includes sections for showcasing projects, skills, and contact information.",
    image: "https://via.placeholder.com/300", // Replace with actual project image URL
    demo: "https://yourproject-demo.com",
    code: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A MERN stack-based e-commerce platform with user authentication, shopping cart functionality, and a fully integrated payment gateway.",
    image: "https://via.placeholder.com/300", // Replace with actual project image URL
    demo: "https://ecommerce-demo.com",
    code: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A modern blog platform built with React, Node.js, and MongoDB. Includes features like user authentication, post creation, and a comment system.",
    image: "https://via.placeholder.com/300", // Replace with actual project image URL
    demo: "https://blog-demo.com",
    code: "https://github.com/yourusername/blog",
  },
];

const contactInfo = {
  email: {
    text: "your.email@example.com",
    icon: <FaEnvelope />,
  },
  phone: {
    text: "+123 456 7890",
    icon: <FaPhone />,
  },
  message: "Feel free to reach out to me via email or phone!",
};

export { personalDetails, skills, projects, contactInfo };
