import React from 'react';
import ImgMalave from '../assets/img/malave.jpg';

const IntroductionCard = () => {
  return (
    <>
    <section className="relative py-16 bg-gray-300">
      <div className="container mx-auto px-4"  id="information">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6 ">
            <div className="flex pb-16 flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src={ImgMalave}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                    style={{ maxWidth: "150px" }}
                  />
                </div>
              </div>
              
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                Jhorma Oscar Malave Acevedo
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                <i className="fas fa-code mr-2 text-lg text-gray-500"></i>{" "}
                Desarrollador Web
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-gray-300 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                  Me dedico al desarrollo web desde hace 3 años, inicie utilizando PHP donde realizaba pequeñas aplicaciones siguiendo la arquitectura de software MVC y la POO, mientras diseñaba y me instruía en el desarrollo de bases de datos. Con el transcurso del tiempo conocí a Ruby y su famoso Framework de Ruby On Rails, en el cual me especialice...
                  </p>
                  <a
                    href="https://www.linkedin.com/in/jhorma-malave"
                    className="font-normal text-pink-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver mas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default IntroductionCard;
