'use client'
import React from 'react';
import IconWeb from "../images/web_icon.png";
import Image from "next/image";

export default function servisios() {

  
  return (
    <div className="bg-gray-100 p-4 md:px-20 lg:px-40 dark:bg-gray-900">
      
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

      <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black">
        <Image src={IconWeb} width={100} height={100} alt="web icon" />
        <p className="text-md py-2 leading-8  font-bold">
          Optimización de Velocidad y Rendimiento
        </p>
        <p className="text-md py-2 leading-8 text-gray-80">
          Realizo optimizaciones para garantizar que tus sitios y
          aplicaciones carguen de manera rápida y sean eficientes en el uso
          de recursos.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black">
        <Image src={IconWeb} width={100} height={100} alt="web icon" />
        <p className="text-md py-2 leading-8  font-bold">
          Despliegue y Gestión de Servidores
        </p>
        <p className="text-md py-2 leading-8 text-gray-80">
          Puedo ayudarte con la configuración y el despliegue en servidores,
          utilizando tecnologías como
          <span className="text-teal-500 p-2">Docker</span>y plataformas de
          alojamiento en la nube.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black">
        <Image src={IconWeb} width={100} height={100} alt="web icon" />
        <p className="text-md py-2 leading-8  font-bold">
          Asesoramiento Técnico y Colaboración
        </p>
        <p className="text-md py-2 leading-8 text-gray-80">
          Estoy disponible para proporcionar asesoramiento técnico y
          trabajar en colaboración para asegurarme de que tus requisitos y
          objetivos se cumplan en cada etapa del proceso.
        </p>
      </div>
    </div>
  </section>
    </div>
  )
}
