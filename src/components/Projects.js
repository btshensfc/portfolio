import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
      <ProjectCard
        title="eShop UI — Front-End for eCommerce"
        description="React-based product list, shopping cart, and checkout for a Grails backend"
        tech="React, Tailwind CSS, JavaScript"
        github="https://github.com/yourusername/eshop-ui"
      />
    </section>
  );
}
