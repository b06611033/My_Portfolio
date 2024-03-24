import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="text-white bg-black body-font">
      <div className="container px-5 py-10 mx-auto  lg:px-80">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium text-center title-font mb-4 text-white">
            Experience
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <h1 className="sm:text-2xl text-2xl font-small text-center title-font mb-4 text-white">
            Software Engineer Intern     
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I joined Collins Aerospace (Raytheon) as a software engineer intern in 2023 summer.
            During my internship, I developed an keyword extraction tool to automatically extract important information from images.
            I also created an item storage system to scan item labels and perfrom CRUD operations in database for the Logistic Team.
            Through these projects, I gained experience in image processing, and also enhanced my skills in
            in Python, SQL, OpenCV, and Tesseract.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <h1 className="sm:text-2xl text-2xl font-small text-center title-font mb-4 text-white">
            <br />
            <br />
            Machine Learning Undergraduate Researcher     
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I joined the Biophotonics and Bioimaging Laboratory of National Taiwan University as an undergraduate researcher from 2019-2021.
            I mainly worked on image processing and machine learning projects. 
            My thesis project was to classify dog behaviors with Machine Learning, and as a result, 
            my classification model reached 95% accuracy on classifying five dog behaviors: eating, resting, standing, walking, running.
            The technologies I used includes C++, Python, QT, OpenCV, and Tensorflow.
          </p>
        </div>
      </div>
    </section>
  );
}
