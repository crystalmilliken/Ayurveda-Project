import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GenerateProgress from './generateProgress';

class Populate extends Component {
   constructor(props){
       super(props)
       //the state of the questions are needed in order to update the radio button when clicked. The default is clear.
         this.state = {
        question1 : "",
        question2 : "",
        question3 : "",
        question4 : "",
        question5 : "",
        question6 : "",
        question7 : "",
        question8 : "",
        question9 : "",
        questio10 : "",
        results : " ",
        progress : " "
    }
    this.handleScoring2 = this.handleScoring2.bind(this);
    this.getResults = this.getResults.bind(this);
    this.submitQuiz = this.submitQuiz.bind(this);
    this.generateList = this.generateList.bind(this);
   }
   //below func handles state of radio button
handleScoring2(event){
    //when radio is changed, tempString is equal to the radio's value, which should look something like 'question1PittaObject'
    const tempString = event.target.value;
    //stringQuestion takes the 'pittaobject' part and returns what question number we are dealing with. It then updates the state
    //and renders the input as checked={this.state[id] === tempValue}, which returns a true or false for the checked property
    const stringQuestion = tempString.slice(0,9);
    if(stringQuestion === "question1"){
        this.setState({question1: event.target.value});
    }else if(stringQuestion === "question2"){
        this.setState({question2: event.target.value});
    }else if(stringQuestion === "question3"){
        this.setState({question3: event.target.value});
    }else if(stringQuestion === "question4"){
        this.setState({question4: event.target.value});
    }else if(stringQuestion === "question5"){
        this.setState({question5: event.target.value});
    }else if(stringQuestion === "question6"){
        this.setState({question6: event.target.value});
    }else if(stringQuestion === "question7"){
        this.setState({question7: event.target.value});
    }else if(stringQuestion === "question8"){
        this.setState({question8: event.target.value});
    }else if(stringQuestion === "question9"){
        this.setState({question9: event.target.value});
    }else if(stringQuestion === "questio10"){
        this.setState({questio10: event.target.value});
    }
   
}

    bodyCompArray = [
     {
        name: "pittaObject",
        bodyComp: " Healthy body, well-developed muscles, well-functioning metabolism",
        emotion: " Ignites into anger first, whether they show it outwardly or merely burn with it internally",
        perception: " Uses images to relate to words and emotions together",
        bodyType: " More of an Mesomorph body type",
        temperament: " High-achieving with a strong work ethic",
        weightGain: " Constant weight",
        chest: " Medium chest",
        schedule: " Long workday",
        sleep: " Sleep well, average length",
        exercise: " Competitive"
    },
     {
        name: "vataObject",
        bodyComp: " Low body weight, light bone structure, fast to act",
        emotion: " Shows fear or anxiety first",
        perception: "Most often think predominantly in words",
        bodyType: "More of an Ectomorph body type",
        temperament: " Hypersensitive to surroundings, and imaginative",
        weightGain: " 	Lose weight easily",
        chest: " Sunken, ribs showing",
        schedule: " Irregular schedule / eating times",
        sleep: " Light sleeper",
        exercise: "Prefer light exercise"
    },
   {
        name: "kaphaObject",
        bodyComp:" Heavy body weight, solid body structure, strength, endurance",
        emotion: " Avoids confrontation",
        perception: " Often thinks with their emotions and ‘feels’ the connection between words and forms",
        bodyType: " More of an Endomorph body type",
        temperament: " Peaceful, easy-going, good-natured",
        weightGain: " Gain weight easily",
        chest: " Broad, large chest",
        schedule: " Good at keeping a routine",
        sleep: " Sleep deep & long, trouble waking up",
        exercise: " Excels in most sports"
    }
    ]
    //below function takes an id, like 'question1' and the category(chest, schedule etc) and creates a div
generateList(id, category){
    let tempValue = id;
    const styleRow = {
            padding : "1em",
            borderBottom : "thin solid #000000"
        }
        return (
                 <div className="container" style={styleRow}>
                { this.bodyCompArray.map((data)=>{
                    tempValue = id + data.name;
                    return <label className="col-sm-3" key = {tempValue}><input type = "radio"  value={tempValue} checked={this.state[id] === tempValue} 
                    onChange={this.handleScoring2} />{data[category]}</label>
                })
                }
                </div>
                );
    }
//the below function is called by submitQuiz. It calculates percentages and sets the state for results which popultes the div
getResults(vataScoreTemp, pittaScoreTemp, kaphaScoreTemp){
    vataScoreTemp = Math.ceil(vataScoreTemp/10 * 100); 
    pittaScoreTemp = Math.ceil(pittaScoreTemp/10 * 100);
    kaphaScoreTemp = Math.ceil(kaphaScoreTemp/10 * 100);
    const arrayOfScores = [vataScoreTemp, pittaScoreTemp, kaphaScoreTemp]
    this.setState({results : <span style={{color:"red", 
    textAlign: "center", fontSize:"2em"}}> You are {vataScoreTemp}% 
    <Link to ="/vata"> Vata</Link>, {pittaScoreTemp}% 
    <Link to ="/pitta"> Pitta</Link> , and {kaphaScoreTemp}% 
    <Link to ="/vata"> Kapha</Link>
    </span>})
    this.setState({progress: <GenerateProgress properties = {arrayOfScores} />})
       
}
//below function is called on submit. creates an array of currently checked radios, slices the question and number off and iterates through array to set 
//the state for each score. It then calls getResults with the current scores  
submitQuiz(event){
const resultsArray = [];
let vataScoreTemp = 0;
let pittaScoreTemp = 0;
let kaphaScoreTemp = 0;
    resultsArray.push(this.state.question1, this.state.question2, this.state.question3, this.state.question4,this.state.question5,this.state.question6,
    this.state.question7, this.state.question8, this.state.question9, this.state.questio10)
    return (resultsArray.forEach((a)=>{
        const temp = a.slice(9);
        if(temp === "pittaObject"){
                pittaScoreTemp ++;
            }else if(temp === "vataObject"){
                vataScoreTemp ++;
            }else if(temp === "kaphaObject"){
                kaphaScoreTemp ++;
            }else{
                console.log("err");
        }
    }), this.getResults(vataScoreTemp, pittaScoreTemp, kaphaScoreTemp))
    
    
}
    render(){
        return(
            <div className="container" style={{paddingBottom: "2em"}}>
                {this.generateList("question1", "temperament")}
                {this.generateList("question2", "emotion")}
                {this.generateList("question3", "bodyComp")}
                {this.generateList("question4", "perception")}
                {this.generateList("question5", "bodyType")}
                {this.generateList("question6", "weightGain")}
                {this.generateList("question7", "chest")}
                {this.generateList("question8", "schedule")}
                {this.generateList("question9", "sleep")}
                {this.generateList("questio10", "exercise")}
                <div className = "container" style = {{ paddingBottom:"2em"}}>{this.state.results}</div>
                <div className = "container" style = {{ paddingBottom:"2em"}}>{this.state.progress}</div>
                <button id="submit" onClick={this.submitQuiz} className="btn btn-primary" >Submit</button>
                </div>
        )
    }
}
class Quiz extends Component {
    render(){
        return (
        <div>
            <div className="col-sm-2">
                </div>
                <div className="col-sm-8">
                    <h4>Quiz is a bad word. There is no grade here. This is simply a way for you to find out 
                        what dosha you are most dominant in. Please keep in mind that it is common to have 
                        traits of several doshas. Everyone is different and you have to find out what works for you.
                    </h4>
                 <hr />
                </div>
            <div className="col-sm-2">
                </div>
                <Populate />
        </div>)
    }
}
 export default Quiz;