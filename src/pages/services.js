import React from 'react';
import Cards from '../components/Cards'
const Projects = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Projects</h1>
      <Cards />
    </div>
  );
};

export default Projects;
