'use client'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Container from './shared/container'
import Image from 'next/image'
import gsap from 'gsap'

// frontEnd
import faJs from '../images/icons/javascript.svg'
import html from '../images/icons/html5.svg'
import faVuejs from '../images/icons/vuejs.svg'
import faCss3Alt from '../images/icons/css.svg'
import faReact from '../images/icons/react.svg'
import faWordpress from '../images/icons/wordpress.svg'

import TailwindIcon from '../images/icons/tailwind-css.svg'
import FigmaIcon from '../images/icons/figma.svg'
import SassIcon from '../images/icons/sass.svg'
// backend
import node from '../images/icons/node-js.svg'
import php from '../images/icons/php.svg'
import python from '../images/icons/python.svg'
import java from '../images/icons/java.svg'
import mongodb from '../images/icons/mongodb.svg'
import mysql from '../images/icons/mysql.svg'

const Skills = () => {
  const { t } = useTranslation()
  const frontEndRef = useRef([])
  const backEndRef = useRef([])

  useEffect(() => {
    // GSAP animations
    frontEndRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 0.3,
          ease: 'power1.inOut',
          paused: true,
          overwrite: 'auto',
          onEnter: icon => {
            gsap.to(icon, { scale: 1.2, boxShadow: '0px 0px 20px #00F' })
          }
        }
      )
    })
  }, [])

  const frontEnd = [
    {
      technologies: html,
      text: 'HTML5'
    },
    {
      technologies: faCss3Alt,
      text: 'CSS3'
    },
    { technologies: TailwindIcon, text: 'Tailwind CSS' },
    {
      technologies: faJs,
      text: 'JavaScript'
    },
    {
      technologies: faWordpress,
      text: 'WordPress'
    },
    {
      technologies: faReact,
      text: 'React JS'
    },
    {
      technologies: faVuejs,
      text: 'Vue JS'
    },
    { technologies: FigmaIcon, text: 'Figma' },
    { technologies: SassIcon, text: 'SASS (CSS)' }
  ]
  const backEnd = [
    {
      technologies: node,
      text: 'Node Js'
    },
    {
      technologies: php,
      text: 'PHP'
    },
    {
      technologies: python,
      text: 'Python'
    },
    {
      technologies: java,
      text: 'Java'
    },
    {
      technologies: mongodb,
      text: 'Mongo DB'
    },
    { technologies: mysql, text: 'MySql' }
  ]

  // Animación para agrandar iconos y aplicar sombras al hacer hover
  const handleMouseEnter = (e, idx, isFrontEnd) => {
    gsap.to(e.target, {
      scale: 3.2,
      boxShadow: '0px 0px 15px rgba(0, 255, 0, 0.8)',
      duration: 0.3
    })
  }

  const handleMouseLeave = (e, idx, isFrontEnd) => {
    gsap.to(e.target, {
      scale: 1,
      boxShadow: 'none',
      duration: 0.3
    })
  }
  return (
    <section
     data-aos="fade-up" data-aos-duration="3000"
      className='min-h-screen  z-50  md:pt-12'
      id='skills'
    >
        <Container>
          <h1 className='text-center text-teal-500 py-1 md:text-4xl dark:text-teal-500 md:pb-12'>
            {t('skills')}
          </h1>
          <div className=''>
            <h1 className='text-center text-gray-800  md:text-2x1 dark:text-white '>
              FRONT-END
            </h1>

            <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-8 '>
              {frontEnd.map((skill, i) => (
                <div
                  key={i}
                  className='flex items-center justify-center space-x-2 rounded-xl'
                >
                  <div
                    className='rounded-xl'
                    onMouseEnter={e => handleMouseEnter(e, i, true)}
                    onMouseLeave={e => handleMouseLeave(e, i, true)}
                  >
                    <Image
                      src={skill.technologies}
                      alt={skill.text}
                      className='w-12 h-12 rounded-xl'
                    />
                  </div>
                  <span>{skill.text}</span>
                </div>
              ))}
            </div>
            <h1 className='text-center text-gray-800  md:text-2x1 dark:text-white mt-8 '>
              BACK-END
            </h1>
            <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-8 '>
              {backEnd.map((skill, i) => (
                <div
                  key={i}
                  className='flex items-center justify-center space-x-2 rounded-xl'
                >
                  <div
                    className='rounded-xl'
                    onMouseEnter={e => handleMouseEnter(e, i, false)}
                    onMouseLeave={e => handleMouseLeave(e, i, false)}
                  >
                    <Image
                      src={skill.technologies}
                      alt={skill.text}
                      className='w-12 h-12 rounded-xl'
                    />
                  </div>
                  <span>{skill.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
    </section>
  )
}

export default Skills
