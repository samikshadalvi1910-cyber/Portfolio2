import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

const About = lazy(() => import("./Components/About"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Resume = lazy(() => import("./Components/Resume"));
const Contact = lazy(() => import("./Components/Contact"));
const Footer = lazy(() => import("./Components/Footer"));


function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        
      </Suspense>
    </>
  );
}

export default App;

//Footer pending