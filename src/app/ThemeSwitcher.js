"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import IconComponent from "../components/IconComponent";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [firstTimeUser, setFirstTimeUser] = useState(true); 
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (firstTimeUser) {
      setTheme("dark"); 
      setFirstTimeUser(false); 
    }
  }, [firstTimeUser, setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-4 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="flex flex-row items-center justify-between ">
        <h3 className="text-lg">Full Stack Developer</h3>
        <ul className="flex flex-row items-center justify-between">
          {theme === "light" && (
            <button onClick={() => setTheme("dark")}>
              <IconComponent name={"moon"} />
            </button>
          )}

          {theme === "dark" && (
            <button onClick={() => setTheme("light")}>
              <IconComponent name={"sun"} />
            </button>
          )}
          <li>
            
            <a href="/karlen-cv.pdf" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" download="Karlen-cv.pdf">
              Download CV
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ThemeSwitcher;
