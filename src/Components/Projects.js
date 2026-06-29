import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">

      <h1>Projects</h1>

      <div className="cards">

        <div className="card">
          <h3>Rentomatic</h3>
          <p>Real Estate Website</p>
          <p>React + ASP.NET + SQL Server</p>
        </div>

        <div className="card">
          <h3>Weather App</h3>
          <p>Displays real-time weather information</p>
          <p>React + OpenWeather API + CSS</p>
        </div>

      </div>

    </section>
  );
}

export default Projects;