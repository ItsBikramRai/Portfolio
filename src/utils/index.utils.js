import kinmel from "../media/kinmel.png";
import OAuthGoogle from "../media/oauth.png";
import portfolio from "../media/portfolio-website.png";
import weather_widget from "../media/weather-widget.png";

export const HERO_CONTENT = `Crafting efficient and user-friendly web applications with a passion for full stack development.`;

export const ABOUT_TEXT = `I'm Bikram Rai, an aspiring Full Stack Developer passionate about crafting dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, including JavaScript, Node.js, MongoDB, React, HTML, CSS, Bootstrap, and Tailwind CSS. I'm eager to bring my skills to the professional world and contribute to innovative projects. Committed to continuous learning and excited to collaborate with experienced teams, I'm ready to build impactful solutions and explore new challenges. Let's connect and discover how we can work together!.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    
//   },
// ];

export const PROJECTS = [
  
  {
    title: "Kinmel Website",
    image: kinmel,
    description:
      "Kinmel is an e-commerce website built for the Nepal market. It allows users to browse products, filter by category and price, and add items to their cart. This project was developed as part of a portfolio to demonstrate full-stack development skills, focusing on a seamless shopping experience.",
      
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Bootstrap"],
    link:"https://kinmel.onrender.com",
    github:"https://github.com/ItsBikramRai/Kinmel"
  },
  {
    title: "AuthPlus: Google and Email-Based Authentication",
    image: OAuthGoogle,
    description: 
      "AuthPlus is a robust authentication platform designed to manage user login, signup, password reset, and email verification. This platform supports both **Google OAuth** and **manual authentication** methods, giving users the flexibility to log in using their Google account or with their email and password. With seamless integration of **Passport.js**, users can securely sign up, verify their email, and reset forgotten passwords with ease. Whether it's for a web application or service, AuthPlus provides a reliable, secure, and customizable authentication solution.",
    technologies: ["Node.js", "Express", "MongoDB", "Passport.js", "Tailwind", "OAuth 2.0"],
    link:"https://google-oauth-blush.vercel.app",
    github:"https://github.com/ItsBikramRai/googleAuth"
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. This website serves as a platform to highlight my work and demonstrate my abilities as a web developer.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link:"https://bikram-rai.com.np",
    github:"https://github.com/ItsBikramRai/Portfolio"
    
  },

  {
    title: "Weather Widget",
    description: "Weather Widget is a simple and responsive weather application built using React. It allows users to search for real-time weather data of any location using an external weather API.",
    image: weather_widget,
    technologies: ["HTML", "CSS", "React"],
    link:"https://weather-widget-zeta-steel.vercel.app",
    github:"https://github.com/ItsBikramRai/weather-widget"
  },
];


//contact 
export const CONTACT = {
  address: "Kathmandu, Nepal ",
  // phoneNo: "+9779863963772",
  email: "raibikraminfo@gmail.com",
};
