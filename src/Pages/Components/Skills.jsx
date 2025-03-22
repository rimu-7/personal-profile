function Skills() {
  const skillCategories = [
    {
      title: "A - Based",
      color: "bg-green-300",
      skills: [
        { name: "HTML", description: "Markup language essential for structuring web content." },
        { name: "CSS", description: "Styling language for crafting visually appealing web pages." },
        { name: "Tailwind CSS", description: "Utility-first CSS framework enabling rapid and responsive UI development." },
        { name: "Git", description: "Version control system for tracking changes in code and collaborating with others." },
        { name: "Figma", description: "Design tool for creating high-fidelity prototypes and mockups." },
        // { name: "Blog Writing", description: "Experience in writing technical articles and blog posts on web development." },
      ],
    },
    {
      title: "B - Mid",
      color: "bg-green-500",
      skills: [
        { name: "JavaScript (ES6+)", description: "Core programming language for creating dynamic web experiences." },
        { name: "C++", description: "Enhanced programming with object-oriented principles and performance optimization." },
        { name: "Python", description: "Versatile scripting language for automation, data handling, and quick prototyping." },
        { name: "DSA", description: "Understanding of fundamental data structures and algorithms for efficient problem-solving." },
        { name: "Linux", description: "Experience with Linux-based operating systems and command-line tools." },
      ],
    },
    {
      title: "C - Good",
      color: "bg-yellow-500",
      skills: [
        { name: "Next.js", description: "Powerful framework for server-rendered React applications and full-stack development." },
        { name: "Express.js", description: "Minimalist web framework for Node.js that simplifies API development." },
        { name: "MongoDB", description: "NoSQL database integral to the MERN stack for handling dynamic data." },
        { name: "UI/UX Design", description: "Knowledge of design principles and tools to create intuitive user interfaces." },
      ],
    },
    {
      title: "D - Cringe",
      color: "bg-orange-400",
      skills: [{ name: "React Native", description: "Framework for building high-quality native mobile apps using React." }],
    },
    {
      title: "E - Strong Skill",
      color: "bg-red-500",
      skills: [
        { name: "React", description: "Modern component-based library for building interactive user interfaces." },
        { name: "Node.js", description: "Efficient JavaScript runtime for building scalable backend services." },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-400"># My Skills</h1>
        <p className="mt-2 text-lg ">
          Here are the skills and technologies I&apos;ve mastered over the years as a FullStack Web Developer.
          I&apos;m always learning and exploring new tools to enhance my development workflow and create better
          user experiences. See my works on the <span className="text-blue-400 underline">[Work ↗]</span> page.
        </p>

        {/* Render all skill categories */}
        <div className="mt-8 space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-4 rounded-lg shadow-lg ${category.color}`}>
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <ul className="mt-2 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="bg-gray-800 text-white p-3 rounded-lg">
                    <strong className="text-yellow-300">{skill.name}:</strong> {skill.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
