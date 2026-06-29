import React from "react";

function Resume() {

  return (
    <section id="resume" className="section">

      <h1>Resume</h1>

      <p>
        Click below to download my resume.
      </p>

      <a
        href="/resume.pdf"
        download
      >
        <button>Download Resume</button>
      </a>

    </section>
  );
}

export default Resume;