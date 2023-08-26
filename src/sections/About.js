import React from "react";
import Image from "next/image";
import IconComponent from "../components/IconComponent";
import ImgKarlen from "../images/karlenAbout.png";

const About = () => {
  return (
    <div className="bg-gray-100 p-4 md:px-20 lg:px-40 dark:bg-gray-900">
      <h1 className=" text-center text-lg p-4">About Me</h1>
      <section className="flex">
        <div className="bg-gradient-to-b from-teal-500 rounded-md">
          <Image
            className="rounded-md 
            space-x-0.5 "
            src={ImgKarlen}
            alt="My foto"
            width={400}
            height={600}
            style={{ transform: 'rotate(5deg)' }} 
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
    </div>
  );
};

export default About;
