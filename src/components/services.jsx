import Image from 'next/legacy/image'
import { useTranslation } from 'react-i18next'
import IconWeb from "../images/web_icon.png";
import IconBack from "../images/icon_back.png";
import IconDb from "../images/db.png";
import Container from './shared/container';

const Services = () => {
  const { t } = useTranslation()
  const translations = t("webDevelopmentDesc", { returnObjects: true });
  const translations1 = t('interactiveAppDesc', { returnObjects: true });
  const translations2 = t('backendDesc', { returnObjects: true });
  const translations3 = t('dbDesc', { returnObjects: true });

  return (
    <section data-aos='fade-up' data-aos-duration='3000' id='services'>
      <Container>
      <div className='text-center mb-12  flex flex-col items-center  min-h-screen'>
        <div>
          <h1 className='text-center text-gray-800  md:text-1x1 dark:text-white pt-24'>
            {t('whatIOffer')}
          </h1>
          <h1 className=' text-teal-500 py-1 md:text-4xl dark:text-teal-500 pb-12'>
            {t('services')}
          </h1>
          <p className='text-md py-2 leading-8'>{t('webDevelopment')}</p>
          <p className='w-2/3 m-auto text-md py-2 leading-8 text-gray-80'>
            {translations.text}
            <span className='text-teal-500 p-2'>{translations.span1}</span>
            {translations.span2}

            <span className='text-teal-500 p-2'>{translations.span3}</span>
            {translations.span4}
            <span className='text-teal-500'>{translations.span5}</span>
            {translations.rest}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className=' flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black'>
            <Image src={IconWeb} width={100} height={100} alt='web icon' />
            <p className='text-md py-2 leading-8  font-bold'>
              {t('frontendDevelopment')}
            </p>
            <p className='text-md py-2 leading-8 text-gray-80'>
              {translations1.text1}
              <span className='text-teal-500 p-2'>{translations1.span1}</span>
              {translations1.text2}
              <span className='text-teal-500 p-2'>{translations1.span2}</span>
              {translations1.text3}
              <span className='text-teal-500 p-2'>{translations1.span3}</span>
              {translations1.rest}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:text-black'>
            <div>
              <Image src={IconBack} width={100} height={100} alt='web icon' />
            </div>
            <p className='text-md py-2 leading-8  font-bold'>
              {translations2.backendText}{' '}
            </p>
            <p className='text-md py-2 leading-8 text-gray-80 pb-10'>
              {translations2.text1}
              <span className='text-teal-500 p-2'>{translations2.span1}</span>
              {translations2.text2}
              <span className='text-teal-500 p-2'>{translations2.span2}</span>
              {translations2.text3}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center text-center dark:bg-gray-100 dark:text-black  shadow-lg p-10 rounded-xl my-10 '>
            <Image src={IconDb} width={100} height={100} alt='web icon' />
            <p className='text-md py-2 leading-8  font-bold'>
              {t('databaseIntegration')}
            </p>
            <p className='text-md py-2 leading-8 text-gray-80 pb-16'>
              <span className='text-teal-500 p-2'>{translations3.text1}</span>
              {translations3.text2}
              {translations3.text3}

              {translations3.text4}
            </p>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Services
