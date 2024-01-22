import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="ease-in duration-300">
      <Header />
      <Body />
      <About />
      {/* <Skills /> */}
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
