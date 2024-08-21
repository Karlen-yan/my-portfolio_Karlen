'use client'
import { useEffect } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  // useEffect(() => {
  //   const cursor = document.querySelector('.cursor')
  //   const links = document.querySelectorAll('a')
  //   const parrafos = document.querySelectorAll('p')

  //   // window.addEventListener("mousemove", (e) => {
  //   //   gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2, ease: "power3.out" });

  //   // });

  //   const onMouseMove = event => {
  //     const { clientX, clientY } = event
  //     gsap.to(cursor, { x: clientX, y: clientY })
  //   }

  //   const onMouseEnterLink = event => {
  //     const link = event.target
  //     const parraos = document.querySelectorAll('p')
  //     if (
  //       link.classList.contains('view') 
  //     ) {
  //       gsap.to(cursor, { scale: 4 })
  //     } else {
  //       gsap.to(cursor, { scale: 4 })
  //     }
  //   }

  //   const onMouseLeaveLink = () => {
  //     gsap.to(cursor, { scale: 1 })
  //   }

  //   document.addEventListener('mousemove', onMouseMove)
  //   links.forEach(link => {
  //     link.addEventListener('mouseenter', onMouseEnterLink)
  //     link.addEventListener('mouseleave', onMouseLeaveLink)
  //   })
  // }, [])

  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const links = document.querySelectorAll('a, button')

    const onMouseMove = event => {
      const { clientX, clientY } = event
      gsap.to(cursor, { x: clientX, y: clientY, duration: 0.4, ease: "power3.out" })
    }

    const onMouseEnterLink = event => {
      const link = event.target
      gsap.to(cursor, { scale: 4 })
      gsap.to(link, { backgroundColor: '', color: '#FFF', duration: 0.5 })
    }

    const onMouseLeaveLink = event => {
      gsap.to(cursor, { scale: 1 })
      gsap.to(event.target, { backgroundColor: '', color: '', duration: 0.5 })
    }

    document.addEventListener('mousemove', onMouseMove)
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })
  }, [])

  return <div className='cursor' />
}

export default CustomCursor
