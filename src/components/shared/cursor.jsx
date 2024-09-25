'use client'
import { useEffect, useState } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {

  useEffect(() => {
 
      // setIsClient(true) 
      const cursor = document.querySelector('.cursor')
      const links = document.querySelectorAll('a')
      const cursorBig = document.querySelectorAll('.cursor-big')
      const lgBreakpoint = 1024

      if (window.innerWidth < lgBreakpoint) {
        return
      }

      const onMouseMove = (event) => {
        const { clientX, clientY } = event
        gsap.to(cursor, { x: clientX, y: clientY, duration: 0.4, ease: 'power3.out' })
      }

      const onMouseEnterLink = (event) => {
        const link = event.target
        gsap.to(cursor, { scale: 4 })
        gsap.to(link, { backgroundColor: '', color: '#FFF', duration: 0.5 })
      }

      const onMouseLeaveLink = (event) => {
        gsap.to(cursor, { scale: 1 })
        gsap.to(event.target, { backgroundColor: '', color: '', duration: 0.5 })
      }

      document.addEventListener('mousemove', onMouseMove)
      links.forEach((link) => {
        link.addEventListener('mouseenter', onMouseEnterLink)
        link.addEventListener('mouseleave', onMouseLeaveLink)
      })

      cursorBig.forEach((image) => {
        image.addEventListener('mouseenter', onMouseEnterLink)
        image.addEventListener('mouseleave', onMouseLeaveLink)
      })

      return () => {
        document.removeEventListener('mousemove', onMouseMove)
        links.forEach((link) => {
          link.removeEventListener('mouseenter', onMouseEnterLink)
          link.removeEventListener('mouseleave', onMouseLeaveLink)
        })
        cursorBig.forEach((image) => {
          image.removeEventListener('mouseenter', onMouseEnterLink)
          image.removeEventListener('mouseleave', onMouseLeaveLink)
        })
      }
  }, [])

  return  window.innerWidth > 900 ? <div className='cursor' /> : null
}

export default CustomCursor
