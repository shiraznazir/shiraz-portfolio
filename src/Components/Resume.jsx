import React from "react";
import Heading from "./Common/Heading";
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
    name: "CRM",
    desc: "Crafted a comprehensive CRM solution enabling seamless project management, financial tracking, customer engagement, and more for our client, ensuring efficiency and organization in every aspect of their business operations.",
  },
  {
    name: "IT Asset Management",
    desc: "Developing a robust IT Asset Management system for efficient tracking, maintenance, and optimization of digital assets. Enhancing organizational productivity and ensuring resource utilization up to industry standards.",
  },
  {
    name: "Doc Studio",
    desc: "Innovative document design software empowering users to create visually stunning documents effortlessly. Streamlined interface, rich features, and user-friendly design for efficient document creation",
  },
  {
    name: "TableTrekker",
    desc: "Created a restaurant food ordering system with table-specific functionality. Developed admin and customer panels using React and Express, ensuring seamless data flow. Collaborated on the comprehensive application architecture for enhanced performance.",
  },
];

const Resume = () => {
  return (
    <div className="w-full my-8">
      <Heading text="Experience" />
      <div className="w-10/12 m-auto grid grid-cols-3 gap-8 justify-center">
        {details.map((item) => (
          <Cards heading={item.name} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
