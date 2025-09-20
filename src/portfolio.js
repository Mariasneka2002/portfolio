/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename if you have a custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set false to use static SVG
};

const greeting = {
  username: "Maria Sneka",
  title: "Hi all, I'm Maria",
  subTitle: emoji(
    "A passionate Full Stack Developer with experience in building Web and Mobile applications using JavaScript, React.js, Node.js, and other cool technologies."
  ),
  resumeLink: "https://drive.google.com/file/d/1AQ3BfxYuJtXYRDgT2mOxTAcqUekdyyLY/view?usp=sharing", // Add Google Drive link to your resume
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Mariasneka2002",
  linkedin: "https://www.linkedin.com/in/mariasneka2002",
  gmail: "mariasneka2002@gmail.com",
  medium: "https://medium.com/@mariasneka2002",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO EXPLORE TECH",
  skills: [
    emoji("⚡ Develop highly interactive Frontend / User Interfaces"),
    emoji("⚡ Build Progressive Web Applications (PWA)"),
    emoji("⚡ Integrate third party services like Firebase / AWS")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Material UI", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    // { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress" },
    { skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "SQL Database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "DMI engineering college",
      // logo: require("./assets/images/stanfordLogo.png"),
      logo: require("./assets/images/anna_uni_logo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2020 - 2024",
      desc: "Studied core computer science subjects and worked on multiple projects.",
      descBullets: ["Web Development", "Data Structures & Algorithms"]
    }
  ]
};

// Proficiency Section
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true, // Set to true if you want to show
  experience: [
    {
      role: "Software  Developer",
      company: "RV Systems Pvt Ltd",
      companylogo: require("./assets/images/rv_logo.png"),
      date: "August 2025 – Present",
      desc: "Develop and maintain applications using Angular for frontend and Python APIs/backends for server-side logic. Manage SQL and MongoDB databases, build and integrate WordPress websites, and optimize system performance. Collaborate with cross-functional teams to deliver scalable, secure, and user-friendly solutions."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Fullstack Developer",
      company: "AgileTribers Tech Solutions",
      companylogo: require("./assets/images/agiletribers_logo.jpg"),
      date: "May 2024 – August 2025",
      desc: "I build scalable web applications using the MERN stack, create responsive UIs with React.js and Material-UI, and develop secure backends with Node.js and Express. I also manage MongoDB/MySQL databases and collaborate in agile teams to deliver client-focused solutions."
    },
    {
      role: "Software Developer",
      company: "Karka Software Academy",
      companylogo: require("./assets/images/karka-logos.jpg"),
      date: " Nov 2023 – May 2024",
      desc: "I develop and deploy full-stack applications using the MERN stack, design responsive front-end interfaces with React.js, and build RESTful APIs with Node.js and Express. I manage databases with MongoDB/MySQL, collaborate on projects with Git/GitHub and agile practices, and mentor students through training modules and practical coding tasks in modern web technologies."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Big Projects
const bigProjects = {
  title: "Projects",
  subtitle: "Some of my key projects",
  projects: [
    {
      image: require("./assets/images/portfolio.png"),
      projectName: "Portfolio Website",
      projectDesc: "Personal portfolio built with React.js and hosted on GitHub Pages",
      footerLink: [
        { name: "View Project", url: "https://github.com/Mariasneka2002" }
      ]
    },
    {
      image: require("./assets/images/AI_Chat_bot.png"),
      projectName: "AI Chat Bot",
      projectDesc: "Personal AI Chat BOt built with Python and hosted on GitHub Pages",
      footerLink: [
        { name: "View Project", url: "https://github.com/Mariasneka2002" }
      ]
    },
    {
      image: require("./assets/images/portfolio.png"),
      projectName: "Portfolio Website",
      projectDesc: "Personal portfolio built with React.js and hosted on GitHub Pages",
      footerLink: [
        { name: "View Project", url: "https://github.com/Mariasneka2002" }
      ]
    },
    {
      image: require("./assets/images/AI_Chat_bot.png"),
      projectName: "AI Chat Bot",
      projectDesc: "Personal AI Chat BOt built with Python and hosted on GitHub Pages",
      footerLink: [
        { name: "View Project", url: "https://github.com/Mariasneka2002" }
      ]
    }
  ],
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Certifications and Awards",
  achievementsCards: [
    {
      title: "Java Certification",
      subtitle: "Certified in Java Programming",
      image: require("./assets/images/certificate.jpeg"),
      imageAlt: "Java Logo",
      footerLink: []
    },
    {
      title: "Java Certification",
      subtitle: "Certified in Java Programming",
      image: require("./assets/images/certificate.jpeg"),
      imageAlt: "Java Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "I love writing and sharing my knowledge.",
  displayMediumBlogs: false, // ✅ FIXED (boolean not string)
  blogs: [
    {
      url: "https://medium.com/@mariasneka2002",
      title: "Why React is the Best?",
      description: "A blog explaining why React dominates frontend development."
    }
  ],
  display: true
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: "Sharing knowledge through sessions",
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love discussing technology",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just say hi!",
  // number: "+91-7539965838",
  email_address: "snekamariadas@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
