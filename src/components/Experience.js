import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="text-white bg-black body-font">
      <div className="container px-5 py-10 mx-auto  lg:px-80">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium text-center title-font mb-4 text-white">
            Experience
          </h1>
        <div className="flex flex-wrap -m-4">
          <h1 className="sm:text-2xl text-2xl font-small text-center title-font mb-4 text-white">
            Software Engineer
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I joined NetApp as a software engineer in 2024 September.<br />
            I am in the Metrocluster team and is working on disaster/failure recovery solutions<br />
            to ensure data availability and integrity.<br />
          </p>
        </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <h1 className="sm:text-2xl text-2xl font-small text-center title-font mb-4 text-white">
            Software Engineer Intern     
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I joined Collins Aerospace (Raytheon) as a software engineer intern in 2023 summer.<br />
            During my internship, I developed a text extraction tool to identify keywords from images.<br />
            I also created an inventory application to scan item labels and manage them in database.<br />
            Through these projects, I gained experience in image processing and enhanced my skills in
            Python, SQL, OpenCV, and Tesseract.<br />
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <h1 className="sm:text-2xl text-2xl font-small text-center title-font mb-4 text-white">
            <br />
            <br />
            Machine Learning Undergraduate Researcher     
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I joined the Biophotonics and Bioimaging Laboratory of National Taiwan University as an undergraduate researcher from 2019-2021.<br />
            I worked on several image processing and machine learning projects.<br />
            My thesis project was to classify dog behaviors with Machine Learning,
            which my model reached 95% accuracy on classifying five dog behaviors: eating, resting, standing, walking, running.<br />
            The technologies I used include C++, Python, QT, OpenCV, and Tensorflow.<br />
          </p>
        </div>
      </div>
    </section>
  );
}
