import aimockdata from "aimockdata";
import scrapJob from "./scrapFromDescription.js";
import { postDataToGoogleDocs } from "./postDataToGoogleDocs.js";

const coverLetterFromDescription = async (data) => {
  var number = 1;
  var jd = data.jd;

  const dataofcompany = await scrapJob(data);
  const jobMetadata = dataofcompany[0];

  const resumePart1 =
    "SANKET PATEL (+1) 226-637-2498| patelsanketr98@gmail.com | Mississauga, ON| Linkedin| Github |Portfolio TECHNICAL SKILLS Programming Lag. Frameworks Database Cloud Java, JavaScript, Typescript, HTML/CSS, C, C++, Python Angular, Spring, React Native, Express.js, Node.js, NestJs, React js, Bootstrap, Material UI, Android, .NET SQL Server, MySQL, PostgreSQL, MongoDB, DynamoDB, AWS RDS, GCP Firebase Google Cloud Platform(GCP), Amazon Web Services (AWS), Docker, Heroku, Netlify, Kubernetes Academic Exp. Object-oriented Design (OOPS), SOLID Principles, Agile SCRUM Methodology (PMLC), Software Development Lifecycle (SDLC), Android Studio, Kotlin, Swift";
  const resumePart2 =
    "WORK EXPERIENCE Mobile Application Developer (Freelancing) July 23 - Dec 23 Developed a React Native mobile application using Expo for iOS and Android. Enhanced the inventory counting process by 80% through streamlined barcode scanning and live monitoring. Ensured project cost efficiency by utilizing Google Sheets as the database with Google API and Google Apps Script. Utilized Expo and React Native modules, including React Redux, for efficient state management. Implemented Expo File System, Axios, and React Native Paper for enhanced functionality and a consistent UI/UX. Successfully delivered a cost-effective & efficient mobile application for inventory counting that reduced 60% of physical work. Softvan - Software Developer Jan 21 - Dec 21 Transformed monolithic E-commerce web application to microservices with Java (SpringBoot) backend for loosely coupled architecture. Implemented Eureka for efficient microservices intercommunication, optimizing the architecture of the E-commerce platform. Developed dynamic and responsive E-commerce web applications by following effective Angular lifecycle hooks. Executed Hibernate batch processing, successfully reducing transaction processing time by an impressive 30% for improved performance. Integrated GitHub into a robust CI/CD pipeline, fostering a cohesive development workflow for Angular and Java (SpringBoot). Managed agile workflows using Jira, ensuring streamlined project delivery and maintaining timely and smooth development cycles.";
  const resumePart3 =
    "KiwiMiles India - Junior Software Developer Sept 20 - Dec 20 Engineered a seamless web application using Nest.js (Node.js) for the backend and Angular 8 for the front end. Implemented Docker to encapsulate the application, that includes a Postgres database, facilitating ease of deployment and management. Utilized Git source control to manage versioning and collaborated on development efforts efficiently. Applied Agile methodologies, employing JIRA for sprint planning & tracking to ensure continuous enhancement of the application. Developed a PDF quoting tool by nestjs-pdf, extracting & processing large datasets from a Postgres database based on user selections. Optimized deployment with AWS Elastic Beanstalk and AWS EC2, enhancing the scalability and performance of the web app. ";
  const resumePart4 =
    "INDIVIDUAL PROJECTS Blogging Hub(MERN Stack: MongoDB, Express.js, React.js, Node.js)| Led the development of a dynamic MERN stack web app, leveraging React.js, MongoDB, Node.js, and Express & ensuring a responsive UI. Implemented secure authentication with JSON Web Tokens and Google OAuth, facilitating efficient user login, and admin dashboard. Innovated with advanced search functionality, dark mode, and interactive engagement through comment management on post pages. Recipe App- Chef de Cuisine (React Native, Express.js, Postman, Github)| Led the development of a cross-platform Recipe App utilizing React Native, Expo, Express.js, Google Firebase, Figma, Postman and Github. Designed a user-friendly iOS/Android app for pantry management, recipe discovery, QR code sharing, and custom recipe saving. Implemented Redux for seamless data management, syncing with Google Firebase for enhanced user experience and data synchronization. Harry Potter API (Express.js, DynamoDb, AWS-SDK, Visual Studio)| Spearheaded the creation of a Harry Potter API using Express.js, DynamoDB, AWS-SDK, and Visual Studio. Created multiple API endpoints, each capable of providing detailed information on Harry Potter characters, covering up to 20 parameters. Employed AWS DynamoDB for resilient NoSQL storage, ensuring scalability, seamless data retrieval and setting the stage for integrations. ";
  const resumePart5 =
    "AIMockData NPM Package (Node.js, Google Gemini API and NPM)| Developed a mock data generation tool using Google Gemini API, providing realistic datasets for efficient testing and development. Published an npm package for mock data generation with clear, user-friendly documentation for easy integration. Developed a feature for generating precise schemas and prompts based on user inputs, ensuring tailored and accurate data structures. Insurance Intelligence (JAVA, Spring Boot & Machine Learning)| Developed a Java(Spring Boot) web portal predicting flight delays/cancellations using Kaggle's 7-year dataset and machine learning. Utilized Java(Spring Boot) MVC, Hibernate, and MySQL to create a robust web dashboard for user interactions and profile management. Operated Numpy, Pandas, Matplotlib and Jupyter Notebook to analyze and visualize data, showcasing proficiency in data science &analytics. ";
  const resumePart6 =
    "EDUCATION Fanshawe College | Post Graduation in Mobile Application Development | GPA: 3.62/4.0 Jan 22 - April 23 Gujarat Technological University | Bachelors in Computer Engineering | GPA: 3.84/4.0 Aug 16 - Aug 20 Do not put fake data, only use data from given resume";

  const resume =
    resumePart1 +
    resumePart2 +
    resumePart3 +
    resumePart4 +
    resumePart5 +
    resumePart6;

  const portfolioLink = "https://sanketpatel98.github.io/portfolio";

  // total 3 phases => 1) hook, 2) adding resume  and 3) making clear(add links).
  // Phase 1) hook,
  var parameters = [{ name: "hook", isArray: false }];
  var finalData =
    "You are currently seeking for Software developer job in the IT industry and you are applying for this " +
    jobMetadata.title +
    "  role at " +
    jobMetadata.company +
    ". Write an attention-grabbing hook for your cover letter that highlights your experience and qualifications in a way that shows you empathize and can successfully take on the challenges of the Software developer role. Consider incorporating specific examples of how you have tackled these challenges in your past work and explore creative ways to express your enthusiasm for the opportunity. Keep your hook within 100 words. This is the job description for the role which I am applying: " +
    jd;

  const hook = await aimockdata(number, parameters, finalData);

  //phase 2) adding resume

  parameters = [{ name: "coverletter", isArray: false }];
  finalData =
    "You are writing a cover letter applying for the " +
    jobMetadata.title +
    " role at " +
    jobMetadata.company +
    ". Here is what you have so far: " +
    hook[0].hook +
    ". Finish writing the cover letter based on your resume and keep it within 500 words. Here is your resume: " +
    resume +
    ". Do not make up data, only use info from the given resume";
  const coverletter = await aimockdata(number, parameters, finalData);

  //phase 3) making clear(add links - optional).

  parameters = [{ name: "coverletter", isArray: false }];
  finalData =
    coverletter[0].coverletter +
    "only use information from the resume given, do not include fake data. It seems like the first paragraph contains some data which is not related to the resume below. change it to remove unnecessary experience and technology mentioned in the above cover letter. I only have 2 years of experience as per the given resume below. " +
    resume +
    "add  this in the end if not added already: Sanket Patel \npatelsanketr98@gmail.com \n226-627-2498\n" +
    portfolioLink;

  const finalCoverLetter = await aimockdata(number, parameters, finalData);

  postDataToGoogleDocs(finalCoverLetter[0])
    .then((result) => {
      return result; // Resolve the promise with the result
    })
    .catch((error) => {
      console.error("Error generating data:", error);
      throw error; // Reject the promise with the error
    });
};

export default coverLetterFromDescription;
