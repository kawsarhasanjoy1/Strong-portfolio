import React from "react";
import ContactForm from "../Home/Contact/ContactForm";
import ContactInfo from "../Home/Contact/ContactInfo";

const Contact = () => {
  return (
    <div className=" md:flex md:flex-row-reverse ">
      <div className="w-full flex flex-col ">
        <h1 className=" my-6 text-center">Contact info</h1>
        <ContactInfo />
      </div>
      <div className="w-full">
        <h1 className=" my-6 text-center ">Contact form</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
