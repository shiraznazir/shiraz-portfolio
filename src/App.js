import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";

const App = () => {
  return (
    <div className="ease-in duration-300">
      <Header />
      <Body />
      <About />
      {/* <Skills /> */}
      <Resume />
    </div>
  );
};

export default App;
