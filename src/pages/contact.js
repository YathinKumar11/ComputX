import React from 'react';
import { IconContext } from "react-icons";
//import { FaGithub  } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import ButtonMailto from './mailbutto';

const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45vh'
      }}
    >
      <ul>
      <h1>Contact Us</h1>
      <IconContext.Provider value={{ className: "shared-class", size: 25 }}>

      
      
      <li>
        <FaEnvelope /> 
      <ButtonMailto label="    Mail ComputX" mailto="mailto:ComputX@iiitb.ac.in" />
      {/* <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" /> */}
      
      </li>
      </IconContext.Provider>
      </ul>
    </div>
  );
};

export default Contact;
