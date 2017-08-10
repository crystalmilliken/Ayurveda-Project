import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NavigationBar from './components/navbar';
import MainContent from './components/content_main';
import Banner from './components/largePicMain';
import Contact from './components/contact';
import About from './components/about';
import ChooseDosha from './components/chooseDosha';
import Quiz from './components/quiz';
import PittaPage from './components/pitta';
import KaphaPage from './components/kapha';
import VataPage from './components/vata';
import Exercise from './components/exercise';
import AboutAyurveda from './components/aboutAyurveda';
import Footer from './components/footer';
import CompareFoods from './components/compareFoods';
import CompareLifestyle from './components/compareLifestyle';
import CompareAll from './components/compareAll';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as firebase from "firebase";
import TestList from './components/testList';
import ArrayOfObjects from './components/arrayOfObjects';

export default class Main extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Banner />
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component = {MainContent}/>
                        <Route exact path="/home" component = {MainContent}/>
                        <Route exact path="/contact" component = {Contact}/>
                        <Route exact path="/about" component = {About}/>
                        <Route exact path="/choose" component = {ChooseDosha} />
                        <Route exact path="/quiz" component = {Quiz} />
                        <Route exact path="/pitta" component = {PittaPage} />
                        <Route exact path="/kapha" component = {KaphaPage} />
                        <Route exact path="/vata" component = {VataPage} />
                        <Route exact path="/exercise" component = {Exercise} />
                        <Route exact path="/aboutayurveda" component = {AboutAyurveda} />
                        <Route exact path="/compareFoods" component = {CompareFoods} />
                        <Route exact path="/compareLifestyle" component = {CompareLifestyle} />
                        <Route exact path="/compareAll" component = { CompareAll } />
                        <Route exact path="/arrayofobjects" component = { ArrayOfObjects } />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
