import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mr-5 my-8 md:my-12 max-w-[700px]" id="contact">
      <h2 className="bg-primary-color font-bold font-serif text-xl">
        Leave a Message
      </h2>
      <form
        action="https://getform.io/f/xxx"
        method="POST"
        className="mt-5 max-w-[500px]"
        id="form"
      >
        <input
          type="text"
          id="name"
          placeholder="Your Name..."
          name="name"
          className="mb-2 w-full bg-transparent focus:bg-transparent outline-none border-b-2 py-2 pl-2 pr-4"
        />

        <input
          type="email"
          id="email"
          placeholder="Your Email..."
          name="email"
          className="mb-2 w-full bg-transparent outline-none border-b-2 py-2 pl-2 pr-4"
        />

        <textarea
          id="textarea"
          placeholder="Your Message.."
          cols="30"
          rows="4"
          name="textarea"
          className="mb-2 w-full bg-transparent outline-none focus:border-collapse border-b-2 py-2 pl-2 pr-4"
        />

        <button
          type="submit"
          className="p-2 text-gray-100 font-normal text-md border-2 border-transparent hover:border-2 hover:border-gray-50  bg-primary-color"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
