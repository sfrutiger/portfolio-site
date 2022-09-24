import React from "react";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen">
      <div className="section">
        <div>
          <h1 className="section-header">Projects</h1>
          <ul className="py-4">
            <li className="mb-6">
              <h2 className="text-2xl">Catch and Cook</h2>
              <p className="my-2">
                Web application for logging and sharing fishing, hunting, or
                foraging location and weather data as well as recipes made with
                those ingredients.
              </p>
              <div className="flex flex-col sm:flex-row items-left">
                <button className="text-white w-[100px] h-full border-2 my-2 mr-2">
                  <a
                    className="block w-full h-full align-baseline py-4"
                    href="https://www.catchandcook.app/"
                  >
                    Site
                  </a>
                </button>
                <button className="text-white w-[100px] h-full border-2 my-2">
                  <a
                    className="block w-full h-full align-baseline py-4"
                    href="https://github.com/sfrutiger/catch-and-cook"
                  >
                    Code
                  </a>
                </button>
              </div>
            </li>
            <li>
              <h2 className="text-2xl">Easy SOAP</h2>
              <p className="my-2">
                A simple web-based electronic medical records system built on
                the MERN stack.
              </p>
              <div className="flex flex-col sm:flex-row items-left">
                <button className="text-white w-[100px] h-full border-2 my-2 mr-2">
                  <a
                    className="block w-full h-full align-baseline py-4"
                    href="https://easy-soap.herokuapp.com/"
                  >
                    Site
                  </a>
                </button>
                <button className="text-white w-[100px] h-full border-2 my-2">
                  <a
                    className="block w-full h-full align-baseline py-4"
                    href="https://github.com/sfrutiger/easy-soap"
                  >
                    Code
                  </a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
