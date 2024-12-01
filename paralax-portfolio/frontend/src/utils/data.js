import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

const about = {
  description: `
    I am a highly motivated and skilled web developer with a passion for building modern, responsive web applications. 
    With expertise in the MERN stack, I enjoy solving problems and creating intuitive user experiences. 
    Always eager to learn and grow, I strive to stay up-to-date with the latest technologies.
  `,
};

const personalDetails = {
  name: "Linh Nguyen",
  jobTitle:
    "Officially Project Manager | Cloud Rookie |  Software Developer because it is fun ",
  location: "Berlin, Germany",
  links: [
    {
      id: "1",
      name: "GitHub",
      url: "https://github.com/jakuzzibubbles/",
      icon: FaGithub,
    },
    {
      id: "2",
      name: "LinkedIn",
      url: "https://linkedin.com/in/jakuzzi263/",
      icon: FaLinkedin,
    },
    {
      id: "3",
      name: "Portfolio",
      url: "https://jakuzzibubbles-portfolio.vercel.app/",
      icon: FaGlobe,
    },
    {
      id: "4",
      name: "Email",
      url: "mailto:jakuzzi263@icloud.com",
      icon: FaEnvelope,
    },
  ],
};

const skills = [
  {
    id: "1",
    name: "JavaScript (ES6+)",
    icon: SiJavascript,
  },
  {
    id: "2",
    name: "React.js",
    icon: SiReact,
  },
  {
    id: "3",
    name: "Node.js",
    icon: IoLogoNodejs,
  },
  {
    id: "4",
    name: "Express.js",
    icon: SiExpress,
  },
  {
    id: "5",
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    id: "6",
    name: "HTML5",
    icon: SiHtml5,
  },
  {
    id: "7",
    name: "CSS3",
    icon: SiCss3,
  },
  {
    id: "8",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    id: "9",
    name: "Git & GitHub",
    icon: SiGit,
  },
];

const projects = [
  {
    id: "1",
    title: "Portfolio 1",
    description:
      "I focused on creating a responsive design that provides an optimal viewing experience across various devices. By leveraging CSS frameworks and techniques like Flexbox and Grid, I made sure that my website was not only visually appealing but also user-friendly.",
    image: "/src/assets/portfolio1.png",
    demo: "https://jakuzzibubbles-portfolio.vercel.app/",
    code: "https://github.com/jakuzzibubbles/portfolio-react",
  },
  {
    id: "2",
    title: "Full Stack App",
    description:
      "The Travel App is a MERN stack platform where users can securely log in, create, view, and manage travel stories with descriptions and images. It features personalized user dashboards, token-based authentication, safe data storage, and backend API management.",
    image: "/src/assets/travel-app.png",
    demo: "https://jakuzzibubbles.github.io/TravelStory-App/",
    code: "https://github.com/jakuzzibubbles/TravelStory-App",
  },

  {
    id: "3",
    title: "Memory Game",
    description:
      "This is a React-based memory card game where players must click each food item only once. The game features randomized item order, score tracking, and a styled UI with a dynamic grid and modal popups.",
    image: "/src/assets/memory-card.png",
    demo: "https://the-odin-project-mu.vercel.app/",
    code: "https://github.com/jakuzzibubbles/the-odin-project/tree/master/memory-card",
  },
];


export { about, skills, projects, personalDetails };
