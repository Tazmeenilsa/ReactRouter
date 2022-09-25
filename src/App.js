import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile'
import Contact from './components/Contact';
import Error from './components/Error';
import './components/component.css'
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  Button
} from 'react-bootstrap/';
function App() {
  return (
    <div className='App'>
      <Router>

    
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >
                <Link to="/"> Home</Link>
                </Nav.Link>
              <Nav.Link  >
              <Link to="/About"> About</Link>
               </Nav.Link>
              <Nav.Link >
              <Link to="/Profile"> Profile</Link>
                </Nav.Link>
              <Nav.Link >
              <Link to="/Contact">Contact</Link>
                </Nav.Link>
              <Nav.Link>
              <Link to="/Error">Error</Link>
               </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <Switch >
          <Route path='/' ><Home /> </Route>
          <Route path='/About'  > <About/> </Route>
          <Route path='/Profile'><Profile /> </Route>
          <Route path='/Contact'> <Contact/> </Route>
          <Route path='/Error' ><Error/> </Route>

        </Switch>
      </Router>




    </div>
  );
}

export default App;
