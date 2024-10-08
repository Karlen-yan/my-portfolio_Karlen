import React, { useState } from 'react'
import Image from 'next/legacy/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faInfo,
  faCircle,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
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
  faWordpress
} from '@fortawesome/free-brands-svg-icons'

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

const Carousel = () => {
  const projects = [
    {
      image: webMasterKH,
      githubLink: 'https://github.com/Karlen-yan/my-portfolio_Karlen',
      onlineLink: 'https://web-master-kh.vercel.app/',
      technologies: [faJs, faReact, faCss3Alt],
      description:
        'A platform that centralizes essential tools and resources for developing and learning about web technologies, making both work and study in web development easier.'
    },
    {
      image: Gandz,
      githubLink: 'https://github.com/Karlen-yan/iglesia-gandz',
      onlineLink: '',
      technologies: [faJs, faReact, faCss3Alt, faNode],
      description:
        "This ongoing project involves the creation of a multilingual website for a church. The site is designed to be accessible in multiple languages, providing information about the church's services, events, and activities"
    },
    {
      image: reformaConstruction,
      githubLink: 'https://github.com/Karlen-yan/reforma-mantenimiento',
      onlineLink: '',
      technologies: [faJs, faReact, faCss3Alt, faNode],
      description:
        'A website for air conditioning installation services, featuring service presentation, completed projects, and an interactive contact form.'
    },
    {
      image: HayPoli,
      githubLink: 'https://github.com/Karlen-yan/hay-poli',
      onlineLink: 'https://hay-poli.vercel.app/',
      technologies: [faJs, faVuejs, faCss3Alt, faNode],
      description:
        'Clothing Store Project: Created as a final example for a higher degree professional cycle.'
    },
    {
      image: Car3DModel,
      technologies: [faReact, faCss3Alt],
      githubLink: 'https://github.com/Karlen-yan/car-tree-d',
      onlineLink: 'https://car-tree-gsap.vercel.app/',
      description:
        'In this project a model of a car is used, using the ThreeJS library, the GSAP library is also used to add animation to the page.'
    },
    {
      image: Construction,
      technologies: [faPython, faJs, faCss3Alt],
      githubLink: 'https://github.com/Karlen-yan/Construction-APP-',
      description:
        'Construction Project: An example of an application that performs calculations and allows users to create budgets to estimate the cost of our services.'
    },
    {
      image: SirunikThemeWordpress,
      technologies: [faJs, faCss3Alt, faWordpress, faPhp],
      githubLink: 'https://github.com/Karlen-yan/WordpressThemePHP',
      onlineLink: 'http://sirunik.wuaze.com/',
      description:
        'Custom WordPress Theme for Beauty Salon with Modern and Animated Design'
    },
    {
      image: ProjectTelesfor,
      technologies: [faPython, faJs, faCss3Alt],
      githubLink: 'https://github.com/Karlen-yan/CAI_DAW',
      onlineLink: 'http://telesfor.pythonanywhere.com/',
      description:
        'Nursing Care Project: Our goal was to help Auxiliary Nursing Care students have a closer experience to their future work environment.'
    },
    {
      image: Cobeer,
      technologies: [faPhp, faJs, faCss3Alt]
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
      technologies: [faPhp, faLaravel, faCss3Alt],
      githubLink: 'https://github.com/Karlen-yan/laravel-react-full-stack',
      infoLink: '#project6-info',
      description:
        'Practice Project: Developed with the purpose of gaining experience in using Laravel and React.js together. This project focuses on creating a CRUD (Create, Read, Update, Delete) system for users. It includes a registration form and a login form, which allow users to access a dashboard where they can manage user information, including adding, modifying, or deleting records. The main objective of this project is to acquire practical knowledge in integrating Laravel and React.js, two popular technologies in modern web development.'
    }
  ]
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <>
      <div className='flex justify-center -mt-12 p-5'>
        {projects.map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faCircle}
            size='1x'
            className={`mx-2 cursor-pointer ${
              index === currentIndex ? 'text-teal-500' : 'text-gray-100'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className='relative w-full max-w-4xl overflow-hidden bg-gradient-to-b from-teal-500  rounded-xl p-6'>
        <div
          className='w-full transition-transform duration-500 ease-in-out '
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className='flex' style={{ width: `${images.length * 100}%` }}>
            {projects.map((project, index) => (
              <div
                key={index}
                className='w-full'
                style={{ flexBasis: `${100 / images.length}%` }}
              >
                <div className='flex justify-start mt-0 text-gray-900 dark:text-gray-100'>
                  {project.technologies.map((techIcon, techIndex) => (
                    <FontAwesomeIcon
                      key={techIndex}
                      icon={techIcon}
                      size='2x'
                      className='mt-8 ml-12'
                    />
                  ))}
                </div>
                <div className='flex flex-col items-center pt-8 pb-8 m-12'>
                  <Image
                    src={project.image}
                    alt='Imagenes de Proyectos Creados'
                    style={{ width: '100%', height: 'auto' }}
                    className='rounded-lg object-cover'
                  />
                  <div className='flex justify-center mt-12'>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size='xl'
                          className='mx-6 hover:text-teal-500'
                        />
                      </a>
                    )}

                    {project.description && (
                      <div className='relative  inline-block group'>
                        <FontAwesomeIcon
                          icon={faInfo}
                          size='xl'
                          className='mx-6 hover:text-teal-500 cursor-pointer transition duration-300 ease-in-out'
                        />
                        <div className='tooltip bg-gray-900 text-white dark:bg-teal-500  dark:text-white'>
                          {project.description}
                        </div>
                      </div>
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
                          className='mx-6 hover:text-teal-500'
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrevious}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none'
        >
          <FontAwesomeIcon icon={faChevronLeft} size='1x' />
        </button>
        <button
          onClick={handleNext}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none'
        >
          {/* {t("bouttonCarouselNext")} */}
          <FontAwesomeIcon icon={faChevronRight} size='1x' />
        </button>
      </div>
    </>
  )
}

export default Carousel
