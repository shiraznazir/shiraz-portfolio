import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  LinkedIn_Profile,
  Facebook_Profile,
  Github_Profile,
  Twitter_Profile,
} from "../constants";

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
      <div className="flex flex-row gap-4">
        <a
          target="_blank"
          href={LinkedIn_Profile}
          className="cursor-pointer w-12 h-12 bg-black border-2 border-gray-400 hover:border-gray-100 rounded-full flex items-center justify-center"
        >
          <FaLinkedin size={25} style={{ bgColor: "#000" }} />
        </a>
        <a
          target="_blank"
          href={Github_Profile}
          className="cursor-pointer w-12 h-12 bg-black border-2 border-gray-400 hover:border-gray-100 rounded-full flex items-center justify-center"
        >
          <FaGithub size={25} />
        </a>
        <a
          target="_blank"
          href={Twitter_Profile}
          className="cursor-pointer w-12 h-12 bg-black border-2 border-gray-400 hover:border-gray-100 rounded-full flex items-center justify-center"
        >
          <FaTwitter size={25} />
        </a>
        <a
          target="_blank"
          href={Facebook_Profile}
          className="cursor-pointer w-12 h-12 bg-black border-2 border-gray-400 hover:border-gray-100 rounded-full flex items-center justify-center"
        >
          <FaFacebookF size={25} />
        </a>
      </div>
    </div>
  );
};

export default Body;
