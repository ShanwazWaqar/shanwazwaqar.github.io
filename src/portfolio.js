/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shanwaz's Portfolio",
  description:
    "A Passionate Full Stack Developer Building Scalable, User-Centric, and High-Performance Web Applications.",
  og: {
    title: "Shanwaz Kotekanti Portfolio",
    type: "website",
    url: "http://ShanwazKotekanti.com/",
  },
};

//Home Page
const greeting = {
  title: "Shanwaz Kotekanti",
  logo_name: "ShanwazKotekanti",
  nickname: "shan",
  subTitle:
    "A Passionate Full Stack Developer Building Scalable, User-Centric, and High-Performance Web Applications.",
  resumeLink:
    "https://drive.google.com/file/d/1GqQJRfDLt0jjM950OyypgQH5EFfuN1MZ/view?usp=drive_link",
  portfolio_repository:
    "https://github.com/ShanwazWaqar/shanwazwaqar.github.io",
  githubProfile: "https://github.com/ShanwazWaqar",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ShanwazWaqar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shanwazwaqarkotekanti/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ShanwazKotekanti@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing scalable and responsive web applications using Angular and React.",
        "⚡ Designing and implementing REST APIs using Spring Boot and Node.js.",
        "⚡ Creating dynamic and user-friendly frontends using HTML5, CSS3, JavaScript, and TypeScript.",
        "⚡ Ensuring cross-browser compatibility and responsiveness using Bootstrap and Tailwind CSS.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: { color: "#DD0031" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: { color: "#339933" },
        },
      ],
    },
    {
      title: "Database Management",
      fileName: "DatabaseImg",
      skills: [
        "⚡ Managing and optimizing databases for high performance and scalability.",
        "⚡ Designing efficient schemas and writing optimized queries to reduce latency.",
        "⚡ Ensuring seamless integration of frontend and backend through database APIs.",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
      ],
    },
    {
      title: "Tools and Technologies",
      fileName: "ToolsImg",
      skills: [
        "⚡ Proficient in version control systems like Git and Bitbucket.",
        "⚡ Using JIRA for Agile project management and sprint planning.",
        "⚡ Implementing CI/CD pipelines for efficient development workflows.",
        "⚡ Conducting unit and integration testing using Karma, Jasmine, and JUnit.",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: { color: "#2684FF" },
        },
      ],
    },
    {
      title: "Testing and Quality Assurance",
      fileName: "TestingImg",
      skills: [
        "⚡ Ensuring application stability with rigorous unit and integration testing.",
        "⚡ Writing detailed test cases and improving test coverage.",
        "⚡ Identifying and resolving bugs to enhance application performance.",
      ],
      softwareSkills: [
        {
          skillName: "Karma",
          fontAwesomeClassname: "logos:karma",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "Jasmine",
          fontAwesomeClassname: "logos:jasmine",
          style: { color: "#8A4182" },
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "simple-icons:junit5",
          style: { color: "#25A162" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Shanwazk",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/shanw/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Karunya Institute of Technology and Sciences",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "Karunya.jpeg", // Replace with the correct logo path
      alt_name: "Karunya Institute",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Achieved 3rd rank in the entire Computer Science Department out of a batch of over 300 students.",
        "⚡ Maintained a consistently high GPA across all semesters, showcasing academic excellence.",
        "⚡ Studied core subjects such as Data Structures, Algorithms, Operating Systems, Databases, Web Development.",
        "⚡ Worked on impactful projects focusing on dynamic web applications, scalable systems, and database optimization.",
      ],
      website_link: "https://www.karunya.edu/",
    },
    {
      title: "University of Georgia",
      subtitle: "M.S. in Computer Science",
      logo_path: "UGA_logo.png", // Replace with the correct logo path
      alt_name: "University of Georgia",
      duration: "2022 - Present",
      descriptions: [
        "⚡ Focused on Full Stack Development, Software Engineering.",
        "⚡ Conducted research on IoT and Machine Learning applications, with a thesis on improving poultry health analysis using AI and IoT.",
        "⚡ Gained hands-on experience through advanced coursework in Algorithms, Data Structures.",
      ],
      website_link: "https://www.uga.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Angular - The Complete Guide (2024 Edition)",
      subtitle: "- Udemy",
      logo_path: "Udemy_logo.png", // Replace with the correct logo file name if needed
      certificate_link:
        "https://www.udemy.com/certificate/UC-6b532343-5851-4a66-b0ef-4018b19ae6f4/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      alt_name: "Udemy",
      skills: [
        "Angular",
        "TypeScript",
        "HTML5",
        "Web Development",
        "Debugging",
        "Reactive Web Development",
        "Single Page Application",
        "REST APIs",
        "Form Handling",
        "Data Binding",
        "Responsive Design",
        "State Management",
        "Angular CLI",
      ],
      color_code: "#A020F0", // Purple for Udemy
    },
    {
      title: "Java Spring Framework 6 with Spring Boot 3",
      subtitle: "- Udemy",
      logo_path: "Udemy_logo.png", // Replace with the correct logo file name if needed
      certificate_link:
        "https://www.udemy.com/certificate/UC-f5239b60-6363-4073-acaf-3294a420e791/",
      alt_name: "Udemy",
      skills: [
        "Spring Boot",
        "Java Database Connectivity (JDBC)",
        "Spring Data",
        "Spring Framework",
        "Spring AOP",
        "Spring MVC",
        "Spring Security",
        "Microservices",
        "Docker",
        "Git",
        "Cloud Computing (AWS, Azure)",
      ],
      color_code: "#FFDAB9", // Light Orange for Udemy
    },
    {
      title: "Spring Certified Professional 2024 [v2]",
      subtitle: "- Broadcom",
      logo_path: "Broadcom-logo.png", // Replace with the correct logo file name if needed
      certificate_link:
        "https://cp.certmetrics.com/vmware/en/public/verify/credential/4a2c7cba644940a68f90dfa845b4ba91",
      alt_name: "Broadcom",
      skills: [
        "Actuator",
        "Transaction Management",
        "RESTful Web Services",
        "Spring Boot",
        "Spring AOP",
        "Spring Data",
        "Spring Framework",
        "Spring Security",
        "Spring Developer",
        "Spring Boot Testing",
        "Spring Configuration",
        "Spring Professional",
        "Spring MVC",
        "Spring DAO",
        "Spring Actuator",
      ],
      color_code: "#FF6F61", // Soft Red for Broadcom
    },
    {
      title: "Angular (Basic)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png", // Replace with the correct logo file name if needed
      certificate_link: "https://www.hackerrank.com/certificates/9AB2C092C8D3",
      alt_name: "HackerRank",
      skills: ["Components", "Templates", "Services", "Data Binding"],
      color_code: "#2EC866", // HackerRank Green
    },
    {
      title: "Internship Certificate",
      subtitle: "- Accenture in India",
      logo_path: "Accenture-logo.png", // Replace with the correct logo file name if needed
      certificate_link:
        "https://drive.google.com/file/d/1q282zuE1O_xYlwqzQTTghlWHIhHkBLXL/view",
      alt_name: "Accenture",
      skills: [
        "Full-Stack Development",
        "Agile Methodologies (Scrum, Kanban)",
        "Spring Boot",
      ],
      color_code: "#6DB33F", // Accenture Green
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have extensive experience in full-stack development, collaborating with cross-functional teams to deliver impactful solutions across diverse domains. My contributions include implementing scalable systems, designing efficient APIs, optimizing performance, and mentoring teams to achieve organizational goals.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Java Full Stack Developer",
          company: "Accenture Solutions pvt ltd",
          company_url: "https://www.accenture.com/",
          logo_path: "Accenture_short.png",
          duration: "Sep 2022 - Jul 2022",
          location: "Bengaluru, India",
          description:
            "As a Java Full Stack Developer at Accenture, I was responsible for developing scalable, high-performing full-stack applications by leveraging frameworks such as Angular, React, and Spring Boot. My primary contributions included designing and implementing robust RESTful APIs and microservices to enhance the modularity, scalability, and maintainability of enterprise-level applications. Collaborating with cross-functional teams comprising developers, designers, and stakeholders, I ensured that all deliverables met stringent quality standards and were completed within the designated timelines." +
            "I optimized website performance significantly by implementing Angular's Lazy Loading concept, reducing load times and improving the user experience. To ensure the reliability and robustness of the applications, I conducted end-to-end quality assurance testing using Selenium, automating critical workflows to identify and resolve performance bottlenecks efficiently." +
            "In addition to technical contributions, I served as a Scrum Master for a team of four, where I facilitated sprint planning, daily stand-ups, and retrospectives, ensuring a smooth Agile development process. I also led efforts in defining project requirements, designing the database and user interface, and managing project backlogs to align with client expectations and business objectives. These leadership activities not only ensured the timely delivery of projects but also fostered a culture of collaboration and continuous improvement within the team." +
            "Through my role, I gained extensive experience in building user-centric applications, optimizing system performance, and aligning development efforts with organizational goals. My work at Accenture exemplified my ability to bridge the gap between business needs and technical solutions while driving innovation and delivering impactful results.",
          color: "#6DB33F",
        },
        {
          title: "Graduate Teaching Assistant",
          company: "University of Georgia",
          company_url: "https://www.uga.edu/",
          logo_path: "uga_logo_short.png",
          duration: "Aug 2022 - Present",
          location: "Athens, GA, USA",
          description:
            "As a Graduate Research Assistant at the University of Georgia, I conducted advanced research on IoT and Machine Learning applications for poultry health analysis, focusing on creating dynamic solutions for real-world challenges. " +
            "I developed keypoint detection models for broiler analysis, enabling precise identification of anatomical features and enhancing accuracy in data collection processes. " +
            "I implemented dynamic control systems for optimizing environmental conditions in poultry coops, ensuring improved animal welfare and operational efficiency. " +
            "Additionally, as a Teaching Assistant for the Cell Biology Lab, I delivered engaging lab instructions and mini-lectures to simplify complex biological concepts. " +
            "I collaborated with faculty and co-TAs to refine lab modules, introduced data management tools like Google Sheets for streamlined administrative processes, and mentored new TAs to improve lab operations. " +
            "My role also emphasized maintaining lab safety protocols, ensuring compliance with ethical and hazard-free practices.",
          color: "#CC0000",
        },
        // {
        //   title: "Student Worker",
        //   company: "Facilities Management Department, University of Georgia",
        //   company_url: "https://www.uga.edu/",
        //   logo_path: "uga_logo_short.png",
        //   duration: "Aug 2023 - Dec 2023",
        //   location: "Athens, GA, USA",
        //   description:
        //     "Worked on HVAC plan analysis for the facilities management department, contributing to data documentation and system optimization.",
        //   color: "#CC0000",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Accenture Solutions pvt ltd",
          company_url: "#",
          logo_path: "Accenture_short.png",
          duration: "Jan 2020 - APr 2020",
          location: "Remote",
          description:
            "During my internship at Accenture, I designed and implemented backend services utilizing Spring Boot and SQL, ensuring seamless interaction with Angular-based front-end applications. " +
            "I optimized REST API integrations, achieving a 25% reduction in latency through efficient caching mechanisms and asynchronous request handling. " +
            "I enhanced front-end interfaces by incorporating Bootstrap components, such as modals, cards, and navigation bars, to ensure cross-browser compatibility and mobile responsiveness. " +
            "My role involved conducting rigorous unit testing and troubleshooting to identify bottlenecks, optimize the codebase, and improve application performance. " +
            "I collaborated with team members during daily stand-ups to enhance software functionality, promoting efficient feature development and project planning. " +
            "Participating in detailed code review sessions, I ensured adherence to high-quality standards and reliability. " +
            "Additionally, I developed dynamic front-end components in React to simplify complex workflows using data visualization libraries. " +
            "I was awarded a certification from Accenture for demonstrating advanced proficiency in software development. " +
            "My contributions extended to building market-focused applications, collaborating effectively within team projects to meet industry standards. " +
            "Throughout my internship, I maintained a commitment to continuous learning, staying updated with the latest industry trends to deliver impactful project outcomes. " +
            "I also fostered strong professional relationships within the team, contributing to a supportive and collaborative environment.",
          color: "#FF9900",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "National Service Scheme Volunteer",
          company: "National Service Scheme, India",
          company_url: "https://nss.gov.in/",
          logo_path: "Karunya.png",
          duration: "2017 - 2019",
          location: "India",
          description:
            "Contributed over two years to community service initiatives under the National Service Scheme (NSS), actively participating in organizing health camps, blood donation drives, and awareness programs in rural areas. " +
            "Focused on improving public health and education by conducting workshops and campaigns on topics such as hygiene, nutrition, and environmental sustainability. " +
            "Collaborated with local authorities and volunteers to address community-specific challenges, fostering a spirit of teamwork and social responsibility. " +
            "These efforts not only enhanced community welfare but also developed my leadership and organizational skills, reinforcing a commitment to societal betterment.",
          color: "#0071C5",
        },
        {
          title: "Freelance Developer and System Designer",
          company: "Emerging Startup (India)",
          company_url: "#", // Placeholder as details are non-disclosable
          logo_path: "inprogres.jpg", // Replace with an appropriate logo
          duration: "2023 - Present",
          location: "Remote (India)",
          description:
            "Volunteering as the primary and first developer for an emerging startup in India, taking a leading role in designing and building their website. " +
            "Responsibilities include creating the system architecture, implementing both backend and frontend functionalities, and ensuring scalability for future growth. " +
            "Collaborate closely with the management team to understand business objectives, provide technical recommendations, and align development efforts with the startup’s vision. " +
            "The project involves end-to-end development, including system design, technical implementation, and operational planning, contributing to the startup's foundational growth. " +
            "Although unpaid, this role demonstrates a commitment to applying my technical expertise and leadership skills to drive impactful results in a dynamic environment.",
          color: "#FF5733", // Choose a unique color for this experience
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects demonstrate expertise in designing and implementing web applications using the latest technologies. From a Cinema E-Booking System to a versatile E-Commerce platform, I focus on creating scalable and user-friendly applications that solve real-world problems.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Linkedin_pic.jpg",
    description:
      "I am highly active on LinkedIn and available via email for professional connections and inquiries. Feel free to reach out, and I will respond within 24 hours.I am here to assist you with Angular, React, Spring, or any other front-end technologies. Feel free to reach out with your queries or projects!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "1000 Lakeside Dr, Athens, Georgia, USA 30605",
    locality: "Athens",
    country: "USA",
    region: "Georgia",
    postalCode: "30605",
    streetAddress: "1000 Lakeside Dr",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Lakeside+Dr,+Athens,+GA+30605/@33.9147706,-83.374935,17z/data=!3m1!4b1!4m6!3m5!1s0x88f66c4c67281409:0x6a0b7e1b142b3077!8m2!3d33.9147706!4d-83.374935!16s%2Fg%2F1tdh4qjd?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
