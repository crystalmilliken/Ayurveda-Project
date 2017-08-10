import React, { Component } from 'react';
import { GenerateAccordion } from './generateAccordion';
import BuckWheaties from '../images/testImages/buckwheaties.jpg';
import EggplantBacon from '../images/testImages/eggplantBacon.jpg';
import PizzaDough from '../images/testImages/pizzaDough.jpeg';

export default class ArrayOfObjects extends Component {

    render(){
          const bodyCompArray = [
     {
        name: "BuckWheaties",
        picture: BuckWheaties,
        prepTime: 24,
        directions: " Buckwheaties Directions"
       
    },
     {
        name: "Eggplant bacon",
        picture: EggplantBacon,
        prepTime: 48,
        directions: " Eggplant Directions"
    },
   {
        name: "Pizza Dough",
        picture: PizzaDough,
        prepTime: 48,
        directions: "Pizza Dough Directions "
    }
    ]
        return(
            <div>
                
                <GenerateAccordion data = {bodyCompArray}/>
            </div>
        );
    }
}