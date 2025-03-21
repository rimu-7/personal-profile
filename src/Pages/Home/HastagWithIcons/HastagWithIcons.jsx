import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFastapi, SiCplusplus } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const HashtagWithIcons = () => {
    const icons = [
        null, // First position empty
        { component: <FaReact className="text-blue-400 text-5xl" />, key: "react" },
        { component: <SiMongodb className="text-green-500 text-5xl" />, key: "mongodb" },
        { component: <RiNextjsLine className="text-[#212121]  dark:text-white text-5xl" />, key: "javascript" },
        { component: <FaNodeJs className="text-green-400 text-5xl" />, key: "nodejs" },
        { component: <SiTailwindcss className="text-blue-300 text-5xl" />, key: "tailwind" },
        { component: <SiFastapi className="text-teal-500 text-5xl" />, key: "fastapi" },
        { component: <SiCplusplus className="text-blue-500 text-5xl" />, key: "cplusplus" },
        null // Last position empty
    ];


    return (
        <div className="flex flex-col items-center justify-center text-center  ">
            <h3 className="text-2xl md:text-3xl font-semibold py-5">Always Out of The Box!</h3>
            <div className="hidden md:block">
                <div className="relative grid grid-cols-3 grid-rows-3 gap-3 w-full md:w-96 h-72 md:h-96">
                    {/* Vertical & Horizontal Lines */}
                    <div className="absolute w-1 h-full bg-[#212121]  dark:bg-white  left-1/3 transform -translate-x-1/2" />
                    <div className="absolute w-1 h-full bg-[#212121]  dark:bg-white  right-1/3 transform translate-x-1/2" />
                    <div className="absolute h-1 w-full bg-[#212121]  dark:bg-white top-1/3 transform -translate-y-1/2" />
                    <div className="absolute h-1 w-full bg-[#212121]  dark:bg-white bottom-1/3 transform translate-y-1/2" />

                    {/* Icons inside the hashtag */}
                    {icons.map((icon, index) => (
                        <div key={index} className="flex items-center justify-center">
                            {icon ? icon.component : null}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default HashtagWithIcons;
