import React from 'react';
import Image from "next/legacy/image";
import IconWeb from "../images/web_icon.png";

const projects = () => {
  return (
    <div className="bg-gray-100 p-4 md:px-20 lg:px-40 dark:bg-gray-900">
    <section>
        <div>
          <h3 className="text-3xl py-1">Portofolio</h3>
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
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              src={IconWeb}
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={IconWeb}
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={IconWeb}
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={IconWeb}
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={IconWeb}
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={IconWeb}
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={IconWeb}
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default projects
