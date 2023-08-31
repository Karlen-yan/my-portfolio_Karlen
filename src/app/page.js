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
import { sendContactForm } from "../../lib/api";
import Menu from "../components/Menu";
import { useTranslation } from "react-i18next";

import {
  Container,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  useToast,
  Text
} from "@chakra-ui/react";

const initValues = { name: "", email: "", subject: "", message: "" };
const formInputStyles =
  "m-6 p-4 w-full lg:w-96 bg-gray-100 rounded-xl dark:bg-gray-900 border border-solid border-teal-500 dark:border-teal-500 placeholder-teal-400 dark:placeholder-teal-800";
export default function Home() {
  const initState = { isLoading: false, error: "", values: initValues };
  const [mounted, setMounted] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched(prev => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }));

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(
    () => {
      if (showSuccessMessage) {
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      }
    },
    [showSuccessMessage]
  );

  const onSubmit = async () => {
    setState(prev => ({
      ...prev,
      isLoading: true
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      setShowSuccessMessage(true);
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message
      }));
    }
  };

  const translations = t("webDevelopmentDesc", { returnObjects: true });
  const translations1 = t('interactiveAppDesc', { returnObjects: true });
  const translations2 = t('backendDesc', { returnObjects: true });
  const translations3 = t('dbDesc', { returnObjects: true });


  if (!mounted) {
    return null;
  }
  return (
    <main className="bg-gray-100 p-4 md:px-20 lg:px-40 dark:bg-gray-900">
      <Menu />
      <section
        className="mb-12  flex flex-col items-center  min-h-screen "
        id="home"
      >
        <div className="text-center mt-12">
          <h4 className="text-gray-600 py-1 md:text-2xl dark:text-white">
            {t("hello")}
          </h4>
          <h1 className="text-3xl font-bold font-burtons py-3 text-teal-500 md:text-5xl">
            {t("name")}
          </h1>
          <h5 className="text-gray-600 py-1 md:text-2xl dark:text-white">
            {t("profession")}
          </h5>
        </div>
        <div className="flex flex-row justify-center gap-8 py-6 text-green-60">
          <a
            href="https://github.com/Karlen-yan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent name="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/karlen-hakobyan/"
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
      <div data-aos="fade-up" data-aos-duration="3000" id="about">
        <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">
          {t("getToKnow")}
        </h1>
        <h1 className="text-center text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-12">
          {t("aboutMe")}
        </h1>
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
        </section>
      </div>

      {/* Services */}
      {/* <Services /> */}
      <div data-aos="fade-up" data-aos-duration="3000" id="services">
        <section className="text-center mb-12  flex flex-col items-center  min-h-screen">
          <div>
            <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">
              {t("whatIOffer")}
            </h1>
            <h1 className=" text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-12">
              {t("services")}
            </h1>
            <p className="text-md py-2 leading-8">
              {t("webDevelopment")}
            </p>
            <p className="w-2/3 m-auto text-md py-2 leading-8 text-gray-80">
              {translations.text}
              <span className="text-teal-500 p-2">
                {translations.span1}
              </span>
                {translations.span2}
             
              <span className="text-teal-500 p-2">{translations.span3}</span>
              {translations.span4}
               <span className="text-teal-500">{translations.span5}</span>
              {translations.rest}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className=" flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black">
              <Image src={IconWeb} width={100} height={100} alt="web icon" />
              <p className="text-md py-2 leading-8  font-bold">
                {t("frontendDevelopment")}
              </p>
              <p className="text-md py-2 leading-8 text-gray-80">
              {translations1.text1}
          <span className="text-teal-500 p-2">{translations1.span1}</span>
          {translations1.text2}
          <span className="text-teal-500 p-2">{translations1.span2}</span>
          {translations1.text3}
          <span className="text-teal-500 p-2">{translations1.span3}</span>
          {translations1.rest}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black">
              <div>
                <Image src={IconBack} width={100} height={100} alt="web icon" />
              </div>
              <p className="text-md py-2 leading-8  font-bold">
              {translations2.backendText}              </p>
              <p className="text-md py-2 leading-8 text-gray-80 pb-10">
              {translations2.text1}
          <span className="text-teal-500 p-2">{translations2.span1}</span>
          {translations2.text2}
          <span className="text-teal-500 p-2">{translations2.span2}</span>
          {translations2.text3}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center dark:bg-gray-100 dark:text-black  shadow-lg p-10 rounded-xl my-10 ">
              <Image src={IconDb} width={100} height={100} alt="web icon" />
              <p className="text-md py-2 leading-8  font-bold">
              {t("databaseIntegration")}
              </p>
              <p className="text-md py-2 leading-8 text-gray-80 pb-16">
              <span className="text-teal-500 p-2">{translations3.text1}</span>
              {translations3.text2} 
              {translations3.text3} 

          {translations3.text4}
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* project  */}
      {/* <Projects /> */}

      <div data-aos="fade-up" data-aos-duration="3000" id="projects">
        <div>
          <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">
            My Recent Work
          </h1>
          <h1 className="text-center  text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-4">
            Portofolio
          </h1>
        </div>
        <div className="flex flex-col items-center py-10">
          <Carousel />
        </div>
      </div>

      {/* contact */}
      <div data-aos="fade-up" data-aos-duration="3000" id="contact">
        <section>
          <h1 className="text-center text-gray-800  md:text-1x1 dark:text-white pt-24">
          {t('contactForm.getInTouch')}
          </h1>
          <h1 className="text-center text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-12">
          {t('contactForm.contactMe')}
          
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 mb-12 lg:mx-20">
            <div>
              <div className="flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10 bg-teal-500 dark:bg-teal-500 lg:flex lg:flex-col ">
                <IconComponent name="envelope" />
                <h2 className="pt-1 text-white">Email</h2>
                <p className="pt-1 text-gray-100">karlentkzar@gmail.com</p>
                <p className="pt-1 text-teal-300">  {t('contactForm.sendMessage')}</p>
              </div>
              <div className="flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10 bg-teal-500 dark:bg-teal-500 lg:flex lg:flex-col ">
                <IconComponent name="whatsapp" />
                <h2 className="pt-1 text-white">WhatsApp</h2>
                <p className="pt-1 text-gray-100">+34 632582005</p>
                <p className="pt-1 text-teal-300"> {t('contactForm.sendMessage')}</p>
              </div>
            </div>

            <Container className="flex flex-col items-center mx-4 p-8 lg:mx-20">
              {showSuccessMessage &&
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-6 py- rounded relative w-80"
                  role="alert"
                >
                  <strong className="font-bold">{t('contactForm.messageSent')}</strong>
                  <span className="block sm:inline">
                  {t('contactForm.messageSentDescription')}
                  </span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                      className="fill-current h-6 w-6 text-green-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      >
                      
                      <title>{t('contactForm.contactFromClose')}</title>
                      <path
                        d="M14.348 5.652a1 1 0 010 1.414L9.414 10l4.934 4.934a1 1 0 11-1.414 1.414L8 11.414l-4.934 4.934a1 1 0 11-1.414-1.414L6.586 10 1.652 5.066a1 1 0 111.414-1.414L8 8.586l4.934-4.934a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>}
              {error &&
                <Text className="text-red-500" my={4} fontSize="xl">
                  {error}
                </Text>}
              <FormControl
                isRequired
                isInvalid={touched.name && !values.name}
                mb={5}
              >
                <FormErrorMessage>
                        {t('contactForm.required')}
                  </FormErrorMessage>
                <Input
                  className={formInputStyles}
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder={t('contactForm.fullName')}
                />
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.email && !values.email}
                mb={5}
              >
                   <FormErrorMessage>
                        {t('contactForm.required')}
                  </FormErrorMessage>
                <Input
                  className={formInputStyles}
                  type="email"
                  name="email"
                  placeholder={t('contactForm.email')}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
              </FormControl>

              <FormControl
                mb={5}
                isRequired
                isInvalid={touched.subject && !values.subject}
              >
                <FormErrorMessage>
                        {t('contactForm.required')}
                  </FormErrorMessage>
                <Input
                  className={formInputStyles}
                  type="text"
                  name="subject"
                  placeholder={t('contactForm.subject')}
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.message && !values.message}
                mb={5}
              >
                <FormErrorMessage>
                        {t('contactForm.required')}
                  </FormErrorMessage>
                <Textarea
                  className={formInputStyles}
                  name="message"
                  rows={4}
                  placeholder={t('contactForm.writeMessage')}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
              </FormControl>
              <Button
                className="bg-teal-500 text-white p-2 rounded-md"
                type="submit"
                isLoading={isLoading}
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message
                }
                onClick={onSubmit}
              >
                {t('contactForm.send')}
              </Button>
            </Container>
          </div>
        </section>
      </div>
    </main>
  );
}
