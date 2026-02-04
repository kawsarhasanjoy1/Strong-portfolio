"use client";
import React, { useEffect } from "react";
import { useForm } from "@formspree/react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgwllzg");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2">
              Name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your Name"
              className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="Your Email"
              className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2">
            Subject
          </label>
          <input
            required
            name="subject"
            type="text"
            placeholder="How can I help you?"
            className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2">
            Message
          </label>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Share your thoughts..."
            className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all resize-none"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full md:w-max px-12 py-4 bg-gray-900 text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-blue-600 shadow-lg hover:shadow-blue-200 transition-all duration-300 disabled:opacity-50 active:scale-95"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;