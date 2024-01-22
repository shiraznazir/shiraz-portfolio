import React from "react";
import SocialMedia from "./Common/SocialMedia";

const Body = () => {
  return (
    <div className="w-full h-80 flex flex-col items-center justify-center gap-8">
      <p className="text-5xl text-center">
        Hey, I'm &nbsp;
        <strong className="text-orange-400 animate-spin">Shiraz Nazir</strong>
      </p>
      <p className="w-8/12 text-center text-xl">
        Software Development Engineer crafting cutting-edge solutions with the
        latest technologies, enhancing user experiences and driving digital
        excellence.
      </p>
      <SocialMedia />
    </div>
  );
};

export default Body;
