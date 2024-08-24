import React from "react";
import { BsTelegram } from "react-icons/bs";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaDownload, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { FiDownload, FiMail } from "react-icons/fi";
import { RiTailwindCssLine } from "react-icons/ri";
// import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fa";

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
    logo: <FaTelegramPlane/>,
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
    school: "Selam Childeren\’s Village",
    location: "Addis Ababa",
  },
];
