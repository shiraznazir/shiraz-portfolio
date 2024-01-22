import React, { useRef, useEffect } from "react";
import Heading from "./Common/Heading";
import htmlLogo from "../assets/HTML.png";
import cssLogo from "../assets/CSS.png";
import javascriptLogo from "../assets/JavaScript.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwindLogo from "../assets/Tailwind.png";
import muiLogo from "../assets/mui.png";
import parcelLogo from "../assets/Parcel.png";
import nodeLogo from "../assets/nodejs.png";
import expressLogo from "../assets/Express.png";
import restApiLogo from "../assets/RestAPI.png";
import babelLogo from "../assets/Babel.png";
import mongoDBLogo from "../assets/MongoDB.png";

const images = [
  { imgUrl: htmlLogo, alt: "HTML5" },
  { imgUrl: cssLogo, alt: "CSS3" },
  { imgUrl: javascriptLogo, alt: "Javascript" },
  { imgUrl: reactLogo, alt: "React" },
  { imgUrl: reduxLogo, alt: "Redux" },
  { imgUrl: tailwindLogo, alt: "TailwindCSS" },
  { imgUrl: muiLogo, alt: "MUI" },
  { imgUrl: parcelLogo, alt: "Parcel" },
  { imgUrl: nodeLogo, alt: "NodeJS" },
  { imgUrl: expressLogo, alt: "ExpressJS" },
  { imgUrl: restApiLogo, alt: "RestApi" },
  { imgUrl: babelLogo, alt: "Babel" },
  { imgUrl: mongoDBLogo, alt: "MongoDB" },
];

const Skills = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current.scrollLeft += 100;
    };

    const timer = setInterval(() => {
      handleScroll();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full">
      <Heading text="Skills" />
      <div
        ref={scrollRef}
        className="w-10/12 my-4 p-2 flex gap-8 overflow-x-auto whitespace-nowrap m-auto no-scrollbar"
      >
        {images?.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              className="w-32 h-32 rounded-xl"
              src={item.imgUrl}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
