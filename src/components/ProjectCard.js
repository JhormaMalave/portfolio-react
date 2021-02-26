import React from 'react';

const ProjectCard = ({title, description, img, technologies}) => {
  return (
    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
        <img
          alt="..."
          src={img}
          className="w-full align-middle rounded-t-lg"
        />
        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block"
            style={{
              height: "95px",
              top: "-94px"
            }}
          >
            <polygon
              points="-30,95 583,95 583,65"
              className="text-pink-600 fill-current"
            ></polygon>
          </svg>
          <h4 className="text-xl font-bold text-white">
            {title}
          </h4>
          <p>
          {
            technologies.map((technology, index) => (
              <span key={index} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1">
                {technology}
              </span>
            ))
          }
          </p>
          <p className="text-md font-light mt-2 text-white">
            {description}.
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default ProjectCard;
