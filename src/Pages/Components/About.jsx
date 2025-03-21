import { Link } from 'react-router-dom'; // Use React Router's Link

const About = () => {
   return (
      <main className="min-h-screen bg-background text-primary py-25 accent-dots accent-dots">
         {/* Add corner glow effect */}
         <div className="corner-glow"></div>

         {/* Add constellation pattern */}
         <div className="constellation"></div>

         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
            <section className="animate-fadeIn">
               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-3">
                  # Documentation
               </h1>
               <p className="text-sm sm:text-base text-primary">
                  I am passionate web developer with expertise in building modern, high-performance web applications. I continuously explore new technologies and frameworks to deliver innovative solutions. Check my <Link to="/" className="text-sm font-medium link-color hover:link-hover whitespace-nowrap">[blogs ↗]</Link>.
               </p>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-3">
                  ## Who am I
               </h2>
               <p className="text-sm sm:text-base text-primary">
                  I am Mutasim Fuad Rimu, a FullStack Web Developer with a passion for creating and sharing great software. I specialize in the MERN stack and React.js, and I am always eager to learn new technologies and frameworks. I am a dedicated problem solver who enjoys contributing to open-source projects and building innovative web applications.
               </p>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
                  ## Basic Information
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Nationality:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2 ">Bangladesh</span>
                     <span className="mx-2 text-sm sm:text-base">Staying In:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">China</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Type:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Freshers With Strong Skills</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Class:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Web Developer (MERN & React.js Specialist)</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">State:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Remote</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Age:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">
                        {(() => {
                           const birthDate = new Date(2000, 12, 31);
                           const currentDate = new Date();
                           const timeDifference = currentDate.getTime() - birthDate.getTime();
                           const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
                           return `${daysDifference} Days Successfully Survived`;
                        })()}
                     </span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Religion:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Islam</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Political Alignment:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Coding Party</span>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Status:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">
                        Available for projects (Freelance / Full-time)
                     </span>
                  </div>
               </div>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
                  ## Primary Language
               </h2>
               <div className="grid grid-cols-1 gap-3">
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme">
                     <div className="flex items-center mb-2">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Spoken:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">English</span>
                     </div>
                     <div className="flex items-center mb-2">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Native Spoken:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">Bengali</span>
                     </div>
                     <div className="flex items-center mb-2">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Written Docs:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">Markdown</span>
                     </div>
                     <div className="flex items-center mb-2">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Programming:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">JavaScript / TypeScript</span>
                     </div>
                     <div className="flex items-center mb-2">
                        <span className="text-sm sm:text-base font-medium text-highlight-secondary">Extra Programming:</span>
                        <span className="text-sm sm:text-base text-secondary ml-2">Python / C++</span>
                     </div>
                  </div>
               </div>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
                  ## Hobbies
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
                     <span className="text-sm sm:text-base text-secondary">Coding</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
                     <span className="text-sm sm:text-base text-secondary">Learning New Technologies</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
                     <span className="text-sm sm:text-base text-secondary">Open Source Contribution</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
                     <span className="text-sm sm:text-base text-secondary">Problem Solving</span>
                  </div>
               </div>
            </section>

            <section className="animate-fadeIn">
               <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
                  ## Software & Hardware
               </h2>

               <div className="flex flex-col gap-3">
                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Editor:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">VS Code</span>
                     <a
                        target='_blank'
                        href="https://code.visualstudio.com/"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-code  ↗]
                     </a>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Browser:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">FireFox</span>
                     <a
                        target='_blank'
                        href="https://www.mozilla.org/en-US/firefox/"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-firefox  ↗]
                     </a>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Terminal:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Warp</span>
                     <a
                        target='_blank'
                        href="https://www.warp.dev/"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-warp  ↗]
                     </a>
                  </div>

                  {/* <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">Device:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">MacBook m4 Air</span>
                     <a
                        target='_blank'
                        href="https://store.apple.cn"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-aplple  ↗]
                     </a>
                  </div> */}

                  <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
                     <span className="text-sm sm:text-base">OS:</span>
                     <span className="text-sm sm:text-base text-secondary ml-2">Fedora: hyprland</span>
                     <a
                        target='_blank'
                        href="https://fedoraproject.org"
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
                     >
                        [-fedora  ↗]
                     </a>
                  </div>
               </div>
            </section>
         </div>
      </main>
   );
};

export default About;