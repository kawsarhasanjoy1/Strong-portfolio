import React from "react";
import ContactForm from "../Home/Contact/ContactForm";
import ContactInfo from "../Home/Contact/ContactInfo";

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">
            Let&apos;s <span className="text-blue-600">Connect</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <h3 className="text-xl font-bold mb-8 text-gray-800">
              Contact Details
            </h3>
            <ContactInfo />
          </div>
          <div className="w-full lg:w-2/3 bg-gray-50 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;