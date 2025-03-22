import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Story() {
  const [skills, setSkills] = useState([]);

  // Fetch skills from the backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/skills')
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the skills!', error);
      });
  }, []);

  // Group skills by year
  const groupSkillsByYear = (skills) => {
    return skills.reduce((grouped, skill) => {
      const year = skill.year;
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(skill);
      return grouped;
    }, {});
  };

  const groupedSkills = groupSkillsByYear(skills);

  return (
    <div className="min-h-screen  py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-4"># My Skills</h1>
        <p className="text-lg  mb-8">
          Here are the skills and technologies I&apos;ve mastered over the years as a FullStack Web Developer.
          I&apos;m always learning and exploring new tools to enhance my development workflow and create better
          user experiences. See my works on the <span className="text-blue-400 underline">[Work ↗]</span> page.
        </p>

        {/* Render skills grouped by year */}
        <div className="space-y-8">
          {Object.keys(groupedSkills)
            .sort((a, b) => b - a) // Sort years in descending order
            .map((year) => (
              <div key={year} className="bg-gray-800 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">{year}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedSkills[year].map((skill, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg">
                      <h3 className="text-xl text-white  font-semibold mb-2">
                        {skill.title} ({skill.day}/{skill.month}/{skill.year})
                      </h3>
                      <p className="text-gray-300 mb-4">{skill.description}</p>
                      {!skill.projectUrl ? "" : <a
                        href={skill.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300"
                      >
                        View Project
                      </a>}

                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Story;