import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Nmigen.png'
              text='RV32M processor using nmigen framework in python'
             // other='hey'
              label='RV32M'
              path='/services'
            />
            <CardItem
              src='images/IMD.png'
              text='Implantable medical applications using our RV32M processor'
              label='RV32I'
              
              path = '/services'
            />
            <CardItem
              src='images/ROCp.png'
              text='ROS(Robot Operating System) based robotic applications by utilising our RISCV-32M processor on FPGA'
              label='RV32M'
              
              path = '/services'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'    
              path='/Ongoing'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
