import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Samiksha Dalvi | All Rights Reserved.</p>

      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="mailto:samiksha@example.com">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;