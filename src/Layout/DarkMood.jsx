import { useEffect, useState } from 'react';

function DarkMood() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div>
            <div
                className={`min-h-screen ${theme === "dark" ? "bg-[#212121] text-white" : "bg-white text-black"
                    }`}
            >
                <nav className="p-4 flex justify-end">
                    <button
                        className={`p-2 rounded-lg border  border-gray-400  hover:duration-300 duration-300 transition-colors cursor-pointer
                ${theme === "dark"
                                ? "hover:bg-neutral-100 hover:text-black"
                                : "hover:bg-neutral-700 hover:text-white"
                            }`}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
                    </button>
                </nav>
                <div>
                </div>
            </div>
        </div>
    )
}

export default DarkMood