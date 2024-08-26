import React from "react";
import { BsTelegram } from "react-icons/bs";
import { DiJava, DiJavascript1, DiReact } from "react-icons/di";
import { FaDownload, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { FiDownload, FiMail } from "react-icons/fi";
import { RiTailwindCssLine } from "react-icons/ri";
// import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fa";

// images
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.png";
// import img5 from "./assets/images/0.jpg";

export const intro = `Hi, nice to meet you. I am aspiring front-end Developer who loves what
        he does. i like to make elegant and awsome websites. you can check my
        catalog here or download my resume`;

export const projects = [
  {
    id: 1,
    shortTitle: "Crop Guard",
    longTitle: "Crop Guard, AI powered Crop health Contrller",
    imgUrl: img1,
    details: `Lorem ipsum dolor, sit amet 
    consectetur adipisicing elit. Cum expedita
     voluptatum ab cupiditate dicta libero sit ipsum at
      corrupti sequi necessitatibus molestiae dignissimos,
       odio recusandae obcaecati odit minima ducimus pariatur`,
    tech: [<DiJavascript1 />, <DiReact />, <DiJava />, <RiTailwindCssLine />],
    githubUrl: "afdafa",
    websiteUrl: "afdafa",
  },
  {
    id: 2,
    shortTitle: "Bahre Gym",
    longTitle: "Bahre Gym, Web based Gym management System",
    imgUrl: img2,
    details: "blah blah...",
    tech: [<DiJavascript1 />, <DiReact />, <DiJava />, <RiTailwindCssLine />],
    githubUrl: "",
    websiteUrl: "",
  },
  {
    id: 3,
    shortTitle: "Burqa Ifa",
    longTitle: "Bahre Gym, Web based Gym management System",
    imgUrl: img3,
    details: "blah blah...",
    tech: [<DiJavascript1 />, <DiReact />, <DiJava />, <RiTailwindCssLine />],
    githubUrl: "",
    websiteUrl: "",
  },
  {
    id: 4,
    shortTitle: "Project 4",
    longTitle: "Bahre Gym, Web based Gym management System",
    imgUrl: img4,
    details: "blah blah...",
    tech: [<DiJavascript1 />, <DiReact />, <DiJava />, <RiTailwindCssLine />],
    githubUrl: "afafaf",
    websiteUrl: "afafaf",
  },
];

export const logos = [
  {
    name: "mail",
    logo: <FiMail />,
  },
  {
    name: "github",
    logo: <FaGithub />,
  },
  {
    name: "linkedin",
    logo: <FaLinkedinIn />,
  },

  {
    name: "instagram",
    logo: <FaTelegramPlane />,
  },
  {
    name: "download_cv",
    logo: <FiDownload />,
  },
];

export const experiences = [
  {
    date: "2024 - present",
    role: "Front End Developer, Softnet Solutions",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing lit. Dolore, aspernatur!",
    tech: [<DiJavascript1 />, <DiReact />, <RiTailwindCssLine />],
  },
  {
    date: "2024 - present",
    role: "Front End Developer, Burqa Ifa Schools",
    detail:
      "Adipisicing lit. Dolore, aspernatur Lorem ipsum dolor sit amet consectetur Dolore, aspernatur Lorem ipsum dolor",
    tech: [<DiJavascript1 />, <DiReact />],
  },
];

export const educations = [
  {
    name: "Bachelor of Software Engineering",
    date: "2022 - 2026",
    school: "AASTU",
    location: "Addis Ababa",
  },
  {
    name: "Highschool Diploma, Natural Sciences",
    date: "2017 - 2021",
    school: "Selam Childeren’s Village",
    location: "Addis Ababa",
  },
];
