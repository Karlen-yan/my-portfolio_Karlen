import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun,faBriefcase,
  faUser,
  faProjectDiagram } from '@fortawesome/free-solid-svg-icons'; 

const IconComponent = ({ name }) => {
  const icons = {
    github: faGithub,
    linkedin: faLinkedin,
    sun:faSun,
    moon:faMoon,
    briefcase:faBriefcase,
    user:faUser,
    projectDiagram:faProjectDiagram
  };

  const iconColors = {
    github: 'text-gray-600',
    linkedin: 'text-blue-500',
    sun: 'text-yellow-500',
    moon: 'text-yellow-500',
    briefcase:'text-white',
  user:'text-white',
  projectDiagram:'text-white'
  };
  return   <FontAwesomeIcon
  icon={icons[name]}
  className={`text-2xl ${iconColors[name]}`}
  style={{ width: 30 }}
/>
};

export default IconComponent;
