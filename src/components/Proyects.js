import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Proyects = () => {
  return (
    <section id="projects" className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">
              Algunos proyectos
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          {
            projects.map(project => <ProjectCard {...project} key={project.id} />)
          }        
        </div>
      </div>
    </section>
  );
}

export default Proyects;
