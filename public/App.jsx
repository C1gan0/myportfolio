import React from "react";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import About from "./components/Sobre";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contato />
      <Rodape />
    </div>
  );
};

export default App;