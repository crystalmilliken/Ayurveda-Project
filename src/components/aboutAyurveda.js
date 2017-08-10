import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WhatIs from '../images/wood2.png';

export default class AboutAyurveda extends Component {
    render(){
         let textStyle = {
           color: "white",
           textAlign: "center",
           padding: "1em",
           textShadow: "2px 2px #010101"
       }
        return (
            <div className = "container">
                <div  className = "col-sm-3"style={{backgroundImage: `url(${WhatIs})`, minHeight:"15em", backgroundRepeat:"no-repeat"}}>
                    <h2 style={textStyle}>What is Ayurveda?</h2></div>
                    <div className="col-sm-6">
                Simply put, ayurveda is a health system(or way of life) that recognizes that there is a mind-body connection that is extremely important
                to our health and happiness. If you look passed all the fancy words it really comes down to observation. Observation of the planet and of people.
                Now, I am not saying that human observation is trustable(after all, the health experts give recommendation on their observations all the time and then
                later decide that they weren't accurate). I am saying that you should at least look into it for YOU. Will it help you and is it sustainable? Does
                it give you the best results and fill you with joy?? Your observation is the most important to your own health. I will say that it's one of the 
                most healthy and grounding ways to live that I have come across. I believe that it's not going to hurt you to try(where some diets and lifestyles
                can actually be detrimental). The best way to start is by finding what your dosha type is. Gradually introduce new things to your life or diet and
                see how you feel. You can <Link to="/quiz">take our quiz</Link> or <Link to = "/compareLifestyle">compare doshas.</Link><br /> <span style={{color: "red"}}>*** Just remember, it's not uncommon to have a mixed dosha. The quiz will give you an idea of 
                what percentage of each.</span>
                </div>
            </div>
        )
    }
}