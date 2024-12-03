import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaCloud,
  FaProjectDiagram
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
import { GiSprint } from "react-icons/gi";
import TravelApp from "/assets/travel-app.png"; 
import Portfolio from "/assets/portfolio1.png";
import MemoryGame from "/assets/memory-card.png";

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
      name: "Email",
      url: "mailto:jakuzzi263@icloud.com",
      icon: FaEnvelope,
    },
  ],
};

const skills = [
  {
    id: "1",
    title: "JavaScript",
    icon: SiJavascript,
    comment:
      "Mastering JavaScript—transforming ideas into interactive, dynamic features!",
  },
  {
    id: "2",
    title: "React",
    icon: SiReact,
    comment:
      "Building interactive UIs that keep users engaged—like a good book!",
  },
  {
    id: "3",
    title: "NodeJs",
    icon: IoLogoNodejs,
    comment:
      "Creating efficient backends that handle requests with ease and speed!",
  },
  {
    id: "4",
    title: "Express",
    icon: SiExpress,
    comment:
      "Building powerful web servers that deliver smooth, real-time experiences!",
  },
  {
    id: "5",
    title: "MongoDB",
    icon: SiMongodb,
    comment:
      "Managing data like a pro—keeping everything organized, even when it wants to party!",
  },
  {
    id: "6",
    title: "HTML5",
    icon: SiHtml5,
    comment: "Building the web, one semantic tag at a time!",
  },
  {
    id: "7",
    title: "CSS3",
    icon: SiCss3,
    comment:
      "Styling the web with precision—making every pixel count!",
  },
  {
    id: "8",
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    comment: "Building UI components with ease—Tailwind is my CSS superhero!",
  },
  {
    id: "9",
    title: "Git & GitHub",
    icon: SiGit,
    comment:
      "Version control made simple—keeping code organized and collaborative!",
  },
  {
    id: "10",
    icon: FaCloud,
    title: "Cloud Computing",
    comment: "Transforming clouds into seamless solutions—no rainy days here!",
  },
  {
    id: "12",
    icon: FaProjectDiagram,
    title: "Digital Project Management",
    comment:
      "Guiding projects to success while keeping the team engaged and motivated.",
  },
  {
    id: "13",
    icon: GiSprint,
    title: "Agile Methodologies & Scrum",
    comment:
      "Embracing agility like a pro—quick on my feet and faster with coffee!",
  },
];

const projects = [
  {
    id: "1",
    title: "Full Stack App",
    description:
      "The Travel App is a MERN stack platform where users can securely log in, create, view, and manage travel stories with descriptions and images. It features personalized user dashboards, token-based authentication, safe data storage, and backend API management.",
    image: TravelApp,
    demo: "https://jakuzzibubbles.github.io/TravelStory-App/",
    code: "https://github.com/jakuzzibubbles/TravelStory-App",
  },
  {
    id: "2",
    title: "Portfolio 1",
    description:
      "I focused on creating a responsive design that provides an optimal viewing experience across various devices. By leveraging CSS frameworks and techniques like Flexbox and Grid, I made sure that my website was not only visually appealing but also user-friendly.",
    image: Portfolio,
    demo: "https://jakuzzibubbles-portfolio.vercel.app/",
    code: "https://github.com/jakuzzibubbles/portfolio-react",
  },
  {
    id: "3",
    title: "Memory Game",
    description:
      "This is a React-based memory card game where players must click each food item only once. The game features randomized item order, score tracking, and a styled UI with a dynamic grid and modal popups.",
    image: MemoryGame,
    demo: "https://the-odin-project-mu.vercel.app/",
    code: "https://github.com/jakuzzibubbles/the-odin-project/tree/master/memory-card",
  },
];


export { skills, projects, personalDetails };
