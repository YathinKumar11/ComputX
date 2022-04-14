import React from 'react';
import './Cards.css';
//import CardItem from './CardItem';
import PeopleCardItem from './peoplecarditem';
function Peoplecard() {
  return (
    <div className='cards'>
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <PeopleCardItem
              //src='images/Nmigen.png'
              text='Prof.Madhav Rao'
              other='Supervisor'
              //label='RV32M'
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/IMD.png'
              text='Prof.Nanditha Rao'
              //label='RV32I'
              other='Supervisor'
              path = '/sign-up'
            />
            
            
          </ul>
          <ul className='cards__items'>
          <PeopleCardItem
              //src='images/Nmigen.png'
              text='Mayank Kabra'
              other='Founder'
              //label='RV32M'
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/Nmigen.png'
              text='Prashant HC'
              other='Student advisor'
              //label='RV32M'
              path='/sign-up'
            />
            
          </ul>
          <ul className='cards__items'>
            <PeopleCardItem
              //src='images/img-3.jpg'
              text='Risikesh'
              other='Alumni'
              //label='Mystery'    
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-4.jpg'
              text='Pavan Kumar'
              other='Alumni'
              //label='Adventure'
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-8.jpg'
              text='Shivani Shah'
              other='Alumni'
              //label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <PeopleCardItem
              //src='images/img-3.jpg'
              text='Sumanth'
              other='Member'
              //label='Mystery'    
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-4.jpg'
              text='Yathin'
              other='Member'
              //label='Adventure'
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-8.jpg'
              text='Poorneshwar'
              other='Member'
              //label='Adrenaline'
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-8.jpg'
              text='Asmita '
              other='Member'
              //label='Adrenaline'
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-8.jpg'
              text='Saketh'
              other='Member'
              //label='Adrenaline'
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-8.jpg'
              text='Bhavjyot '
              other='Member'
              //label='Adrenaline'
              path='/sign-up'
            />
            
          </ul>
          {/* <ul className='cards__items'>
            <PeopleCardItem
              //src='images/img-3.jpg'
              text='Asmitha '
              other='Member'
              //label='Mystery'    
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-4.jpg'
              text='Saketh'
              other='Member'
              //label='Adventure'
              path='/sign-up'
            />
            <PeopleCardItem
              //src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour nnnnnnnnnnnnnn'
              //label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Peoplecard;
