import React from "react";
import "font-awesome/css/font-awesome.min.css";
import edu from "../assets/8703118_3974104-removebg-preview.png";
import logo1 from "../assets/logos/5613852.png";
import logo2 from "../assets/logos/ECCouncilLogo.jpg";
import logo3 from "../assets/logos/freeCodeCamp.png";
import logo4 from "../assets/logos/Logo-OUSL-tnsp-207x300.png";
import logo5 from "../assets/logos/pngwing.com(2).png";
import logo6 from "../assets/logos/pngwing.com(3).png";

export const Project = () => {
  return (
    <>
      <section className="text-white flex items-center justify-center min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:gap-16 px-6 md:px-24 lg:px-32">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="max-w-[350px] md:max-w-[450px] lg:max-w-[500px] object-cover rounded-lg shadow-xl"
              src={edu}
              alt="Education"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
              Education
            </h1>
            <p className="mt-4 text-lg font-semibold text-gray-300 sm:text-xl">
              Basic Qualification and Certifications
            </p>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-6 flex-wrap">
              <img
                className="w-14 h-14 object-contain bg-gray-200 p-2 rounded-full shadow-md"
                src={logo1}
                alt="Logo 1"
              />
              <img
                className="w-14 h-14 object-contain bg-gray-200 p-2 rounded-full shadow-md"
                src={logo2}
                alt="Logo 2"
              />
              <img
                className="w-14 h-14 object-contain bg-gray-200 p-2 rounded-full shadow-md"
                src={logo3}
                alt="Logo 3"
              />
              <img
                className="w-14 h-14 object-contain bg-gray-200 p-2 rounded-full shadow-md"
                src={logo4}
                alt="Logo 4"
              />
              <img
                className="w-14 h-14 object-contain bg-gray-200 p-2 rounded-full shadow-md"
                src={logo5}
                alt="Logo 5"
              />
              <img
                className="w-14 h-14 object-contain bg-gray-200 p-2 rounded-full shadow-md"
                src={logo6}
                alt="Logo 6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" text-white  pb-28 w-screen">
      <div className="flex justify-center items-center">
          <img className="h-40  " src={logo4} />
        </div>
        <h1 className="p-5 text-5xl font-bold text-center ">Degree Progress</h1>
        
        <div className="container mx-auto flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 bg-white text-gray-900 rounded-lg shadow-lg p-8">
            {/* University Info */}
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              The Open University of Sri Lanka (OUSL)
            </h2>
            <h3 className="text-xl font-semibold text-gray-600 mb-6">
              Bachelor of Software Engineering (BSE)
              <span className="text-sm text-gray-400">| 2024 - Present</span>
            </h3>

            {/* Course Highlights */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                ⚡ Currently studying core subjects like Software Engineering,
                Data Structures, Algorithms, DBMS, and AI.
              </p>
              <p className="text-lg text-gray-700">
                ⚡ Gaining experience in Full Stack Development, Cloud
                Computing, and Mobile App Development.
              </p>
              <p className="text-lg text-gray-700">
                ⚡ Working on projects like an event management app with the
                MERN stack to enhance practical skills.
              </p>
            </div>
          </div>
        </div>
      </section>
     

      <section className=" text-white  px-6 w-screen pb-28">
        <div className="container mx-auto text-center">
          {/* Certifications Header */}
          <h4 className="text-3xl font-bold text-white mb-8">Certifications</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certification Card 1 */}
            <div className="bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Introduction to SQL
                </h5>
                <a
                  href="path_to_sql_certificate.pdf"
                  className="inline-block py-2 px-4 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition-all duration-300"
                  download
                >
                  Download Certificate
                </a>

                {/* Technology Icons */}
                <div className="mt-4 flex justify-center gap-4">
                  <span className="language-tag html-tag text-lg">
                    <i className="fab fa-html5"></i> HTML
                  </span>
                  <span className="language-tag css-tag text-lg">
                    <i className="fab fa-css3-alt"></i> CSS
                  </span>
                  <span className="language-tag js-tag text-lg">
                    <i className="fab fa-js"></i> JavaScript
                  </span>
                </div>
              </div>
            </div>

            {/* Certification Card 2 */}
            <div className="bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Responsive Web Design
                </h5>
                <a
                  href="path_to_responsive_web_design_certificate.pdf"
                  className="inline-block py-2 px-4 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition-all duration-300"
                  download
                >
                  Download Certificate
                </a>

                {/* Technology Icons */}
                <div className="mt-4 flex justify-center gap-4">
                  <span className="language-tag html-tag text-lg">
                    <i className="fab fa-html5"></i> HTML
                  </span>
                  <span className="language-tag css-tag text-lg">
                    <i className="fab fa-css3-alt"></i> CSS
                  </span>
                </div>
              </div>
            </div>

            {/* Certification Card 3 */}
            <div className="bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Introduction to Python
                </h5>
                <a
                  href="path_to_python_certificate.pdf"
                  className="inline-block py-2 px-4 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition-all duration-300"
                  download
                >
                  Download Certificate
                </a>

                {/* Technology Icons */}
                <div className="mt-4 flex justify-center gap-4">
                  <span className="language-tag python-tag text-lg">
                    <i className="fab fa-python"></i> Python
                  </span>
                </div>
              </div>
            </div>

            {/* Certification Card 4 */}
            <div className="bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Foundations of Cybersecurity
                </h5>
                <a
                  href="path_to_cybersecurity_certificate.pdf"
                  className="inline-block py-2 px-4 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition-all duration-300"
                  download
                >
                  Download Certificate
                </a>

                {/* Technology Icons */}
                <div className="mt-4 flex justify-center gap-4">
                  <span className="language-tag security-tag text-lg">
                    <i className="fab fa-shield-alt"></i> Security
                  </span>
                </div>
              </div>
            </div>

            {/* Certification Card 5 */}
            <div className="bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <div className="p-6 text-center">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">
                  Introduction to Java
                </h5>
                <a
                  href="path_to_java_certificate.pdf"
                  className="inline-block py-2 px-4 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition-all duration-300"
                  download
                >
                  Download Certificate
                </a>

                {/* Technology Icons */}
                <div className="mt-4 flex justify-center gap-4">
                  <span className="language-tag java-tag text-lg">
                    <i className="fab fa-java"></i> Java
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
