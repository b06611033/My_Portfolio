import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Bryan!
          </h1>
          <p className="mb-8 text-white leading-relaxed">
            I am a software engineer at NetApp with a Computer Science degree from Texas A&M University. 
            I enjoy writing code, and have gained proficiency in system programming from my experience at NetApp.
            My interest includes Operating System, Backend Development, and Artificial Intelligence, feel free to contact me!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profile photo.jpg"
          />
        </div>
      </div>
    </section>
  );
}
