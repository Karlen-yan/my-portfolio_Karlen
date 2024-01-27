'use client';
import IconComponent from "../components/IconComponent";
import { useTranslation } from "react-i18next"; 
import { useState, useEffect } from "react";
import { sendContactForm } from "../../lib/api";
import {
  Container,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Text
} from "@chakra-ui/react";


const Contact = () => {
  const { t } = useTranslation();
  
  const [mounted, setMounted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
  useEffect(() => {
    setMounted(true);
  }, []);

  const formInputStyles =
  "m-6 p-4 w-full lg:w-96 bg-gray-100 rounded-xl dark:bg-gray-900 border border-solid border-teal-500 dark:border-teal-500 placeholder-teal-400 dark:placeholder-teal-800";
  
  const initValues = { name: "", email: "", subject: "", message: "" };
  
  const initState = { isLoading: false, error: "", values: initValues };

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({}); 
  
  const { values, isLoading, error } = state;
  
  useEffect(
    () => {
      if (showSuccessMessage) {
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      }
    },
    [showSuccessMessage]);
  
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
      console.log(error)
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message
      }));
    }
  };
    if (!mounted) {
      return null;
    }
  return ( 
    <section data-aos="fade-up" data-aos-duration="3000" id="contact">
    <div>
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
    </div>
  </section>
   );
}
 
export default Contact;