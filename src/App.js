import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Body />
        <About />
        <Skill />
        <Work />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
