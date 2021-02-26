import Project1 from '../assets/img/project1.png';
import Project2 from '../assets/img/project2.png';
import Project3 from '../assets/img/project3.png';

const projects = [
  {
    id: 1,
    title: 'Control de personal',
    description: 'Se desarrollo una API con Ruby on rails, consumida por una aplicación de React y React native',
    img: Project1,
    technologies: ['Ruby on rails', 'Tailwinds', 'React', 'React Native']
  },
  {
    id: 2,
    title: 'Inventario y facturación',
    description: 'Se trabajo en conjunto con otros programadores para incluir mejoras y ampliaciones a la aplicacion web de BioselvaPE',
    img: Project2,
    technologies: ['Ruby on rails', 'Coffescript', 'Bootstrap']
  },
  {
    id: 3,
    title: 'Control de academico',
    description: 'Aplicación desarrollada en Ruby con Rails, para el control estudiantil y de personal del LBRR',
    img: Project3,
    technologies: ['Ruby on rails', 'SkeletonCSS', 'Javascript (Vanilla)']
  }

];

export {projects}