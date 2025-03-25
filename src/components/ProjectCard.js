import React from 'react';

export default function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="border rounded-2xl p-6 shadow hover:shadow-xl transition mb-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <p className="mt-2 text-sm text-gray-500">{tech}</p>
      {github && <a href={github} className="text-blue-500 mt-4 inline-block">GitHub Repo →</a>}
    </div>
  );
}
