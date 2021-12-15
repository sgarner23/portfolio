import emoji from "react-easy-emoji";

export const greetings = {
  name: "Stephen Garner",
  title: "Hi all, I'm Stephen",
  description:
    "A passionate Full Stack Web Developer with experience in building Web applications with JavaScript / Reactjs / Nodejs / Typescript / Postgres and some other cool libraries and frameworks.",
  resumeLink: "",
};

export const openSource = {
  githubUserName: "sgarner23",
};

export const contact = {};

export const socialLinks = {
  facebook: "",
  instagram: "https://www.instagram.com/stephen_g13/",
  twitter: "",
  github: "https://github.com/sgarner23",
  linkedin: "https://www.linkedin.com/in/stephen-garner-682357b7/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Utilize React to manage data on state and build interactive SPAs"
    ),
    emoji(
      "⚡ Able to build full stack CRUD applications from start to finish with REST APIs and user authentication"
    ),
    emoji("⚡ Database design and data management"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },

    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "logos:aws",
    // },

    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "React", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "CSS", //Insert stack or technology you have experience in
    progressPercentage: "95", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "85",
  },
  {
    Stack: "Programming",
    progressPercentage: "85",
  },
];

export const educationInfo = [
  {
    schoolName: "DevMountain",
    subHeader: "Certificate of Web Development",
    duration: "August 2021 - December 2021",
    desc: "Full time immersive web development program focusing on React, Node, Postgres, REST APIs, Testing, Practical Computer Science Concepts, QA, Security Issues, and Data Manipulation",
    descBullets: [
      "Completed 2 full stack applications: Business Invoicing Software, Weather Application",
      "Exposure to test driven development",
      "Learned multiple devops and computer science concepts",
      "Gained tremendous experience in practical application of coding and building functional software",
    ],
  },
  {
    schoolName: "Weber State University",
    subHeader: "B.S. Computer Science",
    duration: "September 2017 - present",
    desc: "Pursuing second degree. Studying OOP, Java, C++, CS theory, and Database Design",
    descBullets: ["3.7 GPA in CS coursework"],
  },
  {
    schoolName: "Weber State University",
    subHeader: "B.S. Social Sciences",
    duration: "September 2010 - April 2014",
    desc: "Graduated cum laude with minor in foreign language",
    descBullets: ["Awarded departmental honors", "Study abroad in Costa Rica"],
  },
];

export const experience = [
  {
    role: "Epic React Course",
    company: "Advanced React Patterns",
    companylogo: "/img/icons/common/react-logo.png",
    // date: "November 2021 – Present",
    desc: "Invested in Kent C. Dodds Epic React Course and currently studying Advanced React Patterns. Skills taught in this course help you know which pattern to reach for to provide custom hooks and components the power you need them to have.",
    descBullets: [
      "Context Module Functions",
      "Compound Componnets",
      "Prop Collections and Getters",
      "State Reducer",
      "Control Props",
    ],
  },
  {
    role: "Udemy",
    company: "Typescript",
    companylogo: "/img/icons/common/typescript.png",
    // date: "May 2017 – May 2018",
    desc: "Taking Stephen Grider's Udemy course on Typescript with React and Express. ",
    descBullets: [
      "Design pattterns for large applications",
      "Integrating Typescript into React/Redux or Express",
      "Writing reusable code powered by classes and interfaces",
    ],
  },
  {
    // role: "",
    company: "Material UI",
    companylogo: "/img/icons/common/material-ui.png",
    // date: "Jan 2015 – Sep 2015",
    desc: "Material UI is a CSS library of React-based components that can be used to create user interfaces in React applications",
  },
];

export const projects = [
  {
    name: "IOU Tracker",
    img1: "/img/icons/common/iou-mac.png",
    img2: "/img/icons/common/iou-mobile.png",
    url: "http://iou-tracker.stephen-garner.com/login",
    desc: "IOU Tracker is a fullstack CRUD small business invoicing app. I've watched family members and friends that own small businesses try tracking everything on paper and sticky notes scattered across their desk. IOU Tracker allows you to digitalize a log of all invoices to easily track, update, and reference. Technologies used: React, Context API for global state, Express, Node, Postgres, JWT for protected endpoints and user authentication, Bcrypt for password encryption, MassiveJS, Heroku, Axios, React Router Dom V6 for protected routes and routing, and CSS responsive design with media queries. Client code linked below, and server code available in my GitHub repos.",
    github: "https://github.com/sgarner23/iou-tracker-client",
    link: "https://www.youtube.com/watch?v=IOuHeii0aU0&t=4s",
  },
  {
    name: "Dev Finder",
    img1: "/img/icons/common/dev-finder-mac.png",
    img2: "/img/icons/common/dev-finder-mobile.png",
    url: "https://dev-finder.stephen-garner.com/",
    desc: "Practiced working with public API's by pulling profile data from GitHub's REST API. User can search any GitHub username and see their profile information displayed on the card. I practiced CSS skills by making desktop, tablet, and mobile views. Technologies used: React, GitHub REST API, Styled Components to toggle light and dark mode, Axios, and media queries, Heroku for deployment.",
    github: "https://github.com/sgarner23/dev-searcher",
    link: "https://www.youtube.com/watch?v=HciY595mDzE",
  },

  {
    name: "JavaScript Calculator",
    img1: "/img/icons/common/calculator.png",
    url: "https://js-calculator-sjjzm.ondigitalocean.app/",
    desc: "I wanted to put my JS logic skills to the test and build a calculator app. Users can perform all basic operations, clear the screen, and continue equations based on previous answer. Technologies used: Javascript for logic and DOM manipulation, CSS and CSS Grid, and HTML",
    github: "https://github.com/sgarner23/JS-calculator",
    link: "https://www.youtube.com/watch?v=DMuQDXZFsmg",
  },
  {
    name: "Webscraper",
    img1: "https://media.istockphoto.com/vectors/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-vector-id1221240925?k=20&m=1221240925&s=612x612&w=0&h=HX77CIwJ34u7qUMpI_W5z4dDnEbHGv66mGXVTpIccv8=",
    desc: "Currently working on an app to help me find a new apartment to move to. This app will allow users to login, save their search criteria, and then the server leverages the Puppeteer library to scrape apartment listings on the web and send an email to the user each day on new apartments that were listed within their criteria. Currently the server is able to fully scrape Craigslist for apartment listenings and return all new apartments listed. Excited to get this project fully running and deployed! You can check out my progress on Github",
    github: "https://github.com/sgarner23/webscraper",
  },
];

export const feedbacks = [
  {
    name: "",
    feedback: "",
  },
  {
    name: "",
    feedback: "",
  },
];
