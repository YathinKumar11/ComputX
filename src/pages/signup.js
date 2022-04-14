import React from 'react';
//import Cards from '../components/Cards';
import Peoplecard from '../components/peoplecard';

const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>People</h1>
      <Peoplecard />
    </div>
  );
};

export default SignUp;
