import React, { useState, useEffect } from 'react'
import IconComponent from '../components/IconComponent'

const Menu = () => {
  const [activeSection, setActiveSection] = useState(null)

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = {
        home: document.getElementById('home').offsetTop,
        about: document.getElementById('about').offsetTop,
        // services: document.getElementById('services').offsetTop,
        services: document.getElementById('skills').offsetTop,
        projects: document.getElementById('projects').offsetTop,
        contact: document.getElementById('contact').offsetTop
      }

      const currentPosition = window.scrollY

      let active = null
      for (const section in sectionPositions) {
        if (currentPosition >= sectionPositions[section] - 200) {
          active = section
        }
      }

      setActiveSection(active)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='fixed bottom-0 left-1/2 lg:top-1/2 lg:right-5 lg:left-auto transform -translate-x-1/2 -translate-y-1/2 z-50'>
      <div className='flex justify-center items-center p-2 sm:flex-row lg:flex-col rounded-full bg-gray-600 bg-opacity-60'>
        <a
          href='#home'
          className={`text-gray-100   hover:text-white p-2 ${
            activeSection === 'home' ? ' bg-teal-500  rounded-full' : ''
          }`}
          onClick={() => scrollToSection('home')}
        >
          <IconComponent name='menuHome' className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
        </a>

        <a
          href='#about'
          className={`text-gray-100 hover:text-white p-2 ${
            activeSection === 'about' ? 'bg-teal-500 rounded-full' : ''
          }`}
          onClick={() => scrollToSection('about')}
        >
          <IconComponent name='menuUser' className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"/>
        </a>

        {/* <a
          href='#services'
          className={`text-gray-100 hover:text-white p-2 ${
            activeSection === 'services' ? 'bg-teal-500 rounded-full' : ''
          }`}
          onClick={() => scrollToSection('services')}
        >
          <IconComponent name='menuWindowMaximize' className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
        </a> */}
        <a
          href='#skills'
          className={`text-gray-100 hover:text-white p-2 ${
            activeSection === 'skills' ? 'bg-teal-500 rounded-full' : ''
          }`}
          onClick={() => scrollToSection('skills')}
        >
          <IconComponent name='menuWindowMaximize' className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
        </a>
        <a
          href='#projects'
          className={`text-gray-100 hover:text-white p-2 ${
            activeSection === 'projects' ? 'bg-teal-500 rounded-full' : ''
          }`}
          onClick={() => scrollToSection('projects')}
        >
          <IconComponent name='menuProjectDiagram' className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
        </a>
        <a
          href='#contact'
          className={`text-gray-100 hover:text-white p-2 ${
            activeSection === 'contact' ? 'bg-teal-500 rounded-full' : ''
          }`}
          onClick={() => scrollToSection('contact')}
        >
          <IconComponent name='menuEnvelope' className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
        </a>
      </div>
    </div>
  )
}

export default Menu
