import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import './projects.css';

class Projects extends Component {
    render() {
      return (
        <div className='Projects'>
            <header className='projectsHeader'>
                <h1>Projects</h1>
            </header>
            <main>
              <h2>
                A Hard Day's Night
              </h2>
                <p>
                  A fairly standard multiple choice quiz, A Hard Day’s Quiz uses a form element and radio buttons to present users with ten multiple choice questions on the Beatles. After selecting an answer, users receive immediate feedback on if they answered correctly.
                  If the answer is incorrect, the correct answer is shown. Users’ score and the number of the question that they are on are shown and updated with each question. After the last question, users are presented with their final score and with a restart
                  button that allows them to start the quiz from the beginning.
                </p>
                <div 
                  className="HardDaysImage">
                </div>
              <p>
                <b>Technologies Used: </b> 
                HTML, CSS, JavaScript, JQuery</p>
              <p> 
                <a href="https://reperez120.github.io/Beatles-Quiz" 
                target="_blank"> 
                Live Version
                </a> 
              </p>
              <p> 
                <a href="https://github.com/reperez120/Beatles-Quiz" 
                target="_blank"> Repo Version
                </a> 
              </p>
              <h2>
                What'll It Be?
              </h2>
                <p>
                  An app that recommends drinks based on weather.
                </p>
                <div 
                  className="WhatllItBeImage">
                </div>
              <p>
                <b>Technologies Used: </b> 
                HTML, CSS, JavaScript, React, PostGresSQL</p>
              <p> 
                <a href="https://whatll-it-be-app.reperez120.now.sh/" 
                target="_blank"> 
                Live Version
                </a> 
              </p>
              <p> 
                <a href="https://github.com/reperez120/whatll-it-be-app-client" 
                target="_blank"> Client Repo
                </a> 
              </p>  
              <p> 
                <a href="https://github.com/reperez120/whatll-it-be-mvp"
                target="_blank">
                API Repo
                </a> 
              </p>
              <h2>
                Cat-A-Log
              </h2>
                <p>
                The Cat-A-Log app uses the Cat API and the PetFinder API to display a list of cats with selected traits that are up for adoption in a specified area. The user selects desired traits in checkboxes and then inputs the desired zip code into an input box. Once the user clicks the form’s submit button, an event listener is triggered that fetches the Cat API, which contains a list of cat breeds and their characteristics, and returns an array of breeds that have the traits the user selected in the checkbox. The app next fetches the PetFinder API, which contains a list of pets up for adoption, and uses the breeds that were returned from the Cat API and the geographic area the user input as query parameters to return a list of cats with desired traits up for adoption in the user’s geographic area. The app then displays the returned array of cats’ names, photos, descriptions, and links to their adoption pages.
                </p>
                <div 
                  className="CatALogImage">
                </div>
              <p>
                <b>Technologies Used: </b> 
                HTML, CSS, JavaScript, JQuery</p>
              <p> 
                <a href="https://reperez120.github.io/CatALogFinalDraft/" 
                target="_blank"> 
                Live Version
                </a> 
              </p>
              <p> 
                <a href="https://github.com/reperez120/CatALogFinalDraft" 
                target="_blank"> Repo Version
                </a> 
              </p>
             
          </main>
        </div>
      );
    } 
}

export default Projects;