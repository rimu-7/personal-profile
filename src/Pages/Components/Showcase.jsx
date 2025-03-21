import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import git from '../../assets/github.png'
import git2 from '../../assets/github-dark.png'

const Showcase = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false); // State for scroll-to-top button
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility


  const [selectedImage, setSelectedImage] = useState(null);
  // Fetch projects
  useEffect(() => {
    setLoading(true);
    fetch("https://personal-backend-nine.vercel.app/api/projects") // Update the URL if deployed
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Reverse the order of projects (reverse the array)
        const reversedProjects = data.reverse();
        setProjects(reversedProjects);
        setError(null); // Clear error state if successful
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);




  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Scroll to a specific project
  const scrollToProject = (id) => {
    const projectElement = document.getElementById(id);
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });
      setShowDropdown(false); // Close dropdown after navigation
    }
  };

  if (loading) {
    return <div className="text-center text-2xl mt-50">Loading Projects...</div>;
  }

  if (error) {
    return <div className="text-center mt-50 text-red-500">{error}</div>;
  }

  // Check if the project has features or not
  const hasFeatures = projects.features && projects.features.length > 0;

  return (
    <div className="min-h-screen w-full mt-30  md:w-[80%] mx-auto items-center justify-center px-4 overflow-x-hidden">
      {/* Floating Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 text-2xl font-bold backdrop-blur-md bg-white/30  rounded-full shadow-lg hover:bg-green-400 transition-all"
        >
          ↑
        </button>
      )}

      {/* Floating Sticky Navigation Button with Dropdown */}
      <div className="fixed top-1/2 left-8 hidden md:block z-10">
        <button
          onClick={toggleDropdown}
          className="p-2 backdrop-blur-md rounded-sm bg-neutral-300 dark:bg-neutral-300 text-black hover:text-green-400  cursor-pointer transition-all"
        >
          Navigation
        </button>
        {showDropdown && (
          <div className="mt-2 rounded-lg shadow-lg  overflow-hidden w-max z-20 backdrop-blur-md bg-white/30 max-h-60 overflow-y-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => scrollToProject(`project-${index}`)}
                className="px-4 py-2 cursor-pointer hover:text-green-400 duration-300 transition-all"
              >
                {project.title}

              </div>
            ))}
          </div>
        )}
      </div>



      {/* Projects Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 2 }}
        className="my-16 text-center text-4xl font-bold"
        id="projects" // Add ID for navigation
      >
        Projects
      </motion.h2>
      <div className="max-w-5xl mx-auto w-full">
        {projects.map((project, index) => (
          <div
            className="mb-10 flex flex-col lg:flex-row items-center border-b border-neutral-800 p-2 sm:border-hidden lg:items-start gap-6"
            key={index}
            id={`project-${index}`} // Unique ID for each project
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 2 }}
              className="flex-shrink-0 max-w-[300px] lg:w-1/3"
            >


              <div className="">
                <img src={project.image} alt=""
                  key={index}
                  className="h-auto rounded-lg shadow-lg cursor-zoom-in"
                  onClick={() => { setSelectedImage(project.image) }}
                  title="click for full image"
                />

                {selectedImage && (
                  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={() => { setSelectedImage(null) }}

                  >
                    <div className="relative">
                      <img src={selectedImage} alt=""
                        className="max-w-full max-h-[90vh] rounded-2xl cursor-zoom-out" />
                    </div>

                  </div>
                )}
              </div>

            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 2 }}
              className="lg:w-2/3"
            >
              <h6 className="mb-3 font-semibold text-xl">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubrepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center gap-1"
                    title={project.title.length > 30 ? project.title : ""}
                  >
                    {project.title.length > 30 ? project.title.slice(0, 25) + "..." : project.title}
                    <img src={git2} alt="GitHub" className="w-5 h-5 dark:hidden" />
                    <img src={git} alt="GitHub" className="w-5 h-5 hidden dark:block" />
                  </a>

                  <span className="text-gray-500">|</span>

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    Live Demo 🚀
                  </a>
                </div>
              </h6>

              <p className="mb-4 text-neutral-500 text-justify">
                {project.description}
              </p>

              <div>
                {hasFeatures && (
                  <p className="mb-4 text-neutral-700 text-justify">
                    <strong>Features:</strong> {project.features.join(", ")}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <ul className="space-y-2">
                  {project.technologies
                    .flatMap((tech) => tech.split(",")) // Split items containing commas
                    .map((tech, index) => (
                      <span
                        className=" rounded bg-gray-700 px-4 py-0.5 m-1 text-sm font-medium text-rose-400"
                        key={index}
                      >
                        {tech.trim()} {/* Trim removes unwanted spaces */}
                      </span>
                    ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;