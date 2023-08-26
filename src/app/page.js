"use client";
import Image from "next/legacy/image";
import IconComponent from "../components/IconComponent";
import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";
import ImgKarlen from "../images/karlen.png";
import ImgKarlenAbout from "../images/karlenAbout.png";
import IconWeb from "../images/web_icon.png";
import IconBack from "../images/icon_back.png";
import IconDb from "../images/db.png";

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
          <h4 className="text-gray-600 py-1 md:text-2xl dark:text-white">
            Hello, I&apos;m
          </h4>
          <h1 className="text-3xl font-bold font-burtons py-3 text-teal-500 md:text-5xl">
            Karlen Hakobyan
          </h1>
          <h5 className="text-gray-600 py-1 md:text-2xl dark:text-white">
            Web Developer
          </h5>
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

      <h1 className="text-center text-lg p-4">About Me</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-b from-teal-500 rounded-md w-80">
          <Image
            className="rounded-md space-x-0.5 rotate-on-hover"
            src={ImgKarlenAbout}
            alt="My foto"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center m-4 md:m-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center rounded-md p-4 bg-gradient-to-b from-teal-500">
              <IconComponent name="briefcase" />
              <h2 className="text-gray-900 dark:text-white text-lg">
                Experience
              </h2>
              <p className="text-teal-900 dark:text-teal-500 text-sm">
                2 Years
              </p>
            </div>
            <div className="text-center rounded-md p-4 bg-gradient-to-b from-teal-500">
              <IconComponent name="user" />
              <h2 className="text-gray-900 dark:text-white text-lg mt-2">
                Clients
              </h2>
              <p className="text-teal-900 dark:text-teal-500 text-sm">
                2+ Completed
              </p>
            </div>
            <div className="text-center rounded-md p-4 bg-gradient-to-b from-teal-500">
              <IconComponent name="projectDiagram" />
              <h2 className="text-gray-900 dark:text-white text-lg mt-2">
                Projects
              </h2>
              <p className="text-teal-900 dark:text-teal-500 text-sm">
                20+ Completed
              </p>
            </div>
          </div>
          <p className="text-xs py-6">
            I&apos;m Karlen, a passionate web developer. With over two years of
            experience in full-stack development, I specialize in JavaScript,
            PHP, Python, and Java. Proficient in MERN and MEVN stacks, and
            experienced in implementing the Model-View-Controller pattern in
            Node.js and PHP. I also develop REST APIs and have strong knowledge
            of both Linux and Windows operating systems. I&apos;ve worked on web
            projects with diverse clients, utilizing HTML5, CSS3, Bootstrap5,
            XML, XSD, RSS, and JQuery. Extensive experience with databases like
            MongoDB, MySQL, and PostgreSQL. I&apos;m a multilingual
            communicator, fluent in Armenian, advanced in Spanish, intermediate
            in Russian and English, and basic in Catalan. My focus is on
            continuous learning in web development to become a senior full-stack
            developer.
          </p>
        </div>
      </section>

      {/* Services */}
      {/* <Services /> */}

      <section className="mb-12  flex flex-col items-center  min-h-screen mt-12">
  <div>
    <h3 className="text-3xl py-1">Services I offer</h3>
    <p className="text-md py-2 leading-8">
      Design and Development of Attractive Websites.
    </p>
    <p className="text-md py-2 leading-8 text-gray-80">
      I create modern and appealing websites using
      <span className="text-teal-500 p-2">HTML5, CSS3</span> and frameworks
      like
      <span className="text-teal-500 p-2">Bootstrap, Sass</span>, and{" "}
      <span className="text-teal-500">TailwindCSS</span>. My goal is to ensure
      that your site is not only visually pleasing, but also intuitive for users.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <div className=" flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black">
      <Image src={IconWeb} width={100} height={100} alt="web icon" />
      <p className="text-md py-2 leading-8  font-bold">
        Interactive Web Application Development
      </p>
      <p className="text-md py-2 leading-8 text-gray-80">
        I use technologies like
        <span className="text-teal-500 p-2">JavaScript</span> and frameworks
        like <span className="text-teal-500 p-2">VueJS and ReactJS</span> to
        develop
        <span className="text-teal-500 p-2">
          interactive and dynamic web applications
        </span>that provide an exceptional user experience.
      </p>
    </div>

    <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black">
      <div>
      <Image src={IconBack} width={100} height={100} alt="web icon" />
      </div>
      <p className="text-md py-2 leading-8  font-bold">
        Robust Backend Development
      </p>
      <p className="text-md py-2 leading-8 text-gray-80 pb-10">
        I implement strong backend solutions using languages like
        <span className="text-teal-500 p-2">PHP, Python, and Java</span>. I
        apply the <span className="text-teal-500 p-2">MVC</span> pattern to
        structure projects in an organized and maintainable way.
      </p>
    </div>

    <div className="flex flex-col justify-center items-center text-center dark:bg-gray-100 dark:text-black  shadow-lg p-10 rounded-xl my-10 ">
      <Image src={IconDb} width={100} height={100} alt="web icon" />
      <p className="text-md py-2 leading-8  font-bold">
        Efficient Database Integration
      </p>
      <p className="text-md py-2 leading-8 text-gray-80 pb-16">
        <span className="text-teal-500 p-2">
          MongoDB, MySQL, SQL Server, and PostgreSQL
        </span>, to manage and store data effectively, ensuring optimal
        performance.
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
