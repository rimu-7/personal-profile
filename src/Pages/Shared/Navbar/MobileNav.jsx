import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0% 0% 100% 10%)", // Start fully hidden from the bottom
    transition: { duration: 1, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)", // Reveal smoothly
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Experiences", path: "/experiences" },
  { name: "Blogs", path: "/blogs" },
  { name: "Projects", path: "/projects" },
];

const MobileNav = ({ isOpen, toggleMenu }) => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className="flex flex-col gap-6 mt-5 ml-5 text-lg"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          {menuItems.map((item) => (
            <motion.li
              key={item.path}
              className="relative cursor-pointer hover:scale-105 hover:duration-500"
              variants={itemVariants}
              whileHover={{ scale: 1.1, color: "blue" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedTab(item.path);
                toggleMenu(); // Close menu on click
              }}
            >
              <Link
                to={item.path}
                className="hover:scale-105 hover:duration-500 transition-transform"
              >
                {item.name}
              </Link>
              {selectedTab === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right h-[3px] bottom-[-4px]"
                  initial={false}
                  animate={{ backgroundColor: "" }}
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;