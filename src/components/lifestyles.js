import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function PopulateList(dosha, lifestyle){
    const currentlist = lifestyle;
     let tempkey = 0;
     return(
         currentlist.map((x)=>{
                     tempkey= {dosha} + tempkey + 2;
                    return(<li key={tempkey}>{x}</li>)})
                    );
}

class VataLifestyle extends Component {
    render(){
        const lifestyle = [" Routine is important", " Stay focused"," Oils and herbs are your friend", " Gentle exercise is best", " Keep calm"];
        return (
                 <ul>
                    {PopulateList("vata", lifestyle)}
                    <li><Link to="/vata">Get more detail here</Link></li>
                </ul>
        )
    }
}


class KaphaLifestyle extends Component {
    render(){
        const lifestyle = [" Keep things moving!", " Vigurous exercise", " Stimulating music", " Keep warm and dry", " Don't vegitate!"];
        return (
                <ul>
               {PopulateList("kapha", lifestyle)}
                <li><Link to="/kapha">Get more detail here</Link></li>
            </ul>
        )
    }
}

class PittaLifestyle extends Component {
    render(){
        const lifestyle = [" Stop controlling", " Enjoy relaxing music", " Moderate Exercise", " Routine reigns surpreme", " Keep it cool"];
        return(
            <ul>
               {PopulateList("pitta", lifestyle)}
                <li><Link to="/pitta">Get more detail here</Link></li>
            </ul>
            
        )
    }
}

export { PittaLifestyle, VataLifestyle, KaphaLifestyle};