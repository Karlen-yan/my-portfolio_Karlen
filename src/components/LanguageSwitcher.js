import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const isCurrentLanguage = (languageCode) => {
    return i18n.language === languageCode;
  };

  return (
    <div className="fixed top-36 right-2 flex flex-col space-y-2 z-10 lg:flex-row lg:space-y-0 lg:right-10 lg:top-2 lg:justify-center lg:items-center lg:transform ">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 ml-2 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 bg-opacity-60 ${
          isCurrentLanguage("en") ? "bg-teal-500" : ""
        }`}
      >
        En
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 ml-2 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 bg-opacity-60 ${
          isCurrentLanguage("es") ? "bg-teal-500" : ""
        }`}
      >
        Es
      </button>
    </div>
  );
};

export default LanguageSwitcher;
