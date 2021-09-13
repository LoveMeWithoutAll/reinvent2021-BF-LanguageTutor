import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import TestComponent from './components/test/TestComponent';
import DebugComponent from './components/debug/DebugComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './assets/images/tutti-logo.png';

function App() {
  return (
    <header>
      <Router>
        <Navbar className="color-nav" variant="dark" expand="lg">
            <Navbar.Brand href="/">
              <img src={logo} height="50px" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/learning">Learning</Nav.Link>
                  <Nav.Link href="/game">Game</Nav.Link>
                  <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                  <Nav.Link href="/debug">Debug</Nav.Link>
                  <Nav.Link href="/test">Test</Nav.Link>
                  <Nav.Link href="#home"><FontAwesomeIcon icon={["fal", "coffee"]} /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/learning">
              <Learning />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/debug">
              <Debug />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </header>
  );
}

function Home(){
  return(
    <div>
      <h1>Welcome to 1:1 Language Tutor using AWS AI/ML!</h1>
      <p></p>
      <Button>Get Started!</Button>
      <h3></h3>
      <ul>
        <li>Boost your language learning with AWS AI/ML services.</li>
        <li>AWS AI / ML services are the perfect technologies to help users read, write, and speak foreign languages.</li>
      </ul>
      <p></p>
      <h3>Architecture Diagram</h3>
      <ul>
        <li>picture here.</li>
      </ul>
      <p></p>
      <p></p>
      <p></p>
      <h3>Meet the Team</h3>
      <ul>
        <li>Iron Man</li>
        <li>Hulk</li>
        <li>Thor</li>
      </ul>
      <p></p>
    </div>
  )
}

function Learning(){
  return(
    <div>
      <h1>Learning</h1>
      <ul>
        <li>Hi, my name is Tutty. </li>
        <li>What is your name?</li>
        Name: <input type="text" name="name" />
        <li>What language do you want to learn?</li>
        <Button>English</Button> 
        <Button>Korean</Button> 
        <Button>Spanish</Button> 
        <li>What subject do you want to learn today?</li>
        <Button>Fruits</Button> 
        <Button>Animals</Button> 
        <Button>Greetings</Button> 
      </ul>
      <Button>Meet the tutor!</Button> 
    </div>
  )
}

function Game(){
  return(
    <div>
      <h1>Game</h1>
      <ul>
        <li>Are you ready to join the game challenge?</li>
        <li>Shall we go?</li>
      </ul>
    </div>
  )
}

function Leaderboard(){
  return(
    <div>
      <h1>Leaderboard</h1>
      <h3>English</h3>
      <ul>
        <li>AAA 10,000</li>
        <li>BBB 90,000</li>
        <li>CCC 80,000</li>
      </ul>
      <h3>Korean</h3>
      <ul>
        <li>DDD 10,000</li>
        <li>EEE 90,000</li>
        <li>FFF 80,000</li>
      </ul>
      <h3>Spanish</h3>
      <ul>
        <li>GGG 10,000</li>
        <li>HHH 90,000</li>
        <li>III 80,000</li>
      </ul>
    </div>
  )
}

function Debug(){
  return(
    <DebugComponent />
  )
}

function Test(){

  return(
    <TestComponent />
  )
}

export default App;
