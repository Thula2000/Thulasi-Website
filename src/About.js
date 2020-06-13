import React, { useState } from "react";
import Heading from "./Heading";
import Home from "./Home";
import "./App.css";
function About() {
  const [content, setContent] = useState("about");
  function clickedButton() {
    setContent("home");
  }
  if (content === "home") {
    return <Home />;
  }
  return (
    <div className="background">
      <header className="aboutheader">
        <Heading />
        <h1 class="aboutheading">
          Bookworm, animal lover, anime enthusiast & admirer of good music
        </h1>
        <p class="aboutparagraph">
          I have always been fascinated in the medical field which led me to
          pursue my undergraduate in biomedical engineering at Ryerson
          University. As someone who loves to learn, the combination of the core
          principles of science, medicine and engineering felt perfect. Include:
          -what I offer to the world -future aspirations
        </p>

        <a class="app-link" onClick={() => clickedButton()}>
          Home
        </a>
      </header>
    </div>
  );
}

export default About;
