import React, { useState } from "react";
import Image from "next/legacy/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faInfo } from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faVuejs,
  faCss3Alt,
  faNode,
  faReact,
  faPython,
  faPhp,
  faLaravel,
  faGithub
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
  LaravelReact
];

const projects = [
  {
    image: HayPoli,
    githubLink: "https://github.com/Karlen-yan/hay-poli",
    onlineLink: "https://hay-poli.vercel.app/",
    technologies: [faJs, faVuejs, faCss3Alt, faNode],
    description:
      "Clothing Store Project: Created as a final example for a higher degree professional cycle."
  },
  {
    image: Construction,
    technologies: [faPython, faJs, faCss3Alt],
    githubLink: "https://github.com/Karlen-yan/Construction-APP-",
    description:
      "Construction Project: An example of an application that performs calculations and allows users to create budgets to estimate the cost of our services."
  },
  {
    image: ProjectTelesfor,
    technologies: [faPython, faJs, faCss3Alt],
    githubLink: "https://github.com/Karlen-yan/CAI_DAW",
    onlineLink: "http://telesfor.pythonanywhere.com/",
    description:
      "Nursing Care Project: Our goal was to help Auxiliary Nursing Care students have a closer experience to their future work environment."
  },
  {
    image: Cobeer,
    technologies: [faPhp, faCss3Alt, faJs]
    // githubLink: '',
    // description:"",
  },
  {
    image: CvKarlen,
    technologies: [faReact, faJs, faCss3Alt],
    githubLink: "https://github.com/Karlen-yan/KarlenCV__",
    description:
      "Digital CV Project: Created with the purpose of having an interactive and dynamic online curriculum vitae. This project allows users to download their CV as it appears on the screen. Additionally, all pages are available in both English and Spanish to reach a broader audience. The main objective is to provide a platform where the description and personal information can be completed. Through this project, the aim is also to practice new technologies, such as Next.js in this case, to gain knowledge in modern web development."
  },
  {
    image: LaravelReact,
    technologies: [faPhp, faLaravel, faCss3Alt],
    githubLink: "https://github.com/Karlen-yan/laravel-react-full-stack",
    infoLink: "#project6-info",
    description:
      "Practice Project: Developed with the purpose of gaining experience in using Laravel and React.js together. This project focuses on creating a CRUD (Create, Read, Update, Delete) system for users. It includes a registration form and a login form, which allow users to access a dashboard where they can manage user information, including adding, modifying, or deleting records. The main objective of this project is to acquire practical knowledge in integrating Laravel and React.js, two popular technologies in modern web development."
  }
];

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
                  alt="Imagenes de Proyectos Creados"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-lg object-cover"
                />
                <div className="flex justify-center mt-12">
                  {project.githubLink &&
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                        className="mx-6 hover:text-teal-500"
                      />
                    </a>}
                  {project.onlineLink &&
                    <a
                      href={project.onlineLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGlobe}
                        size="xl"
                        className="mx-6 hover:text-teal-500" 
                      />
                    </a>}
                  {project.description &&
                    <div className="relative  inline-block group">
                      <FontAwesomeIcon
                        icon={faInfo}
                        size="xl"
                        className="mx-6 hover:text-teal-500 cursor-pointer transition duration-300 ease-in-out"
                      />
                      <div className="tooltip bg-gray-900 text-white dark:bg-teal-500  dark:text-white">
                        {project.description}
                      </div>
                    </div>}
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
