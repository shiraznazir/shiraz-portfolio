import React from "react";

const Cards = ({ heading, desc }) => {
  return (
    <div className="w-4/12 border-2 border-gray-400 rounded-xl p-2 cursor-pointer hover:bg-orange-200">
      <p className="text-2xl text-orange-400 text-center my-2">{heading}</p>
      <p className="my-4 mx-2 text-sm text-left">{desc}</p>
    </div>
  );
};

export default Cards;
