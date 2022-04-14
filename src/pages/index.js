import React from 'react';
import logo from '../images/fastercomputing.jpeg'
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <ul>
      
      <img src={logo} className="photo" width={450} height={400}  alt="Logo"  />

      </ul>

    </div>
  );
};

export default Home;
