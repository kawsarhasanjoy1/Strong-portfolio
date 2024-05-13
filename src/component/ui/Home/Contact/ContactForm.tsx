"use client";
import React from "react";
import Button from "../../Button/Button";
import { useForm } from "@formspree/react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgwllzg");
  if (state.succeeded) {
    toast.success("Message send successful");
  }

  return (
    <form
      method="POST"
      action={"https://formspree.io/f/mdoqbqoq"}
      onSubmit={handleSubmit}
    >
      <div className="shadow-2xl bg-[#2220207a] mt-[50px] md:px-10 px-2 py-6 rounded-[50px] space-y-[19px] text-black md:text-white">
        <div className="form-control w-full">
          <label htmlFor="">Name</label>
          <input
            className={` border border-[#1B8EF8] bg-transparent px-4 rounded-md py-2 text-[#1B8EF8] focus:outline-none `}
            type="text"
            name="name"
            placeholder={"Enter your name"}
          />
        </div>
        <div className="form-control w-full ">
          <label htmlFor="">Email</label>
          <input
            className={` border border-[#1B8EF8] bg-transparent px-4 rounded-md py-2 text-[#1B8EF8] focus:outline-none `}
            type="email"
            name="email"
            placeholder={"Enter your email"}
          />
        </div>
        <div className="form-control w-full ">
          <label htmlFor="">Subject</label>
          <input
            className={` border border-[#1B8EF8] bg-transparent px-4 rounded-md py-2 text-[#1B8EF8] focus:outline-none `}
            type="text"
            name="subject"
            placeholder={"Enter your subject"}
          />
        </div>
        <div className="form-control w-full ">
          <label htmlFor="">Message</label>
          <input
            className={` border border-[#1B8EF8] bg-transparent px-4 rounded-md py-2 text-[#1B8EF8] focus:outline-none h-40`}
            type="text"
            name="message"
            placeholder={"Enter your message"}
          />
        </div>
        <div className=" text-start">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
