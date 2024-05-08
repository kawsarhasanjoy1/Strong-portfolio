import React from "react";
import Author from "../../About/Author";
import Service from "../Service/Service";
import Skill from "../Skill/Skill";
import Resume from "../Resume/Resume";

const About = () => {
  return (
    <div>
      <p className=" text-3xl font-bold text-center my-11 text-white">
        About me
      </p>
      <Author />
      <Service />
      <Skill />
      <Resume />
    </div>
  );
};

export default About;
