"use client";
import PInput from "@/component/Forms/PInput";
import React from "react";
import { FieldValues } from "react-hook-form";
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
          <PInput
            className=" w-full text-white"
            type="text"
            name="name"
            label="Name"
            placeHolder="Enter your name"
          />
        </div>
        <div className="form-control w-full ">
          <PInput
            className=" w-full text-white"
            type="text"
            name="email"
            label="Email"
            placeHolder="Enter your email"
          />
        </div>
        <div className="form-control w-full ">
          <PInput
            className=" w-full text-white"
            type="text"
            name="subject"
            label="Subject"
            placeHolder="Enter your subject"
          />
        </div>
        <div className="form-control w-full ">
          <PInput
            className=" h-32 w-full text-white"
            type="text"
            name="message"
            label="Message"
            placeHolder="Enter your message"
          />
        </div>
        <div className=" text-start">
          <Button type="submit" className="">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
