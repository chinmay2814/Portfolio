// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project One', description: 'A cool project with a modern UI.' },
    { id: 2, title: 'Project Two', description: 'Another project with a minimal design.' },
    { id: 3, title: 'Project Three', description: 'Yet another project with a clean interface.' },
  ];

  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-dark mb-6">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
