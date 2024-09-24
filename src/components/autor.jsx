import Image from 'next/legacy/image'
import { useTranslation } from 'react-i18next'
import IconComponent from '../components/IconComponent'
import ImgKarlen from '../images/karlen.png'
import Container from './shared/container'

const Autor = () => {
  const { t } = useTranslation()

  return (
    <section
      className='flex flex-col items-center  min-h-screen  z-50'
      id='home'
    >
      <Container>
        <div className='text-center mt-12'>
          <h4 className='text-gray-600 py-1 md:text-2xl dark:text-white'>
            {t('hello')}
          </h4>
          <h1 className='text-3xl font-bold font-burtons py-3 text-teal-500 md:text-5xl'>
            {t('name')}
          </h1>
          <h5 className='text-gray-600 py-1 md:text-2xl dark:text-white'>
            {t('profession')}
          </h5>
        </div>
        <div className='flex flex-row justify-center gap-8 py-6 text-green-60'>
          <a
            href='https://github.com/Karlen-yan/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconComponent name='github' />
          </a>
          <a
            href='https://www.linkedin.com/in/karlen-hakobyan/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconComponent name='linkedin' />
          </a>
        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-12 overflow-hidden md:h-96 md:w-96'>
          <Image
            src={ImgKarlen}
            alt='My foto'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </Container>
    </section>
  )
}

export default Autor
