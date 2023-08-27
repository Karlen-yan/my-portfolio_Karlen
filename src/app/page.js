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
        <a href="https://github.com/Karlen-yan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
          <IconComponent name="github" />
          </a>
          <a href="https://www.linkedin.com/in/karlen-hakobyan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
          <IconComponent name="linkedin" />
        </a>
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
<div data-aos="fade-up"
     data-aos-duration="3000">
      
      <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">Get To Know</h1>
      <h1 className="text-center text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-12">About Me</h1>
      <section className="grid grid-cols-1 md:grid-cols-2">
       
        <div className="bg-gradient-to-b from-teal-500 rounded-md w-80 h-96">
        <div className="rounded-md space-x-0.5 rotate-on-hover overflow-hidden">
          <Image
            src={ImgKarlenAbout}
            alt="My foto"
            width={400}
            height={400}
          />
          </div>
        </div>
        <div className="flex flex-col justify-center md:m-12">
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
          <p className="text-md mt-4">
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
</div>

      {/* Services */}
      {/* <Services /> */}
      <div data-aos="fade-up"
     data-aos-duration="3000">
    
      <section className="text-center mb-12  flex flex-col items-center  min-h-screen">
        <div>
        <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">What I offer</h1>
          <h1 className=" text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-12">Services</h1>
          <p className="text-md py-2 leading-8">
            Design and Development of Attractive Websites.
          </p>
          <p className="w-2/3 m-auto text-md py-2 leading-8 text-gray-80">
            I create modern and appealing websites using
            <span className="text-teal-500 p-2">HTML5, CSS3</span> and
            frameworks like
            <span className="text-teal-500 p-2">Bootstrap, Sass</span>, and{" "}
            <span className="text-teal-500">TailwindCSS</span>. My goal is to
            ensure that your site is not only visually pleasing, but also
            intuitive for users.
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
              <span className="text-teal-500 p-2">JavaScript</span> and
              frameworks like{" "}
              <span className="text-teal-500 p-2">VueJS and ReactJS</span> to
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
              <span className="text-teal-500 p-2">PHP, Python, and Java</span>.
              I apply the <span className="text-teal-500 p-2">MVC</span> pattern
              to structure projects in an organized and maintainable way.
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
</div>
      {/* project  */}
      {/* <Projects /> */}

      <div data-aos="fade-up"
     data-aos-duration="3000">
      <div>
      <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">My Recent Work</h1>
        <h1 className="text-center  text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-4">Portofolio</h1>
      </div>
      <div className="flex flex-col items-center py-10">
        <Carousel />
      </div>
</div>

<div data-aos="fade-up"
     data-aos-duration="3000">
      <section>
      <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">Get In Touch</h1>
        <h1 className="text-center text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-12">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 mb-12 lg:mx-20">
          <div>
            <div className="flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10 bg-teal-500 dark:bg-teal-500 lg:flex lg:flex-col ">
              <IconComponent name="envelope" />
              <h2 className="pt-1 text-white">Email</h2>
              <p className="pt-1 text-gray-100">karlentkzar@gmail.com</p>
              <p className="pt-1 text-teal-300"> Send a message</p>
            </div>
            <div className="flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10 bg-teal-500 dark:bg-teal-500 lg:flex lg:flex-col ">
              <IconComponent name="whatsapp" />
              <h2 className="pt-1 text-white">WhatsApp</h2>
              <p className="pt-1 text-gray-100">+34 632582005</p>
              <p className="pt-1 text-teal-300">Send a message</p>
            </div>
          </div>

          <form className="flex flex-col items-center mx-4 p-8 lg:mx-20">
            <input
              className="m-6 p-4 w-full lg:w-96 bg-gray-100  rounded-xl  dark:bg-gray-900 border border-solid border-teal-500 dark:border-teal-500 placeholder-teal-400 dark:placeholder-teal-800"
              type="text"
              name="name"
              placeholder="Your Full Name"
            />
            <input
              className="m-6 p-4 w-full lg:w-96 bg-gray-100  rounded-xl  dark:bg-gray-900 border border-solid border-teal-500 dark:border-teal-500 placeholder-teal-400 dark:placeholder-teal-800"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <textarea
              className="m-6 p-4 w-full lg:w-96 bg-gray-100  rounded-xl  dark:bg-gray-900 border border-solid border-teal-500 dark:border-teal-500 placeholder-teal-400 dark:placeholder-teal-800"
              name="message"
              rows={4}
              placeholder="Write your message here..."
            />
            <button
              className="bg-teal-500 text-white p-2 rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      </div>
    </main>
  );
}
