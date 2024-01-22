import React from "react";
import Heading from "./Common/Heading";
import expIcon from "../assets/official.png";
import eduIcon from "../assets/education.png";
import Cards from "./Common/Cards";

const details = [
  {
    name: "Byte Ready",
    desc: "Developed Byte Ready, empowering restaurant owners to effortlessly share menu images on Instagram, Facebook, and Twitter, streamlining marketing efforts for enhanced online visibility",
  },
  {
    name: "Project Mix",
    desc: "Contributed to Project Mix, focusing on mobile phone product management and repair parts handling. Engaged in developing processes for efficient product tracking and repair management in a dynamic environment.",
  },
  {
    name: "Byte Ready",
    desc: "Developed Byte Ready, empowering restaurant owners to effortlessly share menu images on Instagram, Facebook, and Twitter, streamlining marketing efforts for enhanced online visibility",
  },
];

const Resume = () => {
  return (
    <div className="w-full my-8">
      <Heading text="Experience" />
      <div className="w-10/12 m-auto flex gap-4">
        {details.map((item) => (
          <Cards heading={item.name} desc={item.desc} />
        ))}
      </div>

      {/* <div className="grid grid-cols-12">
        <div className="col-span-6 w-10/12 mx-auto">
          <div className="flex gap-8">
            <img className="w-10 h-10" src={expIcon} alt="Official" />
            <p className="text-5xl my-auto">Experience</p>
          </div>
          <div className="flex gap-14 mt-4">
            <div>
              <div className="bg-orange-400 border-2 border-gray-400 w-4 h-4 rounded-full"></div>
              <div className="border-l-2 w-4 h-96 border-gray-400 ml-[0.4rem]"></div>
            </div>
            <div>
              <p className="text-lg my-2 leading-5 text-orange-400">
                Software Developement Engineer - (Frontend)
              </p>
              <p className="text-xl my-2">Ottomern Technologies</p>
              <p className="my-2">
                • Developed Byte Ready, empowering restaurant owners to
                effortlessly share menu images on Instagram, Facebook, and
                Twitter, streamlining marketing efforts for enhanced online
                visibility.
              </p>
              <p className="my-2">
                • Contributed to Project Mix, focusing on mobile phone product
                management and repair parts handling. Engaged in developing
                processes for efficient product tracking and repair management
                in a dynamic environment.
              </p>
              <p className="my-2">
                • Crafted a comprehensive CRM solution enabling seamless project
                management, financial tracking, customer engagement, and more
                for our client, ensuring efficiency and organization in every
                aspect of their business operations.
              </p>
              <p className="my-2">
                • Developing a robust IT Asset Management system for efficient
                tracking, maintenance, and optimization of digital assets.
                Enhancing organizational productivity and ensuring resource
                utilization up to industry standards.
              </p>
              <p className="my-2">
                • Doc Studio: Innovative document design software empowering
                users to create visually stunning documents effortlessly.
                Streamlined interface, rich features, and user-friendly design
                for efficient document creation
              </p>
            </div>
          </div>
          <div className="flex gap-14">
            <div>
              <div className="bg-orange-400 border-2 border-gray-400 w-4 h-4 rounded-full"></div>
              <div className="border-l-2 w-4 h-36 border-gray-400 ml-[0.4rem]"></div>
            </div>
            <div>
              <p className="text-lg my-2 leading-5 text-orange-400">
                Game Developer Trainee
              </p>
              <p className="text-xl my-2">Algomics Technologies Private Ltd</p>
              <ul className="">
                <li className="my-2 list-inside">
                  • Developed the front-end of a casino game using JavaScript
                  and the company's framework.
                </li>
                <li className="my-2">
                  • Managed game assets and implemented game simulations.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-6 w-10/12 mx-auto my-4">
          <div className="flex gap-8">
            <img className="w-12 h-10" src={eduIcon} alt="Official" />
            <p className="text-5xl my-auto">Education</p>
          </div>
          <div className="flex gap-14 mt-4">
            <div>
              <div className="bg-orange-400 border-2 border-gray-400 w-4 h-4 rounded-full"></div>
              <div className="border-l-2 w-4 h-20 border-gray-400 ml-[0.4rem]"></div>
            </div>
            <div>
              <p className="text-lg my-2 leading-5 text-orange-400">
                Dr. A.P.J. Abdul Kalam Technical University
              </p>
              <p className="text-xl my-2">Bachelor of Engineering</p>
            </div>
          </div>
          <div className="flex gap-14">
            <div>
              <div className="bg-orange-400 border-2 border-gray-400 w-4 h-4 rounded-full"></div>
              <div className="border-l-2 w-4 h-20 border-gray-400 ml-[0.4rem]"></div>
            </div>
            <div>
              <p className="text-lg my-2 leading-5 text-orange-400">
                Invertis University
              </p>
              <p className="text-xl my-2">Diploma of Engineering</p>
            </div>
          </div>
          <div className="flex gap-14">
            <div>
              <div className="bg-orange-400 border-2 border-gray-400 w-4 h-4 rounded-full"></div>
              <div className="border-l-2 w-4 h-20 border-gray-400 ml-[0.4rem]"></div>
            </div>
            <div>
              <p className="text-lg my-2 leading-5 text-orange-400">CBSE</p>
              <p className="text-xl my-2">High School</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Resume;
