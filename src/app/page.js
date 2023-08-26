"use client";
import Image from "next/image";
import IconComponent from "../components/IconComponent";
import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";
import ImgKarlen from "../images/karlen.png";
import ImgKarlenAbout from "../images/karlenAbout.png";
import IconWeb from "../images/web_icon.png";

import Services from "../sections/Services";
import Projects from "../sections/Projects";
import About from "../sections/About";


export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <main className="bg-gray-100 p-4 md:px-20 lg:px-40 dark:bg-gray-900">

      <section className="mb-12  flex flex-col items-center  min-h-screen ">
        <div className="text-center mt-12">
          <h4 className="text-gray-600 py-1 md:text-2xl dark:text-white">Hello, I&apos;m</h4>
          <h1 className="text-3xl font-bold font-burtons py-3 text-teal-500 md:text-5xl">
            Karlen Hakobyan
          </h1>
          <h5 className="text-gray-600 py-1 md:text-2xl dark:text-white">Web Developer</h5>
        </div>
        <div className="flex flex-row justify-center gap-8 py-6 text-green-60">
          <IconComponent name="github" />
          <IconComponent name="linkedin" />
        </div>

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-12 overflow-hidden md:h-96 md:w-96">
          <Image
            src={ImgKarlen}
            alt="My foto"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

{/* About */}

      <h1 className=" text-center text-lg p-4">About Me</h1>
      <section className="flex">
        <div className="bg-gradient-to-b from-teal-500 rounded-md">
          <Image
            className="rounded-md 
            space-x-0.5 rotate-on-hover"
            src={ImgKarlenAbout}
            alt="My foto"
            width={400}
            height={600}
            
          />
        </div>
      
        <div className="flex flex-col justify-center m-12">
           <div className="flex flex-row justify-between">
            <div className="text-center rounded-md w-40 h-40 p-6 bg-gradient-to-b from-teal-500">
              <IconComponent name="briefcase"/>
              <h2 className=" text-gray-900 dark:text-white text-lg">Experience</h2>
              <p className="text-teal-900 dark:text-teal-500 text-sm">2 Years</p>
            </div>
            <div className="text-center rounded-md w-40 h-40 p-6  bg-gradient-to-b from-teal-500">
              <IconComponent name="user" />
              <h2 className="text-gray-900 dark:text-white text-lg mt-2">Clients</h2>
              <p className="text-teal-900 dark:text-teal-500 text-sm">2+ Completed</p>
            </div>
            <div className="text-center rounded-md w-40 h-40 p-6  bg-gradient-to-b from-teal-500">
              <IconComponent name="projectDiagram" />

              <h2 className="text-gray-900 dark:text-white text-lg mt-2">Projects</h2>
              <p className="text-teal-900 dark:text-teal-500 text-sm">20+ Completed</p>
            </div>
          </div>
          <p className="text-xs  py-6">
            lorem akjlm akd sdkmd hkksd sdkjskdmlz,kjrncer iosndmcm
            mdcfkjsmd,kcmd hjjndkmcl,sdkmc,s jhsdnjkmcskdkmc,sl hjsjdnkmcklsd
            hidsnmc isdncm perkbnfn hnmc renmsdd rhdm inmcns ierndc
            </p>
        </div>
      </section>

{/* Services */}
      {/* <Services /> */}

      
    <section className="mb-12  flex flex-col items-center  min-h-screen">
    <div>
      <h3 className="text-3xl py-1">Services I offer</h3>
      <p className="text-md py-2 leading-8">
        Diseño y Desarrollo de Sitios Web Atractivos.
      </p>
      <p className="text-md py-2 leading-8 text-gray-80">
        {" "}Creo sitios web modernos y atractivos utilizando
        <span className="text-teal-500 p-2">HTML5, CSS3</span> y frameworks
        como
        <span className="text-teal-500 p-2">Bootstrap, Sass </span>y{" "}
        <span className="text-teal-500">TailwindCSS</span>. Mi objetivo es
        asegurarme de que tu sitio no solo sea visualmente agradable, sino
        también intuitivo para los usuarios.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className=" flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black" >
        
        <Image  src={IconWeb} width={100} height={100} alt="web icon" />
        <p className="text-md py-2 leading-8  font-bold pt-8 pb-2">
          Desarrollo de Aplicaciones Web Interactivas
        </p>
        <p className="text-md py-2 leading-8 text-gray-80">
          Utilizo tecnologías
          <span className="text-teal-500 p-2">JavaScript</span> y frameworks
          como <span className="text-teal-500 p-2">
            VueJS y ReactJS
          </span>
          para desarrollar aplicaciones web
          <span className="text-teal-500 p-2">
            interactivas y dinámicas
          </span>que brinden una experiencia de usuario excepcional.
        </p>
      </div>
  
      <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black">
        <Image  src={IconWeb} width={100} height={100} alt="web icon" />
        <p className="text-md py-2 leading-8  font-bold">
          Desarrollo Backend Robusto
        </p>
        <p className="text-md py-2 leading-8 text-gray-80">
          Implemento soluciones backend sólidas utilizando lenguajes como
          <span className="text-teal-500 p-2">PHP, Python y Java </span>.
          Aplico el patrón <span className="text-teal-500 p-2">
            MVC
          </span>para estructurar proyectos de manera organizada y
          mantenible.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-center dark:bg-gray-100 dark:text-black  shadow-lg p-10 rounded-xl my-10 ">
        <Image  src={IconWeb} width={100} height={100} alt="web icon" />
        <p className="text-md py-2 leading-8  font-bold">
          Integración de Bases de Datos Eficientes
        </p>
        <p className="text-md py-2 leading-8 text-gray-80">
          <span className="text-teal-500 p-2">
            MongoDB, MySQL, SQL Server y PostgreSQL
          </span>, para gestionar y almacenar datos de manera efectiva,
          garantizando un rendimiento óptimo.
        </p>
      </div>
    </div>
  </section>


    {/* project  */}
      {/* <Projects /> */}

      
   
        <div>
          <h3 className="text-3xl py-1">Portofolio</h3>
        </div>
    <div className="flex flex-col items-center py-10">
      <Carousel />
    </div>
      
    </main>
  );
}
