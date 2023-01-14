import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="text-white bg-blue-100 body-font">
      <div className="container px-5 py-10 mx-auto  lg:px-80">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium text-center title-font mb-4 text-black">
            Experience
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <h1 className="sm:text-2xl text-2xl font-small text-center title-font mb-4 text-black">
            Machine Learning Undergraduate Researcher     
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
            I joined the Biophotonics and Bioimaging Laboratory of National Taiwan University as an undergraduate researcher from 2019-2021.
            I mainly worked on image processing and machine learning projects, including a thesis project to classify dog behaviors with IMU and Machine Learning.
            The classification model reached an accuracy of 95% on classifying five dog behaviors: eating, resting, standing, walking, running.
            During these years, I became familiar with technologies including C++, Python, QT, Raspberry Pi, OpenCV and Tensorflow. 
          </p>
        </div>
      </div>
    </section>
  );
}
