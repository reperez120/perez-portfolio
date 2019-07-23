import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import Projects from '../projects/projects';
import About from '../about/about';
import './contact.css';

class Contact extends Component {
    render() {
      return (
        <div className='Contact'>
            <header className='contactHeader'>
                <h1>Contact Me</h1>
                <h3>Please feel free to contact me through any of the sources listed below.</h3>
            </header>
            <main>
                <ul class="contacts">
                  <div className="email">
                  </div>
                  <li> 
                    <address> 
                      <a class="link" href= "mailto:reperez@me.com">Email</a>
                    </address> 
                  </li>
                  <div className="github">
                  </div>
                  <li>
                    <a class="link" href="https://github.com/reperez120" 
                    target="_blank">GitHub
                    </a>
                  </li>
                  <div className="linkedin">
                  </div> 
                  <li>
                    <a class="link" href="https://www.linkedin.com/in/rachel-e-perez/" 
                      target="_blank">LinkedIn
                    </a>
                  </li> 
            </ul>
          </main>
        </div>
      );
    } 
}

export default Contact;