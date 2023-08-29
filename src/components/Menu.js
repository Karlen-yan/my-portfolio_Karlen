import React, { useState } from "react";
import IconComponent from "../components/IconComponent";

const Menu = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex space-x-4  p-4 rounded-full bg-gray-600 bg-opacity-60">
        <a
          href="#home"
          className={`text-gray-100 hover:text-white p-2 ${activeSection === "home"
            ? "bg-teal-500 rounded-full"
            : ""}`}
          onClick={() => setActiveSection("home")}
        >

          <IconComponent name="menuHome" />
        </a>

        <a href="#about" className={`text-gray-100 hover:text-white p-2 ${
            activeSection === "about" ? "bg-teal-500 rounded-full" : ""
          }`}
          onClick={() => setActiveSection("about")}>
          <IconComponent name="menuUser" />
        </a>

        
        <a href="#services"  className={`text-gray-100 hover:text-white p-2 ${
            activeSection === "services" ? "bg-teal-500 rounded-full" : ""
          }`}
          onClick={() => setActiveSection("services")}>
          <IconComponent name="menuWindowMaximize" />
        </a>
        <a href="#projects"  className={`text-gray-100 hover:text-white p-2 ${
            activeSection === "projects" ? "bg-teal-500 rounded-full" : ""
          }`}
          onClick={() => setActiveSection("projects")}>
          <IconComponent name="menuProjectDiagram" />
        </a>
        <a href="#contact"  className={`text-gray-100 hover:text-white p-2 ${
            activeSection === "contact" ? "bg-teal-500 rounded-full" : ""
          }`}
          onClick={() => setActiveSection("contact")}>
          <IconComponent name="menuEnvelope" />
        </a>
      </div>
    </div>
  );
};

export default Menu;
