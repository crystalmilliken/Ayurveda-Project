

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import pic1 from '../images/spoons.jpeg';
import pic2 from '../images/exercise.jpeg';
import pic3 from '../images/umbrella.jpeg';
import BckGround1 from '../images/wood.png';
import BckGround2 from '../images/board.png';
import BckGround3 from '../images/forest.png';
import FruitVeggies from '../images/fruitVeggies.png';

export default class MainContent extends Component {
    constructor(props){
        super(props)
        this.styleDivs = this.styleDivs.bind(this);
    }
    //Below func takes and image and text and displays it to the left
    styleDivs(image, text){
         const textStyle = {
           color: "white",
           textAlign: "center",
           textShadow: "2px 2px #010101"
       }
        let currentImage = "url(" + image + ")";
           return( <div className="col-sm-3" style={{backgroundImage: currentImage, minHeight:"5em", backgroundRepeat:"no-repeat"}}>
                        <h3 style={textStyle}>{text}</h3>
                    </div>);
       }
    render(){
       let rightBorderStyle={
           borderStyle:"solid",
           borderWidth:0.5,
           borderColor:"grey",
           padding:"0",
           marginTop:"1em"
       }
       
        return(
            <div>
            <div className="container-fluid">
                <hr />
            <div className="row">
                <div className="col-sm-4">
                     <div className="informationBoxes">
                        < Link to = {"/compareFoods"}><img src={pic1} alt="Dosha specific Foods"/></Link>
                        <h3>Foods</h3>Your diet plays a key role in how your body feels and functions.
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="informationBoxes">
                        < Link to = {"/exercise"}><img src={pic2} alt="Dosha specific exercises"/></Link>
                        <h3>Exercise</h3>Are you exercising according to your dosha? Find out if you've been doing it all wrong.
                        </div>                                               
                    </div>
                <div className="col-sm-4">
                    <div className="informationBoxes">
                        < Link to = {"/compareLifestyle"}><img src={pic3} alt="Dosha specific lifestyle"/></Link>
                         <h3>Lifestyle</h3>There's more to health than diet and exercise. Heal your mind and body today!
                    </div>
                </div>
             </div>
            </div>
            <div style={{paddingBottom:"5em"}}>
            <div className="col-sm-10">
               
                <hr/>
                <div className="container-fluid">
                    <Link to = {"/aboutayurveda"}>
                     {this.styleDivs(BckGround1,"What is Ayurveda?")}
                    </Link>
                    <div className="col-sm-6 card" style={{paddingLeft:"2rem"}}>
                        <div className="card-block">
                            <p className="card-text">
                                        The two main guiding principles of Ayurveda are 1) the mind and the body are inextricably connected, 
                        and 2) nothing has more power to heal and transform the body than the mind.
                            </p>
                    </div>
                    </div>  
                </div>
                <hr/>
                <div className="container-fluid">
                    <Link to = {"/aboutayurveda"}>
                     {this.styleDivs(BckGround2,"Is it for everyone?")}
                    </Link>
                    <div className="col-sm-6 card" style={{paddingLeft:"2rem"}}>
                    <div className="card-block">
                                    <p className="card-text">
                                      Ayurveda is for everyone. It's actually a personalized approach to life in general Knowing your mind-body
                                       type allows you to make the best choices concerning diet, exercise, supplements, and all other aspects of your lifestyle. 
                                    </p>
                    </div>
                    </div>  
                </div>
                <hr/>
                <div className="container-fluid">
                    <Link to = {"/quiz"}>
                     {this.styleDivs(BckGround3,"Where do I begin?")}
                    </Link>
                    <div className="col-sm-6 card" style={{paddingLeft:"2rem"}}>
                    <div className="card-block">
                        <p className="card-text">
                                            "Making your doshas happy will make you happy.
                                            This is the secret to balancing the whole mind-body system.”<br/>
                                                                                       ~Deepak Chopra
                        </p>      
                    </div>
                    </div>  
                </div>
                </div>
                <div className="col-sm-2" style={rightBorderStyle}>
                    <div style={{padding:"1em", textShadow: "2px 2px #acaaa9"}}>
                    <h2>A Whole Body Approach to Health</h2>
                    </div>
                    <div style={{paddingLeft:0}}>
                    <img src={FruitVeggies}  alt="Whole health approach to dieting"/>
                    </div>
                </div>
                <div className= "container" style={{minHeight:"2em"}}>
                    </div>
            </div>
            </div>
        );
    }
}