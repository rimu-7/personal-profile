import { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-opacity-90 backdrop-blur-lg p-5 mb-2 w-full transition-transform duration-1000">
        <div className="flex items-center justify-between px-6 h-10 sm:px-1">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 ml-4 text-2xl rounded-md"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
