import React, { useState } from 'react';
import { motion } from "framer-motion"; // Install this package for smooth animations
import Home from '../Home/Home/Home';
import { Link } from 'react-router-dom';

function Navigation() {
    const [toggle, setToggle] = useState(false);

    const isOpen = () => {
        setToggle(!toggle);
    };

    return (
        <div className="fixed top-1/2 right-8 z-10">
            {/* Floating Button */}
            <button
                onClick={isOpen}
                className="w-14 h-14 rounded-full bg-neutral-300  text-black  
                           flex items-center justify-center text-2xl font-bold leading-none 
                          shadow-lg transition-all duration-300 hover:text-green-400 active:scale-90">
                {toggle ? "-" : "+"}
            </button>

            {/* Dropdown Menu (Animated) */}
            {toggle && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-4 w-48 p-4 rounded-lg shadow-lg  overflow-hidden z-20 backdrop-blur-md bg-white/30 max-h-60 overflow-y-auto">
                    <ul className="space-y-3 ">
                        <li className="hover:text-green-500 cursor-pointer"><Link to={"/"}>Home</Link></li>
                        <li className="hover:text-green-500 cursor-pointer"><Link to={"/about"}>About</Link></li>
                        <li className="hover:text-green-500 cursor-pointer"><Link to={"/showcase"}>Showcase</Link></li>
                        <li className="hover:text-green-500 cursor-pointer"><Link to={"/social"}>Get in touch</Link></li>
                        <li className="hover:text-green-500 cursor-pointer"><Link to={"/contact"}>Contact</Link></li>
                        <li className="hover:text-green-500 cursor-pointer"><Link to={"/skills"}>Skills</Link></li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
}

export default Navigation;
