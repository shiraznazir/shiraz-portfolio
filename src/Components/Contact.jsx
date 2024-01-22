import React from "react";
import SocialMedia from "./Common/SocialMedia";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-end mx-8 my-8 gap-8">
      <p className="text-orange-400 text-3xl">You can connect me anywhere</p>
      <SocialMedia />
    </div>
  );
};

export default Contact;
