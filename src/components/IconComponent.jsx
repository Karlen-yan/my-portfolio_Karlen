import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import {
  faMoon,
  faSun,
  faBriefcase,
  faUser,
  faProjectDiagram,
  faEnvelope,
  faHome,
  faWindowMaximize 

} from "@fortawesome/free-solid-svg-icons";

const IconComponent = ({ name }) => {
  const icons = {
    github: faGithub,
    linkedin: faLinkedin,
    sun: faSun,
    moon: faMoon,
    briefcase: faBriefcase,
    whatsapp: faWhatsapp,
    user: faUser,
    projectDiagram: faProjectDiagram,
    envelope: faEnvelope,
    menuHome: faHome,
    menuUser: faUser,
    menuWindowMaximize:faWindowMaximize,
    menuProjectDiagram: faProjectDiagram,
    menuEnvelope: faEnvelope
  };

  const iconColors = {
    github: "text-black dark:text-white",
    linkedin: "text-blue-500",
    sun: "text-yellow-500",
    moon: "text-yellow-500",
    briefcase: "text-white",
    user: "text-white",
    projectDiagram: "text-white",
    envelope: "text-white",
    whatsapp: "text-white",
    menuHome: "text-white",
    menuUser: "text-white",
    menuProjectDiagram: "text-white",
    menuEnvelope: "text-white",
    menuWindowMaximize:"text-white"
  };
  return (
    <FontAwesomeIcon
      icon={icons[name]}
      className={`text-2xl ${iconColors[name]} hover:text-teal-500`}
      style={{ width: 30 }}
    />
  );
};

export default IconComponent;
