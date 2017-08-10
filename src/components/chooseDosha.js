import React, {Component} from 'react';
import pic1 from '../images/pittaSingle.png';
import pic2 from '../images/vataSingle.png';
import pic3 from '../images/kaphaSingle.png';
import { Link } from 'react-router-dom'; 
import Veggies from "../images/veggiesSmall.png";


export default class ChooseDosha extends Component {
        render(){
        return(
            <div>
                <div className="container">
                    <div className="col-sm-8"  >
                                <div className="row">
                                <div className="card">
                                <div className="card-block">
                                <div> 
                                    <div className="container" >
                                        <img src={Veggies} alt="Lots of Veggies" style={{float:"left", paddingRight:"2em"}}/>
                                        Let's skip the conversation 
                                        on elements(fire, space, air, water etc..) and dive into what 
                                        you are really trying to find out. Practically,<h2>What am I dealing
                                        with here??</h2> 
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
             </div>
                 <hr />
                <div>
                    <div className="col-sm-4" style={{backgroundColor:"white"}}>
                        <div className="informationBoxes">
                        <img src={pic1} alt="Pitta diet"/>
                        <h3>Pitta</h3>You're on fire! You're wit is sharp and matches you're ability to concentrate. Balance this dosha and you're
                        also a good decision maker.
                        </div>
                    </div>
                    <div className="col-sm-4" style={{backgroundColor:"white"}}>
                        <div className="informationBoxes">
                        <img src={pic2} alt="Vata diet"/>
                        <h3>Vata</h3>You're a mover.You are energetic, flexible, and creative. Well, that's IF you're balanced.
                        </div>                                               
                    </div>
                    <div className="col-sm-4" style={{backgroundColor:"white"}}>
                        <div className="informationBoxes">
                        <img src={pic3} alt="Kapha diet"/>
                        <h3> Kapha</h3>Slow and steady wins the race. You're loving, patient, and thoughtful. Leading a 
                        happy life is a breeze when you are balanced.
                        </div>            
                    </div>
                </div>
                <div className="container-fluid" style={{paddingTop:"2em", paddingBottom:"2em", backgroundColor:"white"}}>
                    Don't know which Dosha you are? <Link className="btn btn-primary" to="/quiz">Dosha Quiz</Link>
                </div>
            </div>

        );
    }
}