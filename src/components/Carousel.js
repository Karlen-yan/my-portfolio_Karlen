import React, { useState } from "react";
import Image from "next/legacy/image";
import { 
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import { 
  faGlobe,
  faInfo
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faVuejs,
  faCss3Alt,
  faNode,
  faReact,
  faPython,
  faPhp,
  faLaravel,
  faGithub, 
} from "@fortawesome/free-brands-svg-icons"; 
import HayPoli from "../images/hay-poli.png";
import Construction from "../images/construction1.png";
import ProjectTelesfor from "../images/projecte-telesfor.png";
import Cobeer from "../images/cobeer.png";
import CvKarlen from "../images/cv-karlen.png";
import LaravelReact from "../images/laravel-react.png";

const images = [
  HayPoli,
  Construction,
  ProjectTelesfor,
  Cobeer,
  CvKarlen,
  LaravelReact,
  
];

const imageWidth = 600;
const imageHeight = 400;

const projects = [
  {
    image: HayPoli,
    githubLink: 'https://github.com/Karlen-yan/hay-poli',
    onlineLink: 'https://hay-poli-frontend.onrender.com/',
    technologies: [faJs, faVuejs, faCss3Alt, faNode],
    description:" Proyecto de Tienda de Ropa: Creado como ejemplo final para un ciclo profesional de grado superior."
    
  },
  {
    image: Construction,
    technologies: [faPython, faJs, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/Construction-APP-', 
    description:" Proyecto de Construcción: Un ejemplo de una aplicación que realiza cálculos y permite a los usuarios crear presupuestos para estimar el costo de nuestros servicios."
    
  },
  {
    image: ProjectTelesfor,
    technologies: [faPython, faJs, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/CAI_DAW',
    onlineLink: 'http://telesfor.pythonanywhere.com/',
    description:"Proyecto de Cuidados de Enfermería: Nuestro objetivo era ayudar a los estudiantes de Cuidados Auxiliares de Enfermería a tener una experiencia más cercana a su futuro entorno laboral.",
  },
  {
    image: Cobeer,
    technologies: [faPhp, faCss3Alt, faJs],
    // githubLink: '',
    // description:"",
  },
  {
    image: CvKarlen,
    technologies: [faReact, faJs, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/KarlenCV__',
    description:"Proyecto de CV Digital: Creado con la finalidad de tener un currículum en línea interactivo y dinámico. Este proyecto permite a los usuarios descargar su CV tal como se ve en la pantalla. Además, todas las páginas están disponibles en inglés y español para alcanzar a un público más amplio. El objetivo principal es proporcionar una plataforma donde pueda completarse la descripción e información personal. A través de este proyecto, también se busca practicar nuevas tecnologías, como en este caso, Next.js, para adquirir conocimientos en el desarrollo web moderno."
  },
  {
    image: LaravelReact,
    technologies: [faPhp, faLaravel, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/laravel-react-full-stack',
    infoLink: '#project6-info',
    description:"Proyecto de Práctica: Desarrollado con el propósito de ganar experiencia en el uso conjunto de Laravel y React.js. Este proyecto se enfoca en la creación de un sistema CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios. Incluye un formulario de registro y otro para iniciar sesión, los cuales permiten a los usuarios acceder a un panel de control (dashboard) donde pueden gestionar la información de usuarios, incluyendo agregar, modificar o eliminar registros. El objetivo principal de este proyecto es adquirir conocimientos prácticos en la integración de Laravel y React.js, dos tecnologías populares en el desarrollo web moderno."
  }
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-teal-500 ">
      <div
        className="w-full transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex" style={{ width: `${images.length * 100}%` }}>
          {projects.map((project, index) =>
            <div
              key={index}
              className="w-full"
              style={{ flexBasis: `${100 / images.length}%` }}
            >
              <div className="flex justify-start mt-0 text-gray-900 dark:text-gray-100">
                {project.technologies.map((techIcon, techIndex) =>
                  <FontAwesomeIcon
                    key={techIndex}
                    icon={techIcon}
                    size="2x"
                    className="mt-8 ml-12"
                  />
                )}
              </div>
              <div className="flex flex-col items-center pt-8 pb-8">
                <Image
                  src={project.image}
                  alt=""
                  width={imageWidth}
                  height={imageHeight}
                  className="rounded-lg object-cover"
                />
           <div className="flex justify-center mt-12">
            {project.githubLink && 
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="xl" className="mx-6" />
              </a>
              }
              {project.onlineLink &&
              <a href={project.onlineLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGlobe} size="xl" className="mx-6" />
              </a>
              }
              {project.description &&
              <div className="relative  inline-block group">
                <FontAwesomeIcon icon={faInfo} size="xl" className="mx-6 group-hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out"
        />
           <div className="tooltip dark:bg-teal-500  dark:text-white">
        {project.description}
      </div>
              </div>
              }
      
          </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
