import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <ul className="m-4 p-2 flex justify-end gap-10 pr-24 text-lg">
        <li className="cursor-pointer hover:text-orange-400">Home</li>
        <li className="cursor-pointer hover:text-orange-400">About</li>
        <li className="cursor-pointer hover:text-orange-400">Resume</li>
        <li className="cursor-pointer hover:text-orange-400">Skills</li>
        <li className="cursor-pointer hover:text-orange-400">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
