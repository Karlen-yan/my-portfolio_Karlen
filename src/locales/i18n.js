// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "Hello I'm",
        name: 'Karlen Hakobyan',
        profession: 'Web Developer',
        fullStackDeveloper: 'Full Stack Developer',
        downloadCV: 'Download CV',
        getToKnow: 'Get To Know',
        aboutMe: 'About Me',
        experience: 'Experience',
        clients: 'Clients',
        projects: 'Projects',
        experienceYears: '2 Years',
        clientsCompleted: '2+ Completed',
        projectsCompleted: '20+ Completed',
        aboutText:
          // "I'm Karlen, a passionate web developer. With over two years of experience in full-stack development, I specialize in JavaScript, PHP, Python, and Java. Proficient in MERN and MEVN stacks, and experienced in implementing the Model-View-Controller pattern in Node.js and PHP. I also develop REST APIs and have strong knowledge of both Linux and Windows operating systems. I've worked on web projects with diverse clients, utilizing HTML5, CSS3, Bootstrap5, XML, XSD, RSS, and JQuery. Extensive experience with databases like MongoDB, MySQL, and PostgreSQL. I'm a multilingual communicator, fluent in Armenian, advanced in Spanish, intermediate in Russian and English, and basic in Catalan. My focus is on continuous learning in web development to become a senior full-stack developer.",
          `Hello, I am Karlen Hakobyan, a passionate Full Stack Developer with a special focus on design and user experience. My goal is to create attractive and intuitive web interfaces that encourage user interaction and engagement.
          A few years ago, I decided to change careers to follow my true passion: technology and web development. I firmly believe that creativity is fundamental in this field; if you can imagine it, you can create it.
          In my free time, I enjoy learning new technologies and developing personal projects that allow me to put my skills into practice. Additionally, I am passionate about traveling and playing wind instruments, activities that enrich my perspective and creativity.
          I am always looking to connect with other web development professionals and collaborate on innovative projects. If you share the same passion for technology and web development, I would love to hear your ideas and explore potential collaborations.`,
        whatIOffer: 'What I offer',
        services: 'Services',
        webDevelopment: 'Design and Development of Attractive Websites.',
        webDevelopmentDesc: {
          text: 'I create modern and appealing websites using',
          span1: 'HTML5, CSS3',
          span2: 'and frameworks like',
          span3: 'Bootstrap, Sass,',
          span4: 'and ',
          span5: 'TailwindCSS',
          rest: '. My goal is to ensure that your site is not only visually pleasing, but also intuitive for users.'
        },
        frontendDevelopment: 'Interactive Web Application Development',
        interactiveAppDesc: {
          text1: 'I use technologies like',
          span1: 'JavaScript',
          text2: 'and frameworks like',
          span2: 'ReactJS (NEXT JS) and VueJS ',
          text3: 'to develop',
          span3: 'interactive and dynamic web applications',
          rest: 'that provide an exceptional user experience.'
        },
        backendDesc: {
          backendText: 'Robust Backend Development',
          text1: 'I implement strong backend solutions using languages like',
          span1: 'PHP, Python, and Java',
          text2: 'I apply the',
          span2: 'MVC',
          text3:
            'pattern to structure projects in an organized and maintainable way.'
        },
        databaseIntegration: 'Efficient Database Integration',
        dbDesc: {
          text1: 'MongoDB, MySQL, SQL Server',
          text2: 'and ',
          text3: 'PostgreSQL ',
          text4:
            'to manage and store data effectively, ensuring optimal performance.'
        },
        skills: 'Skills',
        myRecentWork: 'My Work',
        portofolio: 'Portofolio',
        bouttonCarouselPrevious: 'Previous',
        bouttonCarouselNext: ' Next',

        contactForm: {
          getInTouch: ' Get In Touch',
          contactMe: 'Contact Me',
          sendMessage: 'Send a message',
          messageSent: 'Message sent!',
          messageSentDescription: ' Your message has been successfully sent.',
          contactFromClose: 'Close',
          required: 'Required',
          fullName: 'Full Name',
          email: 'Your Email',
          subject: 'Subject',
          writeMessage: 'Write your message here...',
          send: 'Send'
        }
      }
    },
    es: {
      translation: {
        hello: 'Hola soy',
        name: 'Karlen Hakobyan',
        profession: 'Desarrollador Web',
        fullStackDeveloper: 'Desarrollador full stack',
        downloadCV: 'Descargar CV',
        getToKnow: 'Conóceme',
        aboutMe: 'Sobre mí',
        experience: 'Experiencia',
        clients: 'Clientes',
        projects: 'Proyectos',
        experienceYears: '2 Años',
        clientsCompleted: '2+ Completados',
        projectsCompleted: '20+ Completados',
        aboutText:
          // "Soy Karlen, un apasionado desarrollador web. Con más de dos años de experiencia en el desarrollo full-stack, me especializo en JavaScript, PHP, Python y Java. Proficiente en las pilas MERN y MEVN, y con experiencia en la implementación del patrón Modelo-Vista-Controlador en Node.js y PHP. También desarrollo APIs REST y tengo un fuerte conocimiento de los sistemas operativos Linux y Windows. He trabajado en proyectos web con diversos clientes, utilizando HTML5, CSS3, Bootstrap5, XML, XSD, RSS y JQuery. Amplia experiencia con bases de datos como MongoDB, MySQL y PostgreSQL. Soy un comunicador multilingüe, fluido en armenio, avanzado en español, intermedio en ruso e inglés, y básico en catalán. Mi enfoque está en el aprendizaje continuo en el desarrollo web para convertirme en un desarrollador full-stack senior.",
          `Hola, soy Karlen Hakobyan, un desarrollador Full Stack apasionado con un enfoque especial en el diseño y la experiencia del usuario. Mi objetivo es crear interfaces web atractivas e intuitivas que fomenten la interacción y el compromiso de los usuarios.
          Hace algunos años, tomé la decisión de cambiar de carrera para seguir mi verdadera pasión: la tecnología y el desarrollo web. Creo firmemente que la creatividad es fundamental en este campo; si puedes imaginarlo, puedes crearlo.
          En mi tiempo libre, disfruto aprendiendo nuevas tecnologías y desarrollando proyectos personales que me permiten poner en práctica mis habilidades. Además, me apasiona viajar y tocar instrumentos de viento, actividades que enriquecen mi perspectiva y creatividad.
          Estoy siempre en la búsqueda de conectar con otros profesionales del desarrollo web y colaborar en proyectos innovadores. Si compartes la misma pasión por la tecnología y el desarrollo web, me encantaría conocer tus ideas y explorar posibles colaboraciones.`,
        whatIOffer: 'Lo que ofrezco',
        services: 'Servicios',
        webDevelopment: 'Diseño y Desarrollo de Sitios Web Atractivos.',
        webDevelopmentDesc: {
          text: 'Creo sitios web modernos y atractivos utilizando',
          span1: 'HTML5, CSS3',
          span2: 'y frameworks como',
          span3: 'Bootstrap, Sass,',
          span4: 'y ',
          span5: 'TailwindCSS',
          rest: '. Mi objetivo es asegurarme de que tu sitio no solo sea visualmente atractivo, sino también intuitivo para los usuarios.'
        },
        frontendDevelopment: 'Desarrollo de aplicaciones web interactivas',
        interactiveAppDesc: {
          text1: 'Utilizo tecnologías como',
          span1: 'JavaScript',
          text2: 'y frameworks como',
          span2: 'ReactJS (NEXT JS) y VueJS ',
          text3: 'para desarrollar',
          span3: 'aplicaciones web interactivas y dinámicas',
          rest: 'que brindan una experiencia excepcional al usuario.'
        },
        backendDesc: {
          backendText: 'Desarrollo Backend Robusto',
          text1:
            'Implemento soluciones backend sólidas utilizando lenguajes como',
          span1: 'PHP, Python y Java',
          text2: 'Aplico el patrón',
          span2: 'MVC',
          text3: 'para estructurar proyectos de manera organizada y mantenible.'
        },
        databaseIntegration: 'Integración Eficiente de Bases de Datos',
        dbDesc: {
          text1: 'MongoDB, MySQL, SQL Server',
          text2: 'y ',
          text3: 'PostgreSQL ',
          text4:
            'para gestionar y almacenar datos de manera efectiva, asegurando un rendimiento óptimo.'
        },
        skills: 'Habilidades',
        myRecentWork: 'Mis trabajos',
        portofolio: 'Portafolio',
        bouttonCarouselPrevious: 'Anterior',
        bouttonCarouselNext: 'Siguiente',

        contactForm: {
          getInTouch: ' Ponerse en contacto',
          contactMe: 'Contáctame',
          sendMessage: 'Enviar un mensaje',
          messageSent: '¡Mensaje enviado!',
          messageSentDescription: ' Su mensaje se ha enviado con éxito.',
          contactFromClose: 'Cerrar',
          required: 'Requerido',
          fullName: 'Nombre completo',
          email: 'Tu Correo electrónico',
          subject: 'Asunto',
          writeMessage: 'Escribe tu mensaje aquí...',
          send: 'Enviar'
        }
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
