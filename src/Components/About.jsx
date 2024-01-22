import React from "react";
import img from "../assets/Photo3.png";
import Download from "./Download";
import Heading from "./Common/Heading";

const About = () => {
  return (
    <div className="mb-4">
      <Heading text="About Me" />
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1">
        <div className="w-10/12 flex justify-center items-center m-auto">
          <img
            className="w-48 h-48 md:w-96 md:h-96 border-8 border-gray-400 rounded-full"
            src={img}
            alt="mine"
          />
        </div>
        <div>
          <h1 className="my-2 text-xl">Hello, I'm Shiraz Nazir</h1>
          <p className="my-2 text-2xl text-orange-400">
            Software Development Engineer
          </p>
          <p className="my-2 text-sm">
            Experienced web developer passionate about creating robust,
            user-friendly applications. Proven track record, collaborative
            mindset, and adept at delivering high-quality software in
            cross-functional teams.
          </p>
          <div className="grid grid-cols-4 mt-12 gap-2">
            <div className="col-span-1">
              <p className="text-lg">Birthday</p>
            </div>
            <div className="col-span-3">
              <p className="text-lg">: &nbsp;&nbsp;&nbsp;10 Sep, 1996</p>
            </div>
            <div className="col-span-1">
              <p className="text-lg">Phone</p>
            </div>
            <div className="col-span-3">
              <a href="tel:+919837305499" className="text-lg">
                : &nbsp;&nbsp;&nbsp;9837305499
              </a>
            </div>
            <div className="col-span-1">
              <p className="text-lg">From</p>
            </div>
            <div className="col-span-3">
              <p className="text-lg">
                : &nbsp;&nbsp;&nbsp;N-148A, Narayan Nagar, Laxmi Nagar, Delhi
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-lg">Email</p>
            </div>
            <div className="col-span-3">
              <a href="mailto:talmud786@gmail.com" className="text-lg">
                : &nbsp;&nbsp;&nbsp;talmud786@gmail.com
              </a>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 p-2 rounded-lg my-4">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
