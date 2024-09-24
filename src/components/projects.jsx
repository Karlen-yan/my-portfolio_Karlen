import { useTranslation } from "react-i18next"; 
import Container from "./shared/container";
import ProjectCards from "./cardsProjects";

const Projects = () => {

  const { t } = useTranslation();

  return ( 
    <section data-aos="fade-up" data-aos-duration="3000"
     id="projects">
      <Container>
    <div>
      <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">
        {t('myRecentWork')}
      </h1>
      <h1 className="text-center  text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-4">
        {t('portofolio')}
      </h1>
    </div>
    <div className="flex flex-col items-center py-10 ">
      {/* <Carousel /> */}
      <ProjectCards />
    </div>
    </Container>
  </section>
   );
}
 
export default Projects;