import React from "react";

const Resume = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 my-24">
      <div>
        <p className=" font-bold text-3xl text-white my-10">My Experience</p>
        <div className=" space-y-6">
          <div className=" bg-[#2220207a] py-5 md:h-48 h-56 flex flex-col justify-center item-center px-8 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-green-400 duration-500 rounded-lg space-y-3">
            <p className="  font-bold text-xl text-white"> 2022-Present</p>
            <p className="text-3xl font-bold">Frontend developer</p>
            <p className="text-xl  font-bold text-white">
              {" "}
              Completed course from Programming hero
            </p>
          </div>
          <div className=" bg-[#2220207a] py-5 md:h-48 h-56 flex flex-col justify-center item-center px-8 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-green-400 duration-500 rounded-lg space-y-3">
            <p className="  font-bold text-xl text-white"> 2022-Present</p>
            <p className="text-3xl font-bold">Mern-stack developer</p>
            <p className="text-xl  font-bold text-white">
              {" "}
              Completed course from Programming hero
            </p>
          </div>
          <div className=" bg-[#2220207a] py-5 md:h-48 h-56 flex flex-col justify-center item-center px-8 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-green-400 duration-500 rounded-lg space-y-3">
            <p className="  font-bold text-xl text-white"> 2022-Present</p>
            <p className="text-3xl font-bold">Full-stack developer</p>
            <p className="text-xl  font-bold text-white">
              Completed course from Programming hero
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className=" font-bold text-3xl text-white my-10">My Education</p>
        <div className=" space-y-6">
          <div className=" bg-[#2220207a] py-5 md:h-48 h-56 flex flex-col justify-center item-center px-8 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-green-400 duration-500 rounded-lg space-y-3">
            <p className="  font-bold text-xl text-white"> 2020-2022</p>
            <p className="text-3xl font-bold">Secondary School Certificate</p>
            <p className="text-xl  font-bold text-white">
              I have completed Secondary School Certificate from madrasah board
              ,Mymensingh
            </p>
          </div>
          <div className=" bg-[#2220207a] py-5 md:h-48 h-56 flex flex-col justify-center item-center px-8 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-green-400 duration-500 rounded-lg space-y-3">
            <p className="  font-bold text-xl text-white"> 2022-24</p>
            <p className="text-3xl font-semibold">
              Higher Secondary School Certificate
            </p>
            <p className="text-xl  font-bold text-white">
              I have not completed Higher Secondary School Certificate
            </p>
          </div>
          <div className=" bg-[#2220207a] py-5 md:h-48 h-56 flex flex-col justify-center item-center px-8 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white text-green-400 duration-500 rounded-lg space-y-3">
            <p className="  font-bold text-xl text-white"> 2019-2020</p>
            <p className="text-3xl font-bold">Junior Dakhil Certificate</p>
            <p className="text-xl  font-bold text-white">
              {" "}
              I have completed Secondary School Certificate from madrasah board
              ,Mymensingh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
