import ContactForm from "./Contact";
// import Coundter from "./Coundter";

// Social media contact data
const socialMedias = [
   {
      title: "Twitter",
      username: "@__rimu7_",
      url: "https://x.com/__rimu7_/",
      description: "X is where I post my thoughts, memes, takes, and whatever else comes to mind"
   },
   {
      title: "GitHub",
      username: "@rimu-7",
      url: "https://github.com/rimu-7/",
      description: "Check out my code repositories and open-source contributions"
   },
   {
      title: "LinkedIn",
      username: "@Mutasim Fuad Rimu",
      url: "https://www.linkedin.com/in/mutasim-fuad-rimu-36a4a8260",
      description: "Connect with me professionally for work opportunities and collaboration"
   },
   {
      title: "Instagram",
      username: "@__rimu_7",
      url: "https://www.instagram.com/__rimu_7/",
      description: "Follow me for updates, photos, and behind-the-scenes moments"
   },
   {
      title: "Email",
      username: "rrimu99@gmail.com",
      url: "mailto:rrimu99@gmail.com",
      description: "The most direct way to reach me for business inquiries and collaborations"
   }
];

const Social = () => {
   return (
      <main className="min-h-screen bg-background text-primary py-25 accent-dots">
         {/* Add corner glow effect */}

         {/* Add constellation pattern */}

         <div className="container max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
            {/* Section: Get in Touch */}
            <section className="w-full animate-fadeIn">
               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-2 sm:mb-3 pl-3 py-1">
                  # Get in touch
               </h1>
               <p className="text-xs sm:text-sm md:text-base text-primary pl-4">
                  My DMs are always open for any kind of collaboration or just to say hi!
               </p>
            </section>

            {/* Section: Social Media Links */}
            <section className="animate-fadeIn flex flex-col gap-4">
               {socialMedias.map((social, index) => (
                  <a
                     key={index}
                     href={social.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block  rounded-lg bg-background-secondary hover:bg-opacity-80 transition duration-300"
                  >
                     <div className="p-4 bg-gray-400 rounded-lg">
                        <div className=" px-2  flex justify-between">
                           <h3 className="text-lg font-bold text-highlight">{social.title}</h3>
                           <p className="text-sm text-secondary">{social.username}</p>
                        </div>
                        <hr className="border-t border-gray-300 my-4" />
                        <div className="px-2 rounded">
                           <p className="text-xs text-primary mt-1">{social.description}</p>
                        </div>
                     </div>
                  </a>
               ))}
            </section>

            {/* Section: Contact Form */}
            <section className="w-full bg-gray-400 animate-fadeIn rounded-lg bg-background-secondary p-6">
               <h2 className="text-lg sm:text-xl font-bold text-highlight mb-4 pl-2">
                  Send a Direct Message
               </h2>
               <ContactForm />
               <p className="text-secondary px-4 text-xs mt-4">
                  I typically respond within 24-48 hours on weekdays.
               </p>

               {/* <div className=" w-96 h-96 flex justify-center items-center">
                  <Coundter/>
               </div> */}
            </section>
         </div>
      </main>
   );
};

export default Social;
