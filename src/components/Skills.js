import React from 'react';

const Skills = () => {
  return (
    <section className="pb-20 bg-gray-300 -mt-24" id="skills">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap items-center mt-24">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Habilidades
            </h3>
            <ul className="ml-10 list-disc text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              <li>Creación de aplicaciones web</li>
              <li>Desarrollo backend</li>
              <li>Desarrollo frontend</li>
              <li>Maquetación</li>
              <li>Diseño y creación de bases de datos</li>
              <li>Creación de APIs</li>
              <li>Consumir de APIs</li>
            </ul>
          </div>

          <div className="w-full md:w-3/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
