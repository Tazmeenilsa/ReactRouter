import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile'
import Contact from './components/Contact';
import Error from './components/Error';
import './components/component.css'
import {
  Nav,
  Navbar,
  NavDropdown 
} from 'react-bootstrap/';
function App() {
  return (
    <div className='App'>
      <Router>
      
        <Nav
        variant="tabs"
      className="justify-content-center"
      
         >
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Error" disabled>
              Error
            </Nav.Link>
          </Nav.Item>
        </Nav>


        <Navbar bg="light" expand="lg">
  
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
        {/* <nav >
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Error">Error</Link>

        </nav> */}
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Error' element={<Error />} />

        </Routes>
      </Router>




    </div>
  );
}

export default App;
