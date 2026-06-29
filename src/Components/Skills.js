import React from "react";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "SQL",
    "ASP.NET"
  ];

  return (
    <section id="skills" className="section">

      <h1>My Skills</h1>

      <div className="cards">

        {skills.map((skill, index) => (
          <div className="card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;