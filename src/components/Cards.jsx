import React from 'react'
import Image from 'next/legacy/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import {  faGithub } from '@fortawesome/free-brands-svg-icons'

import { useTranslation } from 'react-i18next'
import Gandz from '../images/iglecia.png'
import reformaConstruction from '../images/reforma-construction.png'
import HayPoli from '../images/hay-poli.png'
import Construction from '../images/app_construccion.png'
import ProjectTelesfor from '../images/projecte-telesfor.png'
import Cobeer from '../images/cobeer.png'
import CvKarlen from '../images/cv-karlen.png'
import LaravelReact from '../images/laravel-react.png'
import SirunikThemeWordpress from '../images/SirunikThemeWordpress.png'
import Car3DModel from '../images/car.png'
import webMasterKH from '../images/webMasterKH.png'

// icons
import faJs from '../images/icons/javascript.svg'
import html from '../images/icons/html5.svg'
import faReact from '../images/icons/react.svg'
import nextJs from '../images/icons/Next.svg'
import gsap from '../images/icons/gsap.svg'
import three from '../images/icons/ThreeJs.svg'
import faVuejs from '../images/icons/vuejs.svg'
import faCss3Alt from '../images/icons/css.svg'
import faWordpress from '../images/icons/wordpress.svg'

import TailwindIcon from '../images/icons/tailwind-css.svg'
import FigmaIcon from '../images/icons/figma.svg'
// backend
import node from '../images/icons/node-js.svg'
import php from '../images/icons/php.svg'
import python from '../images/icons/python.svg'
import mongodb from '../images/icons/mongodb.svg'
import mysql from '../images/icons/mysql.svg'

const images = [
  webMasterKH,
  Gandz,
  reformaConstruction,
  HayPoli,
  Construction,
  ProjectTelesfor,
  Cobeer,
  CvKarlen,
  LaravelReact,
  SirunikThemeWordpress,
  Car3DModel
]

const projects = [
  {
    image: webMasterKH,
    githubLink: 'https://github.com/Karlen-yan/my-portfolio_Karlen',
    onlineLink: 'https://web-master-kh.vercel.app/',
    technologies: [faJs, faReact, nextJs, faCss3Alt, TailwindIcon],
    description:
      'A platform that centralizes essential tools and resources for developing and learning about web technologies, making both work and study in web development easier.'
  },
  {
    image: Gandz,
    githubLink: 'https://github.com/Karlen-yan/iglesia-gandz',
    onlineLink: '',
    technologies: [
      faJs,
      faReact,
      nextJs,
      faCss3Alt,
      TailwindIcon,
      FigmaIcon,
      node,
      mongodb,
      mysql
    ],
    description:
      "This ongoing project involves the creation of a multilingual website for a church. The site is designed to be accessible in multiple languages, providing information about the church's services, events, and activities"
  },
  {
    image: reformaConstruction,
    githubLink: 'https://github.com/Karlen-yan/reforma-mantenimiento',
    onlineLink: '',
    technologies: [faJs, faReact, nextJs, TailwindIcon, FigmaIcon],
    description:
      'A website for air conditioning installation services, featuring service presentation, completed projects, and an interactive contact form.'
  },
  {
    image: HayPoli,
    githubLink: 'https://github.com/Karlen-yan/hay-poli',
    onlineLink: 'https://hay-poli.vercel.app/',
    technologies: [faJs, faVuejs, faCss3Alt, node],
    description:
      'Clothing Store Project: Created as a final example for a higher degree professional cycle.'
  },
  {
    image: Car3DModel,
    technologies: [faReact, nextJs, gsap, three, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/car-tree-d',
    onlineLink: 'https://car-tree-gsap.vercel.app/',
    description:
      'In this project a model of a car is used, using the ThreeJS library, the GSAP library is also used to add animation to the page.'
  },
  {
    image: Construction,
    technologies: [python, faJs, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/Construction-APP-',
    description:
      'Construction Project: An example of an application that performs calculations and allows users to create budgets to estimate the cost of our services.'
  },
  {
    image: SirunikThemeWordpress,
    technologies: [faJs, faCss3Alt, faWordpress, php],
    githubLink: 'https://github.com/Karlen-yan/WordpressThemePHP',
    onlineLink: 'http://sirunik.wuaze.com/',
    description:
      'Custom WordPress Theme for Beauty Salon with Modern and Animated Design'
  },
  {
    image: ProjectTelesfor,
    technologies: [python, faJs, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/CAI_DAW',
    onlineLink: 'http://telesfor.pythonanywhere.com/',
    description:
      'Nursing Care Project: Our goal was to help Auxiliary Nursing Care students have a closer experience to their future work environment.'
  },
  {
    image: Cobeer,
    technologies: [php, faJs, faCss3Alt]
    // githubLink: '',
    // description:"",
  },
  {
    image: CvKarlen,
    technologies: [faJs, faReact, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/KarlenCV__',
    description:
      'Digital CV Project: Created with the purpose of having an interactive and dynamic online curriculum vitae. This project allows users to download their CV as it appears on the screen. Additionally, all pages are available in both English and Spanish to reach a broader audience. The main objective is to provide a platform where the description and personal information can be completed. Through this project, the aim is also to practice new technologies, such as Next.js in this case, to gain knowledge in modern web development.'
  },
  {
    image: LaravelReact,
    technologies: [php, faCss3Alt],
    githubLink: 'https://github.com/Karlen-yan/laravel-react-full-stack',
    infoLink: '#project6-info',
    description:
      'Practice Project: Developed with the purpose of gaining experience in using Laravel and React.js together. This project focuses on creating a CRUD (Create, Read, Update, Delete) system for users. It includes a registration form and a login form, which allow users to access a dashboard where they can manage user information, including adding, modifying, or deleting records. The main objective of this project is to acquire practical knowledge in integrating Laravel and React.js, two popular technologies in modern web development.'
  }
]

const ProjectCards = () => {
  const { t } = useTranslation()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map((project, index) => (
        <div
          key={index}
          className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg'
        >
        
  
          <Image
            src={project.image}
            alt={`Imagen del proyecto ${index}`}
            className='rounded-lg mt-4'
            style={{ width: '100%', height: 'auto' }}
          />
               <div className='flex  justify-center gap-4 text-gray-900 dark:text-gray-100'>
            {project.technologies.map((techIcon, techIndex) => (
              <Image
                key={techIndex}
                src={techIcon}
                alt={`Icono de tecnología ${techIcon}`}
                className='m-6'
                width={20}
                height={20}
              />
            ))}
          </div>
          <p className='mt-4 text-gray-700 dark:text-gray-300'>
            {project.description}
          </p>
          <div className='flex justify-center mt-4 space-x-4'>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size='xl'
                  className='hover:text-teal-500'
                />
              </a>
            )}
            {project.onlineLink && (
              <a
                href={project.onlineLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  size='xl'
                  className='hover:text-teal-500'
                />
              </a>
            )}
         
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCards
