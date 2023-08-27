import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun,faBriefcase,
  faUser,
  faProjectDiagram,faEnvelope} from '@fortawesome/free-solid-svg-icons'; 


const IconComponent = ({ name }) => {
  const icons = {
    github: faGithub,
    linkedin: faLinkedin,
    sun:faSun,
    moon:faMoon,
    briefcase:faBriefcase,
    user:faUser,
    projectDiagram:faProjectDiagram,
    envelope:faEnvelope,
    whatsapp:faWhatsapp
  };

  const iconColors = {
    github: 'text-white',
    linkedin: 'text-blue-500',
    sun: 'text-yellow-500',
    moon: 'text-yellow-500',
    briefcase:'text-white',
  user:'text-white',
  projectDiagram:'text-white',
  envelope:'text-white',
  whatsapp:'text-white'
  };
  return   <FontAwesomeIcon
  icon={icons[name]}
  className={`text-2xl ${iconColors[name]} hover:text-teal-500`}
  style={{ width: 30 }}
/>
};

export default IconComponent;
