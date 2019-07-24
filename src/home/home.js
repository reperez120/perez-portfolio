import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../projects/projects';
import About from '../about/about';
import Contact from '../contact/contact';
import './home.css';

class Home extends Component {
    render() {
      return (
        <div className='Home'>
            <header className='homeHeader'>
              <div className="leafImage"> 
              </div>
            </header>
            <main>
              <p>
                My name is Rachel and I am a web developer with experience using Mongo/Node/Express/React to build full stack web apps looking to deepen my knowledge in those areas and expand it to others.</p> 
                  <p>To see some of my previous work, check out my <Link to="/projects">Projects</Link> page.</p>
                  <p>To learn more details about my skillset, programming journey, and other interests and skills check out my <Link to="/about">About Me</Link> page.</p>
                  <p>If you are interested in contacting me you can reach me through any of the methods listed on my <Link to="/contact">Contact Me</Link> page.</p>
            </main>
        </div>
      );
    } 
}

export default Home;


