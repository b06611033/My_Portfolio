import React from "react";

export default function Extracurricular() {
  return (
    <section id="extracurricular">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Extracurricular
          </h1>
          <p className="mb-8 text-gray-700 leading-relaxed">
            I love playing soccer, and I am a die hard Messi fan who supports FC Barcelona and PSG. <br />
            In 2018, I joined the soccer varsity team of National Taiwan University, and played as left wing/right back for 3 years. <br />
            I also enjoy wandering around cities, mountains and oceans on my Specialized Allez road bike. <br />
            I am looking forward to visiting amazing landscapes in US with my bike. 
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./soccer varsity.jpg"
          />
        </div>
      </div>
    </section>
  );
}
