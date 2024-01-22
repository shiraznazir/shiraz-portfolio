import React from "react";

const Heading = ({ text }) => {
  return (
    <>
      <div className="relative m-0 p-0 flex justify-center items-center bg-transparent">
        <p className="text-about my-0 py-0">{text}</p>
        <div className="absolute top-15 bg-transparent">
          <p className="text-5xl text-orange-400 uppercase">{text}</p>
          <div className="flex m-0 p-0">
            <div className="w-4/12 border-b-2 border-gray-200 p-2 mx-auto"></div>
            <div className="w-4/12 border-b-2 border-orange-800 p-2 mx-auto"></div>
            <div className="w-4/12 border-b-2 border-gray-200 p-2 mx-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
