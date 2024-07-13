import { useTranslation } from "react-i18next";
import Image from "next/legacy/image";
import IconComponent from "../components/IconComponent";
import ImgKarlenAbout from "../images/karlenAbout.png";
import Container from "./shared/container";


const About = () => {
  const { t } = useTranslation();
  return ( 

    <section data-aos="fade-up" data-aos-duration="3000" id="about">
      <Container>

    
    <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-12">
      {t("getToKnow")}
    </h1>
    <h1 className="text-center text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-12">
      {t("aboutMe")}
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gradient-to-b from-teal-500 rounded-md w-76 h-80 md:w-96 md:h-96 md:m-12">
        <div className="rounded-md space-x-0.5 rotate-on-hover overflow-hidden">
          <Image
            src={ImgKarlenAbout}
            alt="My foto"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center md:m-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center rounded-md p-4 bg-gradient-to-b from-teal-500">
            <IconComponent name="briefcase" />
            <h2 className="text-gray-900 dark:text-white text-lg">
              {t("experience")}
            </h2>
            <p className="text-teal-900 dark:text-teal-500 text-sm">
              {t("experienceYears")}
            </p>
          </div>
          <div className="text-center rounded-md p-4 bg-gradient-to-b from-teal-500">
            <IconComponent name="user" />
            <h2 className="text-gray-900 dark:text-white text-lg mt-2">
              {t("clients")}
            </h2>
            <p className="text-teal-900 dark:text-teal-500 text-sm">
              {t("clientsCompleted")}
            </p>
          </div>
          <div className="text-center rounded-md p-4 bg-gradient-to-b from-teal-500">
            <IconComponent name="projectDiagram" />
            <h2 className="text-gray-900 dark:text-white text-lg mt-2">
              {t("projects")}
            </h2>
            <p className="text-teal-900 dark:text-teal-500 text-sm">
              {t("projectsCompleted")}
            </p>
          </div>
        </div>
        <p className="text-md mt-4">
          {t("aboutText")}
        </p>
      </div>
    </div>
    </Container>
  </section>
   );
}
 
export default About;